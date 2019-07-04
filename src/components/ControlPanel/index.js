import React from "react";
import { ls } from "../../utils/localStorage";
import "./styles.css";

const ControlPanel = props => {
  const onClickHandler = e => {
    let selectedClass = e.currentTarget.value;
    ls.set("selectedClass", selectedClass);

    let text = ls.get("text");
    let selectedIndex = ls.get("currentIndex");
    let newText = text.map(item => { // non-mutating
      if (item.index === selectedIndex) {
        return { ...item, className: selectedClass };
      }
      return item;
    });

    props.reloadText(newText);
    ls.set("text", newText);
  };
  return (
    <div id="control-panel">
      <div id="format-actions">
        <button
          className="format-action"
          type="button"
          value="bold"
          onClick={onClickHandler}
        >
          <b>B</b>
        </button>
        <button
          className="format-action"
          type="button"
          value="italic"
          onClick={onClickHandler}
        >
          <i>I</i>
        </button>
        <button
          className="format-action"
          type="button"
          value="underline"
          onClick={onClickHandler}
        >
          <u>U</u>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
