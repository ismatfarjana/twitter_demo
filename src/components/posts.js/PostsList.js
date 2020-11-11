import React from "react";
import PostCreate from "./PostCreate";
import { connect } from "react-redux";
import { fetchTweeets } from "../../actions";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchTweeets();
  }

  render() {
    return (
      <div>
        <h4 className="container-body">Home</h4>
        <div className="writetweet">
          <PostCreate />
        </div>

        <div className="allPosts">
          <div className="full_list">All Dweets</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchTweeets })(PostsList);
