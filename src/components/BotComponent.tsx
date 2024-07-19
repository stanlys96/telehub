import Image from "next/image";

export const BotComponent = () => {
  return (
    <div className="rounded-[16px] px-[26px] py-[24px] bg-white flex gap-x-2 justify-between">
      <Image width={102} height={102} alt="img" src="/img/example.png" />
      <div className="flex flex-col gap-y-2 justify-center">
        <p className="font-semibold">Bot title</p>
        <p>Chain, XXX members</p>
        <a className="px-[19px] py-[8px] rounded-[39px] border-[#28B9E8] border-[1px] flex gap-x-2 cursor-pointer">
          <Image width={24} height={24} alt="download" src="/img/plus.svg" />
          <span className="font-bold text-[16px] text-[#28B9E8]">Add Bot</span>
        </a>
      </div>
      <div className="flex flex-col items-end gap-y-2">
        <div className="rounded-[8px] w-fit  bg-[#CDFCFF] px-[16px] py-[10px] h-fit text-[#11787F] font-semibold">
          Gamefi
        </div>
        <div className="flex gap-x-2">
          <div>
            <p className="text-[#D88C0D] text-right">Rated</p>
            <p className="text-[#D88C0D] text-[10px] text-right">120 views</p>
          </div>
          <div className="bg-[#FFFACD] px-[16px] py-[10px] font-semibold text-[#D88C0D] rounded-[8px] h-fit">
            98%
          </div>
        </div>
      </div>
    </div>
  );
};
