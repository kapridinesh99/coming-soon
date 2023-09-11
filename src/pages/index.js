import React from "react";
import { like, download } from "../Assets/index";
import pdf from "../Assets/plans-final.pdf";
const ComingSoon = () => {
  return (
    <div className="flex h-screen justify-center items-start top-8">
      <div className="text-center p-10 flex flex-col gap-8">
        <div className="text-3xl text-center font-bold">
          <img className="h-22 w-20 mx-auto" src={like} alt="like" />
        </div>
        <div className="text-2xl text-gray-500 font-semibold">WE'RE STILL</div>
        <div className="sm:text-8xl text-5xl font-extrabold drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] text-blue-600">
          Cooking our Website.
        </div>
        <div className="text-2xl text-gray-700 sm:text-gray-500">
          <p>We are going to launch our website very soon.</p>
          <p>Stay Tuned.</p>
        </div>
        <div className="flex items-center justify-center">
          <a href={pdf} download>
            <div
              className="bg-[#EEAA0F] cursor-pointer items-center justify-center flex flex-row gap-4 curson-pointer w-22 h-10 pr-4 rounded-full text-white font-bold hover:bg-[#b38b2f] drop-shadow-[0_30px_30px_rgba(0.50,0.50,0.50,0.50)] py-2"
              download>
              <img className="h-10 w-10" src={download} alt="download"></img>
              <p>Checkout Company Plans</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
