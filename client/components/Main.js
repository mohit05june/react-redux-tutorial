import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.location !== this.props.location) {
            console.log('------this.props.location-------',this.props.location);
            console.log('------nextProps.location-------',nextProps.location);
            this.props.lastLocation(this.props.location);
            window.previousLocation = this.props.location;
          // this.setState({ prevPath: this.props.location })
        }
    }

    render(){
        const path = this.props;
        console.log('-----this.props.routeData -------',this.props.routeData);
        return (
            <div>
                <div>
                    <h2>Last locatio --</h2><span>{this.props.routeData}</span>
                </div>
                <h1>
                    <Link to="/">Reduxstagrm</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}