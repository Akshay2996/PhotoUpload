import Main from "./components/Main";
import "./App.css";
import "./styles/style.css";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

const App = connect(mapStateToProps)(Main);

// this.props.posts

export default App;
