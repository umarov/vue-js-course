export class Question {
  constructor() {
    this.firstNumber = this.generateNumber()
    this.secondNumber = this.generateNumber()
    this.correctAnswer = this.firstNumber - this.secondNumber
    this.generateAnswers()
    this.addCorrectAnswerToAnswers()

    this.active = true
  }

  generateNumber() {
    return Math.floor(Math.random() * 100)
  }

  generateAnswers() {
    this.answers = [
      this.firstNumber - this.generateNumber(),
      this.generateNumber() - this.firstNumber,
      this.generateNumber() - this.secondNumber,
      this.secondNumber - this.generateNumber(),
    ]
  }

  addCorrectAnswerToAnswers() {
    if (this.answers.includes(this.correctAnswer)) {
      this.generateAnswers()
      return this.addCorrectAnswerToAnswers()
    } else {
      const indexToReplace = Math.floor(Math.random() * 4)
      this.answers[indexToReplace] = this.correctAnswer
      const needsToBeReadjusted =
        this.answers.filter(
          number => this.answers.indexOf(number) !== this.answers.lastIndexOf(number)
        ).length > 0

      if (needsToBeReadjusted) {
        this.generateAnswers()
        return this.addCorrectAnswerToAnswers()
      }
    }
  }

  answerQuestion(answer) {
    this.active = false
    return this.correctAnswer === answer
  }
}
