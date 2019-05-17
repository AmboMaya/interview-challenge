import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/en-nz'
import 'react-day-picker/lib/style.css'


export default class Date extends React.Component {
	constructor(props) {
	super(props)
		this.handleDayChange = this.handleDayChange.bind(this)
		this.state = {
			selectedDay: null,
		}
	}

	handleDayChange(e , {selected}) {
		return this.props.selectedDay(e) ? selected : undefined
	}

	render() {
		const FORMAT = 'YYYY-MM-DD'
	return (
		<div>
			<DayPickerInput
				onDayChange={this.handleDayChange}
				format={FORMAT}
				parseDate={parseDate}
				placeholder={`${formatDate(new Date(), FORMAT)}`}
				dayPickerProps={{
				disabledDays: {
					daysOfWeek: [0, 6],
				},
				}}
			/>
		</div>
	)
	}
}
