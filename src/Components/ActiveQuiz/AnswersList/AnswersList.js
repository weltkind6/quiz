import React from 'react'
import AnswerItem from "./AnswerItems/AnswersItem";
import classes from './AnswersList.module.css'

const AnswersList = (props) => {

    return (
        <ul className={classes.answerBlock}>
               <AnswerItem answers={props.answers}/>
        </ul>
    )
}


export default AnswersList