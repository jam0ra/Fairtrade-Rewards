// Initialize and add the map
function initMap() {
    // Marker Locations
    const sfuBurnaby = {lat: 49.277163003969754, lng: -122.91978896116946};
    const starbucksWestMall = { lat: 49.279628408515805, lng: -122.9210827871182 };
    const starbucksCornerstone = {lat: 49.278140693651586, lng: -122.91226882151763};
    const mackenzieCafe = {lat: 49.27886782690754, lng: -122.91560721024263};
    const renaissanceAQ = {lat: 49.27939417087864, lng: -122.91562218427771};
    const renaissanceASB = {lat: 49.27761385104182, lng: -122.9140611259871};
    const higherGrounds = {lat: 49.27905782716627, lng: -122.91896311724729};
    const discoveryCafe = {lat: 49.273629387655255, lng: -122.9121140501353};
    const nestersMarket = {lat: 49.27779426946053, lng: -122.90987836130202};
    const diningHall = {lat: 49.279888433842935, lng: -122.92473771090783};
  
    var markers = [];
  
    // The map, centered at the SFU Burnaby Campus
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: sfuBurnaby,
    });
  
    // Marker
    const starbucksCornerstoneMarker = new google.maps.Marker({
      position: starbucksCornerstone,
      map: map,
      title: "Starbucks (Cornerstone)",
      content: "<h3>Starbucks (Cornerstone)</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Espresso Beverages</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/6kYJPNm6YzFwuC7A6",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/starbucks-cornerstone.html",
      logo: starbucks,
    });
    markers.push(starbucksCornerstoneMarker);
    
    // Marker
    const starbucksWestMallMarker = new google.maps.Marker({
      position: starbucksWestMall,
      map: map,
      title: "Starbucks (West Mall)",
      content: "<h3>Starbucks (West Mall)</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Espresso Beverages</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/nHchRRSAB1VNwcfH6",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/starbucks-west-mall.html",
      logo: starbucks,
    });
    markers.push(starbucksWestMallMarker);
  
    // Marker
    const mackenzieMarker = new google.maps.Marker({
      position: mackenzieCafe,
      map: map,
      title: "Mackenzie Cafe",
      content: "<h3>Mackenzie Cafe</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Ethical Bean Coffee</li>\
      <li>Four O'Clock Tea</li>\
      <li>Sugar</li>\
      <li>Peppercorns</li>\
      <li>Avocados</li>\
      <li>Bananas</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/iyjpvcdZ1siixALd7",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/mackenzie-cafe.html",
      logo: coffee,
    });
    markers.push(mackenzieMarker);
  
    // Marker
    const renaissanceAQMarker = new google.maps.Marker({
      position: renaissanceAQ,
      map: map,
      title: "Renaissance Cafe (AQ)",
      content: "<h3>Renaissance Cafe (AQ)</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Espresso Beverages</li>\
      <li>Brewed Coffee</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      directions: "https://goo.gl/maps/iGU86GeBHzwY6dxP8",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/renaissance-coffee-aq.html",
      logo: renaissance,
    });
    markers.push(renaissanceAQMarker);
  
    // Marker
    const renaissanceASBMarker = new google.maps.Marker({
      position: renaissanceASB,
      map: map,
      title: "Renaissance Cafe (ASB)",
      content: "<h3>Renaissance Cafe (ASB)</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Espresso Beverages</li>\
      <li>Brewed Coffee</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/5VHVgN1kVbZjefPw6",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/renaissance-coffee-as.html",
      logo: renaissance,
    });
    markers.push(renaissanceASBMarker);
  
    // Marker
    const higherGroundsMarker = new google.maps.Marker({
      position: higherGrounds,
      map: map,
      title: "Higher Grounds",
      content: "<h3>Higher Grounds</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Espresso Beverages</li>\
      <li>Brewed Coffee</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/NUvfvwrzBG7LSnBZA",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/higher-grounds.html",
      logo: coffee,
    });
    markers.push(higherGroundsMarker);
  
    // Marker
    const discoveryCafeMarker = new google.maps.Marker({
      position: discoveryCafe,
      map: map,
      title: "Discovery Cafe",
      content: "<h3>Discovery Cafe</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Starbucks Fair Trade Coffee</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/RERZDaBi9U1HSzdz8",
      info: "https://www.sfu.ca/food/wheretoeat/campus-food/discovery-cafe.html",
      logo: coffee,
    });
    markers.push(discoveryCafeMarker);
  
    // Marker
    const nestersMarketMarker = new google.maps.Marker({
      position: nestersMarket,
      map: map,
      title: "Nesters Market",
      content: "<h3>Nesters Market</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Ben & Jerry's Ice Cream</ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/yPEVpsvZz9BsqKQe8",
      info: "https://www.nestersmarket.com/store/sfu-burnaby/",
      logo: nesters,
    });
    markers.push(nestersMarketMarker);
  
    // Marker
    const diningHallMarker = new google.maps.Marker({
      position: diningHall,
      map: map,
      title: "Dining Hall",
      content: "<h3>Dining Hall</h3>\
      <p>Fair Trade Products:</p><ul>\
      <li>Chocolate Bars</li>\
      <li>Brewed Coffee</li>\
      <li>Tea</li></ul>",
      icon: {url: fairtrade, scaledSize: new google.maps.Size(39,32)},
      link: "https://goo.gl/maps/5P6uoCvoyJRD9gnG8",
      info: "https://www.sfu.ca/food/dining-hall.html",
      logo: sfu,
    });
    markers.push(diningHallMarker);
  
    var infoWindow = new google.maps.InfoWindow();
  
    for (var i = 0; i < markers.length ; i++) {
      google.maps.event.addListener(markers[i], 'click', function(e) {
        infoWindow.setContent(`<div style='float:left; padding-top: 30px'>\
        <img src= ${this.logo} height=50px></div>\
        <div style='float:right; padding: 10px'>${this.content}
          <a href=${this.info} target="_blank">More Information</a><br>
          <a href=${this.link} target="_blank">Get Directions</a></div>`);
        infoWindow.open(map, this);
      });
    }
  }