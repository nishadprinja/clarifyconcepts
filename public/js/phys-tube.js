    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Called automatically when JavaScript client library is loaded.
    function onClientLoad() {
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
        console.log("We're good to go.")
    }
    
    // Called automatically when YouTube API interface is loaded (see line 9).
    function onYouTubeApiLoad() {
        // This API key is intended for use only in this lesson.
        // See https://goo.gl/PdPA1 to get a key for your own applications.
        gapi.client.setApiKey('AIzaSyC12wGpDByMqxeFvUCQTKa3HdH1xEeeW2w');
    
        search();
    }
    
    function search() {
        // Use the JavaScript client library to create a search.list() API call.
        var request = gapi.client.youtube.search.list({
            part: 'snippet',
            order: 'viewCount',
            type: 'video',
            maxResults: 15,
            q: 'walter lewin physics lecture'
        });
        
        // Send the request to the API server,
        // and invoke onSearchRepsonse() with the response.
        request.execute(onSearchResponse);
    }
    
    // Called automatically with the response of the YouTube API request.
    function onSearchResponse(response) {
        // showResponse(response);

        for (var i = 0; i < response.items.length; i++) {

        if (i == 1 || i == 9 || i == 10 || i == 11 || i == 12 || i == 13 || i == 14) {
                var ytplayer = document.createElement('div');
                ytplayer.setAttribute('id', 'ytplayer' + i);
                document.getElementById('ytplayer').appendChild(ytplayer);

                player = new YT.Player('ytplayer' + i, {
                height: '390',
                width: '640',
                videoId: response.items[i].id.videoId
                });
            }
            
        }
    }
    
    /*/////////////////////////////////////////////////////////*/
    
    // Helper function to display JavaScript value on HTML page.
    // function showResponse(response) {
    //     var responseString = JSON.stringify(response, '', 2);
    //     document.getElementById('response').innerHTML += responseString;
    // }