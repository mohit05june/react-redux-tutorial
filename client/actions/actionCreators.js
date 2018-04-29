// increment
export function increment(index) {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
  
  // add comment
  export function addComment(postId, author, comment) {
    console.log("action creator -- comment added");
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
  }
  
  // remove comment
  
  export function removeComment(postId, i) {
    console.log("action creator -- comment removing");
    return {
      type: 'REMOVE_COMMENT',
      i,
      postId
    }
  }
  
  // store last location
  
  export function lastLocation(path) {
    console.log("action creator -- lastLocation", path);
    return {
      type: 'LAST_lOCATION',
      path
    }
  }