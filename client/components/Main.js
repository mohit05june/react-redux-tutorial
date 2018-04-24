import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagrm</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}