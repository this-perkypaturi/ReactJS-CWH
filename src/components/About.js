import React, { useState } from "react";

function About() {
  const [darkMode, setDarkMode] = useState(false);

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "rgb(33, 37, 41)",
  });

  const changeMyStyle = () => {
    if (darkMode) {
      setMyStyle({
        backgroundColor: "white",
        color: "rgb(33, 37, 41)",
      });
    } else {
      setMyStyle({
        backgroundColor: "rgb(33, 37, 41)",
        color: "white",
      });
    }
    setDarkMode(!darkMode);
  };

  const buttonStyle = {
    border: "1px solid white",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 style={myStyle}>About Us</h1>
        <div className="accordion my-5" style={myStyle} id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNames that we use to style each element. These classNames
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNames that we use to style each element. These
                classNames control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNames that we use to style each element. These
                classNames control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={changeMyStyle}
            style={{...myStyle,...buttonStyle}}
          >
            {darkMode ? "Disable dark mode" : "Enable Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
