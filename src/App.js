import React, { Component } from 'react'
import Navigation from '../src/components/Navigation/NavigationHeader'
import Date from './components/Date'
import AppointmentList from './components/AppointmentList'
import moment from 'moment'


class App extends Component {
	state = {
		date : moment().format(),
		
	}

	selectedDayListener = (e) => {
		this.setState({date:moment(e)})	}

	clickHandler = (e) => {

	}
	
	render () {

		return (
			<div className='app'>
				<Navigation />
				<Date selectedDay={this.selectedDayListener}/>
				<AppointmentList selectedDay={this.state.date} onClick={this.clickHandler}/>
			</div>
		)
	}
}

export default App
