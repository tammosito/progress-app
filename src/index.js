import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {persistStore, autoRehydrate} from 'redux-persist'
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware,
} from "react-router-redux";
import { Provider } from "react-redux";
import activitiesReducers from "./reducers";
import App from "./components/App";
import ActivityDetail from "./components/ActivityDetail"
import registerServiceWorker from "./registerServiceWorker";

const initialState = {
	activities: [
		{
			title: "Jogging",
			unit: "km",
			id: 1,
			items: [
				{
					timestamp: 1508350310411,
					value: 6,
					id: 1
				}
			]
		}
	]
};

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	combineReducers({
		activities: activitiesReducers,
		router: routerReducer
	}),
	initialState,
	composeEnhancers(applyMiddleware(...middleware), autoRehydrate())
);

persistStore(store)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/detail/:id" component={ActivityDetail}></Route>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
