import React, { useEffect, useState } from 'react'

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
            <div>
                <img src={about.headshot} alt={about.name} />
                <h1>{about.name} </h1>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }
    return (
        about ? loaded() : <h1>Loading...</h1>
    )
}

export default About