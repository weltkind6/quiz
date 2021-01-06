import React from 'react'
import AnswerItem from "./AnswerItems/AnswersItem";
import classes from './AnswersList.module.css'

const AnswersList = (props) => {
    return (
        <ul className={classes.answerBlock}>
            {props.answers.map(a =>  <AnswerItem
                answers={a.text}
                onAnswerClick={props.onAnswerClick}
                key={a.id}
                id={a.id}/>) }
        </ul>
    )
}


export default AnswersList