import React, { useState } from "react";

const App = () => {
  //use state variables
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  //create a array to store the answer
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [];

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-gray-800 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start lg:w-1/2 flex-col  p-10 gap-5 "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 border-2 rounded font-medium w-full outline-none"
          type="text"
          placeholder="Enter Notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 py-2 h-30 border-2 font-medium rounded w-full  outline-none"
          type="text"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button
          className="bg-white text-black px-5 py-2 w-full font-medium outline-none
        active:bg-gray-300"
        >
          Add notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 bg-gray-900  p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          <div className="h-53 w-40 rounded-2xl bg-white"></div>
          <div className="h-53 w-40 rounded-2xl bg-white"></div>
          <div className="h-53 w-40 rounded-2xl bg-white"></div>
          <div className="h-53 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
