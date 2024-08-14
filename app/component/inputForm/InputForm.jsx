"use client";
import React, { useState } from "react";

const inputForm = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    workemail: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setInputs((values) => ({
      ...values,
      [e.target.id]: [e.target.value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.fullname && inputs.workemail && inputs.phonenumber) {
      try {
        const res = await fetch(`api/inputform`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        setInputs({
          fullname: "",
          workemail: "",
          phonenumber: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      className="p-4 bg-white rounded-[8px] shadow-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid grid-cols-1">
        <label for="fullname"> Full Name </label> <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={inputs.fullname}
          onChange={handleChange}
        />
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1">
        <label for="workemail"> Work Email </label>
        <br />
        <input
          type="text"
          id="workemail"
          name="workemail"
          value={inputs.workemail}
          onChange={handleChange}
        />
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1">
        <label for="phonenumber"> Phone Number </label>
        <br />
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={inputs.phonenumber}
          onChange={handleChange}
        />
        <br />
        <br />
      </div>
      <button>submit</button>
    </form>
  );
};

export default inputForm;
