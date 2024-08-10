import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-center font-semibold text-4xl">Recipe Next js app</h1>
      <Link className="" href={"/recipe"}>
        <Button className="bg-purple-500">Go to Recipe page</Button>
      </Link>
    </main>
  );
}


{/* <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform"></div> */}