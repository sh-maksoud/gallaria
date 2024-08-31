import { NavLink, useParams } from 'react-router-dom'
import { data } from '../../../data/data'
import { CloseImage } from '../../components/CloseImage/CloseImage'
import { useState } from 'react'
import './Gallaria.css'

import View from '/assets/shared/icon-view-image.svg'
import NextArrow from '/assets/shared/icon-next-button.svg'
import BackArrow from '/assets/shared/icon-back-button.svg'

export function Gallaria() {
  const { id, name } = useParams()
  const thisData = data[id]
  const formattedName = thisData.name.split(' ').join('-').toLowerCase()

  const [viewImage, setViewImage] = useState(false)

  return (
    <div className={viewImage ? 'overlay' : 'overlay_hidden'}>
      <div className={viewImage ? 'full_image' : 'full_image_hidden'}>
        <button onClick={() => setViewImage(false)}>
          <img src={View} alt="View" />
          close image
        </button>
        <CloseImage src={thisData.images.gallery} />
      </div>
      <div className="artist_container">
        <div className="artist_container_main">
          <div className="slide_images_container">
            <div className="slide_images">
              <div className="painting_image">
                <img
                  src={thisData.images.hero.large}
                  className="painting_image"
                  alt={thisData.name}
                />
                <div
                  className="view_image"
                  onClick={() => setViewImage(true)}
                >
                  <img src={View} alt="View" />
                  <p>view image</p>
                </div>
              </div>
            </div>
            <div className="title">
              <h1>{thisData.name}</h1>
              <p>{thisData.artist.name}</p>
            </div>
            <div className="artist_image">
              <img src={thisData.artist.image} alt={thisData.artist.name} />
            </div>
          </div>
          <div className="slide_text_container">
            <h1>{thisData.year}</h1>
            <p>{thisData.description}</p>
            <a
              href={`https://en.wikipedia.org/wiki/${thisData.name.split(' ').join('_')}`}
              target="_blank"
              rel="noreferrer"
            >
              Go to source
            </a>
          </div>
        </div>
        <footer>
          <div className="progress_bar">
            <div
              className="progress_value"
              style={{ width: (parseFloat(id) + 1) * 6.66 + '%' }}
            ></div>
          </div>
          <div className="footer_content">
            <div className="footer_text">
              <h1>{thisData.name}</h1>
              <p>{thisData.artist.name}</p>
            </div>
            <div className="footer_controls">
              <NavLink
                to={`/gallaria/${thisData.id - 1}/${data[thisData.id - 1]?.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
                title="Previous Artwork"
                className={
                  thisData.id === 0
                    ? 'blocked_button'
                    : 'active_button'
                }
              >
                <img
                  src={BackArrow}
                  alt="Go Back"
                  className={
                    thisData.id === 0
                      ? 'blocked_button'
                      : 'active_button'
                  }
                />
              </NavLink>
              <NavLink
                to={`/gallaria/${thisData.id + 1}/${data[thisData.id + 1]?.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
                title="Next Artwork"
                className={
                  thisData.id === 14
                    ? 'blocked_button'
                    : 'active_button'
                }
              >
                <img
                  src={NextArrow}
                  alt="Go Forward"
                  className={
                    thisData.id === 14
                      ? 'blocked_button'
                      : 'active_button'
                  }
                />
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
