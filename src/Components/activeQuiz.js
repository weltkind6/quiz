import React from 'react'
import classes from './activeQuiz.module.css'

const ActiveQuiz = props => {
    return (
        <div className={classes.activeQuiz}>
            <div>
                <span><strong>How are you?</strong></span>
            </div>
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
    )
}

export default ActiveQuiz