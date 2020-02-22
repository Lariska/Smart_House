import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.history.location.state.type,
            title: props.history.location.state.title,
            color: props.history.location.state.color,
            products: props.history.location.state.products || [],
            selectValue: '',
            flag: false
        }
    }
    show=()=>{
        if(this.state.flag === true){
            return(
                <div>  
                    <div className="input-group mb-3" style={{width: '50%', height: '50%', margin: '20%'}}>
                        <select className="custom-select" id="inputGroupSelect03" onChange={this.addValue}>
                            <option>Choose product...</option>
                            <option>Stereo system</option>
                            <option>Boiler</option>
                            <option>Lamp</option>
                            <option>Air-Conditioner</option>
                        </select>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.addProduct}>Add product to room</button>
                        </div>
                    </div> 
                </div>
            )
        }
    }
    addValue = (e) =>{
        this.setState({selectValue:e.target.value});
    }

    addProduct = () => {
        if(this.state.products.length < 5){ 
            let stereoSystem = this.state.products.filter(product => product[0].includes("Stereo system"));
            if((stereoSystem.length === 1 && this.state.selectValue === "Stereo system") || (!this.state.type.includes("Kitchen") && this.state.selectValue === "Boiler")){
                alert('Error')
            }
            else{
                this.setState({products:[...this.state.products, [this.state.selectValue, 'red']]})
            }
        }
        else{
            this.setState({flag:false})
            alert('Error');
        }
    }

    changeColor=(e, i)=>{
        this.setState({products: this.state.products.map((element, index) => {
            if(index === i){
                element[1] = element[1] === 'green' ? 'red': 'green';
            }
            return element;
        })})
    }

    back = () => {
        this.props.history.push({
            pathname: '/',
            state: {
                title: this.state.title, 
                products: this.state.products
            }
        })
    }

    render() {
        return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="navbar-brand" href="#">
                        <a href="#" onClick={this.back} style={{color: 'black'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5moT8Tpd_WO1pXCXquMKAHhDJKUOtNl50sJkX47cbl89wYHSQ&s" width="30" height="30" className="d-inline-block align-top" alt=""></img>  
                            Smart House
                        </a>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col" style={{marginTop:'10px'}}>
                        <div className="card-body">
                            <h5 className="card-type">type: {this.state.type}</h5>
                            <h5 className="card-title">title: {this.state.title}</h5>
                            <button type="button" className="btn btn-success" onClick={()=>{this.setState({flag:true})}}>Add Product</button>
                        </div>
                    </div>
                    <div className="col" style={{marginTop:'10px'}}>
                        {this.state.products.map((element, i) => {
                            return <button className="list-group-item list-group-item-action" onClick={() => this.changeColor(element, i)} style={{backgroundColor:element[1]}} key={i}>
                                {element[0]}
                                </button>
                        })}
                    </div>
                </div>
            </div>
            {this.show()}
        </div>
        )
    }
}

export default withRouter(Room);
