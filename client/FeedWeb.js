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
  list_items: function () {
    console.log(this)
    var content = this.content;
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
