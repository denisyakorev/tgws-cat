import React, {Component} from 'react'
import {connect} from 'react-redux';
import ModuleBody from './ModuleBody';

class Content extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.module = {};
        this.state.module.title = '';

    }

    shouldComponentUpdate(nextProps, nextState){
	    return this.props.pubStore.moduleCode !== nextProps.pubStore.moduleCode
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
          nextProps.loadModule(pub_data);
          this.setState({module:pub_data});
        }
    }

    render(){
        console.log('state', this.state);
        console.log('props', this.props);
		return (
            <section className="fdb-block">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1>{this.props.pubStore.module.title}</h1>                                                        
                        </div>                        
                    </div>
                    <ModuleBody />
                </div>
            </section>
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