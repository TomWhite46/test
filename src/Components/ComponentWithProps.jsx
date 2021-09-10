import PropTypes from 'prop-types';

const ComponentWithProps = ({header, content, number, nonexistent}) => {

    return(

        <>
            <h1 className="big">{header}</h1>
            <p>{content}</p>
            <p>{number}</p>
            <p>{nonexistent}, and here's some additional text.</p>
        </>
    );
};

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

ComponentWithProps.defaultProps = {
    nonexistent: "This text is the default",
};

export default ComponentWithProps;