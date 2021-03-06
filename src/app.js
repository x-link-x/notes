const Note = require('./models/note');

document.addEventListener('DOMContentLoaded', function() {
    
    const handleShowForm = function() {
        toggleButton(this);
        const noteImg = document.querySelector('img');
        noteImg.style.display = "none";
    }

    const toggleButton = function(e) {
        e.classList.toggle("active");
        const content = e.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        } 
    }
    
    const handleFormSubmit = function(e) {
        e.preventDefault();
        const notes = document.querySelector('#notes-list');
        const newNote = createNote(e.target);
        notes.appendChild(newNote);
        const deleteButton = document.querySelector('#delete-button');
        deleteButton.style.display = "block";
        form.reset();
        toggleButton(showFormButton); 
    }

    const handleDeleteClick = function() {
        const notesList = document.querySelector('#notes-list');
        notesList.innerHTML = "";
        deleteButton.style.display = "none";
        const noteImg = document.querySelector('img');
        noteImg.style.display = "block";
    }

    const handleFilterClick = function (category) {
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
        const category = note.querySelector('h4').textContent;
        note.classList.add(category);
        note.classList.add('all');
        console.log(note);
    }

    const handleShowFiltersClick = function() {
        toggleButton(this);
    }

    const handleGeneralClick = function() {
        handleFilterClick('general');
    }

    const handleToDoClick = function() {
        handleFilterClick('to-do');
    }

    const handleMeetingsClick = function() {
        handleFilterClick('meetings');
    }

    const handleRemindersClick = function() {
        handleFilterClick('reminders');
    }

    const handleAllNotesClick = function() {
        handleFilterClick('all');
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

    const showFormButton = document.querySelector('#show-form');
    showFormButton.addEventListener('click', handleShowForm);
    
    const form = document.querySelector('#add-note-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteClick);

    const showFiltersButton = document.querySelector('#show-filters');
    showFiltersButton.addEventListener('click', handleShowFiltersClick);

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