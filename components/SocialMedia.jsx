import React from 'react'
import {BsTwitter,BsGithub,BsLinkedin} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/VishnuM35921148" target='_blank' rel='noreferrer' > <BsTwitter/></a>
          
        </div>
        <div>
        <a href="https://github.com/vishnu1777" target='_blank' rel='noreferrer' >   <BsGithub/></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/vishnu-m-21a5ab1b2" target='_blank' rel='noreferrer'> <BsLinkedin/></a> 
        </div>
    </div>
  )
}

export default SocialMedia