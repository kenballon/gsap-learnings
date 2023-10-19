// gsap.to(".square", {
//   x: 400,
//   ease: "elastic",
//   opacity: 1,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to(".square-pink", {
//   x: 400,
//   ease: "elastic",
//   opacity: 1,
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
// });

window.addEventListener("DOMContentLoaded", () => {
  const headingTitle = document.getElementById("headingH1");
  const textHeadingVal = headingTitle.textContent.trim();
  const textValArr = textHeadingVal.split("");

  headingTitle.innerHTML = "";

  textValArr.forEach((char) => {
    let span = document.createElement("div");
    span.classList.add("staggered-char");
    span.style.display = "inline-block";
    span.innerHTML = char;

    headingTitle.appendChild(span);
  });

  // const textHeading = new SplitType("#headingH1");

  gsap.fromTo(
    ".squares .square",
    { y: -100, opacity: 0 },
    { y: 0, stagger: 0.5, opacity: 1, ease: "back.out(2.3)" }
  );
  gsap.from(
    ".staggered-char",

    { y: "100%", stagger: 0.1, opacity: 1 }
  );
});
