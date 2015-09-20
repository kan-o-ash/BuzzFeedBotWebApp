// counter starts at 0
Session.setDefault('counter', 0);

// Template.hello.helpers({
//   counter: function () {
//     return Session.get('counter');
//   }
// });

// Template.hello.events({
//   'click button': function () {
//     // increment the counter when button is clicked
//     Session.set('counter', Session.get('counter') + 1);
//   }
// });

Template.viewMgr.helpers({
  home_view: function() {
    return (Session.get("view") == "home");
  },
  article_view: function() {
    return (Session.get("view") == "article");
  }


});

Template.article.helpers({
  title: function () {
    var id = Session.get("article_id");
    return articles.find(id).fetch()[0].title;
  },
  list_items: function () {
    var id = Session.get("article_id");
    console.log(articles.find(id).fetch()[0].content)
    return articles.find(id).fetch()[0].content;
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

Meteor.startup( function () {
  // console.log(articles.find().title)
  // console.log()
  Session.set("view", "article");
  Session.set("article_id", "gBYWhrWoM8LgETiJb");
})
