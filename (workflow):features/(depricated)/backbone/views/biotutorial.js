console.log('batman view loaded')
App.Views.Tutorial = Backbone.View.extend({
  initialize: function () {
    console.log('bio tutorial view created')
    this.template = Handlebars.compile($("#batman-temp").html())
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    $('#batmans').append(this.$el);

    player = new YT.Player('ytplayer', {
    height: '390',
    width: '640',
    videoId: '37eBV2EWiH8'
    });

    console.log(player);
  }
})