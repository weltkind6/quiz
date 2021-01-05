import React from 'react'
import classes from './AnswersItem.module.css'

const AnswerItem = (props) => {
    return (
        <div className={classes.ansItems}>
            <li className={classes.item}> {props.answer.map((e) => <div key={e.id}>{e.text}</div>)}</li>
        </div>
    )

}

export default AnswerItem