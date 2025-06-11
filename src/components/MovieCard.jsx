import React from 'react'

const MovieCard = ({movie:
    {title, poster_path, release_date,original_language, popularity,vote_count, id}
}) => {
  return (
    <>
        <div className="card">
            <a href={`/m/view/${id}`} className="cfocus">
                <span className="movie_details_span_end">1080-BR DUAL</span>
                <div className="poster"  title="1080P-BR  DUAL">
                    <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '../assets/images/blank_poster.png'} alt={title}/>
                </div>
            </a>
            <div className="details">
                <h3 className='text-start'>{title}</h3>
                <div className="feedback">
                    <span className="movie_details_span">{release_date ? release_date.split('-')[0] : 'N/A'}</span>
                    <span className="movie_details_span" style={{ color: 'aliceblue', float: 'right' }}>{vote_count}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default MovieCard