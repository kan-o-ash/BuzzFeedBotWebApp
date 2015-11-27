Template.processTitles.helpers({
    articles: function () {
        return this;
    },
    num_items: function () {
        return this.content.length
    }
});

var buzzBot = {};

buzzBot.updateTitle = function (article_id, text) {
    // articles.update(this._id, {$set: {'title': text}});
    function titleUpdated (err, result) {
        // can end saving graphic
        return;
    }
    Meteor.call('UpdateTitle', article_id, text, titleUpdated);
}

Template.processTitles.events({
    'keyup input': function (evt) {
        if (evt.keyCode == 13) {
            var text = evt.target.value
            buzzBot.updateTitle(this._id, text);
        }
    },
    'click .titleSave': function (evt) {
        var text = $(evt.target).parents('.input-group').children('input').val();
        buzzBot.updateTitle(this._id, text);
    }
});
