import React,{Component}from  'react'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Home from "./app/views/pages/home";
import store from "./app/state/store";


class App extends Component{
    render() {
        return <Provider store={store}>
           <Home/>
        </Provider>
    }
}


render(<App/>,document.getElementById('app'));