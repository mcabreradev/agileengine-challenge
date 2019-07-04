import React from "react";
import String from "../String";
import "./styles.css";

const Filezone = ({ text }) =>
  !!text.length && (
    <div id="file-zone">
      <div id="file">
        {text.map(string => (
          <String {...string} key={`string_${string.index}`} />
        ))}
      </div>
    </div>
  );

export default Filezone;
