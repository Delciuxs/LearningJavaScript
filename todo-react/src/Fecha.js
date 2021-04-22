import React from "react";
import DatePicker from "react-date-picker";

import "./Fecha.scss";

const Fecha = (props) => {
  return (
    <DatePicker
      onChange={props.onChangeDatePicker}
      value={props.datePickerValue}
    />
  );
};

export default Fecha;
