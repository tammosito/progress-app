import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware
} from "react-router-redux";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import activitiesReducers from "./reducers";
import App from "./components/App";
import ActivityDetail from "./components/ActivityDetail";
import styled from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";
import moment from "moment";
moment.locale("de");

const initialState = {
	activities: [
		{
			title: "Jogging",
			unit: "km",
			id: 1,
			items: []
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

const theme = createMuiTheme({
	palette: {
		type: "light" // Switching the dark mode on is a single property value change.
	},
	overrides: {
		MuiListItemText: {
			text: {
				color: "rgba(255, 255, 255, 0.95)"
			}
		},
		MuiListSubheader: {
			root: {
				color: "rgba(255, 255, 255, 0.95)"
			}
		}
	}
});

const RootContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`;

class RootApp extends Component {
	constructor() {
		super();
		this.state = { rehydrated: false };
	}
	componentDidMount() {
		// begin periodically persisting the store
		// Do not persist navigation state and forms
		persistStore(store, {}, () => {
			this.setState({ rehydrated: true });
		});
	}
	render() {
		if (!this.state.rehydrated) {
			return <div />;
		}
		return (
			<MuiThemeProvider theme={theme}>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<RootContainer>
							<Route exact path="/" component={App} />
							<Route
								path="/detail/:id"
								component={ActivityDetail}
							/>
						</RootContainer>
					</ConnectedRouter>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<RootApp />, document.getElementById("root"));
registerServiceWorker();
