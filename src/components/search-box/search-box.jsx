import { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component{
     render(){
        const { onSearchHandler } = this.props;

        return(
            <div>
                <input className='search-box' type='search' placeholder='search monsters' 
                onChange={onSearchHandler}/>
            </div>
        )
     }
}

export default SearchBox;