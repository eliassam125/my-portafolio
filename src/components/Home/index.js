import {  useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLatters'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import Loader from 'react-loaders'


const Home = () => {

  const [letterClass] = useState('text-animate')

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]




    return (
        <>
          <div className="container home-page">
            <div className="text-zone">
              <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img
                  src={LogoTitle}
                  alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
              </h1>
              <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
              <Link to="/my-portafolio/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
          
          </div>
          <Loader type='pacman'/>
        </>
      
      )


}
export default Home