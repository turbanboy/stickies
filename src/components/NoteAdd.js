import { useState } from "react";


const NoteAdd = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleAddClick = () => {
        //Empty Case
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    const handleClearClick = () => {
        window.location.reload();
    }

    return (
        <div className = 'note new'>
            <textarea 
            rows = '8'
            cols = '10'
            placeholder = 'Type a note here'
            value ={noteText}
            onChange = {handleChange}
            ></textarea>

            <div className = 'note-footer'>
                <button className = 'clear' onClick = {handleClearClick}>Clear</button>
                <button className = 'add' onClick = {handleAddClick}>Add</button>
            </div>
        </div>
    );
};

export default NoteAdd;