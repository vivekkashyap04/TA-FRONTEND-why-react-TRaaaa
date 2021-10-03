import PropTypes from 'prop-types';
function Button(props) {
  return <button>{props.name}</button>;
}

Button.prototype = {
  name: PropTypes.string.isRequired,
};

export default Button;
