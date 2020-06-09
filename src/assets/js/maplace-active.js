
	// $(function () {
	// 	$('#filterHomes').on('submit', function (e) {
    //         alert();
	// 	  e.preventDefault();
	// 			type           =  document.getElementById("type").value;         
	// 			bedroom           =  document.getElementById("bedroom").value;         
	// 			bathroom        =  document.getElementById("bathroom").value;  
	// 			maxPrice        =  document.getElementById("maxPrice").value;  
	// 			minPrice       =  document.getElementById("minPrice").value;  
	// 			bathroom        =  document.getElementById("bathroom").value;  
    //             id		           =  document.getElementById("id").value; 
    //             title	           =  document.getElementById("title").value;
    //             address		           =  document.getElementById("address").value;
	// 				$.ajax({
	// 				  type: 'post',
	// 				  url: '/api/admin/changePaas',
	// 				  data:{
	// 					'type'      : type,
	// 					'bedroom'      : bedroom,
    //                     'bathroom'  : bathroom,
    //                     'maxPrice'      : maxPrice,
	// 					'minPrice'  : minPrice,
    //                     'id'           : id,
    //                     'title'      : title,
	// 					'address'  : address,
	// 				  },
	// 				  success: function () {
	// 					$('#filterHomes').modal('hide');
	// 					$('.modal-backdrop').css('display','none');
	// 					$('#success').html('Password has been changed').addClass('alert').addClass('alert-success').show().delay(2000).fadeOut();

	// 				  }
	// 				});
				 

	// 	});

	// });



loadMap();
// var APP_URL = "http://localhost/ExposureMedia/admin/public";
function loadMap(){
    $.ajax({
    type: 'GET',
    url:'http://localhost/ExposureMedia/admin/public/api/HomeMapHouseList',
      success: function(result){
        var ln = Object.keys(result).length;
        var infoWindow = new google.maps.InfoWindow();
        var myLatLng=new google.maps.LatLng(40.7133,-74.0688);
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 15, center: myLatLng});
            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var markers = [];
            for(var i=0;i<ln;i++)
            {	
                var data = markers[result[i].id];
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(result[i].lat,result[i].lng),
                    map: map,
                    icon: iconBase + 'library_maps.png',
                    title: result[i].title,
                });
                markers.push(marker);
                (function (marker, data) {
                    var image=result[i].featured_image;
                    var title=result[i].title;
                    var bed=result[i].bedroom;
                    var bathroom=result[i].bathroom;
                    var price=result[i].price;
                    
                    google.maps.event.addListener(marker, "mouseover", function (e) {
                        infoWindow.setContent('<div id="content" class="map-window"><div class="item">'+
                        '<div class="item-img"><img style="height:100px;width:150px" class="js-mediaFit js-mediaFitCollected landscape-media loaded" src="/uploads/homes/'+image+'">'+
                        '</div><div class="item-body"><div class="item-body-content">'+
                        '<div class="item-header"><h6>'+title+'</h6></div>'+
                        '<ul class="item-details" type="none">'+
                        '<li class="price "><i class="fa fa-price" style="font-size:20px"></i><span>$ '+price+'</span></li>'+
                        '<li class="icon icon-bed"><i class="fa fa-bed" style="font-size:20px"></i><span>'+bed+'</span><i class="fa fa-bath" style="font-size:20px"></i><span>'+bathroom+'</span></li>'+
                        '</ul>'+
                        '</div></div>');
                        infoWindow.open(map, marker);
                        
                    });
                })(marker, data);
                google.maps.event.addListener(marker, "click", function (event) {
                    var lat=this.position.lat();
                    var lng=this.position.lng();
                    scrollList(lat,lng)
                });
                 
            } 
        }  
   });
  }


// $(function() {
        
//             var LocsA = [
//                 {
//                     lat: 40.740178,
//                     lon: -74.190194,
//                     title: 'Property 1',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/1.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.733617,
//                     lon: -74.171150,
//                     title: 'Property 2',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/2.jpg" alt=""></a>',
//                             '<h6><a href="#">Radison de Villa</a></h6>',
//                             '<h5>$42,354</h5>',
//                             '<p>450 E 1st Ave, New Jersey</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.743011,
//                     lon: -74.247100,
//                     title: 'Property 3',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/3.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.711150,
//                     lon: -74.214998,
//                     title: 'Property 4',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/4.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.690010,
//                     lon: -74.151753,
//                     title: 'Property 5',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/5.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.697590,
//                     lon: -74.263164,
//                     title: 'Property 6',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/6.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.729979,
//                     lon: -74.271992,
//                     title: 'Property 7',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/7.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.749702,
//                     lon: -74.163631,
//                     title: 'Property 8',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/8.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.718971,
//                     lon: -74.323219,
//                     title: 'Property 9',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/9.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.748350,
//                     lon: -74.323219,
//                     title: 'Property 10',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/1.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 },
//                 {
//                     lat: 40.740178,
//                     lon: -74.190194,
//                     title: 'Property 11',
//                     html: [ '<div class="map-property">',
//                             '<a href="#"><img src="images/flat/2.jpg" alt=""></a>',
//                             '<h6><a href="#">Friuli-Venezia Giulia</a></h6>',
//                             '<h5>$52,354</h5>',
//                             '<p>568 E 1st Ave, Miami</p>',
//                             '</div>'
//                         ].join(''),
//                     icon: 'assets/images/icons/map-marker-2.png',
//                     animation: google.maps.Animation.BOUNCE
//                 }


            
                
//             ];
//             new Maplace({
//                 locations: LocsA,
//                 controls_on_map: true,
//                 map_options: {
//                     zoom: 13,
//                     scrollwheel: false,
//                     stopover: true
//                 }
//             }).Load();

//         });