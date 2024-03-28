import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    constructor() {
        super()
        this.handleFormubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = function({query}) {
        console.log('trying to handle submit for query', query);
        this.props.history.push('/results');
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input}/>
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className='search-bar' onSubmit={this.props.handleSubmit}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }

}
SearchBar = reduxForm({
    form: 'searchBar'
}) (SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;