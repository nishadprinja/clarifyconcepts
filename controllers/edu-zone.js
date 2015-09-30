var request = require('request-promise');
module.exports.controller = function (app) {
	app.get('/edu-zone', function (req, res) {
		res.render('../views/edu-zone/tutorials');
	});

	app.get('/edu-zone/chem-zone', function (req, res) {
		res.render('../views/edu-zone/chem-zone');
	});

	app.get('/edu-zone/phys-zone', function (req, res) {
		res.render('../views/edu-zone/phys-zone');
	});

	app.get('/edu-zone/bio-zone', function (req, res) {
		res.render('../views/edu-zone/bio-zone');
	});
}

	// app.get('/edu-zone/bio-zone', function (req, res) {
	  // request('https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=glycolysis&key=AIzaSyC12wGpDByMqxeFvUCQTKa3HdH1xEeeW2w', function (err, response, body) {
	  //   var results = JSON.parse(body)
	  //   res.send(results.items)
	  //   // res.render('../views/edu-zone/bio-zone', results)
	  // })
	// })
	 //  var temp_data = [
		//   {
		//     "kind": "youtube#searchResult",
		//     "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/-QV6bo3o0nIv4hpTO8QPS1Dg9n8\"",
		//     "id": 
		//     {
		//       "kind": "youtube#video",
		//       "videoId": "d_TH7VxDZS4"
		//     },
		//     "snippet": 
		//     {
		//       "publishedAt": "2015-04-13T14:43:07.000Z",
		//       "channelId": "UCHy7KdzL2qEFWB4hJtjXb7w",
		//       "title": "Biochemistry and Cell Biology - Glycolysis",
		//       "description": "Kon'nichiwa mina-san! In this video I cover the basics of glycolysis and the key enzymes involved throughout the process! As usual if you liked the video then ...",
		//       "thumbnails": 
		//       {
		//         "default": 
		//         {
		//           "url": "https://i.ytimg.com/vi/d_TH7VxDZS4/default.jpg"
		//         },
		//         "medium": 
		//         {
		//           "url": "https://i.ytimg.com/vi/d_TH7VxDZS4/mqdefault.jpg"
		//         },
		//         "high": 
		//         {
		//           "url": "https://i.ytimg.com/vi/d_TH7VxDZS4/hqdefault.jpg"
		//         }
		//       },
		//       "channelTitle": "",
		//       "liveBroadcastContent": "none"
		//     }
		//   },
		  
		//   {
		//     "kind": "youtube#searchResult",
		//     "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/13KYUB0iZe9BPbEgHpsALfquo_8\"",
		//     "id": 
		//     {
		//       "kind": "youtube#video",
		//       "videoId": "37eBV2EWiH8"
		//     },
		//     "snippet": 
		//     {
		//       "publishedAt": "2014-11-04T07:20:34.000Z",
		//       "channelId": "UC3ESMvEx-M8Vq2DkH93q4Wg",
		//       "title": "Tổng quan về Glycolysis",
		//       "description": "ATP là phân tử năng lượng trọng điểm cho tất cả các cơ thể sinh vật. Một nguồn tin của ATP là glycolysis, một loạt những phản ứng phân hủy đường...",
		//       "thumbnails": 
		//       {
		//         "default": 
		//         {
		//           "url": "https://i.ytimg.com/vi/37eBV2EWiH8/default.jpg"
		//         },
		//         "medium": 
		//         {
		//           "url": "https://i.ytimg.com/vi/37eBV2EWiH8/mqdefault.jpg"
		//         },
		//         "high": 
		//         {
		//           "url": "https://i.ytimg.com/vi/37eBV2EWiH8/hqdefault.jpg"
		//         }
		//       },
		//       "channelTitle": "ngocrongecom",
		//       "liveBroadcastContent": "none"
		//     }
		//   },
		  
		//   {
		//     "kind": "youtube#searchResult",
		//     "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/wd0_vmU0b1RFxkkF3dko6DcNfB8\"",
		//     "id": 
		//     {
		//       "kind": "youtube#video",
		//       "videoId": "1bf-7W5ltjc"
		//     },
		//     "snippet": 
		//     {
		//       "publishedAt": "2014-08-21T00:49:37.000Z",
		//       "channelId": "UCIzOHtZa0iOH49ez1O5mReQ",
		//       "title": "Glycolysis and Gluconeogenesis Regulation 2",
		//       "description": "",
		//       "thumbnails": 
		//       {
		//         "default": 
		//         {
		//           "url": "https://i.ytimg.com/vi/1bf-7W5ltjc/default.jpg"
		//         },
		//         "medium": 
		//         {
		//           "url": "https://i.ytimg.com/vi/1bf-7W5ltjc/mqdefault.jpg"
		//         },
		//         "high": 
		//         {
		//           "url": "https://i.ytimg.com/vi/1bf-7W5ltjc/hqdefault.jpg"
		//         }
		//       },
		//       "channelTitle": "",
		//       "liveBroadcastContent": "none"
		//     }
		//   },
		  
		//   {
		//     "kind": "youtube#searchResult",
		//     "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/NhYUoWVObt0-swmJHjtDJhVVR9I\"",
		//     "id": 
		//     {
		//       "kind": "youtube#video",
		//       "videoId": "YVsOl-W94zI"
		//     },
		//     "snippet": 
		//     {
		//       "publishedAt": "2014-09-14T17:46:37.000Z",
		//       "channelId": "UCyCNsPR1je9aSyMeAtA2N2w",
		//       "title": "Respiration: Stage One - Glycolysis",
		//       "description": "The first stage of cellular respiration is glycolysis; the splitting of glucose. In this video for AQA A2 Biology Students, we look at the key stages of this process and ...",
		//       "thumbnails": 
		//       {
		//         "default": 
		//         {
		//           "url": "https://i.ytimg.com/vi/YVsOl-W94zI/default.jpg"
		//         },
		//         "medium": 
		//         {
		//           "url": "https://i.ytimg.com/vi/YVsOl-W94zI/mqdefault.jpg"
		//         },
		//         "high": 
		//         {
		//           "url": "https://i.ytimg.com/vi/YVsOl-W94zI/hqdefault.jpg"
		//         }
		//       },
		//       "channelTitle": "MrPollockBiology",
		//       "liveBroadcastContent": "none"
		//     }
		//   },
		  
		//   {
		//     "kind": "youtube#searchResult",
		//     "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/pPmzgT9_z2pKrertqUm7Erbakes\"",
		//     "id": 
		//     {
		//       "kind": "youtube#video",
		//       "videoId": "qYLiX0QgZE4"
		//     },
		//     "snippet": 
		//     {
		//       "publishedAt": "2013-02-28T08:59:38.000Z",
		//       "channelId": "UCGeaF-KSIJ0Bl4dEnvoqV-g",
		//       "title": "Entry of galactose to glycolysis",
		//       "description": "",
		//       "thumbnails": 
		//       {
		//         "default": 
		//         {
		//           "url": "https://i.ytimg.com/vi/qYLiX0QgZE4/default.jpg"
		//         },
		//         "medium": 
		//         {
		//           "url": "https://i.ytimg.com/vi/qYLiX0QgZE4/mqdefault.jpg"
		//         },
		//         "high": 
		//         {
		//           "url": "https://i.ytimg.com/vi/qYLiX0QgZE4/hqdefault.jpg"
		//         }
		//       },
		//       "channelTitle": "sagarwagle1",
		//       "liveBroadcastContent": "none"
		//     }
		//   }
		// ];
		// var temp_temp_data = [];
		// for (var i = 0; i < temp_data.length; i++) {
		// 	var obj = {};
		// 	obj['kind'] = temp_data[i].id.kind;
		// 	obj['videoId'] = temp_data[i].id.videoId;
		// 	temp_temp_data.push(obj);
		// }
	 //  res.send(temp_temp_data);


	  // request.get('https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=glycolysis&key=AIzaSyC12wGpDByMqxeFvUCQTKa3HdH1xEeeW2w').then(function (body) {
	//      	// Process the html of the Google web page... 
	//      	res.send(JSON.parse(body).items);
	//      	//res.send(JSON.parse(body.items));
	//  	})