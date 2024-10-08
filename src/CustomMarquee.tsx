import React from "react";
import Marquee from "react-fast-marquee";
import "./CustomeMarquee.css";
interface CustomMarqueeProps {
  messages: string[];
  speed?: number;
  direction?: "left" | "right"; // Define direction type
}

const CustomMarquee: React.FC<CustomMarqueeProps> = ({
  messages,
  speed = 100,
  direction = "left",
}) => {
  return (
    <Marquee
      speed={speed}
      autoFill={true}
      direction={direction}
      className="marquee-text"
    >
      {messages.map((message, index) => (
        <p
          key={index}
          className={
            message === "TRANSFORM" || message === "CONVERT"
              ? "strokeme-text"
              : "non-strokeme-text"
          }
        >
          {message}
        </p>
      ))}
    </Marquee>
  );
};

export default CustomMarquee;
