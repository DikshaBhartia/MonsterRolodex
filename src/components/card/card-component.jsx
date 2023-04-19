import { Component } from "react";
import cardComponent from '../card/card-component';
import './card-component.styles.css';

class CardComponent extends Component{
    render(){
        const{name, email, id } =  this.props.monster;

        return(
            <div className="card-container" key={'id'}>
            <img 
              alt={`monster ${name}`}                      
              src={`https://robohash.org/${id}?set==set2&size180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
);
    }

}

export default CardComponent;