import React, { Component } from "react";
import PhotoWall from "./Photowall";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 0,
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: 1,
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: 2,
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
      screen: "photo", // photo or addPhoto
    };

    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  removePhoto(id) {
    this.setState((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({ posts: [...state.posts, postSubmitted] }));
  }

  navigate() {
    this.setState({
      screen: "addPhoto",
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Title title={"PhotoWall"} />
                <PhotoWall
                  posts={this.state.posts}
                  onRemovePhoto={this.removePhoto}
                  onNavigate={this.navigate}
                />
              </div>
            )}
          />
          <Route
            path="/AddPhoto"
            render={({ history }) => (
              <div>
                <AddPhoto
                  onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push("/");
                  }}
                />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
