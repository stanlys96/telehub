import Image from "next/image";
import { useRouter } from "next/router";

export const BotComponent = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/bot")}
      className="hover:bg-[#F1FCFE] bg-white transition duration-250 rounded-[16px] border border-[#FFFFFF] cursor-pointer hover:border-[#28B9E8]"
    >
      <div className="md:hidden flex justify-center items-center bg-[#9EE7FF] rounded-t-[16px] py-3">
        <Image width={102} height={102} alt="img" src="/img/example.png" />
      </div>
      <div className="rounded-b-[16px] md:rounded-[16px] px-[26px] py-[24px] flex gap-x-2 md:flex-row flex-col justify-between">
        <Image
          width={102}
          height={102}
          alt="img"
          className="hidden md:block"
          src="/img/example.png"
        />
        <div className="flex flex-col gap-y-2 justify-center">
          <p className="font-semibold">Bot title</p>
          <p>Chain, XXX members</p>
          <a className="px-[19px] py-[8px] justify-center rounded-[39px] border-[#28B9E8] border-[1px] flex gap-x-2 cursor-pointer">
            <Image width={24} height={24} alt="download" src="/img/plus.svg" />
            <span className="font-bold  text-[16px] text-[#28B9E8]">
              Add Bot
            </span>
          </a>
        </div>
        <div className="flex flex-row justify-between md:mt-0 mt-5 md:flex-col items-end gap-y-2">
          <div className="rounded-[8px] w-fit  bg-[#CDFCFF] px-[16px] py-[10px] h-fit text-[#11787F] font-semibold">
            Gamefi
          </div>
          <div className="flex gap-x-2 items-center">
            <div>
              <p className="text-[#D88C0D] text-right">Rated</p>
              <p className="text-[#D88C0D] text-[10px] text-right">120 views</p>
            </div>
            <div className="bg-[#FFFACD] px-[16px] py-[10px] font-semibold text-[#D88C0D] rounded-[8px] h-fit">
              98%
            </div>
          </div>
        </div>
        <hr className="block md:hidden my-5" />
        <p className="block md:hidden">Bot short description</p>
      </div>
    </div>
  );
};
