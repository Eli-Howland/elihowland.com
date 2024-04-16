import React from 'react'

interface Props {
    width: number
}

const Linkedin = ({width}: Props) => {
    return (
        <a href="https://www.linkedin.com/in/eli-howland/" target="_blank">
            <img src="/src/assets/linkedin_image.png" alt="linkedin link" style={{maxWidth: `${width}%`}}/>
        </a>
      )
}

export default Linkedin