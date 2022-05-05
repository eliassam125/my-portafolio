import './index.scss' 
import AnimatedLatters from '../AnimatedLatters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGitAlt, faHtml5, faJsSquare, faReact,  faJava, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About =() => {
    return (
        <>
        <div className="conatiner about-page">
            <div className='text-zone'>
            <h1>
                    <AnimatedLatters 
                    letterClass={'text-animate'}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
            </h1>
            <p >
              1 blablalblalblalbvslla
            </p>
            <p>
              2 blablalblalblalbvslla
            </p>
            <p>
              3  blablalblalblalbvslla
            </p>
            </div>

          <div className='stage-cube-cont'>
              <div className='cubespinner'>
                  <div className='face1'>
                      <FontAwesomeIcon icon={faJava} color="#E1E0AF"/>
                  </div>
                  <div className='face2'>
                      <FontAwesomeIcon icon={faHtml5} color="#D47924"/>
                  </div>
                  <div className='face3'>
                      <FontAwesomeIcon icon={faCss3Alt} color="#24C5D4"/>
                  </div>
                  <div className='face4'>
                      <FontAwesomeIcon icon={faReact} color="#098EBF"/>
                  </div>
                  <div className='face5'>
                      <FontAwesomeIcon icon={faJsSquare} color="#DFE32D"/>
                  </div>
                  <div className='face6'>
                      <FontAwesomeIcon icon={faGitAlt} color="#FF1B39"/>
                  </div>
              </div>
          </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About