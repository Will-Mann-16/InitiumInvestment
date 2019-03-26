import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalNode = document.createElement('div');
document.getElementById('root').after(portalNode);


export default class Portal extends Component{
    constructor(){
        super();
        this.el = document.createElement('div');
    }
    componentDidMount(){
        portalNode.appendChild(this.el);
    }
    componentWillUnmount(){
        portalNode.removeChild(this.el);
    }
    render(){
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}