import React, { useState } from "react";

function CounterObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          label="first name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
        <input
          type="text"
          label="last name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your first name is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default CounterObject;
