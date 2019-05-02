import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './pages/about';
import { searchGiphyByTerm, setSearchTerm } from './actions';
import Nav from "./components/nav";
import Carousel from './components/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

  handleOnTextChange(event) {
    const { value } = event.target;

    this.setState({ value });
    this.props.setSearchTerm(value)
  }



  render() {
    const images = this.props.result.map((item) => {
      console.log(item);
      return item.images.downsized.url;
    });
    return (
      <div>
        <Nav />
        <div className="searchContainer">
          <TextField
            id="standard-uncontrolled"
            label="Search for an Image"
            defaultValue=""
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.searchGiphyByTerm(this.props.searchTerm)}
            style={{ marginTop: '16px', marginBottom: '8px'}}
          >
            Search Giphy
          </Button>
        </div>
        <hr/>
        <Carousel>
          {images}
        </Carousel>
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
    setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
    searchGiphyByTerm: (searchTerm) => dispatch(searchGiphyByTerm(searchTerm)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
