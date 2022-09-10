import { Component } from 'react';


export class GroceryList extends Component {

    state ={
        userInput: "",
        groceryList: [],
    }
onFormSubmit(e){
    e.preventDefault();
}


handleChange (event) {
  this.setState({ userInput: event});
 // console.log(event);
}
 
addItem(input) {
    if (input !== '') {
        let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({ groceryList: listArray, userInput: ''});
   // console.log(listArray);
    }
    
}

 deleteItem(event) {
    const li = event.target;
    li.classList.toggle("deleted");
  }

deleteList (){
    let listArray = this.state.groceryList;
    listArray =[];
    this.setState({groceryList: listArray});
}



    render() {
        return(
            <div className='center'>
                <form onSubmit={this.onFormSubmit}>
                <div>
                    <input 
                    type="text" 
                    placeholder='i need'
                    onChange={ (event) => {this.handleChange(event.target.value)} }
                    value={this.state.userInput}/>
                    <button onClick={()=> this.addItem(this.state.userInput)}>ADD</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.deleteItem}  key={index}>  { item } ❎ </li>
                    ))
                    }
                </ul>
                <button className='delete' onClick={()=> this.deleteList(this.state.userInput)}>
                    DELETE
                </button>
                </form>
            </div>
        )
    }
    
}

