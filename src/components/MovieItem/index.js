import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachActionMovie} = props
  const {thumbnailUrl, videoUrl} = eachActionMovie
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          <li className="movies-item">
            <img src={thumbnailUrl} alt="thumbnail" />
          </li>
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div>
            <div className="video-container custom-style">
              <button
                type="button"
                className="trigger-button "
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} />
              </div>
            </div>
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
