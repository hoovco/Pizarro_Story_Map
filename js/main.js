// need to make basemap variables //
$(document).ready(function(){

var spaIcon = L.icon({
    iconUrl: 'img/Span_Icon.ico',
    iconSize: [32, 32],
    iconAnchor: [0, 32],
    });

var cirIcon = L.icon({
    iconUrl: 'img/circle-15.svg',
    iconSize: [11, 11],
    iconColor: 'maroon'
    })

var Tumbes      = L.marker([-3.56694, -80.45153], {icon: spaIcon}).on('click', tumbesContent).bindTooltip("Tumbes"),
    Tangarara   = L.marker([-4.887, -80.824], {icon: spaIcon}).on('click', tangararaContent).bindTooltip("Tangarara"),
    Cajamarca   = L.marker([-7.16378, -78.50027], {icon: spaIcon}).on('click', cajamarcaContent).bindTooltip("Cajamarca"),
    Huaylas     = L.marker([-8.88969265855, -77.894017856], {icon: spaIcon}).on('click', huaylasContent).bindTooltip("Huaylas"),
    Jauja       = L.marker([-11.7740854362, -75.491137534], {icon: spaIcon}).on('click', jaujaContent).bindTooltip("Jauja (Xauxa)"),
    Cusco       = L.marker([-13.4925399205, -71.9876227864], {icon: spaIcon}).on('click', cuscoContent).bindTooltip("Cusco");

var waypoints   = L.layerGroup([Tumbes, Tangarara, Cajamarca, Huaylas, Jauja, Cusco]);

var RicaPlaya   = L.marker([-3.8029588, -80.4984999], {icon: cirIcon}).bindTooltip("Rica Playa"),
    ElHuasimo   = L.marker([-3.9975, -80.5036111], {icon: cirIcon}).bindTooltip("El Huasimo"),
    Poechos     = L.marker([-4.41997300876, -80.5027420299], {icon: cirIcon}).bindTooltip("Poechos"),
    Pabur       = L.marker([-5.2, -80.0833], {icon: cirIcon}).bindTooltip("Pabur"),
    LomaLarga   = L.marker([-5.42158,-79.67319], {icon: cirIcon}).bindTooltip("Loma Larga"),
    Huancabamba = L.marker([-5.19688581072, -79.4973311446], {icon: cirIcon}).bindTooltip("Huancabamba"),
    Olmos       = L.marker([-6.04759907501, -79.7078755167], {icon: cirIcon}).bindTooltip("Olmos"),
    Motupe      = L.marker([-6.16904653707, -79.7078755167], {icon: cirIcon}).bindTooltip("Motupe"),
    Tucume      = L.marker([-6.50330862013, -79.8762753274], {icon: cirIcon}).bindTooltip("Tucume"),
    Zana        = L.marker([-6.92333, -79.5842], {icon: cirIcon}).bindTooltip("Zaña"),
    Niepos      = L.marker([-6.92639, -79.1297], {icon: cirIcon}).bindTooltip("Niepos"),
    Cajabamba   = L.marker([-7.6314506476, -78.0321466487], {icon: cirIcon}).bindTooltip("Cajabamba"),
    Huamachuco  = L.marker([-7.82673345932, -78.0460792301], {icon: cirIcon}).bindTooltip("Huamachuco"),
    Chuco       = L.marker([-8.34914027599, -78.2446123387], {icon: cirIcon}).bindTooltip("Chuco"),
    Andamarca   = L.marker([-8.26344, -78.00486], {icon: cirIcon}).bindTooltip("Andamarca"),
    Corongo     = L.marker([-8.54891506345, -77.929033096], {icon: cirIcon}).bindTooltip("Corongo"),
    Caraz       = L.marker([-9.02251944214, -77.7497741696], {icon: cirIcon}).bindTooltip("Caraz"),
    Yungay      = L.marker([-9.09348643822, -77.6664012208], {icon: cirIcon}).bindTooltip("Yungay"),
    Huaraz      = L.marker([-9.5275, -77.5333], {icon: cirIcon}).bindTooltip("Huaraz"),
    Recuay      = L.marker([-9.70646496248, -77.4474301891], {icon: cirIcon}).bindTooltip("Recuay"),
    Chiquian    = L.marker([-10.1781712648, -77.1792370892], {icon: cirIcon}).bindTooltip("Chiquian"),
    Cajatambo   = L.marker([-10.4551401018, -76.9438397487], {icon: cirIcon}).bindTooltip("Cajatambo"),
    Oyon        = L.marker([-10.66939884, -76.7577218794], {icon: cirIcon}).bindTooltip("Oyon"),
    Punrun      = L.marker([-10.845, -76.488], {icon: cirIcon}).bindTooltip("Punrun"),
    Tarma       = L.marker([-11.4555534773, -75.758776679], {icon: cirIcon}).bindTooltip("Tarma"),
    Huancayo    = L.marker([-11.9933232138, -75.0712799669], {icon: cirIcon}).bindTooltip("Huancayo"),
    Pucara      = L.marker([-12.1801997636, -75.100514813], {icon: cirIcon}).bindTooltip("Pucara"),
    Huancavelica= L.marker([-12.8628485416, -75.0086415045], {icon: cirIcon}).bindTooltip("Huancavelica"),
    Ayacucho    = L.marker([-13.134562378, -74.2520881574], {icon: cirIcon}).bindTooltip("Ayacucho"),
    Vilcashuaman= L.marker([-13.653111, -73.953961], {icon: cirIcon}).bindTooltip("Vilcashuaman"),
    Andahuaylas = L.marker([-13.7683778251, -73.3879123994], {icon: cirIcon}).bindTooltip("Andahuaylas"),
    Abancay     = L.marker([-13.6358417479, -72.8716118414], {icon: cirIcon}).bindTooltip("Abancay"),
    Limatambo   = L.marker([-13.4751052635, -72.4455264046], {icon: cirIcon}).bindTooltip("Limatambo"),
    Jaquijahuana= L.marker([-13.46833, -72.20667], {icon: cirIcon}).bindTooltip("Jaquijahuana");

var towns = L.layerGroup([
    RicaPlaya, ElHuasimo, Poechos, Pabur, LomaLarga, Huancabamba, Olmos, Motupe, Tucume,
    Zana, Niepos, Cajabamba, Huamachuco, Chuco, Andamarca, Corongo, Caraz, Yungay, Huaraz,
    Recuay, Chiquian, Cajatambo, Oyon, Punrun, Tarma, Huancayo, Pucara, Huancavelica,
    Ayacucho, Vilcashuaman, Andahuaylas, Abancay, Limatambo, Jaquijahuana]);

var mapboxLayer = L.tileLayer(
'https://api.mapbox.com/styles/v1/hoovco/ckl366k8t23x017my31incd3s/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG9vdmNvIiwiYSI6ImNrODJia3p4NzB6cDIzZXBha3Fzb3RiOW0ifQ.dzT0EQXtMyS-ME9Ut3rIzQ',
{ attribution: '&copy; <a href= "https://www.mapbox.com/about/maps/">Mapbox </a> | <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> | Author: Corey K. S. Hoover: <a href= "mailTo:corey.k.s.hoover@gmail.com">corey.k.s.hoover@gmail.com</a>'
});

var mapboxLayer2 = L.tileLayer(
'https://api.mapbox.com/styles/v1/hoovco/cknzh6v95093t17pj84gnaayt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG9vdmNvIiwiYSI6ImNrODJia3p4NzB6cDIzZXBha3Fzb3RiOW0ifQ.dzT0EQXtMyS-ME9Ut3rIzQ',
{ attribution: '&copy; <a href= "https://www.mapbox.com/about/maps/">Mapbox </a> | <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> | Author: Corey K. S. Hoover: <a href= "mailTo:corey.k.s.hoover@gmail.com">corey.k.s.hoover@gmail.com</a>'
});

//bringing in pizarros trail geojson
var trailPaths = L.geoJSON(trails, {
  filter: function(feature, layer) {
    if (feature.properties) {
      return feature.properties.underConstruction !== undefined
        ? !feature.properties.underConstruction
        : true;
    }
    return false;
  },
onEachFeature: onEachFeature
 });

 function onEachFeature(feature, layer) {
   if (layer instanceof L.Polyline) {
    layer.setStyle({
         'color': 'maroon',
         'dashArray': '2 5'
    });
   }
 };

//bringing in inca trail geojson
var trailInca = L.geoJSON(incaTrail, {
  filter: function(feature, layer) {
    if (feature.properties) {
      return feature.properties.underConstruction !== undefined
        ? !feature.properties.underConstruction
        : true;
    }
    return false;
  },
onEachFeature: onEachFeature2
 });

 function onEachFeature2(feature, layer) {
   if (layer instanceof L.Polyline) {
    layer.setStyle({
         'color': 'Peru'
    });
   }
 };

 var overlays = {
     "Waypoints": waypoints,
     "Towns": towns,
     "Trails": trailPaths,
     "Inca Trail": trailInca
 };

 var basemaps = {
     "Subdued Theme":mapboxLayer,
     "Satellite Imagery":mapboxLayer2
 };

var map = L.map("map", {
    zoomControl: false,
    center: [-9.0, -75.749],
    zoom: 6,
    minZoom: 2,
    maxZoom: 15,
    layers: [mapboxLayer, waypoints, towns, trailPaths, trailInca]
});
L.control.layers(basemaps, overlays, { position: 'topleft' }).addTo(map);

function tumbesContent(e){
document.getElementById("titleBox").innerHTML = '<h1>Tumbes</h1><h2>April 1532</h2>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> Surprises in Tumbes </h3>';
document.getElementById("scrollInfobox").innerHTML =
'Tumbes would be the first landing in Peru for Pizarro and crew. On the way to Tumbes, the crew stopped' +
' a ship carrying goods along with a crew. Upon inspection Pizarro and crew found something interesting. The merchants or' +
' mindales were transporting incredible amounts of gold and silver along the coast of Peru and Ecuador in exchange for' +
' Mullu, or Spondylus, which is a pink, spiny seashell found exclusively off the coast of Ecuador. Archaeologists and' +
' historians have found this shell to be central to many trade routes and ceremonial contexts throughout Prehispanic Peru.';
document.getElementById("supplementaryInfobox").innerHTML =
'<p3>[1] Pedro Pizarro, Relación del descubrimiento y conquista de los reinos del Perú</p3><p3>op. cit., cap. VI. </p3>';
map.flyTo([-3.56694, -80.45153], 10, {
    animate: true,
    duration: 2
    });
}

function tangararaContent(e){
document.getElementById("titleBox").innerHTML = '<h1> Tangarara </h1><h2>July 1532</h2>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> The first Spanish city in Peru </h3>';
document.getElementById("scrollInfobox").innerHTML = 'Tangarara is one of the first encounters where the' +
' Spanish began to discuss different cultures. Specifically in this case, Tangarara means roughly "a marsh with fish"'+
 ' They established this as the first city, which later would expand into Piura, and the area in general becoming a' +
 ' port city. Several chroniclers discuss a varied cultural area, with people speaking languages seemingly restricted' +
 ' to the coast as well as those restricted to the highlands, as well as interpreters working between the areas. It' +
 ' is suspected that the merchant trade along the coast of Ecuador and Colombia influenced the cultures in the area.';
document.getElementById("supplementaryInfobox").innerHTML = '[1] Freire Carlos, Origen de los Puruhaes, segunda edición,' +
 ' Riobamba-Ecuador, 2005';
map.flyTo([-4.887, -80.824], 10, {
    animate: true,
    duration: 2
    });
}

function cajamarcaContent(e){
document.getElementById("titleBox").innerHTML = '<h1> Cajamarca </h1><h2> November 1532</h2>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> Clash at Cajamarca </h3>';
document.getElementById("scrollInfobox").innerHTML = 'Atahualpa accepted a meeting with Pizarro on good faith' +
 'that conflict would be avoided. He brought several thousand of his best warriors, artisans and scholars. Pizarro' +
 ' had other plans, however. He brought men on horseback armed with rifles, swords and cannons. Atahualpa believed that' +
 ' having the meeting in the Cajamarca valley would allow any conflict to be contained, however this was not the case.' +
 ' Upon meeting Pizarro one of two events took place, depending on the source. Atahualpa offered a gold kero (cup) of Chicha' +
 ' (corn beer), which Pizarro scoffed at, enraging the Incan ruler [1]. Another source declares that the Incan ruler was attacked ' +
 ' because of his "blatant disrespect" for a bible offered to him by one of Pizarros clergymen [2]. Whichever story may be' +
 ' the truth, Pizarro and his men attacked the Incan ruler, slaughtering around 2000 of his subjects and imprisoning 5000 more.' +
 ' He took Atahualpa prisoner for a ransom of gold and silver, which he would later recant on and murder the Inca ruler.';



document.getElementById("supplementaryInfobox").innerHTML = '<p3> [1] MacQuarrie, Kim (2012). The Last Days of The Incas.</p3><br></br><p3>'
+'[2] Yupanqui, T.C., 2005, An Inca Account of the Conquest of Peru, Boulder: University Press of Colorado</p3>';
map.flyTo([-7.16378, -78.50027], 10, {
    animate: true,
    duration: 2
    });
}

function huaylasContent(e){
document.getElementById("titleBox").innerHTML = '<h1> Huaylas </h1><h2> August 1533 <h2/>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> The Bride of Pizarro and Aftermath </h3>';
document.getElementById("scrollInfobox").innerHTML = 'Ines Huaylas Yupanqui was taken as Francisco Pizarros wife after' +
' the battle at Cajamarca. This was not just any regular person - this was the sister of Huascar and Atahualpa. This relationship' +
' was however, somewhat strained. She was taken as prisoner by Atahualpa when she was 18 years old in Cajamarca.' +
' It is at this point in the chronicles that we realize the conquest and civil war is not as straightforward as we think it might be' +
' after the battle of Cajamarca and the capture of Atahualpa, the next step was to begin to consolidate the Incan empire into' +
' economic sectors, and the first area that this took place was Huaylas. It was lso here that the spanish learned more about' +
' locak organization and culture, as well as the use of the Quipu - a knotted system of strings used to keep track of logistics,' +
' send messages, and recount histories. <a href="https://www.britishmuseum.org/collection/object/E_Am1907-0319-286" target="_blank">Click here to' +
' see an example of a Quipu</a>';


document.getElementById("supplementaryInfobox").innerHTML = '[1] Pedro Pizarro, Relación del descubrimiento y conquista' +
' de los reinos del Perú op. cit., cap. VI. <br></br> [2] Francisca Pìzarro una ilustre mestiza, María Rostworowski' +
' Tovar de Diez Canseco. Lima, IEP.<br></br> [3] Primer Nueva Cronica y Buen Gobierno (1615) Guaman Poma de Ayala.';


map.flyTo([-8.88969265855, -77.894017856], 10, {
    animate: true,
    duration: 2
    });
}

function jaujaContent(e){
document.getElementById("titleBox").innerHTML = '<h1> Jauja </h1> <h2> October 1533 </h2>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> The First "Christian" Capital </h3>';
document.getElementById("scrollInfobox").innerHTML =
'Pizarro wanted to take Juaja for several reasons. The area was nestled in a beautiful valley and settled' +
' perfectly between Cusco and San Miguel. He had troubles however getting soldiers to stay. They preferred' +
' adventure and riches over a sedentary life. It was conquered by Pachacutec and was previously named Tunanmarca.' +
' Pizarro had the city ordered to be burned to search for hidden gold. He ransacked and burned everything from temples' +
' to food storage facilities. He would re-found the city in the name of the Virgen del Rosario';

document.getElementById("supplementaryInfobox").innerHTML = '[1] Sitio de web del Distrito Jauja "Jaujami". Jaujamiperu.com';
map.flyTo([-11.7740854362, -75.491137534], 10, {
    animate: true,
    duration: 2
    });
}

function cuscoContent(e){
document.getElementById("titleBox").innerHTML = '<h1> Cusco </h1><h2> Novemeber 1533 </h2>';
document.getElementById("secondaryTitlebox").innerHTML = '<h3> Heart of the Inca Empire </h3>';
document.getElementById("scrollInfobox").innerHTML = 'Upon arrival to the central city of Cusco, the Spanish conquistadors' +
' proceeded to topple monumental architecture and build upon temples. An example of this is the site of Qoricancha, a religious' +
' temple filled with stone carvings and precise stone architecture, with a Spanish church built on top. In fact, if you visit' +
' Cusco, you can see the fine stonework of the Incan city juxtaposed with the spanish building phases. Cusco was considered to be' +
' the "bellybutton of the universe" and the borders of the four territories of the Inca originated there. The Spanish arrived to '
' Cusco and proclaimed the new Inca to be Manco Inca, in order to maintain legitimacy across the empire.';

document.getElementById("supplementaryInfobox").innerHTML = '[1] Cobo, Bernabé; Sociedad de Bibliófilos Andaluces; Jiménez de' +
' la Espada, Marcos (1890)';

map.flyTo([-13.4925399205, -71.9876227864], 10, {
    animate: true,
    duration: 2
    });
}

//L.Control.textbox = L.Control.extend({
//		onAdd: function(map) {
//
//		var text = L.DomUtil.create('div');
//		text.id = "info_text";
//		text.innerHTML = "<strong>text here</strong>"
//		return text;
//		},
//
//		onRemove: function(map) {
//			// Nothing to do here
//		}
//	});
//	L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
//	L.control.textbox({ position: 'bottomleft' }).addTo(map);

//creating the watermark for the "branding" //
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = 'img/maplogo_3.png';
        img.style.width = '150px';
        return img;
    },
    onRemove: function(map) {}
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'topleft' }).addTo(map);

