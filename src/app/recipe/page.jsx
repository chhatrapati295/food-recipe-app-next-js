import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function RecipePage(params) {
  const getRecipeData = async () => {
    const url = await fetch("https://dummyjson.com/recipes");
    const data = await url.json();
    console.log(data);
    return data?.recipes;
  };
  const recipeData = await getRecipeData();
  return (
    <div className="flex flex-col gap-4 min-h-screen px-16 py-4">
      <h1 className="text-center font-semibold bg-white text-black p-3">
        Available Recipe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipeData &&
          recipeData?.map((item) => {
            return (
              <Link href={`recipe/${item?.id}`} key={item?.id}>
                <Card className="p-3 rounded-md flex flex-col gap-2">
                  <Image
                    src={item?.image}
                    height={100}
                    width={100}
                    alt="recipe img"
                    className="w-full rounded-md"
                  />
                  <CardHeader className="p-0 font-semibold text-lg mt-4 text-gray-800">
                    {item?.name}
                  </CardHeader>
                  <div className="flex justify-between items-center gap-3 mb-4 text-gray-800">
                    <CardDescription className="flex  text-base items-center">
                      {item?.rating}{" "}
                      <StarIcon
                        className="animate-pulse text-purple-500"
                        height={14}
                      />
                    </CardDescription>
                    <CardDescription className="flex text-xs font-medium gap-2 items-center">
                      {item?.mealType?.join(",")}
                    </CardDescription>
                  </div>
                </Card>
              </Link>
            );
          })}
      </div>
      <div className="flex justify-end">
        <Link
          className="border hover:bg-purple-100 border-purple-400 text-xs rounded-sm text-gray-700 py-1 px-2 font-medium focus:scale-95"
          href="/"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
