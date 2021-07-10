const Note = function (date, category, content) {
    this.date = date;
    this.category = category;
    this.content = content;
}

Note.prototype.getContent = function() {
    return this.content;
}

Note.prototype.setCategoryColor = function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    this.category.style.color = "#" + randomColor;
}

module.exports = Note;