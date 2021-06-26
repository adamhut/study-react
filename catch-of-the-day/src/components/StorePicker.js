
import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    render(){
        return (
            <form action="" className="store-selector">
                { /** comment */ }
                <h2> pelase enter a store</h2>
                <input type="text" required placeholder="store name"  defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}


export default StorePicker;