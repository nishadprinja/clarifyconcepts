console.log('tutorials collection loaded')
App.Collections.Tutorials = Backbone.Collection.extend({
  url: '/edu-zone/bio-zone',
  initialize: function () {
    console.log('tutorial collection created')
  },
  model: App.Models.Tutorial
});