# GEOG863: Plot Your Hometown

<b>Description of the Project: Plot Your Hometown</b>

This project utilizes the ArcGIS API for JavaScript to create an interactive map showcasing specific geographic coordinates, in this case, representing the city of Henderson, Nevada. The main objective of the project is to efficiently display a map centered on Henderson while providing additional information about the city.

<b>Key Components and Functionality:</b>

<b>1. Map and MapView Creation:</b> The code initializes a new Map object with the terrain basemap and creates a MapView object, specifying the HTML container where the map should be displayed. The map is centered on Henderson with a predefined zoom level.

<b>2. Point Geometry and Symbolization:</b> A Point object is created with latitude and longitude coordinates corresponding to Henderson. A SimpleMarkerSymbol is used to symbolize the point on the map as a red circle with a size of 10.

<b>3. Attributes and Graphic Creation:</b> An object (pointAtt) is defined to hold attributes such as the city name, area, population, and a fun fact about Henderson. A Graphic object is created, associating the point geometry, symbol, and attributes.

<b>4. Graphic Addition to MapView:</b> The created graphic representing Henderson is added to the graphics property of the MapView, making it visible on the map.

<b>5. Popup Template Definition:</b> A popup template is defined for the point graphic, specifying the content and formatting for the popup that appears when the user interacts with the point on the map. The template includes information such as the city name, area, population, and a fun fact.

<b>6. Popup Template Addition to MapView Graphics:</b> The popup template is added to the graphics property of the MapView, ensuring that the defined popup template is associated with the Henderson point graphic.

Overall, the project efficiently displays Henderson, Nevada, on a map with key information presented through a popup template. It avoids redundancy by storing coordinates in variables and leverages the capabilities of the ArcGIS API for JavaScript to create an engaging and informative mapping experience.

![image](https://github.com/bec-in-tech/GEOG863-Plot-Your-Hometown/assets/120440399/9ebb6f9d-07a0-42d7-a35a-cdc5d5ac14f8)

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zYJLaoE" data-user="rmu5072" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rmu5072/pen/zYJLaoE">
  hello_map_2</a> by Rebecca U (<a href="https://codepen.io/rmu5072">@rmu5072</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
