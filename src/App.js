import React, { useState } from "react";
import { useValidator, usePeselValidator } from "./hooks/hooks";
import "./style.css";

const Form = () => {
  const [name, connectName] = useValidator("", 2, 30);
  const [surName, connectSurName] = useValidator("", 2, 20);
  const [pesel, connectPESEL] = usePeselValidator("", 11, 11);
  const [datalist, setDataList] = useState([]);

  const saveDate = (event) => {
    event.preventDefault();
    setDataList((prev) => {
      return [...prev, { name: name, surname: surName }];
    });
    const year = { ...pesel.slice(0, 2) };
    const month = { ...pesel.slice(2, 4) };
    const day = { ...pesel.slice(4, 6) };
    console.log(month[0] + month[1]);
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    if (month[0] + month[1] < 13) {
      const date = new Date(
        19 + year[0] + year[1],
        month[0] + month[1] - 1,
        day[0] + day[1]
      );
      console.log(date);
      return date;
    } else {
      const date = new Date(
        20 + year[0] + year[1],
        month[0] + month[1] - 21,
        day[0] + day[1]
      );
      console.log(date);
      return date;
    }
  };
  return (
    <>
      <div style={{ border: "5px", textAlign: "center", marginTop: "40px" }}>
        <form onSubmit={saveDate}>
          <div>
            <input
              {...connectName}
              type="text"
              name="name"
              className="name"
              placeholder="Jan"
            />
            <div>{connectName.msg}</div>
            <input
              {...connectSurName}
              type="text"
              name="surname"
              className="surname"
              placeholder="Kowalski"
            />
            <div>{connectSurName.msg}</div>
            <input
              {...connectPESEL}
              type="text"
              name="pesel"
              className="pesel"
              placeholder="PESEL"
            />
            <div>{connectPESEL.msg}</div>
          </div>
          <b></b>
          <br></br>
          <button
            disabled={
              connectName.msg ||
              connectSurName.msg ||
              connectPESEL.msg ||
              !pesel ||!surName ||!name
                ? true
                : false
            }
            className="btn btn-primary"
          >
            Dodaj
          </button>
        </form>

        <div>
          {datalist.map((el, index) => {
            const { name, surname } = el;
            return (
              <li key={index}>
                <span>
                  {el.name}, {el.surname}
                </span>
              </li>
            );
          })}
        </div>
        <div className="personaldata"></div>
        <div id="modal" className="modal">
          <div className="modal-content">
            <span hide="" className="close">
              &times;
            </span>
            <p>sukces</p>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
