import React from 'react'
import classes from './Finished.module.css'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key)=> {
        if(props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.finishedQuiz}>
           <div className={classes.finishedWrapper}>
               <ul>
                  {/* <li>
                       <strong>1.</strong> Hey! True!
                   </li>
                   <li>
                       <strong>2.</strong> Hey! Error
                   </li>*/}
                   
               </ul>

               <p>Correct {successCount} of {props.quiz.length}</p>
               <div>
                   <button onClick={props.restartQuiz}>
                       Try again
                   </button>
               </div>
           </div>
        </div>
    )
}

export default FinishedQuiz