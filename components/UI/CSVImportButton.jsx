import { useState } from "react";
import Papa from "papaparse";

import Button from "./Button";
import UploadIcon from "../../public/img/icons/upload.svg";

export default function CSVImportButton({ uploadData }) {
  const [csvFile, setCSVFile] = useState();

  const handleChange = (event) => {
    setCSVFile(event.target.files[0]);
  };

  const removeEmptyRows = (data) => {
    return data.filter((datum) => datum.name);
  };

  const importCSV = () => {
    Papa.parse(csvFile, {
      complete: updateData,
      header: true,
    });
  };

  const updateData = (result) => {
    const data = result.data;
    const cleanData = removeEmptyRows(data);
    cleanData.forEach((datum) => {
      uploadData(datum);
    });
  };

  return (
    <div className="App">
      <div className="border rounded-md p-10 ml-12 mr-12 flex flex-col justify-start text-black dark:text-white">
        <div className="mb-5 text-lg"><b>CSV Upload :)</b></div>
        <div className="mb-2">
          {"1. Choose a CSV file with the columns "}
          <code>[name, title, subteam, image, linkedin]</code>
        </div>
        <input
          className="csv-input mb-3 file:relative file:mb-3 file:rounded-full file:border file:border-purple file:bg-white file:px-5 file:pt-3 file:pb-3 file:text-black dark:text-white file:dark:border-lightPurple file:dark:bg-black file:dark:text-white"
          type="file"
          name="file"
          placeholder={null}
          onChange={handleChange}
        />
        <div className="mb-2">
          2. Click the Upload Button to confirm and upload data
        </div>
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          icon={UploadIcon}
          iconAlt={"Upload icon"}
          iconClasses="no-select-or-drag w-6 absolute right-4 top-1/2 -translate-y-1/2 dark:filter-light-purple"
          classes="text-center w-1/4"
          onClick={importCSV}
        >
          {"Upload"}
        </Button>
      </div>
    </div>
  );
}
