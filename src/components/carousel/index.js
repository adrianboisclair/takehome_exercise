import React from "react";
import Slider from "react-slick";
import Card from '@material-ui/core/Card';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  renderImages() {
    return this.props.images.map(child =>
      <Card>
        <img src={child.replace(/^http:\/\//i, 'https://')} key={Math.random()}/>
      </Card>
    );
  }

  renderNextPrevControls() {
    return (
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={this.previous}>
          Previous
        </button>
        <button className="button" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    return (
      <div className="slider__container">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.renderImages()}
        </Slider>
        {this.renderNextPrevControls()}
      </div>
    );
  }
}

export default SimpleSlider;