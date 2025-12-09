import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723888863.jpg?k=9637f7377c040a36a26c6b865d22b143d9cdeef17cd4fa1a59ec1ddfc229b44a&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/769190610.jpg?k=389c0d168b4bfa3213d472a75231e8ca363fbb0833d0f3232632c70e6c729388&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/769191055.jpg?k=1666382c314f1c6465327c33f788238a7244e41634fad899f599d8ab0a7592b0&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/443350911.jpg?k=8dec00b9f9b7f3de1caf62bbc548c02a3c5171b3f37a83247ba8e63e7245ea79&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/619977741.jpg?k=83addfead0855b7a6981cc7584beba3f7104d660cbf709889c604cad295c93b6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723889113.jpg?k=bfa7cb702a38e416bd867dad455818c72c5a722f5088a54a5aaac5b8b184704b&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738729827.jpg?k=9504d2fc505b602bc0615629652c4169bb17923a2c22ebb2703e6bca0648d64d&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885563.jpg?k=17721f4009297d4ec2d0046bcdf36132bf037a2674f3f039962b16c02743fd94&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723889133.jpg?k=bdffe22266a790047ed6558742b0bb0678a604222403fd2ed600d5768e078ff2&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885694.jpg?k=de6045b1b4cbdfb3b47d4073331c315124127a680e8a3875dfb0a0038443fe30&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885783.jpg?k=e1171061410942782d8630861f957983d58bd0b72241341635454d78ca9a7d20&o=",
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1; 
    }
    setSlideNumber(newSlideNumber);
  };


  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="hotel-container w-full max-w-5xl m-auto mt-5">
        {open && (
          <div
            className="slider sticky  top-2.5 z-10 flex justify-between items-center w-full h-screen bg-[rgba(0,0,0,0.9)]"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => handleMove("l")}
              className="text-white p-2.5 text-[30px] cursor-pointer"
            />
            <div className="slider-wrapper max-w-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="slider-image w-[80%] h-[80%]"
              />
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => handleMove("r")}
              className="text-white p-2.5 text-[30px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faX}
              onClick={() => setOpen(false)}
              className="text-white absolute top-5 right-5 p-2.5 text-[30px] cursor-pointer"
            />
          </div>
        )}

        <div className="hotel-wrapper w-full flex flex-col gap-10 relative">
          <button className="book-now absolute top-10 right-0 border-0 p-2.5 bg-[#0071c2] text-white font-bold rounded-[5px]">
            Reserve or book now!
          </button>
          <h2 className="hotel-title text-2xl">Grand Hotel</h2>
          <div className="hotel-address text-[12px] flex items-center gap-2.5">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St125 New York</span>
          </div>

          <span className="hotel-distance text-[#0071c2] font-medium">
            Excellent Location - 500m from center
          </span>

          <span className="hotel-price-highlight">
            Book a stay over $115 at this property and get free airport taxi
          </span>

          <div className="hotel-images flex flex-wrap gap-2 justify-between">
            {photos.map((photo, index) => (
              <div key={photo.src} className="hotel-image-wrapper w-[30%]">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  className="hotel-image w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="hotel-details flex justify-between gap-5 mt-5">
            <div className="hotel-details-text flex-3">
              <h2 className="hotel-title">Stay in the heart of Krakow</h2>
              <p className="hotel-description text-[14px] mt-5">
                Located from a 5 min. walk from St. Florian Gatein Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free wifi. The unit come with hardwood floor and feature a fully
                eqipped kitchenette with a microwave, a flat-screen TV, and a
                private bathroom with a shower and a hairdryer. A fridge is also
                offered as well as an electric tea pot and a coffee machine.
                Popular points of interest near the apartment include Cloth
                Hall, Main Market Square and Town Tower Hall. The nearest
                airport is the John Paul II International Krakow-Balise, 16.1km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotel-details-price flex-1 bg-[#ebf3ff] p-5 flex flex-col gap-5 ">
              <h2 className="font-[18px] text-[#555]">
                Perfect for a 9-night stay!
              </h2>
              <span className="font-[14px]">
                Located in the heart of Krakow, this property has an excellent
                location score of 9.8!
              </span>
              <h3 className="font-light">
                <b>$900</b> (9-nights)
              </h3>
              <button className="border-0 py-2.5 px-5 bg-[#0071c2] text-white font-bold cursor-pointer rounded-[5px]">
                Reserve or book now!
              </button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Hotel

// it is all finished although navigation to the hotels page is manual 
// need to get router well for it to work 
