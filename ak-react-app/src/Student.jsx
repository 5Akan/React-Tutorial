import PropTypes from 'prop-types'
function Student(props) {
    return(
        <div className = "student">
            <p>Name: {props.name}</p>
            {/* "props" above is an object that stores
            key-value pairs and "name" is  one of its 
            properties and also the key for 
            the key-value */}
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes":"No"}</p>
        </div>
    )
}
Student.PropTypes = {
     name: PropTypes.string,
     age: PropTypes.number,
     isStudent:PropTypes.bool,
}
 
export default Student