import { CategoryComponent } from "@/src/components/CategoryComponent";
import { MainLayout } from "@/src/layouts/MainLayout";
import { fetcherStrapi } from "@/utils/axios";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data: categoriesData } = useSWR(
    `/api/categories?populate=deep,10`,
    fetcherStrapi
  );
  const categoriesResult = categoriesData?.data?.data;

  return (
    <MainLayout>
      <div className="h-[512px] p-[16px] w-full hero flex justify-center items-center flex-col">
        <p className="text-[32px] md:text-[64px] font-bold text-center">
          Discover top-tier Telegram bots
        </p>
        <p className="text-[24px] md:text-[40px] md:mt-0 mt-4 font-bold text-center font-extralight">
          Number one telegram directory for your needs
        </p>
        <div className="bg-white rounded-[55px] px-[30px] flex justify-between py-[18px] w-[90vw] md:w-[70vw] mt-[50px]">
          <div className="flex gap-x-2 items-center flex-1">
            <Image width={24} height={24} alt="search" src="/img/Search.svg" />
            <input
              type="text"
              placeholder="Search Bot"
              className="outline-none w-full"
            />
          </div>
          <div className="flex gap-x-2 cursor-pointer">
            <div className="h-full w-[1px] bg-black mr-3" />
            <p>All Category</p>
            <Image
              width={24}
              height={24}
              alt="search"
              src="/img/chevron-down.svg"
            />
          </div>
        </div>
      </div>
      {categoriesResult?.map((data: any, idx: number) => (
        <CategoryComponent attributes={data?.attributes} />
      ))}
    </MainLayout>
  );
}
