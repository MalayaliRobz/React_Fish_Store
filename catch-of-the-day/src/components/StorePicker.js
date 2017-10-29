import React from 'react';
import {getFunName } from "../helpers";


class StorePicker extends React.Component {
    //constructor() {
    //    super();
    //    this.goToStore= this.goToStore.bind(this);
    //}
    goToStore(event) {
        event.preventDefault();
        // first grab text from box
        console.log(this.storeInput.value);
        const storeId=this.storeInput.value;
        // sec transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    render() {
        // normal comments
        return (
            <form className="store-selector" onSubmit={(e)=> this.goToStore(e)}>
                { /* jsx comment*/}
                <h2> Please Enter a Store</h2>
                <input type="text" required placeholder=" Store Name"
                defaultValue={getFunName()} ref={(input)=>{this.storeInput= input}} />
                <button type="submit">Visit Store</button>
            </form>
            
            
        )
    }
}
StorePicker.contextTypes = {
    router : React.PropTypes.object
}
export default StorePicker;