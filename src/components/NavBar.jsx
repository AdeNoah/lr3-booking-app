const NavBar = () => {
  return (
    <>
      <div className="navbar h-[50px] bg-nav-bg flex justify-center ">
        <div className="nav-container w-full max-w-5xl text-white flex items-center justify-between">
          <span className="logo font-bold ">Bookings</span>
          <div className="nav-items">
            <button className="nav-button ml-5 border-none py-[5px] px-2.5 bg-white text-nav-bg">Register</button>
            <button className="nav-button ml-5 border-none py-[5px] px-2.5 bg-white text-nav-bg">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
