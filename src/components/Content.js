import React, {Component} from 'react'
import {connect} from 'react-redux';

class Content extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.module = {};
        this.state.module.title = '';
        this.state.module.issue_number = '0';
        this.state.module.content_json = {};
        this.state.module.content_json.info = {};
        this.state.module.content_json.info.issue_date='';

    }

    shouldComponentUpdate(nextProps, nextState){
	    return this.props.pubStore.moduleCode != nextProps.pubStore.moduleCode
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
          this.state.module = pub_data;
          if (this.state.module.content_json){
              this.state.module.content_json = JSON.parse(this.state.module.content_json);
          }else{
              this.state.module.content_json = {}
          }


        }
    }

    render(){

		return (
            <section className="fdb-block">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1>{this.state.module.title}</h1>

                            <div className="row text-left pt-4">
                                <div className="col-12 col-md-6">
                                    <p className="text-h3">
                                        <strong>Редакция:</strong>

                                    </p>
                                    <p className="text-h3">
                                        <strong>Дата редакции:</strong>

                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="text-h3"></p>
                                </div>
                            </div>
                        </div>
                    </div>
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