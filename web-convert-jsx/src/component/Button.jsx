import PropTypes from 'prop-types'; // ES6


const Button = ({nameButon, age}) => {
  // console.log(age);

  return (
    <a className="btn btn-outline-dark mt-auto" href="#">
    {nameButon }
  </a>
  )
}

// Props Type
Button.propTypes = {
  nameButon: PropTypes.string,
  age: PropTypes.number
}


export default Button