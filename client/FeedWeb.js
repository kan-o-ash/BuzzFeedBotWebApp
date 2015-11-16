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
  }
}

// Template.content.rendered = displayArticle;

// Template.content.helpers({
//   articleLoaded: function () {
//     return Session.get("article_id") != null
//   }
// });

Template.articleContent.helpers({
  list_items: function () {
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
