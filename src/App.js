import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchString: ''
    };
      
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState({monsters: users}));
  }    

  
  onSearchChange = (event)=>
  {
    const searchString= event.target.value.toLowerCase();
    this.setState({searchString})
  }

  render(){

  const { monsters, searchString } = this.state;
  const { onSearchChange } = this;
    const filteredMonster= monsters.filter((monster)=>
          {
            return monster.name.toLowerCase().includes(searchString)
          });

  return (
    <div className = "App">
      <h1 className='app-title'> Monster Rolodex </h1>
      <SearchBox onSearchHandler={onSearchChange}/>
      <CardList monsters={filteredMonster} />
      
    </div>
  );
}
};

export default App;

