import React from 'react'
import classes from './activeQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";


const ActiveQuiz = (props) => {
    return (
        <div className={classes.activeQuiz}>
            <div className={classes.itemsWrapper}>
                <span><strong className={classes.question}>{props.questions}</strong></span>
                <div><small>4 of 12</small></div>
            </div>

            <div>
                <div className={classes.ansWrapper}>
                    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick}/>
                </div>
            </div>
        </div>
    )
}

export default ActiveQuiz