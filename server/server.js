Meteor.startup(function () {

});

function urlify(text) {
    var exp = /[^a-zA-Z0-9_]/g;
    var regx = new RegExp(exp);
    text = text.replace(regx, ' ');

    var exp = / +/g;
    var regx = new RegExp(exp);
    text = text.replace(regx, '-');
    
    return text;
}

Meteor.methods({
    'UpdateTitle': function (article_id, text) {
        if (text) {
            new_url = urlify(text);
            articles.update(article_id, {$set: {'title': text, 'title_processed': true, url:new_url}});
            return true;
        }
        return false;
    },
    'removeArticle': function (article_id){
        articles.update(article_id, {$set: {'article_removed': true}});

    }
});
