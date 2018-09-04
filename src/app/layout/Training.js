import React, { Component } from "react";
import { posts } from "./training-data.js";
import { authors } from "./training-data.js";

const postings = { posts };

class Training extends Component {
  state = {
    posts: postings,
    currentPage: 1,
    todosPerPage: 3
  };

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => {
          return <li key={post.id}>{post.body}</li>;
        })}
      </div>
    );
  }
}

export default Training;
