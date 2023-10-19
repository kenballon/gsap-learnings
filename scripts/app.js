document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    const headingTitle = document.getElementById("headingH1");
    //   const textHeadingVal = headingTitle.textContent.trim();
    //   const textValArr = textHeadingVal.split("");

    //   headingTitle.innerHTML = "";

    //   textValArr.forEach((char) => {
    //     let span = document.createElement("div");
    //     span.classList.add("staggered-char");
    //     span.style.display = "inline-block";
    //     span.innerHTML = char;

    //     headingTitle.appendChild(span);
    //   });

    const textHeading = new SplitType("#headingH1");

    gsap.fromTo(
      ".squares .square",
      { y: -100, opacity: 0 },
      { y: 0, stagger: 0.5, opacity: 1, ease: "back.out(2.3)" }
    );
    gsap.from(
      textHeading.words,

      { y: "100%", stagger: 0.1, opacity: 1 }
    );
  }
});
