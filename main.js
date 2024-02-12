const main = document.createElement("main");
main.style.width = "1600px";
main.style.height = "700px";
main.id = "main";
document.body.append(main);

const div = document.createElement("div");
div.style.width = "50px";
div.style.height = "50px";
div.style.position = "absolute";
div.style.top = main.getBoundingClientRect.top / 2 + "px";
div.style.left = main.getBoundingClientRect.right / 2 + "px";
div.style.backgroundColor = "blue";
div.style.transition = "0.2 ease-in-out";
document.body.append(div);

main.addEventListener("click", (e) => {
  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
});

window.addEventListener("keydown", (e) => {
  let currentPosition;

  if (
    e.code === "ArrowRight" &&
    div.getBoundingClientRect().right <= main.getBoundingClientRect().right
  ) {
    currentPosition = div.getBoundingClientRect().left;
    currentPosition += 20;
    div.style.left = currentPosition + "px";
  }

  if (
    e.code === "ArrowDown" &&
    div.getBoundingClientRect().bottom < main.getBoundingClientRect().bottom
  ) {
    currentPosition = div.getBoundingClientRect().top;
    currentPosition += 20;
    div.style.top = currentPosition + "px";
  }

  if (
    e.code === "ArrowLeft" &&
    div.getBoundingClientRect().left > main.getBoundingClientRect().left
  ) {
    currentPosition = div.getBoundingClientRect().left;
    currentPosition -= 20;
    div.style.left = currentPosition + "px";
  }

  if (
    e.code === "ArrowUp" &&
    div.getBoundingClientRect().top > main.getBoundingClientRect().top
  ) {
    currentPosition = div.getBoundingClientRect().top;
    currentPosition -= 20;
    div.style.top = main.getBoundingClientRect().top + currentPosition + "px";
  }
});
