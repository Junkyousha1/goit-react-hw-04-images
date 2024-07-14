import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import Notiflix from 'notiflix';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      Notiflix.Notify.failure('Enter your search query');
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            onInput={this.handleInputChange}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
          <button type="submit" className={styles.searchFormButton}>
            search
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
