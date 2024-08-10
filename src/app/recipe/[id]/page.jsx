import { ArrowBigRight, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeDetailPage(params) {
  const id = params?.params?.id;
  console.log(id);
  const getRecipeDetail = async () => {
    const url = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await url.json();
    console.log(data);
    return data;
  };
  const recipeData = await getRecipeDetail();
  return (
    <main className="flex flex-col p-6 md:p-12 m-0 md:m-12 gap-4 bg-gray-50 rounded-md">
      <Image
        src={recipeData?.image}
        height={100}
        width={100}
        alt="recipe img"
        className="h-auto w-full sm:w-[100px] lg:w-[200px] rounded-md"
      />
      <>
        <h1 className="text-3xl font-medium flex gap-2 items-end">
          {recipeData?.name}{" "}
        </h1>
        <span className="flex gap-1 items-center text-sm underline text-nowrap text-gray-500">
          <StarIcon className="animate-pulse text-purple-500" height={14} />
          {recipeData?.rating + " rating"}{" "}
        </span>
      </>

      <div className="text-gray-500 flex-col lg:flex lg:flex-row gap-1 items-start">
        <h3 className="font-semibold min-w-36 flex gap-2 items-center">
          Cuisine <ArrowBigRight height={24} width={24} className="w-6 h-6" />{" "}
        </h3>{" "}
        <p className="text-gray-500">{recipeData?.cuisine}</p>
      </div>
      <div className="text-gray-500 flex-col lg:flex lg:flex-row gap-1 items-start">
        <h3 className="font-semibold min-w-36 flex gap-2 items-center">
          Tags <ArrowBigRight height={24} width={24} className="w-6 h-6" />{" "}
        </h3>{" "}
        <p className="text-gray-500">{recipeData?.tags?.join(",")}</p>
      </div>

      <div className="text-gray-500 flex-col lg:flex lg:flex-row gap-1 items-start">
        <h3 className="font-semibold min-w-36 flex gap-2 items-center">
          Ingredients{" "}
          <ArrowBigRight height={24} width={24} className="w-6 h-6" />{" "}
        </h3>{" "}
        <p className="text-gray-500">{recipeData?.ingredients?.join(", ")}</p>
      </div>

      <div className="text-gray-500 flex-col lg:flex lg:flex-row items-start gap-1">
        <h3 className="font-semibold min-w-36 flex gap-2 items-center">
          Instructions{" "}
          <ArrowBigRight height={24} width={24} className="w-6 h-6" />{" "}
        </h3>{" "}
        <div className="text-gray-500">
          <ol className="list-decimal ml-5">
            {recipeData?.instructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex justify-end">
      <Link className="border hover:bg-purple-100 border-purple-400 text-xs rounded-sm text-purple-500 py-1 px-2 font-medium focus:scale-95" href="/recipe">Go to Recipe Page</Link>
      </div>
    </main>
  );
}
