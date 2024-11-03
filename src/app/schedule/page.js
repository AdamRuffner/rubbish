"use client";

// pages/schedule.js
import { useState } from "react";

const Schedule = () => {
  // State to hold form values
  const [appointmentType, setAppointmentType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process or submit the form data here
    console.log("Appointment Type:", appointmentType);
    console.log("Date:", date);
    console.log("Time:", time);

    alert("Appointment scheduled successfully!");
  };

  return (
    <div>
      <header className="bg-main-blue">
        <div className="flex justify-center pt-7 text-sm">
          <p className="text-white">Open Mon - Sun | 8am - 8pm</p>
        </div>
        <div className="text-center m-3 p-4">
          <h2 className="p-3 text-7xl text-white font-Title">Buck Truck</h2>
        </div>
      </header>
      <section className="flex justify-center pt-10 text-4xl pb-8 text-main-blue font-Title ">
        <form
          className="shadow-lg shadow-gray-500 rounded-xl p-10 my-10"
          onSubmit={handleSubmit}
        >
          <label>
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              required
            >
              <option value="">Select Size</option>
              <option value="consultation">6 Yard</option>
              <option value="follow-up">10 Yard</option>
              <option value="therapy">20 Yard</option>
              <option value="therapy">30 Yard</option>
            </select>
          </label>
          <br />
          <br />

          <label>
            Date:
            <input
              className="pl-2"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <br />
          <br />

          <label>
            Time:
            <input
              className="pl-5"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
          <br />
          <br />

          <button
            className="shadow-lg shadow-gray-500 rounded-xl p-2  hover:bg-main-blue hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Schedule;
