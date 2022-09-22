// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
//
// mission_name"
// "launch_year"
// "links" > "mission_patch_small"

import React, {useEffect} from 'react';

function RoketLaunches() {


    useEffect(()=>{
        fetch('https://***')
            .then(value => value.json())
            .then(value => {});
    })

    return (
        <div>

        </div>
    );
}

export default RoketLaunches;