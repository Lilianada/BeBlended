import React, { useState } from "react";
import "./BusinessModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import BusinessHour from "../BusinessHour/BusinessHour";

const getTimer = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
];

const ModalList = (props) => {
  const timeList = getTimer.map((item, id) => <option key={id}>{item}</option>);

  const [isMonday, setIsMonday] = useState(false);
  const handleMonday = () => setIsMonday(!isMonday);

  const [isTuesday, setIsTuesday] = useState(false);
  const handleTuesday = () => setIsTuesday(!isTuesday);

  const [isWednesday, setIsWednesday] = useState(false);
  const handleWednesday = () => setIsWednesday(!isWednesday);

  const [isThursday, setIsThursday] = useState(false);
  const handleThursday = () => setIsThursday(!isThursday);

  const [isFriday, setIsFriday] = useState(false);
  const handleFriday = () => setIsFriday(!isFriday);

  const [isSaturday, setIsSaturday] = useState(false);
  const handleSaturday = () => setIsSaturday(!isSaturday);

  const [isSunday, setIsSunday] = useState(false);
  const handleSunday = () => setIsSunday(!isSunday);

  const Selection = () => {
    return (
      <div className="selectOption">
        <select className="getTime">{timeList}</select>
        <span className="bar"></span>
        <select className="getTime">{timeList}</select>
      </div>
    );
  };

  const [count, setCount] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const handleAdd = (key) => {
    const items = count;
    items[key].push(<Selection key={items[key].length} />);
    setCount(Object.assign({}, items));
  };

  const handleRemove = (key) => {
    const items = count;
    if (items[key].length > 0) {
      items[key].pop();
      setCount(Object.assign({}, items));
    }
  };

  return (
    <ul>
      {/* Monday */}
      <li
        className={`inactiveMode ${isMonday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            onClick={() => {
              handleMonday();
              props.data();
            }}
            name="checkbox"
          />
          <span className="checkBox"></span>
          <p className="dayName"> Monday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Monday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Monday")}
              disabled={!isMonday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Monday")}
        />
      </li>
      {/* Tuesday */}
      <li
        className={`inactiveMode ${isTuesday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleTuesday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Tuesday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Tuesday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Tuesday")}
              disabled={!isTuesday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Tuesday")}
        />
      </li>
      {/* Wednesday */}
      <li
        className={`inactiveMode ${
          isWednesday ? "activeMode" : "inactiveMode"
        }`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleWednesday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Wednesday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Wednesday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Wednesday")}
              disabled={!isWednesday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Wednesday")}
        />
      </li>
      {/* Thursday */}
      <li
        className={`inactiveMode ${isThursday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleThursday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Thursday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Thursday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Thursday")}
              disabled={!isThursday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Thursday")}
        />
      </li>
      {/* Friday */}
      <li
        className={`inactiveMode ${isFriday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleFriday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Friday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Friday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Friday")}
              disabled={!isFriday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Friday")}
        />
      </li>
      {/* Saturday */}
      <li
        className={`inactiveMode ${isSaturday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleSaturday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Saturday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Saturday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Saturday")}
              disabled={!isSaturday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Saturday")}
        />
      </li>
      {/* Sunday */}
      <li
        className={`inactiveMode ${isSunday ? "activeMode" : "inactiveMode"}`}
      >
        <div className="getDay">
          <input
            type="checkbox"
            name="checkbox"
            onClick={() => {
              handleSunday();
              props.data();
            }}
          />
          <span className="checkBox"></span>
          <p className="dayName"> Sunday </p>
        </div>
        <div className="colItems">
          <div className="selectOption">
            <select className="getTime">{timeList}</select>
            <span className="bar"></span>
            <select className="getTime">{timeList}</select>
          </div>
          {count.Sunday.map((row, id) => {
            return <Selection key={id} />;
          })}
          <div className="rowItems">
            <button
              className="addButton"
              onClick={() => handleAdd("Sunday")}
              disabled={!isSunday}
            >
              <MdAdd className="addIcon" />
              Add
            </button>
            <p className="default">Set as default time</p>
          </div>
        </div>
        <AiOutlineClose
          className="closeBtn"
          onClick={() => handleRemove("Sunday")}
        />
      </li>
    </ul>
  );
};
export default ModalList;
