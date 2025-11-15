import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faHotel,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header bg-nav-bg text-white flex justify-center ">
        <div className="header-container w-full max-w-[1024px] mx-0 mt-[20px] mb-[100px]">
          <div className="header-list flex gap-[40px] mb-[50px]">
            <div className="header-list-item flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="header-list-item flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="header-list-item flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentsls</span>
            </div>

            <div className="header-list-item flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>

            <div className="header-list-item flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>

          <h1 className="header-title text-4xl font-bold">A lifetime of discounts? It's Genius.</h1>
          <p className="header-description my-[20px] mx-0 ">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Bookings account
          </p>
          <button className="header-button border-none py-[5px] px-[10px] text-white bg-[#0071c2] font-500">Sign In/Register</button>

          <div className="header-search h-[30px] bg-white border-[3px] border-yellow-500 outline-none flex items-center justify-around text-gray-900 ">
            <div className="header-search-item ">
                <FontAwesomeIcon icon={faHotel} className="header-icon"/>
                <input type="text" placeholder="Where are you going?" className="header-search-input" />
            </div>
            
            <div className="header-search-item">
                <FontAwesomeIcon icon={faCalendar} className="header-icon"/>
                <span className="header-search-text">date to date</span>
            </div>

            <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon"/>
                <span className="header-search-text">2 adults 2 children 1 room </span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
