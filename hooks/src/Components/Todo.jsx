import { useState } from "react";

const Todo = () => {

    const [input, setInput]=useState("")
    const [todo, setTodo]=useState(["React Js", "javascript"])

    function handleSubmit(e){
        e.preventDefault();

        setTodo([...todo, input])
       setInput("")
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-7">

        {/* Header */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-gray-800">
            My Todo List
          </h1>
          <p className="text-gray-500 mt-2">
            Organize your day, one task at a time.
          </p>
        </div>

        {/* Todo Form */}
        <form className="flex gap-2 mb-6"
        onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your task..."
            className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            onChange={e => setInput(e.target.value)}
            value={input}
          />

          <button
            type="button"
            className="bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>

        {/* Task Heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Today's Tasks
          </h2>
          <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
            {todo.length} Tasks
          </span>
        </div>

        {/* Todo Items */}
        <ul className="space-y-3">
            {todo.map((item , idx) => (
          <li key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
              <span className="text-gray-700">{item}</span>
            </div>
            <button type="button" className="text-red-500 hover:text-red-700">
              ✕
            </button>
          </li>
            ))}
</ul>

        {/* Footer */}
        <div className="mt-7 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            Small steps lead to big achievements.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Todo;