/* eslint-disable react/prop-types */
const Stats = (props) =>{
    if(props.goods == 0 && props.bads == 0 && props.neutrals == 0)
    {
        return(
            <div>
                <h2>Statistics</h2>
                <span>No feedback given </span>
            </div>
        )
    }
    else{
        return(
        <div>
            <h2>Statistics</h2>
            <div>
                Good: {props.goods} | Neutral: {props.neutrals} | Bad: {props.bads}
            </div>
            <div>
              <div>Total: {props.goods + props.bads + props.neutrals}</div> 
              <div>Average: {(props.goods + props.bads + props.neutrals)/3}</div> 
              <div>Positive: {(props.goods)/((props.goods + props.bads + props.neutrals)/100)}%</div>
            </div>
        </div>
        )
    }

}

export default Stats 