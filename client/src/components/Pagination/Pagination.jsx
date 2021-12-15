import { Pagination, PaginationItem } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFoodPosts } from '../../actions/foodPosts';
import useStyles from './PaginationStyles';

const Paginate = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { numberOfPages } = useSelector((state) => state.foodPosts);
  useEffect(() => {
    if (page) dispatch(getFoodPosts(page));
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant='outlined'
      color='primary'
      renderItem={(item) => <PaginationItem {...item} component={Link} to={`/food-posts?page=${item.page}`} />}
    />
  );
};

export default Paginate;
