import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { GetRecipe } from "@/api/Recipes";
const recipes = async ({ params }: { params: { recipeId: number } }) => {
  const data = await GetRecipe(params.recipeId);

  return (
    <section className="flex min-h-screen flex-col items-start justify-between px-4 my-5 ">
      {data ? (
        <div className="container mx-auto max-w-[1400px]">
          <Link
            href="/recipes"
            className="text-gray-400 my-4 font-medium hover:text-orange-500"
          >
            Back
          </Link>
          <h1 className="font-bold text-md md:text-md lg:text-xl my-5 border-l-4 border-orange-500 px-4">
            Recipe Details For{" "}
            <span className="text-gray-400">{data.recipe.label}</span>
          </h1>
          <div className="details py-4 px-4 rounded overflow-hidden border-2 border-orange-400 ">
            <div className="header flex lg:gap-4 flex-col md:flex-row gap-2">
              <div className="img_container">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt={data.recipe.label}
                  src={data.recipe.image}
                />
              </div>
              <div>
                <p className="font-medium">
                  <span className="text-lg">Source</span>:{" "}
                  <span className="text-gray-400 text-md ms-4">
                    {data.recipe.source}
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">See Full Recipe On</span>:{" "}
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    <Link
                      href={data.recipe.url}
                      target="_blank"
                      className="underline"
                    >
                      See
                    </Link>
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Cuisine :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.cuisineType}
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Meal Type :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.mealType}
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Dish Type :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.dishType}
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Total Time :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.totalTime} minutes
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Calories :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.calories.toFixed(0)} cal
                  </span>
                </p>
                <p className="font-medium">
                  <span className="text-lg">Total Weight: :</span>
                  <span className="text-gray-400 text-md ms-4 capitalize">
                    {data.recipe.totalWeight.toFixed(0)} g
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-4 font-medium">
                  Share Via :
                  <p>
                    <Link
                      href={`https://facebook.com/sharer/sharer.php?u=${data.recipe.shareAs}`}
                      target="_blank"
                    >
                      <FaFacebookSquare className="text-2xl text-blue-500 bg-white" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      href={`https://twitter.com/share?url=${data.recipe.shareAs}`}
                      target="_blank"
                    >
                      <FaSquareXTwitter className="text-2xl text-black bg-white" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      href={`https://web.whatsapp.com/send?text=${data.recipe.shareAs}`}
                      target="_blank"
                    >
                      <FaWhatsappSquare className="text-2xl text-green-500 bg-white" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      href={`https://www.pinterest.com/pin/create/button/?url=${data.recipe.shareAs}`}
                      target="_blank"
                    >
                      <FaPinterest className="text-2xl text-red-500" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="body mt-2 py-4 px-2 ">
              <div>
                <h5 className="font-semibold bg-orange-500 text-white rounded py-1.5 px-2">
                  <span className="me-2">
                    {data.recipe.ingredientLines?.length}
                  </span>
                  Ingredients
                </h5>
                <ul className="px-4 my-5 list-disc">
                  {data.recipe.ingredientLines?.map(
                    (item: string, index: number) => (
                      <li key={index} className="font-medium my-2">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold bg-orange-500 text-white rounded py-1.5 px-2">
                  Ingredients On Details
                </h5>
                <div className="flex  flex-col gap-4 py-4">
                  {data.recipe.ingredients?.map((item, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-4 flex-col md:flex-row"
                      >
                        <div className="img_container ">
                          <Image
                            src={item.image}
                            alt={item.text}
                            width={0}
                            sizes="100vw"
                            height={0}
                            className="rounded"
                            style={{ width: "176px", height: "176px" }}
                          />
                        </div>
                        <div className="details flex flex-col gap-2">
                          <p>
                            <span className="font-medium ">Text :</span>
                            <span className="text-gray-400 mx-2 capitalize">
                              {item.text}
                            </span>
                          </p>
                          <p>
                            <span className="font-medium ">Quantity:</span>
                            <span className="text-gray-400 mx-2 capitalize">
                              {item.quantity}
                            </span>
                          </p>
                          <p>
                            <span className="font-medium ">Measure :</span>
                            <span className="text-gray-400 mx-2 capitalize">
                              {item.measure}
                            </span>
                          </p>
                          <p>
                            <span className="font-medium ">Element :</span>
                            <span className="text-gray-400 mx-2 capitalize">
                              {item.food}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto max-w-[1400px] flex items-center justify-center flex-col">
          <h2 className="text-orange-400 text-2xl font-bold">Sorry :C</h2>
          <p className="text-gray-400 font-medium">No Data For This Recipe</p>
        </div>
      )}
    </section>
  );
};

export default recipes;
