import extractId from "@/helper/Helper";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa6";
import { GoBook } from "react-icons/go";
import { MotionDiv } from "./MotionDiv";
import { IPropsCard } from "@/constants/types";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const RecipeCard: React.FC<IPropsCard> = ({ recipe, index }) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.2, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="rounded overflow-hidden shadow-md  md:w-64 lg:w-72 xl:w-80 h-auto pb-4"
    >
      <div className="img_container w-full h-80 mb-2">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={recipe.label}
          src={recipe.image}
        />
      </div>
      <div className="details px-4 py-1.5">
        <h3 className="lg:text-lg font-bold mb-2 truncate">{recipe.label}</h3>
        <div className="flex items-center justify-between gap-2 my-4">
          <p>
            <span className="flex items-center gap-2">
              <FaRegClock className="text-gray-400 font-medium" />
              <span className="text-orange-500 font-medium">
                {recipe.totalTime}
              </span>
            </span>
            <span className="font-medium">Minutes</span>
          </p>
          <p>
            <span className="flex items-center gap-2">
              <GoBook className="text-gray-400 font-medium" />
              <span className="text-orange-500 font-medium">
                {recipe.ingredients.length}
              </span>
            </span>
            <span className="font-medium">Ingredients</span>
          </p>
          <p>
            <span className="flex items-center gap-2">
              <FaWeightHanging className="text-gray-400 font-medium" />
              <span className="text-orange-500 font-medium">
                {recipe.calories.toFixed(0)}
              </span>
            </span>
            <span className="font-medium">Calories</span>
          </p>
        </div>
        <button
          type="button"
          className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-700 duration-300"
        >
          <Link href={`/recipes/${extractId(recipe.uri)}`}>View Recipe</Link>
        </button>
      </div>
    </MotionDiv>
  );
};

export default RecipeCard;
