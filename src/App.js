import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter } from 'react-router-dom';
import Header from './components/Header.js';

let state = {
  list:[],
  listProducts:{},
}

class App extends Component {

  constructor(props) {
      super(props);
      // Retrieve the last state
      this.state = state;
      if (this.props.history.location.state) {
            this.type = this.props.history.location.state.type 
            this.title = this.props.history.location.state.title
            this.color = this.props.history.location.state.color
            this.products = this.props.history.location.state.products
      }
  }
  create = (type, title, color) => {
      this.setState({list:[...this.state.list,{type:type,title:title,color:color}]})
  }

  addProductsToList = (title = '', products = []) => {
      let updatedList = this.state.listProducts
      updatedList[title] = products
      this.setState({listProducts:updatedList})
    }
  
  goToAddRoom = () => {
      this.props.history.push({
          pathname: '/addroom',
      })
  }

  goToRoom = (i) => {
    this.props.history.push({
        pathname: '/room',
        state: {
          type: this.state.list[i].type, 
          title: this.state.list[i].title,
          color: this.state.list[i].color,
          products: this.state.listProducts[this.state.list[i].title],
      }
    })
  }


  componentWillUnmount() {
      // Remember state for the next mount
      state = this.state
  }
  componentDidMount() {
      if (this.type) {
        this.create(this.type, this.title, this.color)
      }
      if (this.products) {
        let prods = state.listProducts
        prods[this.title] = this.products
        this.setState({listProducts: prods})
      }
  }
  render() {

      return (
          <div>
              <Header/>
              <div className="text-center" style={{padding: '10px'}}>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.goToAddRoom}>Add a new Room</button> 
                </div>

                {this.state.list.map((element, i)=>{
                    return <button type="button" className="btn btn-link" style={{width: '15rem', height: '15rem', backgroundColor: element.color, margin: "10px", color: 'black'}} onClick={()=>this.goToRoom(i)} key={i}>
                      {element.title}
                    </button>
                })}
            </div>
      )
  }
}
export default withRouter(App);
