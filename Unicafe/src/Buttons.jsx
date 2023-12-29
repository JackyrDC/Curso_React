import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.handler}>
            {props.text}
        </button>
    );
}

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Button
