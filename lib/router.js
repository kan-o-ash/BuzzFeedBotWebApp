Router.route('/article/:article_url', function () {
    console.log(this.params);
    var article = articles.findOne({url: this.params.article_url});
    console.log(article);
    this.render('article', {data: article});
});

Router.route('/', function () {
    this.render('article');
});
