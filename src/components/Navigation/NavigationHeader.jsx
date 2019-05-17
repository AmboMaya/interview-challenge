import React from 'react'
import classes from './navigation.css'

const Navigation = () => {
    return (
        <React.Fragment>
            <nav className={classes.navigation}>
                <i className="fas fa-chevron-left"></i>
                <h1>Vensa</h1>
                <p>HELP</p>
            </nav>
            <div className={classes.currentMonth}>
                <p>August</p>
                <i className="far fa-calendar"></i>
            </div>
        </React.Fragment> 
    )
    
}

export default Navigation 