const nameInputEle = document.querySelector(".name");
const movieFormEle = document.querySelector(".checkbox_movies");
const resetBtn = document.querySelector(".reset");
const confirmBtn = document.querySelector(".confirm");

let visitor = "";
let clickedMoives = [];

const handleNameInput = (e) => {
  visitor = e.target.value;
};

const handleCheckbox = (e) => {
  const movie = e.target.value;
  if (clickedMoives.includes(movie)) {
    clickedMoives = clickedMoives.filter(
      (clickedMovie) => clickedMovie !== movie
    );
  } else {
    clickedMoives.push(movie);
  }
};

const alertMessage = () => {
  if (visitor === "") {
    alert("이름을 입력하세요.");
    return;
  }

  if (clickedMoives.length === 0) {
    alert(`${visitor}님 저랑 취향이 다르시네요!`);
    return;
  }

  alert(`${visitor}님 ${clickedMoives.join(", ")}을(를) 좋아하시는군요!`);
};

const handleResetBtn = () => {
  clickedMoives = [];
};

nameInputEle.addEventListener("keyup", handleNameInput);
movieFormEle.addEventListener("change", handleCheckbox);
confirmBtn.addEventListener("click", alertMessage);
resetBtn.addEventListener("click", handleResetBtn);
