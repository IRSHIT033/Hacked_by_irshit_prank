import "./styles.css";

const btn = document.getElementById("btn");
let flag = 1;

btn.addEventListener("mouseenter", () => {
  if (flag) {
    setTimeout(() => alert("hacked by irshit"), 4000);
    flag = 0;
  }

  btn.style.position = "absolute";
  btn.style.top = `${Math.random() * 400}px`;
  btn.style.left = `${Math.random() * 400}px`;
});
