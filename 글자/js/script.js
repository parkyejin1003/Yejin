gsap.registerPlugin(SplitText);

console.clear();

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  const split = SplitText.create(".split", {
    type: "words",
    wordsClass: "word++",
    wordDelimiter: String.fromCharCode(8205)
  });

  gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    stagger: 0.1,
    duration: 1,
    ease: "back"
  });
});
