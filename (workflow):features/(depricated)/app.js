console.log('clarify concepts loaded')

var App = {
  Models: {},
  Collections: {},
  Views: {}
};

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(function(){
  App.collection = new App.Collections.Tutorials();
  App.tutorialsView = new App.Views.Tutorials({collection: App.collection});
  App.collection.fetch({reset: true});
});