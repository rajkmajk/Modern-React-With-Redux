import React from "react";

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        //first time using props in a class based component
        //the only difference is that we put 'this' in front of props
        this.props.onSubmit(this.state.term);
    }

    // to avoid automatic call for everytime the component renders, 
    //we don't put () after this.onInputChange
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value})} 
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;