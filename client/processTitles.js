Template.processTitles.helpers({
    articles: function () {
        return this;
    },
    num_items: function () {
        return this.content.length
    }
});

Template.processTitles.events({
    'keyup input': function (evt) {
        if (evt.keyCode == 13) {
            var text = evt.target.value
            articles.update(this._id, {$set: {'title': text}});
        }
    }
});
