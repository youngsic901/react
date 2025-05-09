import { Component} from "react";

class MyName extends Component{
    // static defaultProps = {
    //     name:'한국인'
    // }
    render() {
        return(
            <div>
                안녕 이름은 <b>{this.props.name}</b>
                <br/>
                반가워 이름은 <b>{this.props.name}</b> <i>{this.props.addr}</i>
            </div>
        );
    }
}

MyName.defaultProps = {
    name: '한국인'
}

export default MyName;