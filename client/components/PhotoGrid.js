import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} post={post} Key={i} i={i}/>)}
            </div>
        );
    }
}