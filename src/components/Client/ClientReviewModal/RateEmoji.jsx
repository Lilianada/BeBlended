import React, { useState } from "react";
import "./ClientReviewModal.scss";

export default function RateFaces() {
  const [clicked, setClicked] = useState(1);
  const isClicked = (index) => {
    setClicked(index)
  };
  return (
    <div className="rateRow">
      <div
        className={`emoji ${clicked === 1 ? "emojiActive" : ""}`}
        onClick={() => isClicked(1)}
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5419 33.4254C16.6997 33.5446 16.8799 33.6308 17.0718 33.6787C17.2636 33.7267 17.4632 33.7353 17.6585 33.7042C17.8538 33.6732 18.0409 33.6029 18.2084 33.4978C18.3759 33.3927 18.5205 33.2548 18.6334 33.0924C18.9659 32.7266 19.3421 32.403 19.7536 32.1289C20.8579 31.3959 22.1568 31.0111 23.4822 31.0244C25.1566 31.0244 26.3943 31.5787 27.2109 32.125C27.6223 32.3991 27.9986 32.7227 28.3311 33.0885L28.3722 33.1394C28.6072 33.4503 28.9561 33.6551 29.3421 33.7087C29.7281 33.7623 30.1195 33.6604 30.4304 33.4254C30.7412 33.1903 30.946 32.8415 30.9996 32.4555C31.0532 32.0695 30.9513 31.678 30.7163 31.3672L30.6634 31.3006C30.638 31.2692 30.6047 31.2262 30.5616 31.1772C30.4754 31.0793 30.356 30.9442 30.2013 30.7894C29.785 30.3763 29.3291 30.005 28.8402 29.681C27.253 28.6275 25.3872 28.0724 23.4822 28.0869C21.5773 28.0724 19.7114 28.6275 18.1242 29.681C17.6353 30.005 17.1795 30.3763 16.7632 30.7894C16.6 30.9514 16.4457 31.122 16.301 31.3006C15.7938 31.9507 15.8643 32.9162 16.5419 33.4254Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5001 1.95825C35.397 1.95825 45.0417 11.603 45.0417 23.4999C45.0417 35.3968 35.397 45.0416 23.5001 45.0416C11.6032 45.0416 1.95842 35.3968 1.95842 23.4999C1.95842 11.603 11.6032 1.95825 23.5001 1.95825ZM42.1042 23.4999C42.1042 18.5658 40.1442 13.8337 36.6552 10.3448C33.1663 6.85583 28.4342 4.89575 23.5001 4.89575C18.566 4.89575 13.8339 6.85583 10.345 10.3448C6.85599 13.8337 4.89592 18.5658 4.89592 23.4999C4.89592 28.434 6.85599 33.1661 10.345 36.655C13.8339 40.144 18.566 42.1041 23.5001 42.1041C28.4342 42.1041 33.1663 40.144 36.6552 36.655C40.1442 33.1661 42.1042 28.434 42.1042 23.4999V23.4999Z"
            fill="currentColor"
          />
          <path
            d="M29.3749 21.0522C29.3749 21.7014 29.6328 22.324 30.0919 22.7831C30.551 23.2422 31.1736 23.5001 31.8228 23.5001C32.4721 23.5001 33.0947 23.2422 33.5538 22.7831C34.0128 22.324 34.2708 21.7014 34.2708 21.0522C34.2708 20.4029 34.0128 19.7803 33.5538 19.3212C33.0947 18.8622 32.4721 18.6042 31.8228 18.6042C31.1736 18.6042 30.551 18.8622 30.0919 19.3212C29.6328 19.7803 29.3749 20.4029 29.3749 21.0522ZM15.177 23.5001C14.5278 23.5001 13.9051 23.2422 13.4461 22.7831C12.987 22.324 12.7291 21.7014 12.7291 21.0522C12.7291 20.4029 12.987 19.7803 13.4461 19.3212C13.9051 18.8622 14.5278 18.6042 15.177 18.6042C15.8262 18.6042 16.4489 18.8622 16.9079 19.3212C17.367 19.7803 17.6249 20.4029 17.6249 21.0522C17.6249 21.7014 17.367 22.324 16.9079 22.7831C16.4489 23.2422 15.8262 23.5001 15.177 23.5001Z"
            fill="currentColor"
          />
        </svg>
        <p className={`boldText ${clicked === 1 ? "emojiActive" : ""}`}>Terrible</p>
      </div>

      <div
        className={`emoji ${clicked === 2? "emojiActive" : ""}`}
        onClick={() => isClicked(2)}
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5001 1.95825C35.397 1.95825 45.0417 11.603 45.0417 23.4999C45.0417 35.3968 35.397 45.0416 23.5001 45.0416C11.6032 45.0416 1.95842 35.3968 1.95842 23.4999C1.95842 11.603 11.6032 1.95825 23.5001 1.95825ZM42.1042 23.4999C42.1042 18.5658 40.1442 13.8337 36.6552 10.3448C33.1663 6.85583 28.4342 4.89575 23.5001 4.89575C18.566 4.89575 13.8339 6.85583 10.345 10.3448C6.85599 13.8337 4.89592 18.5658 4.89592 23.4999C4.89592 28.434 6.85599 33.1661 10.345 36.655C13.8339 40.144 18.566 42.1041 23.5001 42.1041C28.4342 42.1041 33.1663 40.144 36.6552 36.655C40.1442 33.1661 42.1042 28.434 42.1042 23.4999V23.4999Z"
            fill="currentColor"
          />
          <path
            d="M29.3749 21.0522C29.3749 21.7014 29.6328 22.324 30.0919 22.7831C30.551 23.2422 31.1736 23.5001 31.8228 23.5001C32.4721 23.5001 33.0947 23.2422 33.5538 22.7831C34.0128 22.324 34.2708 21.7014 34.2708 21.0522C34.2708 20.4029 34.0128 19.7803 33.5538 19.3212C33.0947 18.8622 32.4721 18.6042 31.8228 18.6042C31.1736 18.6042 30.551 18.8622 30.0919 19.3212C29.6328 19.7803 29.3749 20.4029 29.3749 21.0522ZM15.177 23.5001C14.5278 23.5001 13.9051 23.2422 13.4461 22.7831C12.987 22.324 12.7291 21.7014 12.7291 21.0522C12.7291 20.4029 12.987 19.7803 13.4461 19.3212C13.9051 18.8622 14.5278 18.6042 15.177 18.6042C15.8262 18.6042 16.4489 18.8622 16.9079 19.3212C17.367 19.7803 17.6249 20.4029 17.6249 21.0522C17.6249 21.7014 17.367 22.324 16.9079 22.7831C16.4489 23.2422 15.8262 23.5001 15.177 23.5001Z"
            fill="currentColor"
          />
          <path
            d="M29.8645 31.823C28.3958 31.3334 25.4583 30.3542 23.4999 30.3542C21.5416 30.3543 17.1353 31.823 17.1353 31.823"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className={`boldText ${clicked === 2 ? "emojiActive" : ""}`}>Sad</p>
      </div>

      <div
        className={`emoji ${clicked === 3 ? "emojiActive" : ""}`}
        onClick={() => isClicked(3)}
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5001 1.95825C35.397 1.95825 45.0417 11.603 45.0417 23.4999C45.0417 35.3968 35.397 45.0416 23.5001 45.0416C11.6032 45.0416 1.95842 35.3968 1.95842 23.4999C1.95842 11.603 11.6032 1.95825 23.5001 1.95825ZM42.1042 23.4999C42.1042 18.5658 40.1442 13.8337 36.6552 10.3448C33.1663 6.85583 28.4342 4.89575 23.5001 4.89575C18.566 4.89575 13.8339 6.85583 10.345 10.3448C6.85599 13.8337 4.89592 18.5658 4.89592 23.4999C4.89592 28.434 6.85599 33.1661 10.345 36.655C13.8339 40.144 18.566 42.1041 23.5001 42.1041C28.4342 42.1041 33.1663 40.144 36.6552 36.655C40.1442 33.1661 42.1042 28.434 42.1042 23.4999V23.4999Z"
            fill="currentColor"
          />
          <path
            d="M29.3749 21.0522C29.3749 21.7014 29.6328 22.324 30.0919 22.7831C30.551 23.2422 31.1736 23.5001 31.8228 23.5001C32.4721 23.5001 33.0947 23.2422 33.5538 22.7831C34.0128 22.324 34.2708 21.7014 34.2708 21.0522C34.2708 20.4029 34.0128 19.7803 33.5538 19.3212C33.0947 18.8622 32.4721 18.6042 31.8228 18.6042C31.1736 18.6042 30.551 18.8622 30.0919 19.3212C29.6328 19.7803 29.3749 20.4029 29.3749 21.0522ZM15.177 23.5001C14.5278 23.5001 13.9051 23.2422 13.4461 22.7831C12.987 22.324 12.7291 21.7014 12.7291 21.0522C12.7291 20.4029 12.987 19.7803 13.4461 19.3212C13.9051 18.8622 14.5278 18.6042 15.177 18.6042C15.8262 18.6042 16.4489 18.8622 16.9079 19.3212C17.367 19.7803 17.6249 20.4029 17.6249 21.0522C17.6249 21.7014 17.367 22.324 16.9079 22.7831C16.4489 23.2422 15.8262 23.5001 15.177 23.5001Z"
            fill="currentColor"
          />
          <line
            x1="1.25"
            y1="-1.25"
            x2="14.4167"
            y2="-1.25"
            transform="matrix(-1 0 0 1 31.3333 33.2917)"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className={`boldText ${clicked === 3 ? "emojiActive" : ""}`}>Okay</p>
      </div>

      <div
        className={`emoji ${clicked === 4 ? "emojiActive" : ""}`}
        onClick={() => isClicked(4)}
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="good"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5001 1.95825C35.397 1.95825 45.0417 11.603 45.0417 23.4999C45.0417 35.3968 35.397 45.0416 23.5001 45.0416C11.6032 45.0416 1.95842 35.3968 1.95842 23.4999C1.95842 11.603 11.6032 1.95825 23.5001 1.95825ZM42.1042 23.4999C42.1042 18.5658 40.1442 13.8337 36.6552 10.3448C33.1663 6.85583 28.4342 4.89575 23.5001 4.89575C18.566 4.89575 13.8339 6.85583 10.345 10.3448C6.85599 13.8337 4.89592 18.5658 4.89592 23.4999C4.89592 28.434 6.85599 33.1661 10.345 36.655C13.8339 40.144 18.566 42.1041 23.5001 42.1041C28.4342 42.1041 33.1663 40.144 36.6552 36.655C40.1442 33.1661 42.1042 28.434 42.1042 23.4999V23.4999Z"
            fill="currentColor"
          />
          <path
            d="M29.3749 21.0522C29.3749 21.7014 29.6328 22.324 30.0919 22.7831C30.551 23.2422 31.1736 23.5001 31.8228 23.5001C32.4721 23.5001 33.0947 23.2422 33.5538 22.7831C34.0128 22.324 34.2708 21.7014 34.2708 21.0522C34.2708 20.4029 34.0128 19.7803 33.5538 19.3212C33.0947 18.8622 32.4721 18.6042 31.8228 18.6042C31.1736 18.6042 30.551 18.8622 30.0919 19.3212C29.6328 19.7803 29.3749 20.4029 29.3749 21.0522ZM15.177 23.5001C14.5278 23.5001 13.9051 23.2422 13.4461 22.7831C12.987 22.324 12.7291 21.7014 12.7291 21.0522C12.7291 20.4029 12.987 19.7803 13.4461 19.3212C13.9051 18.8622 14.5278 18.6042 15.177 18.6042C15.8262 18.6042 16.4489 18.8622 16.9079 19.3212C17.367 19.7803 17.6249 20.4029 17.6249 21.0522C17.6249 21.7014 17.367 22.324 16.9079 22.7831C16.4489 23.2422 15.8262 23.5001 15.177 23.5001Z"
            fill="currentColor"
          />
          <path
            d="M29.8645 31.823C27.4166 32.3126 24.4791 33.2917 22.5208 33.2917C20.5624 33.2918 17.1353 31.823 17.1353 31.823"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className={`boldText ${clicked === 4 ? "emojiActive" : ""}`}>Good</p>
      </div>

      <div
        className={`emoji ${clicked === 5 ? "emojiActive" : ""}`}
        onClick={() => isClicked(5)}
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="great"
        >
          <path
            d="M30.4403 28.3842C30.2825 28.2649 30.1023 28.1788 29.9104 28.1308C29.7185 28.0829 29.519 28.0742 29.3236 28.1053C29.1283 28.1364 28.9413 28.2066 28.7738 28.3118C28.6063 28.4169 28.4617 28.5548 28.3488 28.7171C28.0163 29.083 27.6401 29.4066 27.2286 29.6806C26.1243 30.4137 24.8254 30.7985 23.4999 30.7851C21.8256 30.7851 20.5879 30.2309 19.7713 29.6845C19.3598 29.4105 18.9836 29.0869 18.6511 28.721L18.61 28.6701C18.375 28.3593 18.0261 28.1545 17.6401 28.1009C17.2541 28.0473 16.8626 28.1492 16.5518 28.3842C16.2409 28.6192 16.0362 28.9681 15.9826 29.3541C15.9289 29.7401 16.0308 30.1316 16.2659 30.4424L16.3187 30.509C16.3442 30.5403 16.3775 30.5834 16.4206 30.6324C16.5067 30.7303 16.6262 30.8654 16.7809 31.0201C17.1972 31.4333 17.653 31.8046 18.1419 32.1285C19.7291 33.1821 21.595 33.7372 23.4999 33.7226C25.4049 33.7372 27.2707 33.1821 28.8579 32.1285C29.3469 31.8046 29.8027 31.4333 30.219 31.0201C30.3822 30.8582 30.5364 30.6876 30.6812 30.509C31.1884 29.8588 31.1179 28.8934 30.4403 28.3842Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5001 1.95825C35.397 1.95825 45.0417 11.603 45.0417 23.4999C45.0417 35.3968 35.397 45.0416 23.5001 45.0416C11.6032 45.0416 1.95842 35.3968 1.95842 23.4999C1.95842 11.603 11.6032 1.95825 23.5001 1.95825ZM42.1042 23.4999C42.1042 18.5658 40.1442 13.8337 36.6552 10.3448C33.1663 6.85583 28.4342 4.89575 23.5001 4.89575C18.566 4.89575 13.8339 6.85583 10.345 10.3448C6.85599 13.8337 4.89592 18.5658 4.89592 23.4999C4.89592 28.434 6.85599 33.1661 10.345 36.655C13.8339 40.144 18.566 42.1041 23.5001 42.1041C28.4342 42.1041 33.1663 40.144 36.6552 36.655C40.1442 33.1661 42.1042 28.434 42.1042 23.4999V23.4999Z"
            fill="currentColor"
          />
          <path
            d="M29.3749 21.0522C29.3749 21.7014 29.6328 22.324 30.0919 22.7831C30.551 23.2422 31.1736 23.5001 31.8228 23.5001C32.4721 23.5001 33.0947 23.2422 33.5538 22.7831C34.0128 22.324 34.2708 21.7014 34.2708 21.0522C34.2708 20.4029 34.0128 19.7803 33.5538 19.3212C33.0947 18.8622 32.4721 18.6042 31.8228 18.6042C31.1736 18.6042 30.551 18.8622 30.0919 19.3212C29.6328 19.7803 29.3749 20.4029 29.3749 21.0522ZM15.177 23.5001C14.5278 23.5001 13.9051 23.2422 13.4461 22.7831C12.987 22.324 12.7291 21.7014 12.7291 21.0522C12.7291 20.4029 12.987 19.7803 13.4461 19.3212C13.9051 18.8622 14.5278 18.6042 15.177 18.6042C15.8262 18.6042 16.4489 18.8622 16.9079 19.3212C17.367 19.7803 17.6249 20.4029 17.6249 21.0522C17.6249 21.7014 17.367 22.324 16.9079 22.7831C16.4489 23.2422 15.8262 23.5001 15.177 23.5001Z"
            fill="currentColor"
          />
        </svg>
        <p className={`boldText ${clicked === 5 ? "emojiActive" : ""}`}>Great</p>
      </div>
    </div>
  );
}
