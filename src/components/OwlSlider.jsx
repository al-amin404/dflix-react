import React from 'react'
import MovieCard from './MovieCard'
import '../assets/owlcarousel/owl.config.js'
import '../assets/owlcarousel/owl.carousel.min.js'
import '../assets/owlcarousel/assets/owl.theme.default.min.css'
import '../assets/owlcarousel/assets/owl.carousel.min.css'

const OwlSlider = () => {
  return (
    <div className="container-lg mb-5 mt-4 pb-4" style={{ backgroundColor: '#f3f3f32b', borderRadius: '20px' }}>
        <br />
        <div className="main-content">
            <div className="owl-carousel owl-theme moviegrid ow1 owl-loaded owl-drag">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
            <div className="owl-theme">
                <div className="owl-controls">
                    <div className="custom-nav owl-nav cn1"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OwlSlider