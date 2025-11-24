import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="home-container mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="home-title w-[1024px] text-[20px]">Browse by property type</h1>
        <PropertyList/>
      </div>
    </>
  );
};

export default Home;
