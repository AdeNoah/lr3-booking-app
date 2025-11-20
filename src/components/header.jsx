import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, SetOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="header bg-nav-bg text-white flex justify-center ">
        <div className="header-container w-full max-w-[1024px] mx-0 mt-[20px] mb-[100px] relative">
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

          <h1 className="header-title text-4xl font-bold">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="header-description my-[20px] mx-0 ">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Bookings account
          </p>
          <button className="header-button border-none py-[5px] px-[10px] text-white bg-[#0071c2] font-500">
            Sign In/Register
          </button>

          <div className="header-search w-full max-w-[1024px] h-[30px] bg-white border-[3px] border-yellow-500 outline-none flex items-center justify-around text-gray-400 '' py-[30px] px-[0] rounded-[5px] absolute bottom-[-130px] *:flex *:items-center *:gap-[10px]">
            <div className="header-search-item ">
              <FontAwesomeIcon icon={faHotel} className="header-icon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="header-search-input border-0 outline-none"
              />
            </div>

            <div className="header-search-item relative">
              <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="header-search-text cursor-pointer"
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date absolute top-[45px]"
                />
              )}
            </div>

            <div className="header-search-item relative">
              <FontAwesomeIcon icon={faPerson} className="header-icon" />
              <span onClick={() => SetOpenOptions(!openOptions)} className="header-search-text cursor-pointer">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

              {openOptions && <div className="options absolute top-[45px] bg-white rounded-[5px] p-4 [box-shadow:5px_5px_10px_-5px_rgba(0,0,0,0.3)] [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div>div]:flex [&>div]:gap-4 [&>div>div]:gap-4 [&>div>div]:py-1  [&>div>div>button]:border [&>div>div>button]:px-2">
                <div className="option-item">
                  <span className="option-text">Adult</span>
                  <div className="counter">
                    <button
                      disabled={options.adult <= 1}
                      className="option-counter-btn"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="option-counter-num">{options.adult}</span>
                    <button
                      className="option-counter-btn"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="option-item">
                  <span className="option-text">Children</span>
                  <div className="counter">
                    <button
                      disabled={options.children <= 0}
                      className="option-counter-btn"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="option-counter-num">
                      {options.children}
                    </span>
                    <button
                      className="option-counter-btn"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="option-item">
                  <span className="option-text">Rooms</span>
                  <div className="counter">
                    <button
                      disabled={options.room <= 1}
                      className="option-counter-btn"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="option-counter-num">{options.room}</span>
                    <button
                      className="option-counter-btn"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>}
            </div>

            <div className="header-search-item ">
              <button className="py-[10px] px-[20px] border-none bg-nav-bg text-white font-500 rounded-[5px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
