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
    cleanData.forEach(datum => {
        uploadData(datum);
    })  
  };

  return (
    <div className="App">
      <input
        className="csv-input"
        type="file"
        name="file"
        placeholder={null}
        onChange={handleChange}
      />
      <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
        <Button
          bg="bg-white dark:bg-black"
          border="rounded-full border border-purple dark:border-lightPurple"
          py="py-2.5"
          font="text-black dark:text-white"
          icon={UploadIcon}
          iconAlt={"Upload icon"}
          iconClasses="no-select-or-drag w-6 absolute right-4 top-1/2 -translate-y-1/2 dark:filter-light-purple"
          classes="text-center w-full"
          onClick={importCSV}
        >
          {"Upload"}
        </Button>
      </div>
    </div>
  );
}
