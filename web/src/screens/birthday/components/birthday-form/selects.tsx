import createNumberArray from "../../../../utils/createNumberArray";
import Select from "../../../../components/select";

import { months } from "../../../../shared/constant/date";
import styles from "./styles.module.scss";

import { useState } from "react";

const Selects = () => {
  const date = new Date();
  const currentDay = date.getDate();
  
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const [ day, setDay ] = useState(currentDay-1);
  const [ month, setMonth ] = useState(currentMonth);

  const [ year, setYear ] = useState(currentYear);
  const maxAgeAllowed = 120;

  const firstYearValid = currentYear - maxAgeAllowed;

  function getDaysOfTheCurrentMonth() {
    return new Date(currentYear, currentMonth, 0).getDate();
  }

  const daysOfCurrentMonth = createNumberArray(1, getDaysOfTheCurrentMonth()+1);
  const years = createNumberArray(firstYearValid, currentYear + 1);

  return (
    <div className={ styles.selects_container }>
      <Select
        className={ styles.select }
        onChange={(e) => setDay(parseInt(e.target.value))}
        options={ daysOfCurrentMonth }
        value={ day }
      />

      <Select
        className={ styles.select }
        onChange={(e) => setMonth(parseInt(e.target.value))}
        options={ months }
        value={ month }
      />

      <Select
        onChange={(e) => setYear(parseInt(e.target.value))}
        options={ years }
        optionsValuesIsNotIndex
        value={ year }
      />
    </div>
  );
};

export default Selects;