google.charts.load('current', {'packages': ['geomap']});
google.charts.setOnLoadCallback(drawMap);

 function drawMap() {
   var data = google.visualization.arrayToDataTable([
     ['Address'],
     [localStorage.address],
   ]);

   var options = {};
   options['region'] = 'US';
   options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
   options['dataMode'] = 'markers';

   var container = document.getElementById('map_canvas');
   var geomap = new google.visualization.GeoMap(container);
   geomap.draw(data, options);
 };
