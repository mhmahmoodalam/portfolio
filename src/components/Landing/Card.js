import React from "react";
import animationData from "../../assets/developer";

import Lottie from "react-lottie";
export default function Card() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div key="avatar_animation" className="animation">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        key="avatar_animation_data"
      />
    </div>
  );
}
