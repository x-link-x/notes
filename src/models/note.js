const Note = function (date, category, content, important=false) {
    this.date = date;
    this.category = category;
    this.content = content;
    this.important = important;
}

Note.prototype.getDate = function() {
    return this.date;
}


Note.prototype.getContent = function() {
    return this.content;
}

Note.prototype.setContent = function(content) {
    this.content = content;
}

module.exports = Note;