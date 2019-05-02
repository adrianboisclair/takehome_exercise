import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './pages/about';
import { searchGiphyByTerm } from './actions';
import Nav from "./components/nav";
import Carousel from './components/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  showAboutPage() {
    return <About />
  }

  getImages() {
    return this.props.result.map(item => item.images.downsized.url);
  }

  render() {
    const images = this.getImages();
    const {
      searchGiphyByTerm,
      searchTerm,
    } = this.props;

    return (
      <div className="AppContainer">
        <Nav />
        <Search
          searchTerm={searchTerm}
          handleSearch={searchGiphyByTerm}
        />
        <hr/>
        <Carousel images={images} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    result,
    searchTerm,
  } = state.home;

  return ({
    result,
    searchTerm,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    searchGiphyByTerm: (searchTerm) => dispatch(searchGiphyByTerm(searchTerm)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
