function submitQuiz() {
    const correctAnswers = {
      q1: 'b',
      q2: 'a',
      q3: 'b'
    };
  
    let score = 0;
    let totalQuestions = 3;
    let feedback = [];
  
    for (let question in correctAnswers) {
      let selectedOption = document.querySelector(`input[name=${question}]:checked`);
      if (selectedOption && selectedOption.value === correctAnswers[question]) {
        score++;
      } else {
        let questionNumber = question.replace('q', '');
        feedback.push(`Question ${questionNumber} is incorrect.`);
      }
    }
  
    const resultDiv = document.getElementById('result');
    if (score === totalQuestions) {
      resultDiv.textContent = `Congratulations! You scored ${score} out of ${totalQuestions}. Excellent job!`;
    } else {
      resultDiv.textContent = `You scored ${score} out of ${totalQuestions}. ` + feedback.join(" ");
    }
}
  