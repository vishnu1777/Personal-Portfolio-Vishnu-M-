"use client";
import React from "react";

const Gpt = () => {
  const handleClick = async () => {
    const url = "https://openai80.p.rapidapi.com/chat/completions";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9413d4c24bmshf640b523cc220d1p1792c3jsn399e940c3dfa",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Hello!",
          },
        ],
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Gpt;
