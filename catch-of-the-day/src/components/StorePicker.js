
import React from 'react'


class StorePicker extends React.Component {
    render(){
        return (
            <form action="" className="store-selector">
                { /** comment */ }
                <h2> pelase enter a store</h2>
                <input type="text" required placeholder="store name" />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}


export default StorePicker;