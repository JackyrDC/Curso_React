/* eslint-disable react/prop-types */

const NoteRender = (props) => {
    
 return(
    <div>
       <h1>{props.title}</h1>
       <span>{props.body}</span>
    </div>
    )
}

export default NoteRender