import React from 'react'
import {render} from 'react-dom'

import App from './components/App'


var xhr = new XMLHttpRequest();
var api_url = 'http://localhost:8000/api/publication_detail/2'
xhr.open('GET', api_url, false);
xhr.send();
if (xhr.status !== 200) {
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  //alert(xhr.responseText);
  var pub_data = JSON.parse(xhr.responseText);

}


render(<App pub_data={pub_data}/>, document.getElementById('root'))

