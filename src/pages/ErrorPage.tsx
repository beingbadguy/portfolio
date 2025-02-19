import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          navigate("/");
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearTimeout(interval);
  });
  return (
    <div className="m-4 h-[90vh] flex items-center justify-center flex-col">
      <h1 className=" text-7xl sm:text-[200px]">
        4<span className="text-blue-500">0</span>4
      </h1>
      <div className="my-2 sm:text-[30px]">
        Sorry, There's <span className="text-blue-500">Nothing</span> Here!
      </div>
      <p className="my-2 text-center">
        redirecting to the portfolio in {timer} seconds...
      </p>
    </div>
  );
};

export default ErrorPage;
