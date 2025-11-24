const Featured = () => {
  return (
    <>
      <div
        className="featured w-full max-w-[1024px] flex justify-evenly gap-[0px] 
       [&>div]:rounded-[10px] [&>div]:overflow-hidden 
       [&>div>img]:w-full [&>div>img]:object-cover [&>div>img]:h-[300px]
       [&>div>div]:px-[10px] [&>div>div]:py-[5px]"
      >
        <div className="featured-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square400/110392005.jpg?k=eae7188250743a058893bab1f5fdfc08ab98f82769249f224f40e3fd9122fb3e&o="
            alt=""
            className="featured-image "
          />
          <div className="featured-titles">
            <h2>Burundi</h2>
            <h3>123 properties</h3>
          </div>
        </div>

        <div className="featured-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square400/633830465.jpg?k=574cbc916bef38f7e069a4cd88efd4c90e55b8bb2c3c9bad50d7415c431a20bb&o="
            alt=""
            className="featured-image "
          />
          <div className="featured-titles">
            <h2>Egypt</h2>
            <h3>124 properties</h3>
          </div>
        </div>

        <div className="featured-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square400/316841076.jpg?k=0f530d0b8c8ab8af9be7564c816c50d4ed516143c3b46bea55f2f5657fc23675&o="
            alt=""
            className="featured-image "
          />
          <div className="featured-titles">
            <h2>Morocco</h2>
            <h3>125 properties</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
