import React, { useState } from "react";
import { ls } from "../../utils/localStorage";
import { getWords } from "../../utils/api.service";
import "./styles.css";

const String = ({ text, className, index }) => {
  const [textState, setTextState] = useState(text); // passing props to state in-order-to change the text.. *sorry
  const [visibility, setVisibility] = useState("");
  const [tooltipWords, setTooltipWords] = useState([]);
  const onClickHandler = e => {
    ls.set("currentIndex", index);
    fetchWords();
  };
  const onMouseLeave = () => {
    setVisibility("");
    setTooltipWords("");
  };

  const fetchWords = async () => {
    const words = await getWords(text);
    setVisibility("is-visible");
    setTooltipWords(words.data);
  };
  const onClickReplaceWord = newWord => {
    let oldText = ls.get("text");
    let newText = oldText.map(item => {
      // non-mutating
      if (item.index === index) {
        return { ...item, text: newWord };
      }
      return item;
    });

    setTextState(newWord);
    ls.set("text", newText);
  };
  return (
    <span
      className={"tooltip " + className}
      onClick={onClickHandler}
      onMouseLeave={onMouseLeave}
    >
      {textState}
      <span className={"tooltiptext " + visibility}>
        {tooltipWords.length ? (
          <ul>
            Synonyms:
            {tooltipWords.map(item => (
              <li
                key={`unique-key-${item.score}`}
                onClick={onClickReplaceWord.bind(this, item.word)}
              >
                {item.word}
              </li>
            ))}
          </ul>
        ) : (
          "No Synonyms was found!"
        )}
      </span>
    </span>
  );
};

export default String;
