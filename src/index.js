import React,{Component}from  'react'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Home from "./app/views/pages/home";
import store from "./app/state/store";
import FirebaseWrapper from './app/state/firebase'

class App extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return <Provider store={store}>
            <TestComp/>
            <hr/>
            <Home/>
        </Provider>
    }
}

class TestComp extends Component{
    constructor(props) {
        super(props);
        this.state={data:[]};
        this.doAction=this.doAction.bind(this);
        this.getDataBase();
    }
    doAction(){
        console.log(this.state.data);
    }

    getDataBase(){
        /*
        FirebaseWrapper.getRef('sample/').orderByKey().on('value',
            (snapshot)=>{
            this.setState({data:snapshot.val()});
        });
         */
        //FirebaseWrapper.AddData('sample2/',{1:{ID:1,Name:1},2:{ID:2,Name:2}});
        //FirebaseWrapper.DeleteData('sample2/')
    }
    render() {
        //if(this.state.data.length==0)this.getDataBase();
        return <div>
            <button onClick={this.doAction}>DB</button>
        </div>
    }

}
TestComp=connect((state)=>state)(TestComp);

render(<App/>,document.getElementById('app'));