const PropertyList = () => {
  return (
    <>
      <div
        className="p-list w-full max-w-[1024px] flex justify-between gap-[20px]
      [&>div]:rounded-[10px] [&>div]:overflow-hidden [&>div]:cursor-pointer
      [&>div>img]:w-full [&>div>img]:h-[150px] [&>div>img]:object-cover"
      >
        <div className="p-list-item">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
            alt=""
            className="p-list-img"
          />
          <div className="p-list-titles">
            <h4>Hotels</h4>
            <h6>213 hotels</h6>
          </div>
        </div>

        <div className="p-list-item">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
            alt=""
            className="p-list-img"
          />
          <div className="p-list-titles">
            <h4>Apartments</h4>
            <h6>214 apaerments</h6>
          </div>
        </div>

        <div className="p-list-item">
          <img
            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
            alt=""
            className="p-list-img"
          />
          <div className="p-list-titles">
            <h4>Resorts</h4>
            <h6>215 resorts</h6>
          </div>
        </div>

        <div className="p-list-item">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
            alt=""
            className="p-list-img"
          />
          <div className="p-list-titles">
            <h4>Villas</h4>
            <h6>216 villas</h6>
          </div>
        </div>

        <div className="p-list-item">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o="
            alt=""
            className="p-list-img"
          />
          <div className="p-list-titles">
            <h4>Cabins</h4>
            <h6>217 cabins</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
