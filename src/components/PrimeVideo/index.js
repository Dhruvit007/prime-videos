import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-banner"
      />
      <div className="prime-video-item-section">
        <div>
          <h1 className="movies-type-section-heading">Action Movies</h1>
          <MoviesSlider moviesList={moviesList} category="ACTION" />
        </div>
        <div>
          <h1 className="movies-type-section-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={moviesList} category="COMEDY" />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
