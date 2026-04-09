import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  //use state variables
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  //create a array to store the answer
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    //creates a new array
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    //spice method
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
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
          className="bg-white active:scale-95 rounded-2xl text-black px-5 py-2 w-full font-medium outline-none
        active:bg-gray-300"
        >
          Add notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 bg-gray-900  p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 flex flex-col justify-between items-start rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-600 text-xs">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 rounded font-bold"
                >
                  Delete
                </button>
                {/* <h2 className="absolute top-5 right-5 bg-red-500 rounded-full p-1 text-xs">
                  <X size={16} strokeWidth={2.75} />
                </h2> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
