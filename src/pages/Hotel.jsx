import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723888863.jpg?k=9637f7377c040a36a26c6b865d22b143d9cdeef17cd4fa1a59ec1ddfc229b44a&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/442665930.jpg?k=37348b87e61f9eaf0b66fa16c73b961cae657a63da32c0c4a83c03bbaa9d370&o=",
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
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/443350898.jpg?k=b5fe83611ee70d077dfb698f4138dec4a970687278843739d0f4bd14d7a4737&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/619977741.jpg?k=83addfead0855b7a6981cc7584beba3f7104d660cbf709889c604cad295c93b6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723889113.jpg?k=bfa7cb702a38e416bd867dad455818c72c5a722f5088a54a5aaac5b8b184704b&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738729827.jpg?k=9504d2fc505b602bc0615629652c4169bb17923a2c22ebb2703e6bca0648d64d&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885563.jpg?k=17721f4009297d4ec2d0046bcdf36132bf037a2674f3f039962b16c02743fd94&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723889133.jpg?k=bdffe22266a790047ed6558742b0bb0678a604222403fd2ed600d5768e078ff2&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885694.jpg?k=de6045b1b4cbdfb3b47d4073331c315124127a680e8a3875dfb0a0038443fe30&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723885783.jpg?k=e1171061410942782d8630861f957983d58bd0b72241341635454d78ca9a7d20&o="
    },
  ];

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="hotel-container w-full max-w-[1024px] m-auto mt-[20px]">
        <div className="hotel-wrapper w-full flex flex-col gap-10">
          <h2 className="hotel-title text-2xl">Grand Hotel</h2>
          <div className="hotel-address text-[12px] flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St125 New York</span>
          </div>

          <span className="hotel-distance">
            Excellent Location - 500m from center
          </span>

          <span className="hotel-price-highlight">
            Book a stay over $115 at this property and get free airport taxi
          </span>

          <div className="hotel-images">
            {photos.map((photo) => (
              <div className="hotel-image-wrapper ">
                <img src={photo.src} className="hotel-image w-[250px] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
