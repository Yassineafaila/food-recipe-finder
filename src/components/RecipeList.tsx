import React from "react";
import RecipeCard from "./RecipeCard";
import { IProps } from "@/constants/types";

const RecipeList: React.FC<{ recipes: IProps[] }> = ({ recipes }) => {
  return (
    <>
      {recipes?.map((item, index) => (
        <RecipeCard key={index} recipe={item.recipe} index={index} />
      ))}
    </>
  );
};

export default RecipeList;
