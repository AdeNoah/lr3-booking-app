import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="home-container mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
        <h2 className="home-title w-[1024px]">Browse by property type</h2>
        <PropertyList/>
        <h2 className="home-title w-[1024px]">Homes guests love</h2>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
