const FeaturedProperties = () => {
  return (
    <>
      <div className="fp w-full max-w-[1024px] flex justify-between gap-[20px]
      [&>div]:flex [&>div]:flex-1 [&>div]:flex-col
      [&>div>img]:w-full
      [&>div>.fp-name]:font-semibold [&>div>.fp-city]:font-light [&>div>.fp-price]:font-meduim
      [&>div>div>button]:bg-[#003580] [&>div>div>button]:text-white [&>div>div>button]:p-[3px] [&>div>div>button]:mr-[10px] [&>div>div>button]:font-bold">
        <div className="fp-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
            alt=""
            className="fp-image"
          />
          <span className="fp-name">Aparthotel stare Miastro</span>
          <span className="fp-city">Krakow</span>
          <span className="fp-price">Starts from $120</span>
          <div className="fp-rating">
            <button>8.8</button>
            <span>Fabulous</span>
          </div>
        </div>
        
        <div className="fp-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o="
            alt=""
            className="fp-image"
          />
          <span className="fp-name">Leman Locke</span>
          <span className="fp-city">London</span>
          <span className="fp-price">Starts from $300</span>
          <div className="fp-rating">
            <button>8.5</button>
            <span>Very Good</span>
          </div>
        </div>

        <div className="fp-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
            alt=""
            className="fp-image"
          />
          <span className="fp-name">Oriente Palace Apartments</span>
          <span className="fp-city">Madrid</span>
          <span className="fp-price">Starts from $200</span>
          <div className="fp-rating">
            <button>8.9</button>
            <span>Fabulous</span>
          </div>
        </div>

        <div className="fp-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
            alt=""
            className="fp-image"
          />
          <span className="fp-name">Villa Domina</span>
          <span className="fp-city">Split</span>
          <span className="fp-price">Starts from $50</span>
          <div className="fp-rating">
            <button>9.3</button>
            <span>Superb</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default FeaturedProperties;
