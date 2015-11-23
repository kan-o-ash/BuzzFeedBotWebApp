Template.header.events({
  'click .new-article': function (){
    window.location.reload();
  }
});

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
