import React, { useState } from "react";
import Aside from "../../components/aside/Aside";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskStatus } from "../../store/tasksSlice";

const UpComing = () => {
  const dispatch = useDispatch();
  const { today, tomorrow, thisWeek } = useSelector((state) => state.tasks);

  const [todayTask, setTodayTask] = useState("");
  const [tomorrowTask, setTomorrowTask] = useState("");
  const [thisWeekTask, setThisWeekTask] = useState("");

  const handleAddTask = (taskType, taskTitle) => {
    if (taskTitle.trim()) {
      dispatch(
        addTask({
          type: taskType,
          task: { id: Date.now(), title: taskTitle, status: false },
        })
      );
      if (taskType === "today") setTodayTask("");
      else if (taskType === "tomorrow") setTomorrowTask("");
      else if (taskType === "thisWeek") setThisWeekTask("");
    }
  };

  const handleToggleTaskStatus = (taskType, taskId) => {
    dispatch(toggleTaskStatus({ type: taskType, taskId }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:space-x-7 space-y-7 md:space-y-0">
      <Aside />

      <div className="flex-1 md:px-7 flex flex-col">
        <div className="flex gap-6 items-center mb-4">
          <h2 className="text-3xl font-medium">Upcoming</h2>
          <span className="border border-[#00000066] py-1 px-6 rounded-[100px_50px_100px_100px]">
            {Math.floor(Math.random() * 25)}
          </span>
        </div>

        <div className="border-2 border-[#00000066] py-5 px-8 rounded-2xl flex-1 flex flex-col mb-14">
          <h2 className="text-3xl font-medium mb-4">Today</h2>
          <div className="flex items-center rounded-2xl p-3 text-slate-900 border border-[#00000066] mb-7">
            <button
              className="mr-4"
              onClick={() => handleAddTask("today", todayTask)}
            >
              <IoAddCircleOutline className="text-slate-900 size-7" />
            </button>
            <input
              type="text"
              placeholder="Add new task"
              value={todayTask}
              onChange={(e) => setTodayTask(e.target.value)}
              className="flex-1 bg-transparent outline-none placeholder:text-slate-800 font-normal"
            />
          </div>
          <ul className="flex-1 overflow-y-auto space-y-3">
            {today.map((task) => (
              <li
                key={task.id}
                className="text-gray-700 border-b-2 border-[#00000066] flex gap-3 pb-2 pl-3 items-center"
              >
                <input
                  type="checkbox"
                  className="size-5"
                  checked={task.status}
                  onChange={() => handleToggleTaskStatus("today", task.id)}
                />
                <span>{task.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-7">
          <div className="border-2 border-[#00000066] py-5 px-8 rounded-2xl flex-1 flex flex-col">
            <h2 className="text-3xl font-medium mb-4">Tomorrow</h2>
            <div className="flex items-center rounded-2xl p-3 text-slate-900 border border-[#00000066] mb-7">
              <button
                className="mr-4"
                onClick={() => handleAddTask("tomorrow", tomorrowTask)}
              >
                <IoAddCircleOutline className="text-slate-900 size-7" />
              </button>
              <input
                type="text"
                placeholder="Add new task"
                value={tomorrowTask}
                onChange={(e) => setTomorrowTask(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder:text-slate-800 font-normal"
              />
            </div>
            <ul className="flex-1 overflow-y-auto space-y-3">
              {tomorrow.map((task) => (
                <li
                  key={task.id}
                  className="text-gray-700 border-b-2 border-[#00000066] flex gap-3 pb-2 pl-3 items-center"
                >
                  <input
                    type="checkbox"
                    className="size-5"
                    checked={task.status}
                    onChange={() => handleToggleTaskStatus("tomorrow", task.id)}
                  />
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-[#00000066] py-5 px-8 rounded-2xl flex-1 flex flex-col">
            <h2 className="text-3xl font-medium mb-4">This Week</h2>
            <div className="flex items-center rounded-2xl p-3 text-slate-900 border border-[#00000066] mb-7">
              <button
                className="mr-4"
                onClick={() => handleAddTask("thisWeek", thisWeekTask)}
              >
                <IoAddCircleOutline className="text-slate-900 size-7" />
              </button>
              <input
                type="text"
                placeholder="Add new task"
                value={thisWeekTask}
                onChange={(e) => setThisWeekTask(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder:text-slate-800 font-normal"
              />
            </div>
            <ul className="flex-1 overflow-y-auto space-y-3">
              {thisWeek.map((task) => (
                <li
                  key={task.id}
                  className="text-gray-700 border-b-2 border-[#00000066] flex gap-3 pb-2 pl-3 items-center"
                >
                  <input
                    type="checkbox"
                    className="size-5"
                    checked={task.status}
                    onChange={() => handleToggleTaskStatus("thisWeek", task.id)}
                  />
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
