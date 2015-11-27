Template.header.events({
  'click .new-article': function (){
    Router.go('/');
  }
});

Template.article.helpers({
  list_items: function () {
    var content = this.content;
    if (content) {
      for (var i=0 ; i<content.length; i++){
        // add a number before the caption
        content[i]['num'] = i+1;
      }
      return content;
    }
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
