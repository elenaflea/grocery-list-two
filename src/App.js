import logo from './images/logo4.png';
import './App.css';
import { GroceryList } from './GroceryList';
// import DatingProfile from './DatingProfile';
import { Likes } from './Likes';
import MyLinks from './MyLink';



function App() {
  return (
    <div className="App">
      <div className='food'></div>
      <div className='container'>
      <img src={ logo } className="App-logo" alt="logo" />
      <p className='myShopping'>My Shopping</p>
      <p className='list'>LIST</p>

      < GroceryList />
      <Likes /> 
      <MyLinks />
      </div>
       
      
  </div>
  );
}

export default App;
