// perhaps consider using a class here?
// class ActionTypes {
//   static CREATE = 'CREATE'
//   ...
// }
// also, this action types is a constant, but it's only
// used for redux, so maybe keeping this class inside of
// reducers sub directory could make some sense
export const CREATE = 'CREATE';
export const FETCH_ALL = 'FETCH_ALL';
export const FETCH_BY_SEARCH = 'FETCH_BY_SEARCH';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const LIKE = 'LIKE';
export const AUTH = 'AUTH';
export const LOGOUT = 'LOGOUT';
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
