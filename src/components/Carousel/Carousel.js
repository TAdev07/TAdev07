import React, {Component} from 'react';
import styles from './Carousel.module.css';

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#."
        className={`${styles.arrow} ${styles.arrow_left}`}
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#."
        className={`${styles.arrow} ${styles.arrow_right}`}
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          href="#."
          className={`${styles.indicator} ${
            this.props.index === this.props.activeIndex
              ? styles.indicator_active
              : ''
          }`}
          onClick={this.props.onClick}
        >
          .
        </a>
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={`${styles.slide} ${
          this.props.index === this.props.activeIndex ? styles.slide_active : ''
        }`}
      >
        <img src={this.props.slide.img} className={styles.img} alt="" />
      </li>
    );
  }
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  goToPrevSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  };

  goToNextSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />

        <ul>
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />

        <ul className={styles.indicators}>
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
