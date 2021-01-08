import React from 'react'
import classes from './AnswersItem.module.css'


const AnswerItem = (props) => {

    return (
        <li onClick={() =>
            props.onAnswerClick(props.id)}
            className={classes.item}>
            {props.answers}
        </li>
    )

}

export default AnswerItem