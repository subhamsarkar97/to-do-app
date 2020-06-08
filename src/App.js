import React,{Component} from 'react';
import './App.css';
import ShowList from './ShowList'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);

class App extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      list:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    
  }

    addItem = (e) => {
      e.preventDefault();
      const newItem = this.state.currentItem
      console.log(newItem)
      if(newItem!== ""){
        const newItems = [...this.state.list, newItem]
        this.setState({
          list: newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }

  
    
    handleInput = (e) => {
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }

    setUpdate = (text,key) => {
          const items = this.state.list
          items.map(items => {
            if(items.key === key){
              items.text = text
              }
          })
          this.setState({
            list:items
          })
        }

    deleteItem = (key) => {
      const filteredItems = this.state.list.filter(item => item.key!== key);
      this.setState({
          list:filteredItems
      })
    }
    
  render(){ 
      return(
          <div className="app">
              <header>
                  <form id="to-do-form" onSubmit = {this.addItem}>
                      <input type="text" placeholder="Enter Text" className = "input1"   value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                      <button className="btn" type="submit">Add</button>
                  </form>
              </header>
              
             
              <section>
                  <div className="List_Item">
                      <ShowList list = {this.state.list} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>
                  </div> 
              </section> 
            
          </div>
      
      )
    } 
}
export default App;
