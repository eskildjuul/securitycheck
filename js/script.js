const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");

const scenarioData = {
  start: {
    points: 0,
    text: "Scenariet er startet"
  },
  mail: {
    points: 0,
    text: "Brugeren har åbnet mailen"
  },
  "check-sender": {
    points: 10,
    text: "Afsenderen blev tjekket"
  },
  "bad-ending": {
    points: -10,
    text: "Der blev klikket på linket"
  },
  "neutral-ending": {
    points: 0,
    text: "Mailen blev ignoreret"
  },
  "okay-ending": {
    points: 5,
    text: "Mailen blev slettet"
  },
  "good-ending": {
    points: 10,
    text: "Mailen blev rapporteret"
  }
};

let currentStage = "start";
let totalPoints = 0;
let userChoices = [];

function hideAllStages() {
  stages.forEach((stage) => {
    stage.classList.remove("active");
  });
}

function resetScenario(stageId) {
  if (stageId === "start") {
    totalPoints = 0;
    userChoices = [];
    console.log("Scenariet er nulstillet. Score:", totalPoints);
  }
}

function saveChoice(stageId) {
  userChoices.push(stageId);
}

function updatePoints(stageId) {
  const stageInfo = scenarioData[stageId];

  if (stageInfo) {
    totalPoints += stageInfo.points;

    console.log(`${stageInfo.text} | Point: ${stageInfo.points} | Samlet score: ${totalPoints}`);

    if (
      stageId === "bad-ending" ||
      stageId === "neutral-ending" ||
      stageId === "okay-ending" ||
      stageId === "good-ending"
    ) {
      console.log("Scenariet er afsluttet");
    }
  }
}

function showStage(stageId) {
  const nextStage = document.getElementById(stageId);

  if (nextStage) {
    hideAllStages();
    nextStage.classList.add("active");
    currentStage = stageId;

    resetScenario(stageId);

    if (stageId !== "start") {
      saveChoice(stageId);
      updatePoints(stageId);
    }
  }
}

function handleStageChange(event) {
  const clickedButton = event.target;
  const nextStageId = clickedButton.dataset.next;

  if (nextStageId) {
    showStage(nextStageId);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", handleStageChange);
});