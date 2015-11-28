Router.route('/article/:article_url', function () {
    var article = articles.findOne({url: this.params.article_url});
    this.render('article', {data: article});
});

Router.route('/process-titles', function () {
    var unprocessed = articles.find({'article_removed':{$ne:true}}).fetch()
    this.render('processTitles', {data: unprocessed});
});

Router.route('/', function () {
    var article_arr = articles.find({'title_processed':true,'article_removed':{$ne:true}}).fetch();
    if (article_arr.length) {
        var i = Math.floor( Math.random() * article_arr.length );
        var article = article_arr[i];
        Router.go('/article/' + article.url, {}, {replaceState: true});
    }
});
