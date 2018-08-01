import React from 'react';

const QuakesList = (props) => {
    console.log(props, ' this is props');

    const quakesList = props.quakes.map((quake, i) => {
        return (
            <div>
                <li key={i}>
                    <h3>{quake.properties.title}</h3>
                </li>
            </div>
        )
    })

    return (
        <div>
            <ul>
                {quakesList}
            </ul>
        </div>
    )
}

export default QuakesList;
