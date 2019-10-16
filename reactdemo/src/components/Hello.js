import React, { Component } from 'react'
import axios from 'axios'

export default class Hello extends Component {
    constructor(props){
        super(props)
        this.state={
            users:null
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> this.setState({ users:response.data.map(user=>[user.name, user.id]) }));
        // .then((response)=> {
        //     let temp = this.state.users.concat(JSON.parse(response.data))
        //     this.setState({users:temp})
        //     this.setState({ users:response.data.map(user=>user.name)})
        //     });            
        };


    render() {
        console.log(this.state.users)
        return (
            <div>
             {this.state.users}
            </div>
        )
    }
}
