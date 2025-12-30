import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems'


const Works = () => {

    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData)
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name
            })
            setProjects(newProjects)

        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }
    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => {
                    return (
                        <span
                            key={index}
                            className={`work__item ${active === index ? "active-work" : ""}`}
                            onClick={(e) => handleClick(e, index)}
                        >
                            {navItem.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((elem) => {
                    return <WorksItems item={elem} key={elem.id} link={elem.link}/>
                })}
            </div>

        </div>
    )
}

export default Works