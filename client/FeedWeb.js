Meteor.startup( function () {

    setTimeout( function () {
      Tracker.autorun(Template.article.__helpers[' startup'])
    }, 1000);
});


Template.header.events({
  'click .new-article': function (){
    window.location.reload();
  }
});

Template.article.helpers({
  startup: function () {
    if (!Session.get('article_id')){
      var array = articles.find().fetch();
      var i = Math.floor( Math.random() * array.length );
      var article = array[i];
      Session.set("article_id", article['_id']);
    }
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
