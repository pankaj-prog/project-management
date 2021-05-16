import React from 'react'

function ProjectDetails(props) {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae quis voluptas facilis commodi? Sint repudiandae aliquam, magnam fugiat, magni dignissimos adipisci placeat inventore iure porro dolores vel sed eaque. A veritatis esse nostrum numquam voluptatem recusandae debitis! Maiores minima enim debitis perferendis vero expedita eos. Nihil eum aliquam in accusamus repellendus, minima odit error vel voluptatibus, sunt sint quae debitis nulla dolore suscipit, minus blanditiis deserunt eaque porro tenetur tempora! Impedit qui quidem consequatur dolorum. Ea magni quos voluptates.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the net ninja</div>
                    <div>16th May, 3PM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
