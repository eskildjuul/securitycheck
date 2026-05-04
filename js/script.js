let score = 0;

const btns = document.querySelectorAll(".stage .btn");
const stages = document.querySelectorAll(".stage");

const showStage = (stageId) => {
  for (const stage of stages) {
    stage.classList.remove("active");
  }

  const nextStage = document.getElementById(stageId);

  if (nextStage) {
    nextStage.classList.add("active");
  }
};

const nextStage = (e) => {
  const clickedBtn = e.target;
  const stageId = clickedBtn.dataset.next;

  switch (stageId) {
    case "mail":
      score = 0;
      showStage("mail");
      break;

    case "check-sender":
      score += 1;
      showStage("check-sender");
      break;

    case "bad-ending":
      score -= 1;
      showStage("bad-ending");
      break;

    case "neutral-ending":
      score += 0;
      showStage("neutral-ending");
      break;

    case "okay-ending":
      score += 1;
      showStage("okay-ending");
      break;

    case "good-ending":
      score += 2;
      showStage("good-ending");
      break;

    case "start":
      score = 0;
      showStage("start");
      break;

    default:
      console.log("Noget gik galt");
  }

  console.log("Score:", score);
};

for (const btn of btns) {
  btn.addEventListener("click", nextStage);
}