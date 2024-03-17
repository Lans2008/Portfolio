import './Heading.css'

const Heading = (props) => {
    const {title} = props;
    return (
        <div className="heading">
            <div className="title-heading">
                <h1>{title}</h1>
            </div>
            <div className="bar-heading"><p>.</p></div>
        </div>
    )
}

export default Heading;