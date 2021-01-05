import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../Components/activeQuiz";

class Quiz extends React.Component {
    render() {
        return (
            <div className={classes.quiz}>

              <div className={classes.quizWrapper}>
                  <h2>Quizz</h2>
                  <ActiveQuiz />
              </div>
            </div>
        );
    }
}

export default Quiz