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


        // const currYear = new Date().getFullYear();
        // const lastYear = [];

        // for(i=0; i < 25; i++) {
        //     lastYear.push(currYear - i);
        // }
        // console.log(lastYear);



    const [genreList, setGenreList] = useState([]);

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

    useEffect(() => {
        fetchGenres();
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
                                className='nav-link' style={{color: 'rgb(103 245 0)'}} href="/s">Series</a></li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link'>CDS</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='http://cdn1.discoveryftp.net'>CDS-1</a></li>
                                <li><a className='dropdown-item' href='http://cdn2.discoveryftp.net'>CDS-2</a></li>
                                <li><a className='dropdown-item' href='http://cdn3.discoveryftp.net'>CDS-3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><button id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"
                                className="fa-solid fa-angles-down float-end mobiletoggle  align-middle"></button><a
                                className="nav-link">4K</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li> <a className="dropdown-item" href="/m/uhd/Animation"> Animation</a></li>
                                <li> <a className="dropdown-item" href="/m/uhd/Bangla"> Bangla</a></li>
                                <li> <a className="dropdown-item" href="/m/uhd/English"> English</a></li>
                                <li> <a className="dropdown-item" href="/m/uhd/Hindi"> Hindi</a></li>
                                <li> <a className="dropdown-item" href="/m/uhd/Others"> Others</a></li>
                                <li> <a className="dropdown-item" href="/m/uhd/Tamil"> Tamil</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link'>GENRES</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                {genreList.map((genre) => (
                                    <li key={genre.id}><a className='dropdown-item' href={`/m/genre/${genre.name}`}>{genre.name}</a></li>
                                ))}
                            </ul>
                        </li>

                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/Animation'>Animation</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/Animation/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/Animation/2000'>2000</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/Bangla'>Bangla</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/Bangla/2000'>2000</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/English'>English</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/English/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/English/2000'>2000</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/Hindi'>Hindi</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/2000'>2000</a></li>
                                <li><a className='dropdown-item' href='/m/type/Hindi/1900'>1900</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/Others'>Others</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/Others/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/Others/2000'>2000</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link' href='/m/category/Tamil'>Tamil</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2025'>2025</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2024'>2024</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2023'>2023</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2022'>2022</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2021'>2021</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2020'>2020</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2019'>2019</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2018'>2018</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2017'>2017</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2016'>2016</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2015'>2015</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2014'>2014</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2013'>2013</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2012'>2012</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2011'>2011</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2010'>2010</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2009'>2009</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2008'>2008</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2007'>2007</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2006'>2006</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2005'>2005</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2004'>2004</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2003'>2003</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2002'>2002</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2001'>2001</a></li>
                                <li><a className='dropdown-item' href='/m/type/Tamil/2000'>2000</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><button id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"
                                className="fa-solid fa-angles-down float-end mobiletoggle  align-middle"></button><a
                                className="nav-link">DUAL</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li> <a className="dropdown-item" href="/m/dual/Animation"> Animation</a></li>
                                <li> <a className="dropdown-item" href="/m/dual/Bangla"> Bangla</a></li>
                                <li> <a className="dropdown-item" href="/m/dual/English"> English</a></li>
                                <li> <a className="dropdown-item" href="/m/dual/Hindi"> Hindi</a></li>
                                <li> <a className="dropdown-item" href="/m/dual/Others"> Others</a></li>
                                <li> <a className="dropdown-item" href="/m/dual/Tamil"> Tamil</a></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'><button id='navbarDropdown' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'
                                className='fa-solid fa-angles-down float-end mobiletoggle  align-middle'></button><a
                                className='nav-link'>Language</a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li> <a className='dropdown-item' href="/m/lan/Afrikaans">Afrikaans</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Akan">Akan</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Amharic">Amharic</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Arabic">Arabic</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Assamese">Assamese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Basque">Basque</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Bengali">Bengali</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Bulgarian">Bulgarian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Burmese">Burmese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Cantonese">Cantonese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Catalan">Catalan</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Croatian">Croatian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Czech">Czech</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Danish">Danish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Dutch">Dutch</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Dzongkha">Dzongkha</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/English">English</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Estonian">Estonian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Finnish">Finnish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/French">French</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Galician">Galician</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Ganda">Ganda</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Georgian">Georgian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/German">German</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Greek">Greek</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Gujarati">Gujarati</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Hebrew">Hebrew</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Hindi">Hindi</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Hungarian">Hungarian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Icelandic">Icelandic</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Indonesian">Indonesian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Irish">Irish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Italian">Italian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Japanese">Japanese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Kannada">Kannada</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Kashmiri">Kashmiri</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Khmer">Khmer</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Korean">Korean</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Kurdish">Kurdish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Latin">Latin</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Latvian">Latvian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Lithuanian">Lithuanian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Macedonian">Macedonian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Malay">Malay</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Malayalam">Malayalam</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Maltese">Maltese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Mandarin">Mandarin</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Marathi">Marathi</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Mongolian">Mongolian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Nepali">Nepali</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/No Language">No Language</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Norwegian">Norwegian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Norwegian Bokmål">Norwegian Bokmål</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Oriya">Oriya</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Ossetian">Ossetian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Persian">Persian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Polish">Polish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Portuguese">Portuguese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Punjabi">Punjabi</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Pushto">Pushto</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Romanian">Romanian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Russian">Russian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Serbian">Serbian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Serbo-Croatian">Serbo-Croatian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Sinhalese">Sinhalese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Slovak">Slovak</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Slovenian">Slovenian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Sotho">Sotho</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Spanish">Spanish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Swahili">Swahili</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Swedish">Swedish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Tagalog">Tagalog</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Tamil">Tamil</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Telugu">Telugu</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Thai">Thai</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Tibetan">Tibetan</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Turkish">Turkish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Ukrainian">Ukrainian</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Urdu">Urdu</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Vietnamese">Vietnamese</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Wolof">Wolof</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Yiddish">Yiddish</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Yoruba">Yoruba</a></li>
                                <li> <a className='dropdown-item' href="/m/lan/Zulu">Zulu</a></li>
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