//adding legend

L.Control.Legend = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = 'img/legend2Cronicas.png';
        img.style.width = '150px';
        return img;
    },
    onRemove: function(map) {}
});

L.control.legend = function(opts) {
    return new L.Control.Legend(opts);
}

L.control.legend({ position: 'bottomleft' }).addTo(map);

//creating control and function to turn layers off and on and whatnot
var command = L.control({position: 'topleft'});

command.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'command');

    div.innerHTML = '<form><button id="command" class = navButton type ="button">Tumbes</button></form>' +
                    '<form><button id="command2" class = navButton type="button">Tangarara</button></form>' +
                    '<form><button id="command3" class = navButton type="button">Cajamarca</button></form>' +
                    '<form><button id="command4" class = navButton type="button">Huaylas</button></form>' +
                    '<form><button id="command5" class = navButton type="button">Jauja</button></form>' +
                    '<form><button id="command6" class = navButton type="button">Cusco</button></form>';
    return div;
};

command.addTo(map);

//add the event handler

document.getElementById ("command").addEventListener ("click", tumbesContent);
document.getElementById ("command2").addEventListener ("click", tangararaContent);
document.getElementById ("command3").addEventListener ("click", cajamarcaContent);
document.getElementById ("command4").addEventListener ("click", huaylasContent);
document.getElementById ("command5").addEventListener ("click", jaujaContent);
document.getElementById ("command6").addEventListener ("click", cuscoContent);

// need to make main map variable //
});