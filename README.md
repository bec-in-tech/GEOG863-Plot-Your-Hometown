# GEOG863 - Plot Your Hometown

<b>Description of the Project:</b>

This project utilizes the ArcGIS API for JavaScript to create an interactive map showcasing specific geographic coordinates, in this case, representing the city of Henderson, Nevada. The main objective of the project is to efficiently display a map centered on Henderson while providing additional information about the city.

<b>Key Components and Functionality:</b>

1. Map and MapView Creation: The code initializes a new Map object with the terrain basemap and creates a MapView object, specifying the HTML container where the map should be displayed. The map is centered on Henderson with a predefined zoom level.

2. Point Geometry and Symbolization: A Point object is created with latitude and longitude coordinates corresponding to Henderson. A SimpleMarkerSymbol is used to symbolize the point on the map as a red circle with a size of 10.

3. Attributes and Graphic Creation: An object (pointAtt) is defined to hold attributes such as the city name, area, population, and a fun fact about Henderson. A Graphic object is created, associating the point geometry, symbol, and attributes.

4. Graphic Addition to MapView: The created graphic representing Henderson is added to the graphics property of the MapView, making it visible on the map.

5. Popup Template Definition: A popup template is defined for the point graphic, specifying the content and formatting for the popup that appears when the user interacts with the point on the map. The template includes information such as the city name, area, population, and a fun fact.

6. Popup Template Addition to MapView Graphics: The popup template is added to the graphics property of the MapView, ensuring that the defined popup template is associated with the Henderson point graphic.

Overall, the project efficiently displays Henderson, Nevada, on a map with key information presented through a popup template. It avoids redundancy by storing coordinates in variables and leverages the capabilities of the ArcGIS API for JavaScript to create an engaging and informative mapping experience.

![image](https://github.com/bec-in-tech/GEOG863-Plot-Your-Hometown/assets/120440399/9ebb6f9d-07a0-42d7-a35a-cdc5d5ac14f8)

This interactive map can also be viewed in CodePen: https://codepen.io/rmu5072/pen/zYJLaoE
