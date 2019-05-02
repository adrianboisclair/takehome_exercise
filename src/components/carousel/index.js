import React from "react";
import Slider from "react-slick";
import Card from '@material-ui/core/Card';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImages() {
    return this.props.images.map(child =>
      <Card>
        <img src={child.replace(/^http:\/\//i, 'https://')} key={Math.random()}/>
      </Card>
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {this.renderImages()}
      </Slider>
    );
  }
}

export default SimpleSlider;