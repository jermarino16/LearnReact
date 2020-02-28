import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={"Today at 4:45pm"}
        avatar={faker.image.avatar()}
        blogText={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={"Today at 5:45pm"}
        avatar={faker.image.avatar()}
        blogText={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo={"Today at 6:45pm"}
        avatar={faker.image.avatar()}
        blogText={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
