import React, { useState } from "react";
const corrections = {
  rgiht: "right",
  realy: "really",
  wierd: "weird",
  globel: "globle",
};
const Styles = {
  AutoCorrectMainStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  SubStyles: { fontSize: "24px", margin: "30px 0px" },
};
export default function AutoCorrectTextArea() {
  const [values, setValues] = useState("");
  const onTextCorrect = (value) => {
    const space = value.slice(-1);
    let inputValues = values.split(" ");
    let correctedText = value;
    if (space === " ") {
      for (const [key, value] of Object.entries(corrections)) {
        let CheckCorrect = false;
        if (inputValues[0] === key) {
          CheckCorrect = correctedText.includes(`${key} `);
        } else {
          CheckCorrect = correctedText.includes(` ${key} `);
        }
        if (CheckCorrect) {
          correctedText = correctedText.replace(`${key} `, `${value} `);
        }
      }
    }
    setValues(correctedText);
  };
  return (
    <div style={Styles.AutoCorrectMainStyle}>
      <h2 style={Styles.SubStyles}> Auto Correct App</h2>
      <textarea
        value={values}
        data-testid="textarea"
        rows="12"
        cols="70"
        style={{
          borderRadius: "12px",
          border: "1px solid blue",
          outline: "none",
        }}
        onChange={(e) => {
          onTextCorrect(e.target.value);
        }}
      >
        {values}
      </textarea>
      <div>{values}</div>
    </div>
  );
}
