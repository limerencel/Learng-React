import { useId, useState } from "react";

export default function App() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const uniqueID = useId();

  const generateID = () => {
    setID(uniqueID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    fetch("/form", { method: form.method, body: formData });
  };

  //for the 2nd form
  const search = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const query = formData.get("query");
    alert(`You searched ${query}`);
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">
            First Name:{" "}
            <input type="text" placeholder="first name" name="firstname" />
          </label>
          <label htmlFor="">
            Lat Name:{" "}
            <input type="text" placeholder="last name" name="lastname" />
          </label>
          <hr />
          <label htmlFor="">
            checkbox: <input type="checkbox" />
          </label>
          <hr />
          <p>Radio buttons:</p>
          <label htmlFor="">
            <input type="radio" />
            option 1
          </label>
          <br />
          <label htmlFor="">
            <input type="radio" defaultChecked />
            option 2
          </label>
          <hr />
          <button type="reset">reset submit</button>
          <button type="submit">submit</button>
        </div>
      </form>
      <hr />
      <button onClick={generateID}>generate</button>
      <br />
      <p>{id}</p>
      <hr />
      <h2>Handle form Submission on the client</h2>
      <form onSubmit={search}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <hr />
      <h2>Controlling an input with a state variable</h2>
      <form action="">
        <label htmlFor="">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
