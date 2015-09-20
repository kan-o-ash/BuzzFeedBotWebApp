Meteor.startup(function () {
  // code to run on server at startup
  art = {
    'title':'3 worst roommate horror stories',
    'content': [
      {'body':'first story', 'gif_url':'https://media.giphy.com/media/81uw96aYQph9m/giphy.gif'},
      {'body':'second story', 'gif_url':'https://media.giphy.com/media/S3H8Ke8emWCzu/giphy.gif'},
      {'body':'third story', 'gif_url':'https://media.giphy.com/media/3o85xKr0TMJTp9XWtW/giphy.gif'}
      ]

  }
  articles.insert(art)
});
