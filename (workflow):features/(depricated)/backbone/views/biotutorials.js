console.log('batmans view loaded')
App.Views.Tutorials = Backbone.View.extend({
  el: "#batmans",
  initialize: function () {
    console.log("batman collection View created");
    this.listenTo(this.collection, 'reset', this.renderAll);
  },
  renderAll: function () {
    this.collection.each(this.renderOne, this);
  }, 
  renderOne: function (model) {
    var batmanView = new App.Views.Tutorial({model: model});
    this.$el.append(batmanView.el)
    console.log(model)
  }
});