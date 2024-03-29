import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'


const Appointment = (props) => {
    return (
    <Card>
        <div className="card">
            <p>{props.name}</p>
            <p>{props.title}</p>
        </div>
    </Card>
    )
}

export default Appointment

