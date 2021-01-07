import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../Components/ActiveQuiz/activeQuiz";

class Quiz extends React.Component {

    state = {
        isFinished: false,
        activeQuestion: 0,
        quiz: [
            {
                questions: 'In what year was Persia renamed Iran?',
                correctAnswer: 4,
                id: 1,
                answers: [
                    {text: 'It was in ... 1922', id: 1},
                    {text: 'It was in ... 1756', id: 2},
                    {text: 'It was in ... 2021', id: 3},
                    {text: 'It was in ... 1935', id: 4},
                    {text: 'I\'ve had enough! I\'m going to Google', id: 5},
                ]
            },
            {
                questions: 'In what year was Saint Petersburg founded?',
                correctAnswer: 1,
                id: 2,
                answers: [
                    {text: 'It was in ... 1703', id: 1},
                    {text: 'It was in ... 1883', id: 2},
                    {text: 'It was in ... 1749', id: 3},
                    {text: 'It was in ... 2001', id: 4},
                    {text: 'I\'ve had enough! I\'m going to Yandex', id: 5},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion].correctAnswer
        if (question === answerId) {

            const timeout = window.setTimeout(() => {
                if (this.quizFinished()) {
                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        }
    }

    quizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.quiz}>

                <div className={classes.quizWrapper}>
                    <h2>Look at this answer:</h2>
                    {
                        this.state.isFinished === true ? <h1>This quiz is finished</h1>
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                questions={this.state.quiz[this.state.activeQuestion].questions}
                                onAnswerClick={this.onAnswerClickHandler}
                                numberQuestion={this.state.activeQuestion + 1}
                            />
                    }

                </div>
            </div>
        );
    }
}

export default Quiz