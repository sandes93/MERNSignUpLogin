import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
    error: {},
    auth: {
        isAuthenticated: false,
        user: {},
        loading: false
    },
    data: {
        transaction: [
            {
                id: '123',
                created_date: '2021-02-01',
                amount: 100,
                type: 'credit'
            }
        ],
        assets: [],
    }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export default store;
