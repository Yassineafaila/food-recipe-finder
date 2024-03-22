"use server";
import axios, { AxiosPromise } from "axios";
import { axiosClient } from "./apiClient";
import { IData, Recipe } from "@/constants/types";
export async function QueryRecipes(query: string): Promise<IData> {
  let url = `/recipes/v2?q=${query}`;
  return (await axiosClient())
    .get(url)
    .then((res) => res.data)
    .catch((error) => error);
}
export async function QueryRecipesWithFilter(
  query: string,
  selectedDietLabels: string[],
  selectedHealthLabels: string[]
): Promise<IData> {
  let url = `/recipes/v2?q=${encodeURIComponent(query)}`;
  if (selectedDietLabels?.length > 0) {
    selectedDietLabels.forEach((label) => {
      url += `&diet=${encodeURIComponent(label.toLocaleLowerCase())}`;
    });
  }

  if (selectedHealthLabels?.length > 0) {
    selectedHealthLabels.forEach((label) => {
      url += `&health=${encodeURIComponent(label.toLocaleLowerCase())}`;
    });
  }
  return (await axiosClient())
    .get(url)
    .then((res) => res.data)
    .catch((error) => error);
}
export async function GetRecipe(id: number): Promise<{recipe:Recipe}> {
  return (await axiosClient())
    .get(`/recipes/v2/${id}`)
    .then((res) => res.data)
    .catch((error) => error.catch);
}
