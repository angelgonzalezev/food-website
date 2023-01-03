import React from "react";

const Product = ({ title, price, image, key }) => {
  return (
    <div
      className="rounded-xl relative border shadow-xl hover:scale-105 duration-300"
      key={key}
    >
      <img
        src={image}
        alt="product"
        className="h-[200px] w-full object-cover rounded-t-xl"
      />
      <div className="flex p-2 justify-between items-center bg-white rounded-b-xl">
        <p className="font-bold text-sm">{title}</p>
        <p>
          <span className="text-sm px-2 rounded-full bg-orange-400 text-white">
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
