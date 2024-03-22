"use client";
import React, { useState } from "react";
import { IData } from "@/constants/types";
import InputSearch from "@/components/InputSearch";
import RecipeList from "@/components/RecipeList";
import Loading from "../loading";
import { QueryRecipes, QueryRecipesWithFilter } from "@/api/Recipes";
import LoadMore from "@/components/LoadMore";
import Sidebar from "@/components/SideBar";
import { dietLabels, healthLabels } from "@/constants/constants";

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<IData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //This is a Function For Getting The Data
  const handleSearch = async (searchTerm: string) => {
    try {
      setRecipes(undefined);
      setIsLoading(true);
      const fetchedRecipes: IData = await QueryRecipes(searchTerm);
      setRecipes(fetchedRecipes);
      console.log(fetchedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };
  //This is a Function For Filtering The Data
  const handleFilterWithSearch = async (
    searchTerm: string,
    selectedDietLabels: string[],
    selectedHealthLabels: string[]
  ) => {
    try {
      setRecipes(undefined);
      setIsLoading(true);
      if (selectedDietLabels) {
        console.log(selectedDietLabels);
      }
      const fetchedRecipes: IData = await QueryRecipesWithFilter(
        searchTerm,
        selectedDietLabels,
        selectedHealthLabels
      );
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <InputSearch
        search={searchTerm}
        setSearch={setSearchTerm}
        onSearch={handleSearch}
      />
      <section className="flex min-h-screen flex-col items-start justify-between px-4 pb-5 my-5 ">
        <div className="container mx-auto max-w-[1400px] flex  justify-between items-center md:items-start flex-wrap md:flex-nowrap">
          <Sidebar
            search={searchTerm}
            onSearch={handleFilterWithSearch}
            dietLabels={dietLabels}
            healthLabels={healthLabels}
          />
          {recipes && recipes.hits && recipes.hits.length >= 1 ? (
            <div className="w-full flex  justify-between items-center md:items-start flex-wrap md:flex-nowrap">
              <section className="ms-4 w-full">
                <h1 className="font-bold text-md md:text-md lg:text-xl my-5 border-l-4 border-orange-500 px-4">
                  Recipes List
                </h1>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 md:gap-4 lg:gap-3 xl:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 relative">
                  <RecipeList recipes={recipes.hits} />
                  <LoadMore recipes={recipes} />
                </div>
              </section>
            </div>
          ) : isLoading ? (
            <Loading />
          ) : (
            <div className="w-full flex items-center justify-center h-full  flex-col gap-2 mt-4">
              <p className="lg:text-lg font-bold text-orange-500">
                Try searching for a recipe.
              </p>
              <p className="lg:text-md font-medium text-gray-400">
                Example: Salad
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
