//useContext - A react hook that allows you to share multiple
// value of components without passing props through each level
import React, {useState, createContext} from 'react';
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
    
    const [user, setUser] = useState("Akanimoh");
    return(
        
        <div className = "box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value = {user}>
             <ComponentB/>
        </UserContext.Provider>
      
        </div>
    )
}

export default ComponentA;
