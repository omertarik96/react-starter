// User inputs a text and the component search the text in youtube api to get search results

import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { terms: ''};
    }

    render() {
        return (
            <div>
                <input 
                value = {this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }



}

export default SearchBar;

