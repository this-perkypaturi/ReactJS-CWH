import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm({
  boxHeading = "Enter heading for text form",
  heading = "Enter the heading",
}) {
  const [text, setText] = useState("");
  var [isItalics, setIsItalics] = useState(false);

  const handleUpCase = () => {
    let newTextUp = text.toUpperCase();
    setText(newTextUp);
  };

  const handleLowCase = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
  };

  const handleOnChange = (event) => {
    let value = event.target.value;
    setText(value);
  };

  const handleItalicsCase = () => {
    setIsItalics(!isItalics);
  };

  let countChar = text.length;
  let countWords = text.split(" ").length;
  let timeToRead = countWords * 0.008;

  return (
    <>
      <div className="container" >
        <h2>{heading}</h2>
      </div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {boxHeading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter name"
            style={{ fontStyle: isItalics ? "italic" : "normal"}} 
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-5" onClick={handleLowCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleItalicsCase}>
          {isItalics ? "Remove Italics" : "Convert to Italics"}
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {countChar} characters & {countWords} words. <br />
          {timeToRead} minutes on average to read the above text.(Assuming 125
          wpm)
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  // asliToggleMode : PropTypes.string,
};
