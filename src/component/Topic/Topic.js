import React from "react";
import { NavLink } from "react-router-dom";

const Topic = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="card card-compact  hover:border-2 hover:border-blue-400 lg:w-64 md:w-80 w-full mx-auto  rounded-md  bg-base-300 shadow-2xl"
    >
      <figure>
        <img
          className="bg-base-content rounded-0 w-full"
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-lg">Total Quiz : {total}</p>
        <div className="card-actions justify-end">
          <NavLink
            to={`/quizzes/${id}`}
            state={{ from: { name } }}
            className=" flex justify-between items-center bg-blue-500 hover:bg-blue-800 px-3 py-2 rounded-sm border-0 text-white font-semibold uppercase"
          >
            Start Quiz
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Topic;
