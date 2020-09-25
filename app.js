let firstAnimBtn = document.querySelector(".first-anim");

let firstAnim = "ready";

// Animation 1 - Slide
const animeOne = (anime) => {
  if (anime === "revert") {
    gsap.to(".triangle", { duration: 2, x: "0rem" });
    firstAnimBtn = "ready";
  } else {
    gsap.to(".triangle", { duration: 2, x: "14rem" });
    firstAnimBtn = "revert";
  }
};

firstAnimBtn.addEventListener("click", () => {
  animeOne(firstAnimBtn);
});
