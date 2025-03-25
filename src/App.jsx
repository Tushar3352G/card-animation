import { motion } from "framer-motion";
import React, { useState } from "react";

const App = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      text: "Salience Labs",
    },
    {
      id: 2,
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      text: "Next Gen Tech",
    },
    {
      id: 3,
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      text: "Future Vision",
    },
    {
      id: 4,
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      text: "AI Innovation",
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    cards.map(() => ({ isHovering: false }))
  );

  const handleHover = (index, value) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = { isHovering: value };
      return newState;
    });
  };

  return (
    <div className="w-full bg-zinc-800 min-h-screen">
      <div className="w-[90%] grid grid-cols-2 gap-8 mx-auto pt-20">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="group relative"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <div className="w-full h-full group-hover:scale-98 duration-700 rounded overflow-hidden">
              <img
                className="w-full h-full group-hover:scale-110 object-cover duration-500"
                src={card.image}
                alt=""
              />
            </div>

            <h3
              style={{ zIndex: index + 1 }}
              className={`absolute text-white pointer-events-none font-bold text-nowrap text-[8vw] ${
                index % 2 === 0
                  ? "left-full -translate-x-1/2"
                  : "right-full translate-x-1/2"
              } -translate-y-1/2 top-1/2`}
            >
              <div className="w-full overflow-hidden">
                {card.text.split("").map((char, ind) => (
                  <motion.span
                    key={ind}
                    className="inline-block"
                    initial={{ y: 150 }}
                    animate={{ y: hoverStates[index].isHovering ? 0 : 150 }}
                    transition={{ duration: 0.3, delay: (ind + 1) * 0.020 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
