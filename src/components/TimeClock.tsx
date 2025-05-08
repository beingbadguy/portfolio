import { useEffect, useState } from "react";

const TimeClock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeChanger = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeChanger);
  }, []);

  return <div>{date}</div>;
};

export default TimeClock;
