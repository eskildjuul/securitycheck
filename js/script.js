document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const stages = document.querySelectorAll(".stage");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextStageId = button.dataset.next;

      stages.forEach((stage) => {
        stage.classList.remove("active");
      });

      const nextStage = document.getElementById(nextStageId);

      if (nextStage) {
        nextStage.classList.add("active");
      }
    });
  });
});