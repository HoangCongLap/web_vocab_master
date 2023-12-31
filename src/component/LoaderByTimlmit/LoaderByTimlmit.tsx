import React, { useState, useEffect } from "react";
import "./index.css";
import { Stack } from "@chakra-ui/react";

const LoaderByTimlmit = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : 100;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (percentage === 51) {
      window.location.href = "/reviewAnswer";
    }
  }, [percentage]);

  return (
    <Stack
      style={{
        marginTop: "400px",
        height: "350px",
        flex: "colum",
      }}
    >
      <div className="loader-container">
        <img
          src="https://learn.mochidemy.com/image/mochi_tet-02.png"
          alt="Running Cat"
          className="running-cat"
          style={{ left: `${percentage}%` }}
        />
        <div className="loader">
          <div
            className="colored-bar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
        Ôn tập vào Thời điểm vàng giúp bạn tăng 10 lần khả năng ghi nhớ.
      </p>
    </Stack>
  );
};

export default LoaderByTimlmit;
