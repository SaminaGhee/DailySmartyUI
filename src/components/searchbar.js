import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    constructor() {
        super()
        this.handleFormubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input}/>
    }

    render() {
    
        // const SearchBar = () => {
         const { handleSubmit } = this.props;

            return (
                <form className={`search-bar search-bar__${this.props.page}`} onSubmit={this.props.handleSubmit}>
                   <div className='search-bar__wrapper'>
                   <Field name="query" component={this.renderInput}/>
                    <p>Press return to Search</p>
                    </div>
                </form>
            )
        // }
    }

}
SearchBar = reduxForm({
    form: 'searchBar'
}) (SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;