//props are read only components that are shared between components
// A parent component can send value to a child component eg. <Component key=value />
//propTypes is a mechanism that ensures that the passed value is of the correct datatype
//defaultProps is a default values for the props incase they are not passed from parent components

import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
    
};


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.boolean,

}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student