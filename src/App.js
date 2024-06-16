import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  let [activeItems, setActiveItems] = useState([]);
  const [textToShow, setTextToShow] = useState([]);
  const onkeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...textToShow, newFoodItem];
      setTextToShow(newItems);
    }
  };
  return (
    <div className="App">
      <input onKeyDown={onkeyDown} />
      <div>
        <ul className="list-group">
          {textToShow.length == 0 && <h1>No items</h1>}
          {textToShow.map((items, index) => (
            <li
              key={index}
              className={`list-group-item ${
                activeItems.includes(items) && "active"
              }`}
            >
              {items}{" "}
              <button
                style={{ float: "right" }}
                onClick={(event) => {
                  let newBoughtItems = [...activeItems, items];
                  setActiveItems(newBoughtItems);
                }}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
