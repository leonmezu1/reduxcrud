// Cada reducer tiene su propio this.state.

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
