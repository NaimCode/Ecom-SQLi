/* eslint-disable @next/next/no-img-element */
import { useCardStore } from "@/state/card";
import { getImagesUrl } from "@/utils";
import { useState } from "react";

function Card() {
  const {card,removeItem}= useCardStore((state) => state);
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShow(true);
        }}
        className="fixed top-4 right-4 bg-black flex flex-row items-center justify-center p-2 rounded-full gap-2 scale-100 transition-all cursor-pointer hover:scale-95"
      >
        <div className="bg-white  w-4 h-4 rounded-full p-1 text-xs flex items-center justify-center">
          {card.length}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="17"
          height="17"
          className="fill-current text-white"
          viewBox="0 0 50 50"
        >
          <path d="M 25 1 C 19.464844 1 15 5.464844 15 11 L 15 13 L 7.09375 13 L 7 13.875 L 3 48.875 L 2.875 50 L 47.125 50 L 47 48.875 L 43 13.875 L 42.90625 13 L 35 13 L 35 11 C 35 5.464844 30.535156 1 25 1 Z M 25 3 C 29.464844 3 33 6.535156 33 11 L 33 13 L 17 13 L 17 11 C 17 6.535156 20.535156 3 25 3 Z M 8.90625 15 L 15 15 L 15 17.28125 C 14.402344 17.628906 14 18.261719 14 19 C 14 20.105469 14.894531 21 16 21 C 17.105469 21 18 20.105469 18 19 C 18 18.261719 17.597656 17.628906 17 17.28125 L 17 15 L 33 15 L 33 17.28125 C 32.402344 17.628906 32 18.261719 32 19 C 32 20.105469 32.894531 21 34 21 C 35.105469 21 36 20.105469 36 19 C 36 18.261719 35.597656 17.628906 35 17.28125 L 35 15 L 41.09375 15 L 44.875 48 L 5.125 48 Z"></path>
        </svg>
      </div>
      
      {show && (
        <div className="fixed h-screen w-screen top-0 right-0 flex flex-row items-stretch z-[1000]">
          <div
            onClick={() => {
              setShow(false);
            }}
            className="flex-grow bg-black/30"
          ></div>
          <div className="bg-white w-[400px]">
            <div className="bg-green-200 w-full">

            </div>
            <div className="flex flex-col items-stretch">
              {
                card.length===0 &&  <span className="text-red-200 text-lg p-3">Empty Card !!!</span>

              }
              {card.map((item,i) => (
              <div key={i} className=" p-3 border-b flex flex-row gap-5">
               <img src={getImagesUrl(item.product.images)[0]} alt={item.product.title} className="w-[90px] h-[100px]"/>
               <div>
                <h2>
                 {item.product.title}
                </h2>
                <p>
                size: <span className="text-green-800"> {item.size}</span>
                </p>
                <p>
                 quantity: <span className="text-green-800"> {item.quantity}</span>
                </p>
                <button
                  onClick={() => {
                            
                    
                    removeItem(item);
                  }}
                className="bg-red-500 text-white py-1 px-3 rounded-md font-semibold text-xs"
                >
                  remove
                </button>
              </div>
              <div className="h-auto flex items-center justify-end flex-grow">
             <h3 className="text-semibold text-lg">
              ${item.product.price * item.quantity}
             </h3>
              </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
