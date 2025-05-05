import React, { useState } from "react";

export function AddNote() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [add, setAdd] = useState([]);
  async function addData() {
    try {
      const response = await fetch(
        "https://mini-notes-6d468-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
          }),
          // …
        }
      );
    } catch (error) {
      console.log("error while posting data", error, "try again");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setAdd([...add, formData]);
    setFormData({
      title: "",
      content: "",
    });
    addData();
  }
  //   function handleChange(e) {
  //     const { name, value } = e.target;
  //     console.log(e.target.name, value);
  //     setFormData({ name: value, name: value });
  //   }
  return (
    <div>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ title: e.target.value })}
          placeholder="Title"
        />
        <br />
        <textarea
          type="text"
          name="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          placeholder="Content"
        />
        <br />
        <button className="addBtn" type="submit">Add</button>
      </form>
    </div>
  );
}
