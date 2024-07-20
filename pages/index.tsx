import { BotComponent } from "@/src/components/BotComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="px-[10px] md:px-[150px] py-[32px] flex justify-between">
        <Image
          width={197}
          height={40}
          className="w-[150px] md:w-[197px]"
          alt="telehub"
          src="/img/logo.svg"
        />
        <a className="rounded-[30px] cursor-pointer px-[27px] py-[10px] bg-[#28B9E8] flex items-center gap-x-2">
          <Image
            width={24}
            height={24}
            alt="download"
            src="/img/file-download.svg"
          />
          <span className="text-white">Submit Bot</span>
        </a>
      </div>
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
      <div className="p-[16px] md:p-[32px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div className="h-[50px] w-[9px] bg-[#28B9E8]" />
            <p className="text-[18px] md:text-[40px]">Top Trending</p>
          </div>
          <a className="rounded-[30px] cursor-pointer h-fit px-[19px] py-[12px] bg-[#28B9E8] flex items-center gap-x-1">
            <span className="text-white text-[12px] md:text-[16px]">
              View All Bots
            </span>
            <Image
              width={24}
              height={24}
              alt="download"
              src="/img/chevron-right.svg"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
        <div className="grid md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
      </div>
      <div className="p-[16px] md:p-[32px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div className="h-[50px] w-[9px] bg-[#28B9E8]" />
            <p className="text-[16px] md:text-[40px]">Top bot per category</p>
          </div>
          <a className="rounded-[30px] cursor-pointer h-fit px-[19px] py-[12px] bg-[#28B9E8] flex items-center gap-x-1">
            <span className="text-white text-[12px] md:text-[16px]">
              View All Bots
            </span>
            <Image
              width={24}
              height={24}
              alt="download"
              src="/img/chevron-right.svg"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
        <div className="grid md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
      </div>
      <div className="p-[16px] md:p-[32px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div className="h-[50px] w-[9px] bg-[#28B9E8]" />
            <p className="text-[16px] md:text-[40px]">Recently Added</p>
          </div>
          <a className="rounded-[30px] cursor-pointer h-fit px-[19px] py-[12px] bg-[#28B9E8] flex items-center gap-x-1">
            <span className="text-white text-[12px] md:text-[16px]">
              View All Bots
            </span>
            <Image
              width={24}
              height={24}
              alt="download"
              src="/img/chevron-right.svg"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
        <div className="grid md:grid-cols-3 gap-[16px] mt-[16px]">
          <BotComponent />
          <BotComponent />
          <BotComponent />
        </div>
      </div>
      <div className="py-[75px] bg-white border-[#D6D6D6] border-t flex flex-col justify-center items-center gap-y-4">
        <Image width={135} height={140} alt="download" src="/img/telehub.svg" />
        <p>tagline here</p>
        <Image width={36} height={36} alt="download" src="/img/telegram.svg" />
        <p className="font-semibold">&copy; 2024 telehub.bot</p>
      </div>
    </main>
  );
}
