Meteor.startup(function () {

});

Meteor.methods({
    'UpdateTitle': function (article_id, text) {
        console.log(text);
        console.log(article_id );
        if (text) {
            articles.update(article_id, {$set: {'title': text}});
            return true;
        }
        return false;
    }
});

    // don't show [deleted]
    // if (content[i]['text'] == '[deleted]')
    //   content[i] = '';
