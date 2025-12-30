import React from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems'


const Works = () => {
    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span key={index} className="work__item">{item.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projectsData.map((elem)=>{
                    return <WorksItems item={elem} key={elem.id} />
                })}
            </div>

        </div>
    )
}

export default Works