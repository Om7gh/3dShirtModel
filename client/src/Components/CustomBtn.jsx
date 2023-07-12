import React from "react";
import state from "../Store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
const CustomBtn = (props) => {
  const { title, type, handelClick, customizeStyle } = props;
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`${customizeStyle} flex-1 rounded-md`}
      style={generateStyle(type)}
      onClick={handelClick}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
