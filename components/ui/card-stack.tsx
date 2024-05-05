"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 8000);
  };

  return (
    <div className="relative w-60 md:w-96">
      <h2 className="text-center kigaliHackswhy">
					Why you should join.
						</h2>
						<div className="text-center joinUs py-2">
						{"Why Get Involved? The reason why you shouldn't miss this."}
					</div>
          
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-black w-60 top-[100px]  md:w-96 rounded-3xl p-4 shadow-xl borderborder-white/[0.1]  shadow-black/[0.1] shadow-white/[0.05]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-200">
              {card.content}
            </div>
         
          </motion.div>
        );
      })}
    </div>
  );
};
