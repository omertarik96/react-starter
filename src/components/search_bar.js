// User inputs a text and the component search the text in youtube api to get search results

import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: 'chess'};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }



}

export default SearchBar;

