//propTypes is a mechanism that ensures that the passed value is of the correct datatype
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

export default Student