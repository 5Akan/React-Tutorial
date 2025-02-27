//useContext - A react hook that allows you to share multiple
// value of components without passing props through each level
import ComponentC from "./ComponentC";
function ComponentB(params) {
    return(
    <>
    <div className="box">
        <h1>Component B</h1>
        <ComponentC />
    </div>
    </>)
}

export default ComponentB;
