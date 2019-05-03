import React from "react";
import Slider from "react-slick";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  button: {
    flex: '1',
    margin: '5px'
  },
  buttonContainer: {
    background: 'white',
    bottom: '0',
    display: 'flex',
    left: '0',
    position: 'fixed',
    right: '0',
    textAlign: "center",
    width: "100%",
  }
};

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
    return this.props.images.map(child => {
      const image = child.replace(/^http:\/\//i, 'https://');

      return (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={image}
              title="Image"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      );
    }

    );
  }

  renderNextPrevControls() {
    return (
      <div style={styles.buttonContainer}>
        <Button
          variant="contained"
          className="button"
          onClick={this.previous}
          style={styles.button}
        >
          Previous
        </Button>
        <Button
          fullWidth
          variant="contained"
          className="button"
          onClick={this.next}
          style={styles.button}
        >
          Next
        </Button>
      </div>
    );
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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