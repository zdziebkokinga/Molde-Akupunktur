        function googleMap() {
              var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 62.739720, lng: 7.176640},

                zoom: 14
                  
              });
            
            var marker = new google.maps.Marker({
              position: {lat: 62.739720, lng: 7.176640},
              map: map,
                });
        }
    
           google.maps.event.addDomListener(window, 'load', googleMap)