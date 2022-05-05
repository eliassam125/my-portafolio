import Loader from 'react-loaders'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLatters';
import './index.scss'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rw8p5fx', 'template_zc5ea2a', form.current, 'VIopf_L3ihZGR8qdP')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={'text-animate'}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>
                    </h1>
                    <p>
                        blablalblalblalbvslla
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>

                        </form>
                        
                        
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>


    )


}

export default Contact