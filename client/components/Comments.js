import React from 'react';

export default class Comments extends React.Component{
    constructor(props) {
        super(props);
        // binding this fuction with this, so that we can access this
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("submitting comment");
    
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(author, comment);

        this.props.addComment(postId, author, comment);

        this.refs.commentForm.reset();
    }

    render(){
        return (
            <div className="comment">
                 {/*Was getting problem to bind 'this' with renderComment() - solution below*/}
                {this.props.postComments.map(this.renderComment.bind(this))}

                <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden/>
                </form>    
            </div>
        );
    }
}