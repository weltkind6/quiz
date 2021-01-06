import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../Components/ActiveQuiz/activeQuiz";

class Quiz extends React.Component {
    state = {
        questions: 'In what year was Persia renamed Iran?',
        correctAnswer: '4',
        answers: [
            {text: 'It was in ... 1922', id: 1},
            {text: 'It was in ... 1756', id: 2},
            {text: 'It was in ... 2021', id: 3},
            {text: 'It was in ... 1953', id: 4},
            {text: 'I\'ve had enough! I\'m going to Google', id: 5},
        ]
    }
    onAnswerClickHandler = (answerId) => {
        console.log('answerId', answerId)
    }

    render() {

        return (
            <div className={classes.quiz}>

                <div className={classes.quizWrapper}>
                    <h2>Look at this answer:</h2>
                    <ActiveQuiz
                        answers={this.state.answers}
                        questions={this.state.questions}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz