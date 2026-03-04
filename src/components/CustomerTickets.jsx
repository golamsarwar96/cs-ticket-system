import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomerTickets = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-mist-700 text-center lg:text-left mb-3">
        Customer Tickets
      </h1>
      <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
        {/* tickets section */}
        <div className="lg:flex gap-9 lg:col-span-2">
          {/* Single ticket */}
          <div class="card lg:w-96 bg-base-100 card-sm shadow-lg">
            <div class="card-body">
              <div className="flex justify-between gap-1">
                <h2 class="card-title flex-1">Small Card</h2>
                <span className="bg-[#B9F8CF] font-bold px-4 py-1 rounded-2xl text-[#0B5E06]">
                  <FontAwesomeIcon className="text-[#02A53B]" icon={faCircle} />{" "}
                  Open
                </span>
              </div>
              <p className="text-mist-500 text-medium">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div class="card-actions flex justify-between">
                <div className="flex gap-7">
                  <p className="text-mist-400">#1001</p>
                  <p className="text-orange-700">High Priority</p>
                </div>
                <div className="flex gap-5 text-mist-500">
                  <p>John Smith</p>
                  <p>1/15/2024</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card lg:w-96 bg-base-100 card-sm shadow-lg">
            <div class="card-body">
              <div className="flex justify-between gap-1">
                <h2 class="card-title flex-1">Small Card</h2>
                <span className="bg-[#B9F8CF] font-bold px-4 py-1 rounded-2xl text-[#0B5E06]">
                  <FontAwesomeIcon className="text-[#02A53B]" icon={faCircle} />{" "}
                  Open
                </span>
              </div>
              <p className="text-mist-500 text-medium">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div class="card-actions flex justify-between">
                <div className="flex gap-7">
                  <p className="text-mist-500">#1001</p>
                  <p className="text-orange-700">High Priority</p>
                </div>
                <div className="flex gap-5 text-mist-500">
                  <p>John Smith</p>
                  <p>1/15/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4 p-2">
          {/* Task Section */}
          <div className="text-mist-700">
            <h1 className="text-2xl font-bold">Task Status</h1>
            <p className="text-sm">Select a ticket to add to Task Status</p>
          </div>
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
