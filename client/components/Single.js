import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            console.log('------this.props.location 222-------',this.props.location);
            console.log('------nextProps.location 222222-------',nextProps.location);
          // this.setState({ prevPath: this.props.location })
        }
    }
    render(){
        // reading postId from params , from store
        const { postId } = this.props.params;

        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        console.log(post);

        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    }
}