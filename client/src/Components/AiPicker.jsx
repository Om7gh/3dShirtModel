import React from "react";
import { CustomBtn } from "../Components";
const AiPicker = (props) => {
  const { prompt, setPrompt, generatingImg, handelSubmit } = props;
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask ai..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomBtn
            type="outline"
            title="Asking Ai..."
            customizeStyle="text-xs"
          />
        ) : (
          <>
            <CustomBtn
              type="outline"
              title="AI logo"
              handelClick={() => handelSubmit("logo")}
              customizeStyle="text-xs"
            />
            <CustomBtn
              type="filled"
              title="AI Full"
              handelClick={() => handelSubmit("full")}
              customizeStyle="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
