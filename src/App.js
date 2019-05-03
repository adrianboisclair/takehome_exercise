import React, { Component } from 'react'
import { connect } from 'react-redux'
import {searchGiphyByTerm, setIsLoadingStatus, setSearchTerm} from './actions';
import Nav from "./components/nav";
import Progress from "./components/progress";
import Carousel from './components/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/search";
import {DEFAULT_SEARCH_TERM} from './constants';

class App extends Component {
  componentDidMount() {
    this.props.setSearchTerm(DEFAULT_SEARCH_TERM);
    this.props.searchGiphyByTerm(DEFAULT_SEARCH_TERM);
  }

  getPropsFromImages() {
    return {
      titles: this.props.result.map(item => item.title),
    }
  }

  getImages() {
    const { result } = this.props;
    return result.map(item => item.images.fixed_height.url);
  }

  render() {
    const images = this.getImages();
    const {
      isLoading,
      routes,
      searchGiphyByTerm,
      searchTerm,
      setSearchTerm,
    } = this.props;

    return (
      <div className="AppContainer">
        <Nav
          links={routes}
          handleSearch={searchGiphyByTerm}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Search
          isLoading={isLoading}
          handleSearch={searchGiphyByTerm}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Progress
          isLoading={isLoading}
        />
        <hr/>
        <Carousel images={images} props={this.getPropsFromImages()} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    isLoading,
    result,
    routes,
    searchTerm,
  } = state.home;

  return ({
    isLoading,
    result,
    routes,
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
