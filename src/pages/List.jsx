import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestinition] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="list-container w-full flex justify-center mt-[20px]">
        <div className="list-wrapper max-w-[1024px] flex gap-[20px] justify-between">

          {/* the search section card thing */}
          <div
            className="list-search flex-1 bg-[#febb02] p-[10px] rounded-[10px] sticky top-[10px] h-fit
          [&>div]:flex [&>div]:flex-col [&>div]:gap-[5px] [&>*]:py-[5px]
          [&>div>label]:text-[12px]"
          >
            <h2 className="ls-title text-[#555]">Search</h2>
            <div className="ls-item">
              <label>
                Destination
                <input
                  type="text"
                  placeholder={destination}
                  className="bg-white outline-none border-0 px-[5px]"
                />
              </label>
            </div>

            {/* the seaarch section date picker */}
            <div className="ls-item [&>label>span]:h-[30px] [&>label>span]:p-[5px] [&>label>span]:bg-white [&>label>span]:items-center [&>label>span]:cursor-pointer">
              <label>
                Check-In date <br/>
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </label>
            </div>

            {/* the search section items */}
            <div>Options</div>
            <div className="ls-item p-[10px]
            [&>label]:flex [&>label]:justify-between [&>label]:items-center
            [&>label>input]:bg-white [&>label>input]:p-[3px] [&>label>input]:w-[40px]">
              <label htmlFor="">
                  <span className="isOptionText">
                    Min price <small> (per night)</small>
                  </span>
                  <input type="number" />
              </label>
              
              <label htmlFor="">
                  <span className="isOptionText">
                    Max price <small> (per night)</small>
                  </span>
                  <input type="number" />
              </label>
              
              <label htmlFor="">
                  <span className="isOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} />
              </label>
              
              <label htmlFor="">
                  <span className="isOptionText">
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} />
              </label>

              <label htmlFor="">
                  <span className="isOptionText">
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} />
              </label>
            </div>
            
            <button className="bg-[#0071c2] p-[10px] text-white border-0 w-full rounded-[5px] cursor-pointer">Search</button>
          </div>

          {/* the search results card thing */}
          <div className="list-results flex-3 w-full">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
