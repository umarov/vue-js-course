<template>
  <div class="container-fluid">
    <transition appear name="question-answered" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" mode="out-in">
      <div class="card text-center" v-if="question.active" key="question-card">
        <div class="card-header">
          Question {{questionsCount}}
        </div>
        <div class="card-body">
          <h5 class="card-title">What is {{question.firstNumber}} - {{question.secondNumber}}</h5>
          <p class="card-text">Select one of the options below</p>
          <div class="answers">
            <button class="btn btn-primary" v-for="answer in question.answers" :key="answer" @click="questionAnswered(answer)">
              {{answer}}
            </button>
          </div>
        </div>
      </div>

      <div class="card text-center" v-else :style="answerStyle"  key="result-card">
        <div class="card-body">
          <h2 class="feedback-title">{{feedback}}</h2>
          <hr>
          <button class="btn btn-primary" @click="getNextQuestion">Next Question</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Question } from './question'

  export default {
    data() {
      return {
        questionsCount: 1,
        question: new Question(),
        validAnswer: false,
      }
    },
    computed: {
      answerStyle() {
        return {
          backgroundColor: this.validAnswer ? 'lightgreen' : '#ffa9b2',
        }
      },
      feedback() {
        return this.validAnswer ? 'You are correct!' : 'That is the wrong answer'
      },
    },
    methods: {
      questionAnswered(answer) {
        if (this.question.active) {
          this.validAnswer = this.question.answerQuestion(answer)
        }
      },
      getNextQuestion() {
        this.questionsCount++
        setTimeout(() => {
          this.question = new Question()
        }, 0)
      },
    },
  }
</script>

<style scoped>
  button {
    margin: 20px;
  }

  .card {
    animation-duration: 400ms
  }

  .answers {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
  }
</style>
