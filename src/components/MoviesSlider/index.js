import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {moviesList, category} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === category,
  )
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {actionMoviesList.map(eachActionMovie => (
          <MovieItem eachActionMovie={eachActionMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
