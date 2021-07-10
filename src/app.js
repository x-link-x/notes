const Note = require('./models/note');

document.addEventListener('DOMContentLoaded', function() {
    
    const handleFormSubmit = function(e) {
        e.preventDefault();
        const notes = document.querySelector('#notes-list');
        const newNote = createNote(e.target);
        notes.appendChild(newNote);
        form.reset();
    }

    // const formatDate = function(date) {
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();
    //     return `${day}/${month}/${year}`;
    // }

    const createNote = function(form) {
        const note = document.createElement('li');
        const dateNow = new Date();
        // const date = formatDate(dateNow);
        const noteObject = createNoteObject(dateNow, form.category_select.value, form.content.value, form.important.value);
        note.appendChild(noteObject.formatDate(dateNow)); // changed
        note.appendChild(noteObject.content);
        note.appendChild(noteObject.category);
        return note
    }

    const createNoteObject = function (date, category, content, important) {
        const dateInfo = document.createElement('h3');
        dateInfo.textContent = date;
        const categoryInfo = document.createElement('p');
        categoryInfo.textContent = category;
        categoryInfo.classList.add('category');
        const contentInfo = document.createElement('p');
        contentInfo.textContent = content;
        const note = new Note(dateInfo, categoryInfo, contentInfo, important);
        
        note.setCategoryColor();
        return note;
    };
    
    const form = document.querySelector('#add-note-form');
    form.addEventListener('submit', handleFormSubmit);

});