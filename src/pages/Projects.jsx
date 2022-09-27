import React, { useEffect, useState } from 'react'

const Projects = (props) => {
    const [projects, setProjects] = useState(null)
    const getProjects = async () => {
        const response = await fetch(props.URL + "projects")
        const projectsData = await response.json()
        setProjects(projectsData)
    }
    useEffect(() => {
        getProjects()
    }, [])

    const loaded = () => {
        return (
            projects.map((item) => (
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} />
                    <p><a href={item.live}>Deployed Link</a> | <a href={item.git}>GitHub</a> </p>
                    <hr />
                </div>
            ))
        )
    }
    return (
        projects ? loaded() : <h1>Loading...</h1>
    )
}

export default Projects