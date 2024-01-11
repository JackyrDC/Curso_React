const Phone = (props) => {
    return(
        <div>
            <div>
                <h3>{ props.name }</h3>
                <h4>{props.phoneNumber}</h4>
            </div>
            <div>
                <h4>{props.email}</h4>
            </div>
        </div>
    )
}

export default Phone