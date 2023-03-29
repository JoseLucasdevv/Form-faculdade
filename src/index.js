const title = document.querySelector(".title h1");

function effectLetter(text) {
  const letterArray = text.innerText.split("");
  text.innerText = "";
  letterArray.map((item, idx) => {
    setTimeout(() => {
      text.innerText += item;
    }, 200 * idx);
  });
}

effectLetter(title);
