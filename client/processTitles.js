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
    function cbk (err, result) {
        // can end saving graphic
        return;
    }
    Meteor.call('UpdateTitle', article_id, text, cbk);
}

buzzBot.removeArticle = function (article_id, text) {
    function cbk (err, result) {
        // can end deleting graphic
        return;
    }    
    Meteor.call('removeArticle', article_id, cbk);
}

Template.processTitles.events({
    'keyup input': function (evt) {
        if (evt.keyCode == 13) {
            var text = evt.target.value
            buzzBot.updateTitle(this._id, text);
        }
    },
    'click .title-save': function (evt) {
        var text = $(evt.target).parents('.input-group').children('input').val();
        buzzBot.updateTitle(this._id, text);
    },
    'click .delete-article': function (evt) {
        buzzBot.removeArticle(this._id);
    }
});
