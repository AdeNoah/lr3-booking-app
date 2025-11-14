const NavBar = () => {
  return (
    <>
      <div className="navbar h-[50px] bg-[#003580] flex justify-center ">
        <div className="nav-container w-full max-w-[1024px] text-white flex items-center justify-between">
          <span className="logo font-bold ">Bookings</span>
          <div className="nav-items">
            <button className="nav-button ml-[20px] border-none py-[5px] px-[10px] bg-white text-[#003580]">Register</button>
            <button className="nav-button ml-[20px] border-none py-[5px] px-[10px] bg-white text-[#003580]">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
