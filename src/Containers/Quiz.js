import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../Components/ActiveQuiz/activeQuiz";

class Quiz extends React.Component {
    state = {
        answers: [
            {text: 'I am fine', id: 1},
            {text: 'I am fine. Thanks..', id: 2},
            {text: 'That is ok', id: 3},
            {text: 'I would rather to stay home..', id: 4},
            {text: 'He needs more money to buy macBook Pro 2019', id: 5},
        ]
    }

    render() {

        return (
            <div className={classes.quiz}>

                <div className={classes.quizWrapper}>
                    <h2>Look at this answer:</h2>
                    <ActiveQuiz answers={this.state.answers}/>
                </div>
            </div>
        );
    }
}

export default Quiz