import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [stateTax, setStateTax] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const formula = price * amount * stateTax;
    let discount = 1;
    if (formula >= 50000) {
      discount = 0.85;
    } else if (formula >= 10000) {
      discount = 0.9;
    } else if (formula >= 7000) {
      discount = 0.93;
    } else if (formula >= 5000) {
      discount = 0.95;
    } else if (formula >= 1000) {
      discount = 0.97;
    }
    setTotalPrice((Math.round(formula * discount * 100) / 100).toFixed(2));
  }, [price, stateTax, amount]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <p>Epic shoes 200 $</p>
        <button
          onClick={(e) => {
            alert("You bought this");
          }}
        >
          BUY
        </button>
      </div>
      <div>
        <p> enter price </p>
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div>
        <p> amount </p>
        <input
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div>
        <form>
          <label>UT</label>
          <input
            type="radio"
            name="radAnswer"
            value={1.0685}
            onChange={(e) => {
              setStateTax(e.target.value);
            }}
          />
          <label>NV</label>
          <input
            type="radio"
            name="radAnswer"
            value={1.08}
            onChange={(e) => {
              setStateTax(e.target.value);
            }}
          />
          <label>TX</label>
          <input
            type="radio"
            name="radAnswer"
            value={1.0625}
            onChange={(e) => {
              setStateTax(e.target.value);
            }}
          />
          <label>AL</label>
          <input
            type="radio"
            name="radAnswer"
            value={1.04}
            onChange={(e) => {
              setStateTax(e.target.value);
            }}
          />
          <label>CA</label>
          <input
            type="radio"
            name="radAnswer"
            value={1.0825}
            onChange={(e) => {
              setStateTax(e.target.value);
            }}
          />
        </form>
      </div>
      <div>PRICE {totalPrice}</div>
    </div>
  );
}

export default App;