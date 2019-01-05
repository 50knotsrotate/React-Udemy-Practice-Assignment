import React, {Component} from 'react';
import Validation from './validation';
import Text from './text';

class Input extends Component {

deleteHandler = (index) => {
    let letters = this.state.text.split('');
    letters.splice(index,1);

    this.setState({
        text: letters.join('')
    })
}


    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render(){

        const letters = this.state.text.split('').map((letter, index) => {
            return (
                
            <Text word = {letter} key = {index} clicked = {this.deleteHandler.bind(this, index)}/>
            
            )
        })
        return(
            <div>
                <input onChange = {this.handleChange} type = 'text' value = {this.state.text}></input>
                <p>{this.state.text}</p>
                <Validation wordLength = {this.state.text.length}  />
                {letters}
            </div>
        )
    }
    
   

   
}

export default Input;
