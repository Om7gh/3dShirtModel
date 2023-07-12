import React from "react";
import { CustomBtn } from "../Components";

const FillPicker = (props) => {
  const { file, setFile, readFile } = props;
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-400 text-xs truncate">
          {file === "" ? "No file  selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomBtn
          type="outline"
          title="Logo"
          handelClick={() => readFile("logo")}
          customizeStyle="text-xs"
        />
        <CustomBtn
          type="filled"
          title="Full"
          handelClick={() => readFile("full")}
          customizeStyle="text-xs"
        />
      </div>
    </div>
  );
};

export default FillPicker;
