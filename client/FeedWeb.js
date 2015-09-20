Meteor.startup( function () {
  // console.log(articles.find().title)
  // console.log()
  // Session.set("view", "article");

  Meteor.subscribe('articles', callbacks=Template.article.__helpers['startup'])
});


Template.header.events({
  'click .new-article': function (){
    window.location.reload();
  }
});

Template.article.helpers({
  startup: function () {
    var array = articles.find().fetch();
    console.log(array);
    var i = Math.floor( Math.random() * array.length );
    var article = array[i];

    Session.set("article_id", article['_id']);
  },
  title: function () {
    var id = Session.get("article_id");
    if (id) {
      return articles.findOne(id).title;
    }
  },
  list_items: function () {
    var id = Session.get("article_id");
    if (id) {
      return articles.findOne(id).content;
    }
  },
});

Template.listItem.helpers({
  caption: function() {
    return this.body
  },
  gif_src: function() {
    return this.gif_url
  }
});
