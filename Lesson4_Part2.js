require(["esri/Map", "esri/views/MapView", "esri/geometry/Point", "esri/symbols/SimpleMarkerSymbol", "esri/Graphic", 
"esri/PopupTemplate"], (Map, MapView, Point, SimpleMarkerSymbol, Graphic, PopupTemplate) => {
 
  // create a new map object with the terrain basemap
  const map = new Map({
    basemap: "terrain"
  });
  
  // define longitude and latitude for the center of the map view in Henderson
  const longitude = -114.9817;
  const latitude = 36.0395;
  
  // create a new map view object
  const view = new MapView({
    container: "viewDiv", //specify where the map should be displayed
    map: map, // use the map object created previously
    zoom: 10, // set the zoom level
    center: [longitude, latitude] // longitude, latitude // set the center point of the map
  });
  
  // create a new point object with the specified lat long
  const pnt = new Point({
    latitude: latitude, 
    longitude: longitude
  });
  
  // create a new symbol object to represent the point
  const sym = new SimpleMarkerSymbol({
    color: "red",
    style: "circle",
    size: 10
  }); 
  
  // create an object to hold the attributes for the point graphic 
  const pointAtt = {
    "Name": "Henderson, NV", 
    "Area": "106.9 mi²",
    "Population": "322,178",
    "Fun Fact": "Henderson, Nevada was ranked the third safest city to live in the United States in 2023."  
  };
  
  // create a new graphic object with the specified geometry, symbol and attributes
  const pntGraphic = new Graphic({
    geometry: pnt,
    symbol: sym,
    attributes: pointAtt
  });
  
  // add the graphic to the map view
  view.graphics.add(pntGraphic); 
  
  // define a popup template for the point graphic 
  pntGraphic.popupTemplate = {
    title: "{Name}",
    content: "<strong>Area</strong> {Area}" + "<br/><br/><strong>Population:</strong> {Population}" + "<br/><br/><strong>Fun Fact:</strong> {Fun Fact}"
  };
  
 // add the popup template to the map view graphics
 view.graphics.add(popupTemplate);
  
});