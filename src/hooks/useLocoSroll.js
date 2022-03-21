import { useEffect } from "react";
import LocomotivesScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotivesScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      clalss: "is-reveal",
    });
  }, [start]);
}