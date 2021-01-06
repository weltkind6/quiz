import React from 'react'
import classes from './AnswersItem.module.css'

const AnswerItem = (props) => {
    const mapAnswers = props.answers.map(a => <li className={classes.ansItems} key={a.id}>{a.text}</li>)
    return (
        <div>
            {mapAnswers}
        </div>
    )

}

export default AnswerItem