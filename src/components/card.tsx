import { useCardStore } from "@/state/card";

function Card() {
    const card=useCardStore(state=>state.card)
  return (
    <div className="fixed top-4 right-4 bg-black flex items-center justify-center p-2 rounded-full">
        <div className="bg-white  w-4 h-4 rounded-full p-1 text-xs flex items-center justify-center">
            {card.length}
        </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        className="fill-current text-white"
        viewBox="0 0 50 50"
      >
        <path d="M 25 1 C 19.464844 1 15 5.464844 15 11 L 15 13 L 7.09375 13 L 7 13.875 L 3 48.875 L 2.875 50 L 47.125 50 L 47 48.875 L 43 13.875 L 42.90625 13 L 35 13 L 35 11 C 35 5.464844 30.535156 1 25 1 Z M 25 3 C 29.464844 3 33 6.535156 33 11 L 33 13 L 17 13 L 17 11 C 17 6.535156 20.535156 3 25 3 Z M 8.90625 15 L 15 15 L 15 17.28125 C 14.402344 17.628906 14 18.261719 14 19 C 14 20.105469 14.894531 21 16 21 C 17.105469 21 18 20.105469 18 19 C 18 18.261719 17.597656 17.628906 17 17.28125 L 17 15 L 33 15 L 33 17.28125 C 32.402344 17.628906 32 18.261719 32 19 C 32 20.105469 32.894531 21 34 21 C 35.105469 21 36 20.105469 36 19 C 36 18.261719 35.597656 17.628906 35 17.28125 L 35 15 L 41.09375 15 L 44.875 48 L 5.125 48 Z"></path>
      </svg>
    </div>
  );
}

export default Card;
