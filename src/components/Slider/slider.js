import React from 'react';
import { connect } from 'react-redux';

import { prev, next, dot } from '../../actions';

import './slider.scss'

const Slider = ({ slider, left, activeIndex, sliderWidth, prev, next, dot }) => {

  const itemStyle = {
    left: left,
    width: sliderWidth + 'px',
  }

  return (
    <div className="main">
      <div className="slider-wrapper">
        <ul style={{ width: sliderWidth * slider.length }} className="slider">
          {slider.map((item, index) => {
            return (
              <li key={index} style={itemStyle} className={index + 1 === activeIndex ? 'slider-item' : 'hide'}>
                <img src={item} alt={item} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="buttons-wrapper">
        <button className="prev-button" onClick={prev}>
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="next-button" onClick={next}>
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
      <div className="dots-wrapper">
        <ul className="dots">
          {slider.map((item, index) => {
            return (
              <li
                key={index}
                className={index + 1 === activeIndex ? 'active-dot' : ''}
                onClick={(e) => (dot(e.target.textContent))}
              >
                {index + 1}
              </li>
            )
          })}
        </ul>
      </div>
    </div >
  );
};

const mapStateToProps = ({ slider, activeIndex, sliderWidth, left }) => {
  return {
    slider,
    activeIndex,
    sliderWidth,
    left
  };
};

const mapDispatchToProps = {
  prev,
  next,
  dot
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
