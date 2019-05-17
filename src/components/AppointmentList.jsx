import React from 'react'
import request from 'superagent'
import Appointment from './Appointment'

export default class AppointmentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiURL: 'https://frontendchallenge2019.azurewebsites.net/api/',
            appointments: [],
            providerDetails: [],
            availableSlots: [],
        }
    }

    componentDidMount () {
        this.getAppointments()
    }

    getAppointments = (e) => {
        const apiURL = this.state.apiURL
        request.get(apiURL + `Schedule/${this.props.selectedDay}`)
        .then(res => {
            this.setState({appointments: JSON.parse(res.body)})
            console.log(res)
        })      
        .catch((err) => err) 
    }

    getProviderDetails = () => {
        request.get('https://frontendchallenge2019.azurewebsites.net/api/Provider/{id}')
    }

    render () {
        const appointments = this.state.appointments.map(appointment => {
            return <Appointment key={appointment.Id} id={appointment.Id} title={appointment.Title} name={appointment.Name} time={appointment.AvailableSlots}/>
        })
        
        return (
            <div>
                {appointments}
            </div>
            
        )
    }
}