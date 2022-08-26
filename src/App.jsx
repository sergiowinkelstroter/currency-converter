import { useEffect, useState } from "react";

let myHeaders = new Headers();
myHeaders.append("apikey", "NbxLZbRvekBgIAtU5vsKLOBASZau3LtV");

function App() {
  const [currencyData, setCurrencyData] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const list = [
    { id: 1, name: "BRL" },
    { id: 2, name: "USD" },
    { id: 3, name: "EUR" },
    { id: 4, name: "GBP" },
  ];

  function handleConverter() {
    fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCurrencyData(result.result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="App">
      <h3>Conversor de Moedas</h3>
      <div className="from">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name=""
          id=""
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {list.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="to">
        <input type="text" value={currencyData.toFixed(2)} />
        <select
          name=""
          id=""
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {list.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConverter}>Converter</button>
    </div>
  );
}

export default App;
