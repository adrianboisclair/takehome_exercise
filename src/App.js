import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchGiphyByTerm, setSearchTerm } from './actions';
import Nav from "./components/nav";
import Carousel from './components/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/search";
import { DEFAULT_SEARCH_TERM } from './constants';

class App extends Component {
  componentWillMount() {
    this.props.setSearchTerm(DEFAULT_SEARCH_TERM);
    this.props.searchGiphyByTerm(DEFAULT_SEARCH_TERM);
  }

  getImages() {
    return this.props.result.map(item => item.images.downsized.url);
  }

  render() {
    const images = this.getImages();
    const {
      searchGiphyByTerm,
      searchTerm,
      setSearchTerm,
    } = this.props;

    return (
      <div className="AppContainer">
        <Nav />
        <Search
          handleSearch={searchGiphyByTerm}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
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
    searchGiphyByTerm: searchTerm => dispatch(searchGiphyByTerm(searchTerm)),
    setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
