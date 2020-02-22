import React, { Component } from 'react';
import Header from './Header.js';
import { withRouter } from 'react-router-dom';

class AddRoom extends Component {
        constructor(props){
        super(props)
        this.state = {
            type: '',
            title: '',
            color: ''
        }
      }
    addType = (e) => {
        this.setState({type:e.target.value});
    }  

    addTitle = (e) => {
        if(e.target.value.length <= 5){
            this.setState({title:e.target.value});
        }
        else{
            alert('Limited to 5 characters');
            this.props.history.push({
                pathname: '/'
            })
        }
    }

    addColor = (e) => {
      this.setState({color:e.target.value});
    }

    createRoom = () => {
        if(this.state.type !== '' && this.state.title !== '' && this.state.color !== ''){
            this.props.history.push({
                pathname: '/',
                state: {
                    type: this.state.type, 
                    title: this.state.title, 
                    color: this.state.color
                }
            })
        }
        else{
            alert("ERROR");
            this.props.history.push({
                pathname: '/'
            })
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="input-group mb-3">
                <form style={{margin:'25px'}}>

                    <div className="input-group-prepend" style={{marginTop: '15px'}}>

                        <select className="custom-select" id="inputGroupSelect01" onChange={this.addType}>
                            <option>Choose...</option>
                            <option>Bedroom</option>
                            <option>Bathroom / Toilet</option>
                            <option>Kitchen</option>
                        </select>
                    </div>

                    <div className="form-group" style={{width:'30rem', marginTop: '15px'}}>
                        <input type="text" className="form-control" id="example" onChange={this.addTitle} placeholder="Name of room" style={{marginTop: '15px'}}></input>
                        <input type="color" className="form-control" id="example" onChange={this.addColor} placeholder="Color" style={{marginTop: '15px'}}></input>
                        <button type="button" onClick={this.createRoom} className="btn btn-primary" style={{marginTop: '15px'}}>Create</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default withRouter(AddRoom);
