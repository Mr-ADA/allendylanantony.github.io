const resumeBtn = document.getElementById("resume");
const resumeItem = document.querySelector("nav div.container li.nav-item:last-child");
const labelName = document.querySelector("nav div.container a:first-of-type");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

window.addEventListener("resize", (event) => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 853) {
    resumeBtn.classList.add("collapse");
    resumeItem.classList.remove("collapse");
    labelName.classList.add("collapse");
  } else {
    resumeBtn.classList.remove("collapse");
    resumeItem.classList.add("collapse");
    labelName.classList.remove("collapse");
  }
});

resumeBtn.addEventListener("click", () => {
  window.open("./resume.pdf", "_blank");
});

resumeItem.addEventListener("click", () => {
  window.open("./resume.pdf", "_blank");
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
