
import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    // constructor(){

    //     super();

    //     console.log("gonna create our component");
    //     this.goToStore = this.goToStore.bind(this);

    // }

    myInput = React.createRef();
    
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /** comment */ }
                <h2> pelase enter a store</h2>
                {/* <button type="button" onClick={this.handleClick}>Click Me!!!</button> */}
                <input 
                    required 
                    type="text" 
                    placeholder="store name"
                    defaultValue={getFunName()}
                    ref={this.myInput}
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }  
    
    goToStore = (event) => {
        console.log('going to store')   
        //1. stop the form from submitting
        event.preventDefault();
        //2. get the text from that input
        console.log()
        //3. Change the page to /store/{whatever-they-enter}
    }

    // handleClick(){
    //     alert('HeYYY')
    // }




}


export default StorePicker;