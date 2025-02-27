//useContext - A react hook that allows you to share multiple
// value of components without passing props through each level

import React, {useContext} from 'react';
import ComponentD from "./ComponentD";
import {UserContext} from './ComponentA'

function ComponentC(paras) {

    const user = useContext(UserContext);
    return(
    <>
    <div className="box">
        <h1>Component C</h1>
        <h2>{`Hello again ${user}`}</h2>
        <ComponentD />
    </div>
    </>)
}

export default ComponentC;
