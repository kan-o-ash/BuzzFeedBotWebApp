Router.route('/article/:article_url', function () {
    var article = articles.findOne({url: this.params.article_url});
    this.render('article', {data: article});
});

Router.route('/', function () {
    var article_arr = articles.find().fetch();
    if (article_arr.length) {
        console.log(article_arr);
        var i = Math.floor( Math.random() * article_arr.length );
        var article = article_arr[i];
        // this.render('article', {data: article});
        this.redirect('/article/' + article.url);
    } else {
        this.render('noArticles');
    }
});
