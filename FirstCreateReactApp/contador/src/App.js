import React from "react";
import { useState, useRef, useEffect } from "react";
import "./App.scss";

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

const App = (props) => {
  const [cont, setCont] = useState(0);
  const [contStep, setContStep] = useState("1");
  const inputRef = useRef();

  useEffect(() => {
    setInputFilter(inputRef.current, function (value) {
      return /^-?\d*$/.test(value);
    });
  }, []);

  const reset = () => {
    setCont(0);
    setContStep("1");
  };

  const aumentaCont = () => {
    setCont((prevCont) => prevCont + parseInt(contStep));
  };

  const decrementaCont = () => {
    setCont((prevCont) => prevCont - parseInt(contStep));
  };

  const changeContStep = (event) => {
    const step = event.target.value;
    setContStep(step);
  };

  const resetContStep = (event) => {
    const step = event.target.value;
    if (step === "" || isNaN(step)) {
      setContStep("1");
    }
  };

  return (
    <div className="containter">
      <h1>Contador</h1>
      <h3 id="cont">{cont}</h3>
      <div className="step-input">
        <label htmlFor="step">Salto:</label>
        <input
          ref={inputRef}
          type="text"
          name="step"
          onChange={changeContStep}
          value={contStep}
          onBlur={resetContStep}
        />
      </div>
      <div className="actions">
        <button id="reset" onClick={reset}>
          Reset
        </button>
        <button id="aumentar" onClick={aumentaCont}>
          +
        </button>
        <button id="decrementar" onClick={decrementaCont}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
