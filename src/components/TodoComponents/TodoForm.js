import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            itemName: ""
        };
    }

    render(){
        return(
            <form>
                <input
                    type='text'
                    name='item'
                    value={this.state.itemName}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;