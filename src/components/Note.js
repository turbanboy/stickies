import { MdDeleteForever } from 'react-icons/md';
import Draggable from 'react-draggable';

const Note = ({id, text, handleDeleteNote}) => {

    return <Draggable>
        <div className = "note">
        <span className = 'textfornote'>{text}</span>
        <div className = 'note-footer'>
            <small></small>
            <MdDeleteForever 
            onClick = {()=> handleDeleteNote(id)} 
            className = 'delete-icon'  
            size ='1.5em' />
        </div>
    </div>
    </Draggable>;
};


export default Note;