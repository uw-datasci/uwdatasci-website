import { useState, useEffect, useContext } from "react";
import Button from "../../components/UI/Button";

export default function EditableTable({
  tableTitle,
  dataList,
  defaultData,
  createData,
  removeData,
  modifyData,
  headers,
}) {

  const handleAddData = () => {
    createData(defaultData);
  };

  return (
    <>
      <div className="mx-12">
        <h2 className="mb-12 text-left md:mb-16 xl:mb-20">
          <span className="h2">{tableTitle}</span>
        </h2>
        <div className="overflow-x-auto">
          {dataList ? (
            <table className="min-w-full table-fixed">
              <EditableHeader headers={headers} />
              <tbody>
                {dataList?.length &&
                  dataList.map((datum, idx) => (
                    <EditableRow
                      datum={datum}
                      headers={headers}
                      key={`datum_${tableTitle}_${idx}`}
                      removeData={removeData}
                      modifyData={modifyData}
                    />
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="mb-3 dark:text-lightPurple md:mb-6">
              No data lool
            </div>
          )}
          <Button
            bg="bg-white dark:bg-black"
            border="rounded-full border border-purple dark:border-lightPurple"
            py="py-2.5"
            font="text-black dark:text-white"
            classes="text-center w-1/6 my-4"
            onClick={handleAddData}
          >
            {"Add Data"}
          </Button>
        </div>
      </div>
    </>
  );
}

function EditableHeader({ headers }) {
  return (
    <thead>
      <tr className="dark:border-neutral-500 mb-5 border-b font-medium leading-relaxed text-purple dark:text-lightPurple">
        {headers.map((header) => (
          <th key={`${header.title}`} className={`px-6 py-4 ${header.classes}`}>
            {header.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function EditableRow({ datum, headers, removeData, modifyData }) {
  const [activeEdit, setActiveEdit] = useState(false);
  const [formData, setFormData] = useState(datum);

  useEffect(() => {
    setFormData(datum);
  }, [datum]);

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
    modifyData(datum.idx, formData);
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setActiveEdit(false);
    setFormData(datum);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setActiveEdit(false);
    const confirmed = window.confirm("Do you REALLY want to delete this?");
    if (confirmed) {
      removeData(datum.idx);
    }
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
            fieldName={headers[0].key}
            fieldValue={formData[headers[0].key]}
            editable={activeEdit}
            onChange={handleTextChange}
            key={`box_${headers[0].title}`}
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
        {headers.slice(1).map((header, i) => (
          <td key={`row_${datum.idx}_${i}_${header.key}`} className="py-3 px-2">
            <EditableBox
              fieldName={header.key}
              fieldValue={formData[header.key]}
              editable={activeEdit}
              onChange={handleTextChange}
            />
          </td>
        ))}
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
