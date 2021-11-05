import Note from './Note';
import NoteAdd from './NoteAdd';

const Canvas = ({ notes, handleAddNote, handleDeleteNote }) => {
    return(
        <div className = 'canvas-list'>
            {notes.map((note)=> (
            <Note 
            id = {note.id} 
            text = { note.text} 
            handleDeleteNote = {handleDeleteNote}
            />
            
            ))}
            <NoteAdd handleAddNote = {handleAddNote}/>
        </div>
    )
};

export default Canvas;