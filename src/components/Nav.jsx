import React from 'react'
import { useState, useEffect } from 'react'


const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY} `
  },
};

const Nav = () => {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 25 }, (_, i) => currentYear - i);


    const [genreList, setGenreList] = useState([]);
    const [langs, setLangs] = useState([]);

    const fetchGenres = async () => {
        const endpoint = `${API_BASE_URL}/genre/movie/list?language=en`;
        try {
            const response = await fetch(endpoint, API_OPTIONS);
            if (!response.ok) {
                console.log("Failed to get response");
            }
            const data = await response.json();
            console.log(data.genres);
            if (data.genres === 'False') {
                console.error("Fetch data error");
                setGenreList([]);
                return;
            }
            setGenreList(data.genres || []);
            console.log("Genres fetched successfully");

        } catch (error) {
            console.error(`Error fetching genres: ${error}`);
        }
    }

    const fetchLangs = async () => {
        const endpoint = `${API_BASE_URL}/configuration/languages`;
        try {
            const response = await fetch(endpoint, API_OPTIONS);
            if (!response.ok) {
                console.log("Failed to get lang response");
            }
            const data = await response.json();
            console.log(data);
            if (data === 'False') {
                console.error("Fetch lang data error");
                setLangs([]);
                return;
            }
            setLangs(data || []);
            console.log("Langs fetched successfully");

        } catch (error) {
            console.error(`Error fetching langs: ${error}`);
        }
    }

    useEffect(() => {
        fetchGenres();
        fetchLangs();
    }, []);


  return (
    <>
<div style={{position: 'relative', zIndex: '200', backdropFilter: 'blur(5px)', padding: '10px', borderRadius: '0px 0 15px 15px', backgroundColor: '#8181812b'}} className="container-lg dlfix-header">
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="tubelight">
                    <a style={{fontSize: '6px', textDecoration: 'none'}}
                        href="/m"><span>D</span><span>F</span><span>L</span><span>I</span><span>X</span><span>
                            MOVIES</span>
                    </a>
                </div>
            </div>
            <br />
            <div className="search-container mx-auto d-flex align-items-center justify-content-center mt-5  mt-md-0"><span
                    className="search-block"></span>
                <div className="b">
                    <div className="boxs">
                        <select className="searchselect" name="category" id="category">
                            <option value="m">Movies</option>
                            <option value="s">Series</option>
                        </select>
                        <input className="search-input" type="text" placeholder="Search Here" id="searchbox"
                            name="searchbox" autoComplete="off" required>
                        </input>
                        <div className="result" style={{position:'absolute'}} ></div>
                    </div>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
            <div className="container-fluid containercustom">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' style={{color: 'rgb(103 245 0)'}}>GENRES</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {genreList.map((genre) => (
                                    <li key={genre.id}><a className='dropdown-item' href={`/m/genre/${genre.id}/${genre.name}`}>{genre.name}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href={`/m/genre/${28}/Action`}>Action</a>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href={`/m/genre/${16}/Animation`}>Animation</a>
                        </li>

                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/lang/bn'>Bangla</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {years.map((year) => (
                                    <li key={`bangla-${year}`}><a className='dropdown-item' href={`/m/lang/bn/${year}`}>{year}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/lang/en'>English</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {years.map((year) => (
                                    <li key={`eng-${year}`}><a className='dropdown-item' href={`/m/lang/en/${year}`}>{year}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/lang/hi'>Hindi</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {years.map((year) => (
                                    <li key={`hindi-${year}`}><a className='dropdown-item' href={`/m/lang/hi/${year}`}>{year}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/lang/ta'>Tamil</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                               {years.map((year) => (
                                    <li key={`tamil-${year}`}><a className='dropdown-item' href={`/m/lang/ta/${year}`}>{year}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link'>Others</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {langs.map((lang) => (
                                    <li key={lang.iso_639_1}><a className='dropdown-item' href={`/m/lang/${lang.iso_639_1}`}>{lang.english_name}</a></li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Nav