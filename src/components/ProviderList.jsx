import React, { Component } from 'react'
import request from 'superagent'
import Provider from './Provider'

export default class ProviderList extends Component {

    state = {
        providers: []
    }
    componentDidMount () {
        this.getProvider()
        this.getProfilePic()
    }

    getProvider = (e) => {
        const apiURL = this.state.apiURL
        request.get(apiURL + `Provider/${this.props.id}`)
        .then(res => {
            this.setState({providers: JSON.parse(res.body)})
            console.log(res)
        })      
        .catch((err) => err) 
    }

    getProfilePic = (e) => {
        const apiURL = this.state.apiURL
        request.get(apiURL + `Picture/${this.props.id}`)
        .then(res => {
            JSON.parse(res.body).map( id => ({ id  }))
        })      

    }

    render () {
        const providers = this.state.providers.map(provider => {
            return <Provider key={provider.Id} 
                        id={provider.Id}
                        name={provider.Name} 
                        title={provider.Title} 
                        decription={provider.Description} 
                        languange={provider.Language.forEach(element => {
                            return element.Language})}
                    />
            })

        return (
            {providers}    
        )
    }
}


