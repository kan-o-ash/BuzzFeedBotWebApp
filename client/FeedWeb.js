Meteor.startup( function () {
});

Template.header.events({
  'click .new-article': function (){
    window.location.reload();
  }
});

displayArticle = function () {
  var array = articles.find().fetch();
  if (!array.length){
    setTimeout(displayArticle,100);
  } else {
    var i = Math.floor( Math.random() * array.length );
    var article = array[i];
    Session.set("article_id", article['_id']);
  }
}

Template.content.rendered = displayArticle;

Template.content.helpers({
  articleLoaded: function () {
    return Session.get("article_id") != null
  }
});

Template.article.helpers({
  title: function () {
    var id = Session.get("article_id");
    return articles.findOne(id).title;
  },
  list_items: function () {
    var id = Session.get("article_id");
    var content = articles.findOne(id).content;
    for (var i=0 ; i<content.length; i++){
      content[i]['num'] = i+1
    }
    return content;
  },
 });

Template.listItem.helpers({
  caption: function() {
    return this.text
  },
  gif_src: function() {
    return this.gif_url
  }
});
