const initialState = {
  slider: [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
  ],
  sliderWidth: 750,
  activeIndex: 1,
  left: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'PREV_SLIDE':
      if (state.activeIndex === 1) {
        return {
          ...state,
          activeIndex: state.activeIndex + state.slider.length - 1,
          left: state.left - state.sliderWidth * (state.slider.length - 1)
        }
      }
      return {
        ...state,
        activeIndex: state.activeIndex - 1,
        left: state.left + state.sliderWidth
      }

    case 'NEXT_SLIDE':
      if (state.activeIndex === state.slider.length) {
        return {
          ...state,
          activeIndex: state.activeIndex - state.slider.length + 1,
          left: 0
        }
      }
      return {
        ...state,
        activeIndex: state.activeIndex + 1,
        left: state.left - state.sliderWidth
      }

    case 'BY_DOTS':
      return {
        ...state,
        activeIndex: Number(action.activeInd),
        left: state.sliderWidth - Number(action.activeInd) * state.sliderWidth
      }

    default:
      return state;
  }
};

export default reducer;
