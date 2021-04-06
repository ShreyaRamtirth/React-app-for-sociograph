import './App.css';
import React,{Component} from 'react';
import Reviews from './components/Reviews';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={search:'',review:''
  }
  }

  changeText(event) {
    this.setState({
      search:event.target.value
     
  });
  }
  changeReview(event){
    this.setState({
      review:event.target.value
     
  });
  
}

  render() {

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
     
      <div className="Heading">
        <h1>
          Reviews
        </h1>     
        
      </div>
      <div className="Search_By_Product_Id">  
        <div className="searchbox">
        <input id="search" list="products" type="text" placeholder="Search for Reviews of Product Id"  onChange={this.changeText.bind(this)} required />        
        <datalist id="products">
          <option value="1">Masala Fish Meal by Europa's</option>
          <option value="2" >Masala Prawns Meal by Fasoos</option>
          <option value="3" >Masala Prawns Meal by Fasoos</option>
          <option value="4" >Masala Prawns Meal by Fasoos</option>
        </datalist>
        <span className="material-icons">search</span>
        </div>
       
      </div>
      {/* <h1>{this.state.review}</h1> */}
      
      <div className="sorting">
      
        <select name="Rating" id="rates" onChange={this.changeReview.bind(this)}  >
        <option disabled selected value> -- select an option -- </option>
        <option value="high">Highest to Lowest</option>
        <option value="low">Lowest to Highest</option>  
        </select>
      
      </div>
      <Reviews no={this.state.search} ro={this.state.review}/>
    </div>
  );
}
}
export default App;
