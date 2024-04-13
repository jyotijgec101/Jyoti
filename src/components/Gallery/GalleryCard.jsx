import { useState } from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  
} from '@fortawesome/free-solid-svg-icons'

import './Gallery.css'

const Gallery = ({galleryImages},props) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div style={props.styleimg} >

      {openModal && 
        <div className='sliderWrap galani' >
          
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev text-4xl' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext text-4xl' onClick={nextSlide} />
          <div className='fullScreenImage ' onClick={handleCloseModal}>
            <LazyLoadImage src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-6' >
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single lg:border-[6px] border-[4px] hover:scale-105 transition-transform border-slate-700' 
                style={{ boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)" }}
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <LazyLoadImage src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery