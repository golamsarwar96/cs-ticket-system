import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use } from "react";
import { toast } from "react-toastify";

const CustomerTickets = ({
  ticketPromise,
  setCount,
  count,
  setAddTask,
  addTask,
  resolveCount,
  setResolveCount,
}) => {
  const ticketData = use(ticketPromise);

  const notify = () => toast("Task Resolved");

  const handleAddTask = (addTicket) => {
    setAddTask([...addTask, addTicket]);
    setCount(count + 1);
    toast.success("Task Added Successfully");
    console.log(count);
  };

  const handleCompleteTask = () => {
    toast.success("Task Resolved");
    setResolveCount(resolveCount + 1);
    setCount(count - 1);
  };
  return (
    <div className="p-4 cursor-pointer">
      <h1 className="text-2xl font-bold text-mist-700 text-center lg:text-left mb-3">
        Customer Tickets
      </h1>
      <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
        {/* tickets section */}
        <div className="grid lg:grid-cols-2 gap-5 lg:col-span-2">
          {/* Single ticket */}
          {ticketData.map((ticket) => (
            <div
              onClick={() => handleAddTask(ticket)}
              key={ticket.id}
              className="card lg:w-96 bg-base-100 card-sm shadow-lg"
            >
              <div className="card-body">
                <div className="flex justify-between gap-1">
                  <h2 className="card-title flex-1">{ticket.title}</h2>
                  <span
                    className={`${ticket.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} ${ticket.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"}font-bold px-3 py-1 rounded-2xl `}
                  >
                    <FontAwesomeIcon
                      className={`${ticket.status === "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}`}
                      icon={faCircle}
                    />{" "}
                    {ticket.status}
                  </span>
                </div>
                <p className="text-mist-500 text-medium">
                  {ticket.description}
                </p>
                <div className="card-actions flex justify-between">
                  <div className="flex gap-7">
                    <p className="text-mist-400">{ticket.id}</p>
                    <p className="text-orange-700">{ticket.priority}</p>
                  </div>
                  <div className="flex gap-5 text-mist-500">
                    <p>{ticket.customer}</p>
                    <p>{ticket.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 space-y-4 p-2">
          {/* Task Section */}
          <h1 className="text-2xl font-bold text-mist-700">Task Status</h1>
          {addTask.map((add) => (
            <div className="text-mist-700 flex flex-col">
              <h1 className="text-lg font-medium">{add.title}</h1>
              <button
                onClick={handleCompleteTask}
                className="btn bg-[#02A53B] text-white"
              >
                Complete
              </button>
            </div>
          ))}
          <div className="text-mist-700">
            <h1 className="text-2xl font-bold">Resolved Task</h1>
            <p>No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
