import React from 'react';
import ReactDOM from 'react-dom';

import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux'

import App from './components/App';




const initialState = {
	publicationCode: '',
	publication: {},
	moduleCode:'',
	module: {},
	pubApiEndpoint: 'http://localhost:8000/api/publication_detail/3204-A-00-0-0-00-00-A-022-A-D',
	moduleApiEndpoint: 'http://localhost:8000/api/module_detail/'
}


function updatePubStore(state=initialState, action){
	switch(action.type){
		case 'LOAD_PUBLICATION':
			return{
				...state,
				publication: action.payload
			};

		case 'CHANGE_MODULE':
			return{
				...state,				
				moduleCode: action.payload
			};

		case 'LOAD_MODULE':
			return{
				...state,
				module: action.payload
			}
		default:
			return state
	}	
}

const store = createStore(updatePubStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var xhr = new XMLHttpRequest();
var api_url = 'http://localhost:8000/api/publication_detail/3204-A-00-0-0-00-00-A-022-A-D'
xhr.open('GET', api_url, false);
xhr.send();
if (xhr.status !== 200) {
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  //alert(xhr.responseText);
  var pub_data = JSON.parse(xhr.responseText);

}
store.dispatch({type: 'LOAD_PUBLICATION', payload: pub_data});

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Route path="/" component={App}/>
		</HashRouter>
	</Provider>,
	 
	document.getElementById('root')
	);

//<App pub_data={pub_data}/>,