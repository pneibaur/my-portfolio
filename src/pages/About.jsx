import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    const [about, setAbout] = useState(null)

    const getAbout = async () => {
        const response = await fetch (props.URL+"about")
        const aboutData = await response.json()
        setAbout(aboutData)
    }

    useEffect(() =>{
        getAbout()
    }, [])

    const loaded = () => {
        return (
            <div className='main'>
                <img src={about.headshot} alt={about.name} />
                <h1>{about.name}</h1>
                <h2>{about.flare}</h2>
                <h3>{about.email} | <Link className='link' href={about.gitHub}>GitHub</Link> | <Link className='link' href={about.linkedIn}>LinkedIn</Link></h3>
                <p><strong>EDUCATION: </strong>{about.education}</p>
                <p><strong>INTERESTS: </strong>{about.interests}</p>
                <p><strong>PERSONALITY: </strong>{about.personality}</p>
                <p><strong>PERSONAL ACCOMPLISHMENTS: </strong>{about.personal_accomplishments}</p>
                <p><strong>PROFESSIONAL ACCOMPLISHMENTS: </strong>{about.professional_accomplishments}</p>
            </div>
        )
    }
    return (
        about ? loaded() : <h1>Loading...</h1>
    )
}

export default About