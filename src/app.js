const Note = require('./models/note');

document.addEventListener('DOMContentLoaded', function() {
    
    const handleFormSubmit = function(e) {
        e.preventDefault();
        const notes = document.querySelector('#notes-list');
        const newNote = createNote(e.target);
        notes.appendChild(newNote);
        form.reset();
    }

    const handleDeleteClick = function() {
        const notes = document.querySelector('#notes-list');
        notes.innerHTML = "";
    }

    const handleToggleClick = function (category) {
        const notes = document.querySelectorAll('li');
        for (note of notes) {
            addCategoryToClasslist(note);
            if (note.classList.contains(`${category}`)) {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        }
    }

    const addCategoryToClasslist = function(note) {
        const h4 = note.querySelector('h4').textContent;
        note.classList.add(h4);
        note.classList.add('all');
        console.log(note);
    }

    const handleGeneralClick = function() {
        handleToggleClick('general');
    }

    const handleToDoClick = function() {
        handleToggleClick('to-do');
    }

    const handleMeetingsClick = function() {
        handleToggleClick('meetings');
    }

    const handleRemindersClick = function() {
        handleToggleClick('reminders');
    }

    const handleAllNotesClick = function() {
        handleToggleClick('all');
    }
    
    const formatDate = function(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const createNote = function(form) {
        const note = document.createElement('li');
        const dateNow = new Date();
        const date = formatDate(dateNow);
        const noteObject = createNoteObject(date, form.category_select.value, form.content.value);
        note.appendChild(noteObject.date);
        note.appendChild(noteObject.content);
        note.appendChild(noteObject.category);
        return note
    }

    const createNoteObject = function (date, category, content) {
        const dateInfo = document.createElement('h3');
        dateInfo.textContent = date;
        const categoryInfo = document.createElement('h4');
        categoryInfo.textContent = category;
        const contentInfo = document.createElement('p');
        contentInfo.textContent = content;
        const noteObject = new Note(dateInfo, categoryInfo, contentInfo);
        noteObject.setCategoryColor();
        return noteObject;
    };
    
    const form = document.querySelector('#add-note-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteClick);

    const toggleGeneralButton = document.querySelector('#general');
    toggleGeneralButton.addEventListener('click', handleGeneralClick);

    const toggleToDoButton = document.querySelector('#to-do');
    toggleToDoButton.addEventListener('click', handleToDoClick);

    const toggleMeetingsButton = document.querySelector('#meetings');
    toggleMeetingsButton.addEventListener('click', handleMeetingsClick);

    const toggleRemindersButton = document.querySelector('#reminders');
    toggleRemindersButton.addEventListener('click', handleRemindersClick);

    const showAllButton = document.querySelector('#all');
    showAllButton.addEventListener('click', handleAllNotesClick);

});