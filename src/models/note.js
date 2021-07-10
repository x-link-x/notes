const Note = function (date, category, content, important=false) {
    this.date = date;
    this.category = category;
    this.content = content;
    this.important = important;
}

Note.prototype.getContent = function() {
    return this.content;
}

Note.prototype.setCategoryColor = function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.category.style.color = "#" + randomColor;
}

Note.prototype.formatDate = function(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
}



module.exports = Note;