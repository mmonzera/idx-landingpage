"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const InputForm = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    workemail: "",
    phonenumber: "",
    companyname: "",
    industry: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    e.target.setCustomValidity("");
    setInputs((values) => ({
      ...values,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      inputs.fullname &&
      inputs.workemail &&
      inputs.phonenumber &&
      inputs.companyname &&
      inputs.industry &&
      inputs.inquiry
    ) {
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
          companyname: "",
          industry: "",
          inquiry: "",
        });
        toast.success("Success sent inquiry");
      } catch (error) {
        toast.error("Email not send");
      }
    }
  };

  return (
    <form
      className="p-4 bg-white rounded-[8px] grid grid-cols-1 shadow-md gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid grid-cols-1 gap-2">
        <label for="fullname">
          {" "}
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="fullname"
          name="fullname"
          value={inputs.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-auto justify-between gap-3">
        <div className="grid grid-cols-1 gap-2 w-full">
          <label for="workemail">
            {" "}
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="workemail"
            name="workemail"
            value={inputs.workemail}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 w-full">
          <label for="phonenumber"> Phone Number</label>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={inputs.phonenumber}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label for="companyname">
          {" "}
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="companyname"
          name="companyname"
          value={inputs.companyname}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label for="industry">
          {" "}
          Industry<span className="text-red-500">*</span>{" "}
        </label>
        <input
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="industry"
          name="industry"
          value={inputs.industry}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label for="inquiry">
          {" "}
          Inquiry <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[200px]"
          type="text"
          id="inquiry"
          name="inquiry"
          value={inputs.inquiry}
          onChange={handleChange}
        />
      </div>
      <button className="bg-[#1EA2EC] text-white rounded-md p-2 text-[16px] sm:p-3 sm:text-[26px]">
        Sent Inquiry
      </button>
    </form>
  );
};

export default InputForm;
