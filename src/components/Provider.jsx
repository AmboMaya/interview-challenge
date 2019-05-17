import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'


const Provider = (props) => {
    return (
    <Card>
        <div className="card">
            <p>{props.name}</p>
            <p>{props.title}</p>
            <p>{props.descsription}</p>
        </div>
    </Card>
    )
}

export default Provider

