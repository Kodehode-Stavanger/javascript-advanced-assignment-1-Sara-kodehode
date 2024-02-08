const main = document.createElement("main");
main.style.width = "1600px";
main.style.height = "700px";
document.body.append(main);

const div = document.createElement("div");
div.style.width = "50px";
div.style.height = "50px";
div.style.position = "absolute";
div.style.top = "100px";
div.style.left = "100px";
div.style.backgroundColor = "blue";
div.style.transition = "0.2 ease-in-out";
document.body.append(div);

main.addEventListener("click", (e) => {
  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
});

window.addEventListener("keydown", (e) => {
  let currentPosition;

  if (e.code === "ArrowRight") {
    currentPosition = div.getBoundingClientRect().left;
    currentPosition += 20;
    if (div.getBoundingClientRect().right <= main.getBoundingClientRect().right)
      div.style.left = currentPosition + "px";
  }

  if (e.code === "ArrowDown") {
    currentPosition = div.getBoundingClientRect().top;
    currentPosition += 20;
    if (
      div.getBoundingClientRect().bottom < main.getBoundingClientRect().bottom
    ) {
      div.style.top = currentPosition + "px";
    }
  }

  if (e.code === "ArrowLeft") {
    currentPosition = div.getBoundingClientRect().left;
    currentPosition -= 20;
    if (div.getBoundingClientRect().left > main.getBoundingClientRect().left) {
      div.style.left = currentPosition + "px";
    }
  }

  if (e.code === "ArrowUp") {
    currentPosition = div.getBoundingClientRect().top;
    currentPosition -= 20;
    if (div.getBoundingClientRect().top > main.getBoundingClientRect().top)
      div.style.top = currentPosition + "px";
  }
});
