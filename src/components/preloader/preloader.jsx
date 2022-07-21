import React from "react";

import preloader from '../preloader/preloader.svg'


let Preloader = () => {
    return <div>
        <img src={preloader} />
        <h2>Enable geoposition</h2>
    </div>

}


export default Preloader;