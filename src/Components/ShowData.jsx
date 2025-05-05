import axios from "axios";
import React, { useEffect, useState } from "react";
function ShowData() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      let res = await fetch(
        "https://mini-notes-6d468-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json"
      );
      let datas = await res.json();
      //console.log(datas[1]);
      let result = [];
      for (let note in datas) {
        result.push(datas[note]);
      }
      //console.log(result, data);
      setData([...data, ...result]);
    } catch (error) {
      console.log(error, "try again");
    }
  }
  //fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  function Delete(i) {
    let ans = data.filter((d, ind, arr) => ind !== i);
    // axios.delete(
    //     `https://mini-notes-6d468-default-rtdb.asia-southeast1.firebasedatabase.app/${i}.json`
    //   );
    //   fetchData();
    setData([...ans]);
  }
  return (
    <>
      <h1>Existing Notes</h1>
      <div>
        {data.map((note, i) => (
          <ul key={i}>
            <li className="list">
              {note.title}{" "}
              <span>
                <button className="delete" onClick={() => Delete(i)}>
                  Delete
                </button>
              </span>
            </li>
            <p className="listContent">{note.content}</p>
          </ul>
        ))}
      </div>
    </>
  );
}

export default ShowData;
