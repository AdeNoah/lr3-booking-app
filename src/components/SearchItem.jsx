import React from "react";

const SearchItem = () => {
  return (
    <>
      <div className="search-item border border-solid border-[lightgray] p-[10px] rounded-[5px] flex space-between gap-[20px] mb-[20px]">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/780542900.webp?k=907bad45bff33184b30e6b9b957c1621d303e4e3d01fe6441788fc11d96e81dd&o=" alt="" className="si-img w-[200px] h-[200px] object-cover" />
        <div className="si-discription">
            <h2 className="si-title">Tower Street Apartment</h2>
            <span className="si-distance">500m from centre</span>
            <span className="si-taxi-option">Free Airport taxi</span>
            <span className="si-subtitle">Studio Apartment with Air Conditioning</span>
            <span className="si-features">Entire studio · 1 Bathroom · 21m<sup>2</sup> 1 full bed</span>
            <span className="si-cancel-option">Free cancellation</span>
            <span className="si-cancel-option-subtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="si-details">details</div>
      </div>
    </>
  );
};

export default SearchItem;
