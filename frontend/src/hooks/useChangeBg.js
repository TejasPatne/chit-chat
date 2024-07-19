import React, { useEffect, useState } from "react";

function useChangeBg() {
  const [currentBgIdx, setCurrentBgIdx] = useState(
    localStorage.getItem("bgIdx") || 0
  );
  const bgList = [
    "rain.jpg",
    "girl-cat-window.jpeg",
    "aot.jpg",
    "hollow-purple.jpg",
    "itachi.jpg",
    "jjk.jpeg",
    "lamps.jpg",
    "levi.jpg",
    "pink-pool.png",
    "roof-top-boy.jpg",
    "sasuke-naruto.png",
    "vegeta-ultra-ego.jpg",
  ];
  const listLength = bgList.length;
  const nextBg = () => {
    setCurrentBgIdx((c) => (c + 1) % listLength);
  };

  const backgroundStyle = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/${bgList[currentBgIdx]})`;

  useEffect(() => {
    document.body.style.background = backgroundStyle;
    (document.body.style.backgroundRepeat = "no-repeat"),
      (document.body.style.backgroundSize = "cover"),
      (document.body.style.backgroundPosition = "center");
    localStorage.setItem("bgIdx", currentBgIdx);
  }, [backgroundStyle, nextBg]);

  return nextBg;
}

export default useChangeBg;
