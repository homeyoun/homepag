import React from "react";

const ConterLogo = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="grid grid-cols-3 w-4/6 ">
        <div className="flex content-center">
          <div className="text-3xl self-center">📦</div>
          <div className="self-center ml-2">
            <div className="font-bold text-gray-700">당일 2~3시간 배송</div>
            <div className="text-xs text-gray-500">전국 전지역 어디서나</div>
          </div>
        </div>
        <div className="place-self-center text-center">
          <div className="text-4xl font-bold tracking-wider">귀목 플라워</div>
          <div className="text-xs tracking-wider mt-2">@GWIMOK-FLOWER</div>
        </div>
        <div className="text-right grid grid-cols-5 gap-3">
          <div className=" col-span-4 text-xs grid place-items-end">
            <select className="w-32 h-7 border">
              <option value="">-- 종류별 --</option>
              <option value="FlowerBasket">꽃바구니</option>
              <option value="Bouquet">꽃다발</option>
              <option value="LargeFlowerBouquet">대형꽃다발</option>
              <option value="Houseplant">관엽화분</option>
              <option value="EastAndWest">동서양난</option>
              <option value="CongratulationWreath">축하화환</option>
              <option value="GeunjoWreath">근조화환</option>
              <option value="AirPurificationPlant">공기정화식물</option>
            </select>
            <select className="w-32 h-7 border">
              <option value="">-- 가격별 --</option>
              <option value="50won">50,000 이하</option>
              <option value="70won">50,000 - 70,000원</option>
              <option value="100won">70,000 - 100,000원</option>
              <option value="130won">100,000 - 150,000원</option>
              <option value="150won">150,000원 이상</option>
            </select>
          </div>
          <div className="grid-cols-1 grid place-content-center">
            <button className=" w-14 h-8 bg-red-600 text-white text-xs font-normal">
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConterLogo;
