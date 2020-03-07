import React,{Component} from "react";
import {connect} from "react-redux";
import * as duckSelectors from "../../state/duck/selectors";
import * as duckActions from "../../state/duck/actions";
import * as duck2Selectors from "../../state/duck2/selectors";
import * as duck2Actions from "../../state/duck2/actions";


class Home extends Component{

    constructor(props) {
        super(props);
        this.doAction=this.doAction.bind(this);
    }
    doAction(e){
        this.props.dispatch(duckActions.default.addAction());
    }
    render() {

        return (<div>
            <h1>Counter Home</h1>
            <p>{this.props.count}</p>
            <button onClick={this.doAction}>Up</button>
            <button>Down</button>
            <hr/>
            <Mes/>
        </div>);
    }
}
Home=connect(duckSelectors.default)(Home);



class Mes extends Component{
    constructor(props) {
        super(props);
        this.state={message:''};
        this.doAction=this.doAction.bind(this);
        this.doChange=this.doChange.bind(this);
    }
    doChange(e){
        this.setState({message:e.target.value});
    }
    doAction(e){
        //submitの場合
        e.preventDefault();

        this.props.dispatch(duck2Actions.default.changeAction(this.state.message));
    }
    render(){
        return(<div>
            <h1>Message Home</h1>
            <p>{this.props.message}</p>
            <form onClick={this.doAction}>
                <input type="text" size="40" onChange={this.doChange}/>
                <input type="submit" value="Change"/>
            </form>
        </div>);
    }
}
Mes=connect(duck2Selectors.default)(Mes);

export default Home;
