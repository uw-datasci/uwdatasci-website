import { useState, useEffect, useContext } from "react";
import {
  getDataOnce,
  createEvent,
  removeEvent,
  modifyEvent,
} from "../../lib/firebase";

import { DEFAULT_EVENT } from "../../constants/events";
import Button from "../../components/UI/Button";

function processEvents(events) {
  const remappedEvents = Object.keys(events)
    .map((key) => {
      return { idx: key, ...events[key] };
    }).sort((a,b)=>{
      console.log(a.time);
      if (a.time === "<EVENT TIME>"){
        return 1;
      }
      if (b.time === "<EVENT TIME>"){
        return -1;
      }
      const aTime = new Date(a.time.split("TO")[1]);
      const bTime = new Date(b.time.split("TO")[1]);
      return aTime > bTime ? -1 : 1;
    });
  return remappedEvents;
}

export default function Events({ events }) {
  // const events = events_mock;
  const [listOfEvents, setListOfEvents] = useState();
useEffect(()=>{
  setListOfEvents(processEvents(events));
},[])
  const refetchEvents = async () => {
      const fetchedEvents = await getDataOnce("events");
      setListOfEvents(processEvents(fetchedEvents));
  }

  const handleAddEvent = () => {
    createEvent(DEFAULT_EVENT);
    refetchEvents();
  };

  return (
    <>
      <div className="mx-12">
        <h2 className="mb-12 text-left md:mb-16 xl:mb-20">
          <span className="h2">Events</span>
        </h2>
        <div className="overflow-x-auto">
          {events ? (
            <EventsEditableTable events={listOfEvents} refetchEvents={refetchEvents}/>
          ) : (
            <div className="mb-3 md:mb-6 dark:text-lightPurple">No events lool</div>
          )}
          <Button
            bg="bg-white dark:bg-black"
            border="rounded-full border border-purple dark:border-lightPurple"
            py="py-2.5"
            font="text-black dark:text-white"
            classes="text-center w-1/6 my-4"
            onClick={handleAddEvent}
          >
            {"Add Event"}
          </Button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const events = await getDataOnce("events");

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}

function EventsEditableTable({ events, refetchEvents }) {
  return (
    <table className="min-w-full table-fixed">
      <EventsEditableHeader />
      <tbody>
        {events?.length &&
          events.map((event, idx) => (
            <EventsEditableRow event={event} key={`event_${idx}`} refetchEvents={refetchEvents}/>
          ))}
      </tbody>
    </table>
  );
}

function EventsEditableHeader() {
  return (
    <thead>
      <tr className="dark:border-neutral-500 mb-5 border-b font-medium leading-relaxed text-purple dark:text-lightPurple">
        <th className="min-w-[10rem] px-6 py-4">Title</th>
        <th className="min-w-[30rem] px-6 py-4">Description</th>
        <th className="min-w-[10rem] px-6 py-4">Time</th>
        <th className="min-w-[10rem] px-6 py-4">Location</th>
        <th className="min-w-[10rem] px-6 py-4">Image</th>
        <th className="max-w-[30rem] px-6 py-4">Link</th>
        <th className="max-w-[30rem] px-6 py-4">Recording Link</th>
      </tr>
    </thead>
  );
}

function EventsEditableRow({ event: eventObject, refetchEvents }) {
  const { title, desc, time, location, image, link, recording, idx } = eventObject;

  const [activeEdit, setActiveEdit] = useState(false);
  const [formData, setFormData] = useState(eventObject);

  useEffect(() => {
    setFormData(eventObject);
  }, [eventObject]);

  const handleTextChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    if (name === "time_to") {
      value = `${formData["time"].split("TO")[0]}TO${value}`;
    } else if (name === "time_from") {
      value = `${value}TO${formData["time"].split("TO")[0]}`;
    }

    if (name === "time_to" || name === "time_from") {
      setFormData((prevFormData) => ({ ...prevFormData, ["time"]: value }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const onClickText = () => {
    setActiveEdit(true);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    setActiveEdit(false);
    console.log(formData);
    modifyEvent(idx, formData);
    refetchEvents();
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setActiveEdit(false);
    setFormData(eventObject);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setActiveEdit(false);
    const confirmed = window.confirm(
      "Do you REALLY want to delete this event?"
    );
    if (confirmed) {
      removeEvent(idx);
    }
    refetchEvents();
  };

  return (
    <>
      <tr
        onClick={onClickText}
        className={
          "dark:border-neutral-400 border-b text-center text-sm font-thin text-purple hover:bg-lightPurple dark:text-white hover:dark:bg-purple"
        }
      >
        <td className="py-3 px-2">
          <EditableBox
            fieldName="title"
            fieldValue={formData.title}
            editable={activeEdit}
            onChange={handleTextChange}
          />
          {activeEdit && (
            <div className="m-auto mt-2 flex justify-center">
              <Button
                bg="hover:dark:bg-darkGreen hover:bg-lightGreen bg-white dark:bg-black"
                border="rounded-md border border-purple dark:border-lightPurple"
                font="text-black dark:text-white"
                classes="text-center px-2.5 py-0.5 mx-0.5"
                onClick={handleSubmit}
              >
                🗸
              </Button>
              <Button
                bg="hover:dark:bg-yellow hover:bg-yellow bg-white dark:bg-black"
                border="rounded-md border border-purple dark:border-lightPurple"
                font="text-black dark:text-white"
                classes="text-center px-2.5 py-0.5 mx-0.5"
                onClick={handleCancel}
              >
                ✕
              </Button>
              <Button
                bg="hover:dark:bg-red hover:bg-red bg-white dark:bg-black"
                border="rounded-md border border-purple dark:border-lightPurple"
                font="text-black dark:text-white"
                classes="text-center px-2.5 py-0.5 mx-0.5"
                onClick={handleDelete}
              >
                Del
              </Button>
            </div>
          )}
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="desc"
            fieldValue={formData.desc}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="time"
            fieldValue={formData.time}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="location"
            fieldValue={formData.location}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="image"
            fieldValue={formData.image}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="link"
            fieldValue={formData.link}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
        <td className="py-3 px-2">
          <EditableBox
            fieldName="recording"
            fieldValue={formData.recording}
            editable={activeEdit}
            onChange={handleTextChange}
          />
        </td>
      </tr>
    </>
  );
}

function EditableBox({ fieldName, fieldValue, editable, onChange }) {
  const renderFieldvalue = () => {
    if (fieldName === "image" && fieldValue && fieldValue != "<IMAGE>") {
      return <img src={fieldValue} />;
    } else if (fieldName === "time" && fieldValue.includes("TO")) {
      return `${fieldValue.split("TO")[0]} - ${fieldValue.split("TO")[1]}`;
    } else {
      return fieldValue;
    }
  };

  if (editable) {
    if (fieldName === "time") {
      return (
        <>
          <input
            className="peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
            type="datetime-local"
            name="time_from"
            onChange={onChange}
            value={fieldValue.split("TO")[0]}
          />
          <input
            className="peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
            type="datetime-local"
            name="time_to"
            onChange={onChange}
            value={fieldValue.split("TO")[1]}
          />
        </>
      );
    }
    return (
      <textarea
        type="text"
        className="peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={`${fieldName}`}
        rows="6"
        cols="40"
        value={fieldValue}
        onChange={onChange}
        name={fieldName}
      />
    );
  } else {
    return renderFieldvalue();
  }
}
