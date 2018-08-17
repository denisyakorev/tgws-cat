import React, {Component} from 'react'
import {connect} from 'react-redux';
import ModuleBody from './ModuleBody';

class Content extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.module = {};
        this.state.module.title = '';
        this.state.module.id = '';
        this.state.module.is_category = true;
        this.state.module.content_json = '{}';

    }

    shouldComponentUpdate(nextProps, nextState){
        return !(this.props.pubStore.moduleCode === nextProps.pubStore.moduleCode && this.props.pubStore.module.id === nextProps.pubStore.module.id)
    }

    componentWillUpdate(nextProps, nextState){
        var xhr = new XMLHttpRequest();
        var api_url = nextProps.pubStore.moduleApiEndpoint + nextProps.pubStore.moduleCode
        xhr.open('GET', api_url, false);
        xhr.send();
        if (xhr.status !== 200) {
          alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
          var pub_data = JSON.parse(xhr.responseText);
          this.props.loadModule(pub_data);
          this.setState({module:nextProps.pubStore.module});
        }
    }

    render(){
        return (           
                    <ModuleBody />                
			)
	}
}





export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({
        loadModule: (newModule) => {
            dispatch({type: 'LOAD_MODULE', payload: newModule});
        }
    })
	)(Content);