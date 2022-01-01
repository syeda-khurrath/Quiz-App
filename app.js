var form = document.querySelector("form");
const answers = ["A", "A", "A", "A"];
let result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  let userAnswers = [
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
  ];
  userAnswers.forEach((ans, idx) => {
    if (ans == answers[idx]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  let output = 0;
  let timer = setInterval(() => {
    result.innerText = `You are ${output}% Ninja`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
