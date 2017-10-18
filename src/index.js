import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
	activities: [
		{
			title: "Joggen",
			unit: "km",
			id: 1,
			items: [
				{
					timestamp: 1508350310411,
					value: 1337,
					id: 1
				}
			]
		}
	]
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
  )
registerServiceWorker();