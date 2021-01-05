import React from 'react'
import classes from './activeQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";


const ActiveQuiz = (props) => {
    return (
        <div className={classes.activeQuiz}>
            <div className={classes.itemsWrapper}>
                <span><strong>2. How are you?</strong></span>
                <div><small>4 of 12</small></div>
            </div>

            <div>
                <div className={classes.ansWrapper}>
                    <AnswersList answers={props.answers}/>
                </div>
            </div>
        </div>
    )
}

export default ActiveQuiz