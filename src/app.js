const Note = require('./models/note');

document.addEventListener('DOMContentLoaded', function() {

    const handleFormSubmit = function(e) {
        e.preventDefault();
        const notes = document.querySelector('#notes-list');
        const newNote = createNewNote(e.target);
        notes.appendChild(newNote);
        form.reset();
    }
    
    const form = document.querySelector('#add-note-form');
    form.addEventListener('submit', handleFormSubmit);


});