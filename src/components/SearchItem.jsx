import React from "react";

const SearchItem = () => {
  return (
    <>
      <div className="search-item border border-solid border-[lightgray] p-[10px] rounded-[5px] flex space-between gap-[20px] mb-[20px]">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/780542900.webp?k=907bad45bff33184b30e6b9b957c1621d303e4e3d01fe6441788fc11d96e81dd&o=" alt="" className="si-img w-[200px] h-[200px] object-cover" />
        <div className="si-discription flex flex-col gap-[10px] flex-[2_1_0%]">
            <h2 className="si-title text-[#0071c2]">Tower Street Apartment</h2>
            <span className="si-distance text-[12px]">500m from centre</span>
            <span className="si-taxi-option text-[12px] bg-[#008009] text-white w-[max-content] p-[3px] rounded-[5px]">Free Airport taxi</span>
            <span className="si-subtitle text-[12px] font-bold">Studio Apartment with Air Conditioning</span>
            <span className="si-features text-[12px]">Entire studio · 1 Bathroom · 21m<sup>2</sup> 1 full bed</span>
            <span className="si-cancel-option text-[12px] text-[#008009] font-bold">Free cancellation</span>
            <span className="si-cancel-option-subtitle text-[12px] text-[#008009]">You can cancel later, so lock in this great price today!</span>
        </div>

        <div className="si-details flex  flex-col flex-1 justify-between">
          <div className="si-ratings flex justify-between">
            <span className="font-bold">Excellent</span>
            <button className="bg-[#003580] text-white p-[5px] font-bold border-0">8.9</button>
          </div>

          <div className="si-details-text text-right gap-[5px]">
            <span className="si-price text-[24px] ">$123</span> <br/>
            <span className="si-tax-option text-[12px] text-gray-500">Includes taxes and fees</span> <br/>
            <button className="si-check-btn bg-[#0071c2] text-white font-bold py-[10px] px-[5px] border-0">See Availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
