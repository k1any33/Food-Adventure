import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFoodPostsBySearch } from '../../actions/foodPosts';
import useStyles from './SearchStyles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const query = useQuery();
  // const page = query.get('page') || 1;
  // const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');

  const enterButtonHandler = (e) => {
    if (e.key === 'Enter') {
      searchFoodPost();
    }
  };

  const searchFoodPost = () => {
    if (search.trim()) {
      dispatch(getFoodPostsBySearch({ search }));
      navigate(`/food-posts/search?searchQuery=${search || 'none'}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search...'
        classes={{ input: classes.input }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={enterButtonHandler}
      />
    </div>
  );
};

export default Search;