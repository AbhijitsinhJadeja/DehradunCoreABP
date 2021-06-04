// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
var ArrLayer = [];
const source = new ol.source.Vector();

var view = new ol.View({
    center: ol.proj.fromLonLat([78.0322, 30.3165]),
    zoom: 11
})
var map = new ol.Map({

    target: 'map',
    layers: [],
    controls: [],

    view: view,
});
//const basemap = new ol.layer.Tile({
//    source: new ol.source.XYZ({
//        url: 'http://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
//    })
//});
//map.addLayer(basemap);

// Gujarat Boundary
var boundary = new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/distDehradun/wms',
    params: { 'LAYERS': 'distDehradun:dist' },
    serverType: 'geoserver'
})
var dist = new ol.layer.Tile({
    source: boundary
});

map.addLayer(dist);
dist.setOpacity(0.5);

// OSM map
var osmMap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard'
});
map.addLayer(osmMap);

var sidebarbottom = document.getElementById('funbottom');
sidebarbottom.addEventListener(
    'click',
    function () {
        document.getElementById('uparrowbtn').classList.toggle('active');
    },
    false
);

var stateGovtBuildingsSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/stateGovernmentOffice/wms',
    params: { 'LAYERS': 'stateGovernmentOffice:state government office' },
    serverType: 'geoserver'
})
var stateGovtBuildingsLayer = new ol.layer.Image({
    source: stateGovtBuildingsSource
});
stateGovtBuildingsLayer.setZIndex(19);


var centralGovtBuildingsSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/centralGovtBuildings/wms',
    params: { 'LAYERS': 'centralGovtBuildings:central government buildings' },
    serverType: 'geoserver'
})
var centralGovtBuildingsLayer = new ol.layer.Image({
    source: centralGovtBuildingsSource
});
centralGovtBuildingsLayer.setZIndex(19);

var drainageNetworkSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/DrainageNetwork/wms',
    params: { 'LAYERS': '	DrainageNetwork:drainagenetwork' },
    serverType: 'geoserver'
})
var drainageNetworkLayer = new ol.layer.Image({
    source: drainageNetworkSource
});
drainageNetworkLayer.setZIndex(19);

var stwcatSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/STWcatchmentboundry/wms',
    params: { 'LAYERS': 'STWcatchmentboundry:stwcatchmentboundry' },
    serverType: 'geoserver'
})
var stwcatLayer = new ol.layer.Image({
    source: stwcatSource
});
stwcatLayer.setZIndex(19);

// Satellite Map
var worldImagery = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 19
    })
});

var stwpointSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/STWpoint/wms',
    params: { 'LAYERS': 'STWpoint:stwpoint' },
    serverType: 'geoserver'
});
var stwpointLayer = new ol.layer.Image({
    source: stwpointSource
});
stwpointLayer.setZIndex(19);

var farmhouseSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/farmHouse/wms',
    params: { 'LAYERS': 'farmHouse:farmhouse' },
    serverType: 'geoserver'
});
var farmhouseLayer = new ol.layer.Image({
    source: farmhouseSource
});
farmhouseLayer.setZIndex(19);

var forestSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/forest/wms',
    params: { 'LAYERS': 'forest:forest' },
    serverType: 'geoserver'
});
var forestLayer = new ol.layer.Image({
    source: forestSource
});
forestLayer.setZIndex(19);

var greenAreasSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/greenAreasDehradun/wms',
    params: { 'LAYERS': 'greenAreasDehradun:greenareas' },
    serverType: 'geoserver'
});
var greenAreasLayer = new ol.layer.Image({
    source: greenAreasSource
});
greenAreasLayer.setZIndex(19);

var agricultureSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/agriculture/wms',
    params: { 'LAYERS': 'agriculture:agriculture' },
    serverType: 'geoserver'
});
var agricultureLayer = new ol.layer.Image({
    source: agricultureSource
});
agricultureLayer.setZIndex(19);

var petrolPumpSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/petrolpump/wms',
    params: { 'LAYERS': 'petrolpump:petrolpump' },
    serverType: 'geoserver'
});
var petrolPumpLayer = new ol.layer.Image({
    source: petrolPumpSource
});
petrolPumpLayer.setZIndex(19);

var busDepotSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/busDepot/wms',
    params: { 'LAYERS': 'busDepot:busdepot' },
    serverType: 'geoserver'
});
var busDepotLayer = new ol.layer.Image({
    source: busDepotSource
});
busDepotLayer.setZIndex(19);

var trafficJunctionSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/trafficJunction/wms',
    params: { 'LAYERS': 'trafficJunction:trafficjunction' },
    serverType: 'geoserver'
});
var trafficJunctionLayer = new ol.layer.Image({
    source: trafficJunctionSource
});
trafficJunctionLayer.setZIndex(19);

var bridgesAndFlyoverSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/bridgesAndFlyover/wms',
    params: { 'LAYERS': 'bridgesAndFlyover:bridgesandflyover' },
    serverType: 'geoserver'
});
var bridgesAndFlyoverLayer = new ol.layer.Image({
    source: bridgesAndFlyoverSource
});
bridgesAndFlyoverLayer.setZIndex(19);

var trafficislandSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/trafficIsland/wms',
    params: { 'LAYERS': 'trafficIsland:trafficisland' },
    serverType: 'geoserver'
});
var trafficislandLayer = new ol.layer.Image({
    source: trafficislandSource
});
trafficislandLayer.setZIndex(19);

var parkingSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/parking/wms',
    params: { 'LAYERS': 'parking:parking' },
    serverType: 'geoserver'
});
var parkingLayer = new ol.layer.Image({
    source: parkingSource
});
parkingLayer.setZIndex(19);

var banksSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/banks/wms',
    params: { 'LAYERS': 'banks:banks' },
    serverType: 'geoserver'
});
var banksLayer = new ol.layer.Image({
    source: banksSource
});
banksLayer.setZIndex(19);

var postofficeSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/postoffice/wms',
    params: { 'LAYERS': 'postoffice:postoffice' },
    serverType: 'geoserver'
});
var postOfficeLayer = new ol.layer.Image({
    source: postofficeSource
});
postOfficeLayer.setZIndex(19);

var atmsSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/atms/wms',
    params: { 'LAYERS': 'atms:atms' },
    serverType: 'geoserver'
});
var atmsLayer = new ol.layer.Image({
    source: atmsSource
});
atmsLayer.setZIndex(19);

var waterOverheadTankSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/wateroverheadtank/wms',
    params: { 'LAYERS': 'wateroverheadtank:wateroverheadtank' },
    serverType: 'geoserver'
});
var waterOverheadTankLayer = new ol.layer.Image({
    source: waterOverheadTankSource
});
waterOverheadTankLayer.setZIndex(19);

var waterTreatmentPlantSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/waterTreatmentPlant/wms',
    params: { 'LAYERS': 'waterTreatmentPlant:watertreatmentplant' },
    serverType: 'geoserver'
});
var waterTreatmentPlantLayer = new ol.layer.Image({
    source: waterTreatmentPlantSource
});
waterTreatmentPlantLayer.setZIndex(19);

var waterOverheadTankLandmarkSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/wateroverheadtankLandmark/wms',
    params: { 'LAYERS': 'wateroverheadtankLandmark:wateroverheadtanklandmark' },
    serverType: 'geoserver'
});
var waterOverheadTankLandmarkLayer = new ol.layer.Image({
    source: waterOverheadTankLandmarkSource
});
waterOverheadTankLandmarkLayer.setZIndex(19);

var waterPipelineSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/waterpipeline/wms',
    params: { 'LAYERS': 'waterpipeline:waterpipline' },
    serverType: 'geoserver'
});
var waterPipelineLayer = new ol.layer.Image({
    source: waterPipelineSource
});
waterPipelineLayer.setZIndex(19);

var waterSupplyPointSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/watersupplypoint/wms',
    params: { 'LAYERS': 'watersupplypoint:watersupplypoint' },
    serverType: 'geoserver'
});
var waterSupplyPointLayer = new ol.layer.Image({
    source: waterSupplyPointSource
});
waterSupplyPointLayer.setZIndex(19);

var tubewelSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/tubewell/wms',
    params: { 'LAYERS': 'tubewell:tubewell' },
    serverType: 'geoserver'
});
var tubewelLayer = new ol.layer.Image({
    source: tubewelSource
});
tubewelLayer.setZIndex(19);

var streetlightSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/streetlight/wms',
    params: { 'LAYERS': 'streetlight:streetlight' },
    serverType: 'geoserver'
});
var streetlightLayer = new ol.layer.Image({
    source: streetlightSource
});
streetlightLayer.setZIndex(19);

var communityToiletSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/communityToilet/wms',
    params: { 'LAYERS': 'communityToilet:communitytoilet' },
    serverType: 'geoserver'
});
var communityToiletLayer = new ol.layer.Image({
    source: communityToiletSource
});
communityToiletLayer.setZIndex(19);

var publicToiletSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/publicToilet/wms',
    params: { 'LAYERS': 'publicToilet:publictoilets' },
    serverType: 'geoserver'
});
var publicLayerToilet = new ol.layer.Image({
    source: publicToiletSource
});
publicLayerToilet.setZIndex(19);

var railwayLineSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/railline/wms',
    params: { 'LAYERS': 'railline:railline' },
    serverType: 'geoserver'
});
var railwayLineLayer = new ol.layer.Image({
    source: railwayLineSource
});
railwayLineLayer.setZIndex(19);

var fireStationSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/fireStation/wms',
    params: { 'LAYERS': 'fireStation:firestation' },
    serverType: 'geoserver'
});
var fireStationLayer = new ol.layer.Image({
    source: fireStationSource
});
fireStationLayer.setZIndex(19);

var policeStationSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/policeStation/wms',
    params: { 'LAYERS': 'policeStation:policestations' },
    serverType: 'geoserver'
});
var policeStationLayer = new ol.layer.Image({
    source: policeStationSource
});
policeStationLayer.setZIndex(19);

var policeChowkiSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/policeChowki/wms',
    params: { 'LAYERS': 'policeChowki:policechowki' },
    serverType: 'geoserver'
});
var policeChowkiLayer = new ol.layer.Image({
    source: policeChowkiSource
});
policeChowkiLayer.setZIndex(19);

var primarySource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/primarySchool/wms',
    params: { 'LAYERS': 'primarySchool:primaryschool' },
    serverType: 'geoserver'
});
var primaryLayer = new ol.layer.Image({
    source: primarySource
});
primaryLayer.setZIndex(19);

var swmContainerSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/SWMContainer/wms',
    params: { 'LAYERS': 'SWMContainer:swm container' },
    serverType: 'geoserver'
});
var swmContainerLayer = new ol.layer.Image({
    source: swmContainerSource
});
swmContainerLayer.setZIndex(19);

var swmTransferStationSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/SWMTransferStation/wms',
    params: { 'LAYERS': 'SWMTransferStation:swm transfer station' },
    serverType: 'geoserver'
});
var swmTransferStationLayer = new ol.layer.Image({
    source: swmTransferStationSource
});
swmTransferStationLayer.setZIndex(19);

var bloodBankSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/bloodbank/wms',
    params: { 'LAYERS': 'bloodbank:bloodbank' },
    serverType: 'geoserver'
});
var bloodBankLayer = new ol.layer.Image({
    source: bloodBankSource
});
bloodBankLayer.setZIndex(19);

var clinikSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/clinik/wms',
    params: { 'LAYERS': 'clinik:clinics' },
    serverType: 'geoserver'
});
var clinikLayer = new ol.layer.Image({
    source: clinikSource
});
clinikLayer.setZIndex(19);

var homeopathicSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/homeopathic/wms',
    params: { 'LAYERS': 'homeopathic:homeopathic' },
    serverType: 'geoserver'
});
var homeopathicLayer = new ol.layer.Image({
    source: homeopathicSource
});
homeopathicLayer.setZIndex(19);

var hospitalSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/hospitalDehradun/wms',
    params: { 'LAYERS': 'hospitalDehradun:hospitals' },
    serverType: 'geoserver'
});
var hospitalLayer = new ol.layer.Image({
    source: hospitalSource
});
hospitalLayer.setZIndex(19);

var medicalSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/medicalStore/wms',
    params: { 'LAYERS': 'medicalStore:medicalstore' },
    serverType: 'geoserver'
});
var medicalStoreLayer = new ol.layer.Image({
    source: medicalSource
});
medicalStoreLayer.setZIndex(19);

var surgicalShopSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/surgicalShop/wms',
    params: { 'LAYERS': '	surgicalShop:surgicalshop' },
    serverType: 'geoserver'
});
var surgicalShopLayer = new ol.layer.Image({
    source: surgicalShopSource
});
surgicalShopLayer.setZIndex(19);

var veterinarySource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/vetenary/wms',
    params: { 'LAYERS': 'vetenary:veterinary' },
    serverType: 'geoserver'
});
var veterinaryLayer = new ol.layer.Image({
    source: veterinarySource
});
veterinaryLayer.setZIndex(19);

var medicalStoreSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/medicalStore/wms',
    params: { 'LAYERS': 'medicalStore:medicalstore' },
    serverType: 'geoserver'
});
var medicalStoreLayer = new ol.layer.Image({
    source: medicalStoreSource
});
medicalStoreLayer.setZIndex(19);

var abdAreaSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/areaBasedDevelopment/wms',
    params: { 'LAYERS': 'areaBasedDevelopment:areabaseddevlopment' },
    serverType: 'geoserver'
});
var abdAreaLayer = new ol.layer.Image({
    source: abdAreaSource
});
abdAreaLayer.setZIndex(19);

var abdWardSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/abdWardBoundary/wms',
    params: { 'LAYERS': 'abdWardBoundary:abdwardboundry' },
    serverType: 'geoserver'
});
var abdwardLayer = new ol.layer.Image({
    source: abdWardSource
});
abdwardLayer.setZIndex(19);

var abdConnectDrainSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/abdConnectivityDrain/wms',
    params: { 'LAYERS': 'abdConnectivityDrain:abdconnectivitydrain' },
    serverType: 'geoserver'
});
var abdConnectiDrainLayer = new ol.layer.Image({
    source: abdConnectDrainSource
});
abdConnectiDrainLayer.setZIndex(19);

var abdgreenBuildingSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/ABDGrBuilding/wms',
    params: { 'LAYERS': 'ABDGrBuilding:abdgrbuilding' },
    serverType: 'geoserver'
});
var abdgreenBuildingLayer = new ol.layer.Image({
    source: abdgreenBuildingSource
});
abdgreenBuildingLayer.setZIndex(19);

var abdMddaParkSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/abdmddapark/wms',
    params: { 'LAYERS': 'abdmddapark:abdmddapark' },
    serverType: 'geoserver'
});
var abdMddaParkLayer = new ol.layer.Image({
    source: abdMddaParkSource
});
abdMddaParkLayer.setZIndex(19);

var isolationWardSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/isolationword/wms',
    params: { 'LAYERS': 'isolationword:isolationward' },
    serverType: 'geoserver'
});
var isolationWardLayer = new ol.layer.Image({
    source: isolationWardSource
});
isolationWardLayer.setZIndex(19);

var eduOthersSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/otherEducation/wms',
    params: { 'LAYERS': 'otherEducation:othereducation' },
    serverType: 'geoserver'
});
var eduOthersLayer = new ol.layer.Image({
    source: eduOthersSource
});
eduOthersLayer.setZIndex(19);

var reservoirSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/reservoir/wms',
    params: { 'LAYERS': 'reservoir:reservoir' },
    serverType: 'geoserver'
});
var reservoirLayer = new ol.layer.Image({
    source: reservoirSource
});
reservoirLayer.setZIndex(19);

var adBoundary = document.getElementById('adBoundary');
adBoundary.addEventListener(
    'click',
    function () {
        if (adBoundary.checked == true) {
            map.addLayer(boundaryMunicipleLayer);
            document.getElementById('bMuniciple').checked = true;
        } else {
            map.removeLayer(boundaryMunicipleLayer);
            document.getElementById('bMuniciple').checked = false;
        }
    },
    false
);

var bMuniciple = document.getElementById('bMuniciple');
bMuniciple.addEventListener(
    'click',
    function () {
        if (bMuniciple.checked == true) {
            map.addLayer(boundaryMunicipleLayer);
        } else {
            map.removeLayer(boundaryMunicipleLayer);
            document.getElementById('adBoundary').checked = false;
        }
    },
    false
);

var buildings = document.getElementById('buildings');
buildings.addEventListener(
    'click',
    function () {
        if (buildings.checked == true) {
            map.addLayer(stateGovtBuildingsLayer);
            document.getElementById('sBuildings').checked = true;
            map.addLayer(centralGovtBuildingsLayer);
            document.getElementById('cBuildings').checked = true;
            ArrLayer.push(stateGovtBuildingsSource);
            ArrLayer.push(centralGovtBuildingsSource);
        } else {
            map.removeLayer(stateGovtBuildingsLayer);
            document.getElementById('sBuildings').checked = false;
            map.removeLayer(centralGovtBuildingsLayer);
            document.getElementById('cBuildings').checked = false;
        }
    },
    false
);

var sBuildings = document.getElementById('sBuildings');
sBuildings.addEventListener(
    'click',
    function () {
        if (sBuildings.checked == true) {
            map.addLayer(stateGovtBuildingsLayer);
            ArrLayer.push(stateGovtBuildingsSource);
        } else {
            map.removeLayer(stateGovtBuildingsLayer);
            document.getElementById('buildings').checked = false;
        }
    },
    false
);

var cBuildings = document.getElementById('cBuildings');
cBuildings.addEventListener(
    'click',
    function () {
        if (cBuildings.checked == true) {
            map.addLayer(centralGovtBuildingsLayer);
            ArrLayer.push(centralGovtBuildingsSource);
        } else {
            map.removeLayer(centralGovtBuildingsLayer);
            document.getElementById('buildings').checked = false;
        }
    },
    false
);

var covidCenterCheckBox = document.getElementById('covidCenterCheckBox');
covidCenterCheckBox.addEventListener(
    'click',
    function () {
        if (covidCenterCheckBox.checked == true) {
            map.addLayer(drainageNetworkLayer);
            document.getElementById('dNetwork').checked = true;
            map.addLayer(stwcatLayer);
            document.getElementById('stwboundary').checked = true;
            map.addLayer(stwpointLayer);
            document.getElementById('stwpoint').checked = true;
            ArrLayer.push(drainageNetworkSource);
            ArrLayer.push(stwcatSource);
            ArrLayer.push(stwpointSource);
        } else {
            map.removeLayer(drainageNetworkLayer);
            document.getElementById('dNetwork').checked = false;
            map.removeLayer(stwcatLayer);
            document.getElementById('stwboundary').checked = false;
            map.removeLayer(stwpointLayer);
            document.getElementById('stwpoint').checked = false;
        }
    },
    false
);

var dNetwork = document.getElementById('dNetwork');
dNetwork.addEventListener(
    'click',
    function () {
        if (dNetwork.checked == true) {
            map.addLayer(drainageNetworkLayer);
            ArrLayer.push(drainageNetworkSource);
        } else {
            map.removeLayer(drainageNetworkLayer);
            document.getElementById('covidCenterCheckBox').checked = false;
        }
    },
    false
);

var stwboundary = document.getElementById('stwboundary');
stwboundary.addEventListener(
    'click',
    function () {
        if (stwboundary.checked == true) {
            map.addLayer(stwcatLayer);
            ArrLayer.push(stwcatSource);
        } else {
            map.removeLayer(stwcatLayer);
            document.getElementById('covidCenterCheckBox').checked = false;
        }
    },
    false
);

var stwpoint = document.getElementById('stwpoint');
stwpoint.addEventListener(
    'click',
    function () {
        if (stwpoint.checked == true) {
            map.addLayer(stwpointLayer);
            ArrLayer.push(stwpointSource);
        } else {
            map.removeLayer(stwpointLayer);
            document.getElementById('covidCenterCheckBox').checked = false;
        }
    },
    false
);

var greenArea = document.getElementById('greenArea');
greenArea.addEventListener(
    'click',
    function () {
        if (greenArea.checked == true) {
            map.addLayer(farmhouseLayer);
            document.getElementById('farmHouse').checked = true;
            map.addLayer(forestLayer);
            document.getElementById('forest').checked = true;
            map.addLayer(greenAreasLayer);
            document.getElementById('gArea').checked = true;
            map.addLayer(agricultureLayer);
            document.getElementById('agriculture').checked = true;
            ArrLayer.push(farmhouseSource);
            ArrLayer.push(forestSource);
            ArrLayer.push(greenAreasSource);
            ArrLayer.push(agricultureSource);
        } else {
            map.removeLayer(farmhouseLayer);
            document.getElementById('farmHouse').checked = false;
            map.removeLayer(forestLayer);
            document.getElementById('forest').checked = false;
            map.removeLayer(greenAreasLayer);
            document.getElementById('gArea').checked = false;
            map.addLayer(agricultureLayer);
            document.getElementById('agriculture').checked = true;
        }
    },
    false
);

var farmHouse = document.getElementById('farmHouse');
farmHouse.addEventListener(
    'click',
    function () {
        if (farmHouse.checked == true) {
            map.addLayer(farmhouseLayer);
            ArrLayer.push(farmhouseSource);
        } else {
            map.removeLayer(farmhouseLayer);
            document.getElementById('greenArea').checked = false;
        }
    },
    false
);

var forest = document.getElementById('forest');
forest.addEventListener(
    'click',
    function () {
        if (forest.checked == true) {
            map.addLayer(forestLayer);
            ArrLayer.push(forestSource);
        } else {
            map.removeLayer(forestLayer);
            document.getElementById('greenArea').checked = false;
        }
    },
    false
);

var gArea = document.getElementById('gArea');
gArea.addEventListener(
    'click',
    function () {
        if (gArea.checked == true) {
            map.addLayer(greenAreasLayer);
            ArrLayer.push(greenAreasSource);
        } else {
            map.removeLayer(greenAreasLayer);
            document.getElementById('greenArea').checked = false;
        }
    },
    false
);

var agriculture = document.getElementById('agriculture');
agriculture.addEventListener(
    'click',
    function () {
        if (agriculture.checked == true) {
            map.addLayer(agricultureLayer);
            ArrLayer.push(agricultureSource);
        } else {
            map.removeLayer(agricultureLayer);
            document.getElementById('greenArea').checked = false;
        }
    },
    false
);

var road = document.getElementById('road');
road.addEventListener(
    'click',
    function () {
        if (road.checked == true) {
            map.addLayer(petrolPumpLayer);
            document.getElementById('petrolPump').checked = true;
            map.addLayer(busDepotLayer);
            document.getElementById('busDepot').checked = true;
            map.addLayer(trafficJunctionLayer);
            document.getElementById('tJun').checked = true;
            map.addLayer(bridgesAndFlyoverLayer);
            document.getElementById('bridges').checked = true;
            map.addLayer(trafficislandLayer);
            document.getElementById('tIsland').checked = true;
            map.addLayer(parkingLayer);
            document.getElementById('parking').checked = true;
            ArrLayer.push(petrolPumpSource);
            ArrLayer.push(busDepotSource);
            ArrLayer.push(trafficJunctionSource);
            ArrLayer.push(bridgesAndFlyoverSource);
            ArrLayer.push(trafficislandSource);
            ArrLayer.push(parkingSource);
        } else {
            map.removeLayer(petrolPumpLayer);
            document.getElementById('petrolPump').checked = false;
            map.removeLayer(busDepotLayer);
            document.getElementById('busDepot').checked = false;
            map.removeLayer(trafficJunctionLayer);
            document.getElementById('tJun').checked = false;
            map.addLayer(bridgesAndFlyoverLayer);
            document.getElementById('bridges').checked = true;
            map.removeLayer(trafficislandLayer);
            document.getElementById('tIsland').checked = false;
            map.addLayer(parkingLayer);
            document.getElementById('parking').checked = true;
        }
    },
    false
);

var petrolPump = document.getElementById('petrolPump');
petrolPump.addEventListener(
    'click',
    function () {
        if (petrolPump.checked == true) {
            map.addLayer(petrolPumpLayer);
            ArrLayer.push(petrolPumpSource);
        } else {
            map.removeLayer(petrolPumpLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var busDepot = document.getElementById('busDepot');
busDepot.addEventListener(
    'click',
    function () {
        if (busDepot.checked == true) {
            map.addLayer(busDepotLayer);
            ArrLayer.push(busDepotSource);
        } else {
            map.removeLayer(busDepotLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var tJun = document.getElementById('tJun');
tJun.addEventListener(
    'click',
    function () {
        if (tJun.checked == true) {
            map.addLayer(trafficJunctionLayer);
            ArrLayer.push(trafficJunctionSource);
        } else {
            map.removeLayer(trafficJunctionLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var bridges = document.getElementById('bridges');
bridges.addEventListener(
    'click',
    function () {
        if (bridges.checked == true) {
            map.addLayer(bridgesAndFlyoverLayer);
            ArrLayer.push(bridgesAndFlyoverSource);
        } else {
            map.removeLayer(bridgesAndFlyoverLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var tIsland = document.getElementById('tIsland');
tIsland.addEventListener(
    'click',
    function () {
        if (tIsland.checked == true) {
            map.addLayer(trafficislandLayer);
            ArrLayer.push(trafficislandSource);
        } else {
            map.removeLayer(trafficislandLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var parking = document.getElementById('parking');
parking.addEventListener(
    'click',
    function () {
        if (parking.checked == true) {
            map.addLayer(parkingLayer);
            ArrLayer.push(parkingSource);
        } else {
            map.removeLayer(parkingLayer);
            document.getElementById('road').checked = false;
        }
    },
    false
);
var bbanks = document.getElementById('bbanks');
bbanks.addEventListener(
    'click',
    function () {
        if (bbanks.checked == true) {
            map.addLayer(banksLayer);
            ArrLayer.push(banksSource);
        } else {
            map.removeLayer(banksLayer);
        }
    },
    false
);
var bpf = document.getElementById('bpf');
bpf.addEventListener(
    'click',
    function () {
        if (bpf.checked == true) {
            map.addLayer(postOfficeLayer);
            ArrLayer.push(postofficeSource);
        } else {
            map.removeLayer(postOfficeLayer);
        }
    },
    false
);
var batms = document.getElementById('batms');
batms.addEventListener(
    'click',
    function () {
        if (batms.checked == true) {
            map.addLayer(atmsLayer);
            ArrLayer.push(atmsSource);
        } else {
            map.removeLayer(atmsLayer);
        }
    },
    false
);
var wtot = document.getElementById('wtot');
wtot.addEventListener(
    'click',
    function () {
        if (wtot.checked == true) {
            map.addLayer(waterOverheadTankLayer);
            ArrLayer.push(waterOverheadTankSource);
        } else {
            map.removeLayer(waterOverheadTankLayer);
        }
    },
    false
);
var wwtp = document.getElementById('wwtp');
wwtp.addEventListener(
    'click',
    function () {
        if (wwtp.checked == true) {
            map.addLayer(waterTreatmentPlantLayer);
            ArrLayer.push(waterTreatmentPlantSource);
        } else {
            map.removeLayer(waterTreatmentPlantLayer);
        }
    },
    false
);
var wotl = document.getElementById('wotl');
wotl.addEventListener(
    'click',
    function () {
        if (wotl.checked == true) {
            map.addLayer(waterOverheadTankLandmarkLayer);
            ArrLayer.push(waterOverheadTankLandmarkSource);
        } else {
            map.removeLayer(waterOverheadTankLandmarkLayer);
        }
    },
    false
);

var wwp = document.getElementById('wwp');
wwp.addEventListener(
    'click',
    function () {
        if (wwp.checked == true) {
            map.addLayer(waterPipelineLayer);
            ArrLayer.push(waterPipelineSource);
        } else {
            map.removeLayer(waterPipelineLayer);
        }
    },
    false
);

var wwsp = document.getElementById('wwsp');
wwsp.addEventListener(
    'click',
    function () {
        if (wwsp.checked == true) {
            map.addLayer(waterSupplyPointLayer);
            ArrLayer.push(waterSupplyPointSource);
        } else {
            map.removeLayer(waterSupplyPointLayer);
        }
    },
    false
);

var wt = document.getElementById('wt');
wt.addEventListener(
    'click',
    function () {
        if (wt.checked == true) {
            map.addLayer(tubewelLayer);
            ArrLayer.push(tubewelSource);
        } else {
            map.removeLayer(tubewelLayer);
        }
    },
    false
);

var st2 = document.getElementById('st2');
st2.addEventListener(
    'click',
    function () {
        if (st2.checked == true) {
            map.addLayer(streetlightLayer);
            ArrLayer.push(streetlightSource);
        } else {
            map.removeLayer(streetlightLayer);
        }
    },
    false
);

var cToilet = document.getElementById('cToilet');
cToilet.addEventListener(
    'click',
    function () {
        if (cToilet.checked == true) {
            map.addLayer(communityToiletLayer);
            ArrLayer.push(communityToiletSource);
        } else {
            map.removeLayer(communityToiletLayer);
        }
    },
    false
);
var pToilet = document.getElementById('pToilet');
pToilet.addEventListener(
    'click',
    function () {
        if (pToilet.checked == true) {
            map.addLayer(publicLayerToilet);
            ArrLayer.push(publicToiletSource);
        } else {
            map.removeLayer(publicLayerToilet);
        }
    },
    false
);
var rLine = document.getElementById('rLine');
rLine.addEventListener(
    'click',
    function () {
        if (rLine.checked == true) {
            map.addLayer(railwayLineLayer);
            ArrLayer.push(railwayLineSource);
        } else {
            map.removeLayer(railwayLineLayer);
        }
    },
    false
);
var eFireStations = document.getElementById('eFireStations');
eFireStations.addEventListener(
    'click',
    function () {
        if (eFireStations.checked == true) {
            map.addLayer(fireStationLayer);
            ArrLayer.push(fireStationSource);
        } else {
            map.removeLayer(fireStationLayer);
        }
    },
    false
);
var ePoliceStations = document.getElementById('ePoliceStations');
ePoliceStations.addEventListener(
    'click',
    function () {
        if (ePoliceStations.checked == true) {
            map.addLayer(policeStationLayer);
            ArrLayer.push(policeStationSource);
        } else {
            map.removeLayer(policeStationLayer);
        }
    },
    false
);
var ePoliceChowki = document.getElementById('ePoliceChowki');
ePoliceChowki.addEventListener(
    'click',
    function () {
        if (ePoliceChowki.checked == true) {
            map.addLayer(policeChowkiLayer);
            ArrLayer.push(policeChowkiSource);
        } else {
            map.removeLayer(policeChowkiLayer);
        }
    },
    false
);

var eduPri = document.getElementById('eduPri');
eduPri.addEventListener(
    'click',
    function () {
        if (eduPri.checked == true) {
            map.addLayer(primaryLayer);
            ArrLayer.push(primarySource);
        } else {
            map.removeLayer(primaryLayer);
        }
    },
    false
);

var swmContainer = document.getElementById('swmContainer');
swmContainer.addEventListener(
    'click',
    function () {
        if (swmContainer.checked == true) {
            map.addLayer(swmContainerLayer);
            ArrLayer.push(swmContainerSource);
        } else {
            map.removeLayer(swmContainerLayer);
        }
    },
    false
);

var swmTrStation = document.getElementById('swmTrStation');
swmTrStation.addEventListener(
    'click',
    function () {
        if (swmTrStation.checked == true) {
            map.addLayer(swmTransferStationLayer);
            ArrLayer.push(swmTransferStationSource);
        } else {
            map.removeLayer(swmTransferStationLayer);
        }
    },
    false
);
var mBloodbank = document.getElementById('mBloodbank');
mBloodbank.addEventListener(
    'click',
    function () {
        if (mBloodbank.checked == true) {
            map.addLayer(bloodBankLayer);
            ArrLayer.push(bloodBankSource);
        } else {
            map.removeLayer(bloodBankLayer);
        }
    },
    false
);

var mClinik = document.getElementById('mClinik');
mClinik.addEventListener(
    'click',
    function () {
        if (mClinik.checked == true) {
            map.addLayer(clinikLayer);
            ArrLayer.push(clinikSource);
        } else {
            map.removeLayer(clinikLayer);
        }
    },
    false
);

var mHomeopathic = document.getElementById('mHomeopathic');
mHomeopathic.addEventListener(
    'click',
    function () {
        if (mHomeopathic.checked == true) {
            map.addLayer(homeopathicLayer);
            ArrLayer.push(homeopathicSource);
        } else {
            map.removeLayer(homeopathicLayer);
        }
    },
    false
);


var mHospital = document.getElementById('mHospital');
mHospital.addEventListener(
    'click',
    function () {
        if (mHospital.checked == true) {
            map.addLayer(hospitalLayer);
            ArrLayer.push(hospitalSource);
        } else {
            map.removeLayer(hospitalLayer);
        }
    },
    false
);

var mMedStore = document.getElementById('mMedStore');
mMedStore.addEventListener(
    'click',
    function () {
        if (mMedStore.checked == true) {
            map.addLayer(medicalStoreLayer);
            ArrLayer.push(medicalSource);
        } else {
            map.removeLayer(medicalStoreLayer);
        }
    },
    false
);

var mSurStore = document.getElementById('mSurStore');
mSurStore.addEventListener(
    'click',
    function () {
        if (mSurStore.checked == true) {
            map.addLayer(surgicalShopLayer);
            ArrLayer.push(surgicalShopSource);
        } else {
            map.removeLayer(surgicalShopLayer);
        }
    },
    false
);

var mVeterinaryClinik = document.getElementById('mVeterinaryClinik');
mVeterinaryClinik.addEventListener(
    'click',
    function () {
        if (mVeterinaryClinik.checked == true) {
            map.addLayer(veterinaryLayer);
            ArrLayer.push(veterinarySource);
        } else {
            map.removeLayer(veterinaryLayer);
        }
    },
    false
);

var abdArea = document.getElementById('abdArea');
abdArea.addEventListener(
    'click',
    function () {
        if (abdArea.checked == true) {
            map.addLayer(abdAreaLayer);
            ArrLayer.push(abdAreaSource);
        } else {
            map.removeLayer(abdAreaLayer);
        }
    },
    false
);

var abdWardBound = document.getElementById('abdWardBound');
abdWardBound.addEventListener(
    'click',
    function () {
        if (abdWardBound.checked == true) {
            map.addLayer(abdwardLayer);
            ArrLayer.push(abdWardSource);
        } else {
            map.removeLayer(abdwardLayer);
        }
    },
    false
);

var abdConnDrain = document.getElementById('abdConnDrain');
abdConnDrain.addEventListener(
    'click',
    function () {
        if (abdConnDrain.checked == true) {
            map.addLayer(abdConnectiDrainLayer);
            ArrLayer.push(abdConnectDrainSource);
        } else {
            map.removeLayer(abdConnectiDrainLayer);
        }
    },
    false
);

var abdGreenBuilding = document.getElementById('abdGreenBuilding');
abdGreenBuilding.addEventListener(
    'click',
    function () {
        if (abdGreenBuilding.checked == true) {
            map.addLayer(abdgreenBuildingLayer);
            ArrLayer.push(abdgreenBuildingSource);
        } else {
            map.removeLayer(abdgreenBuildingLayer);
        }
    },
    false
);

var abdMddaPark = document.getElementById('abdMddaPark');
abdMddaPark.addEventListener(
    'click',
    function () {
        if (abdMddaPark.checked == true) {
            map.addLayer(abdMddaParkLayer);
            ArrLayer.push(abdMddaParkSource);
        } else {
            map.removeLayer(abdMddaParkLayer);
        }
    },
    false
);

var isolationWard = document.getElementById('isolationWard');
isolationWard.addEventListener(
    'click',
    function () {
        if (isolationWard.checked == true) {
            map.addLayer(isolationWardLayer);
            ArrLayer.push(isolationWardSource);
        } else {
            map.removeLayer(isolationWardLayer);
        }
    },
    false
);

var otherEdu = document.getElementById('otherEdu');
otherEdu.addEventListener(
    'click',
    function () {
        if (otherEdu.checked == true) {
            map.addLayer(eduOthersLayer);
            ArrLayer.push(eduOthersSource);
        } else {
            map.removeLayer(eduOthersLayer);
        }
    },
    false
);

var scadaTubewell = document.getElementById('scadaTubewell');
scadaTubewell.addEventListener(
    'click',
    function () {
        if (scadaTubewell.checked == true) {
            map.addLayer(tubewelLayer);
            ArrLayer.push(tubewelSource);
        } else {
            map.removeLayer(tubewelLayer);
        }
    },
    false
);

var scadaReservoir = document.getElementById('scadaReservoir');
scadaReservoir.addEventListener(
    'click',
    function () {
        if (scadaReservoir.checked == true) {
            map.addLayer(reservoirLayer);
            ArrLayer.push(reservoirSource);
        } else {
            map.removeLayer(reservoirLayer);
        }
    },
    false
);



var emeDialog = document.getElementById("dialog2");
var amEmergencyServices = document.getElementById("eme");
amEmergencyServices.addEventListener(
    'click',
    function () {
        emeDialog.show();
    },
    false
);
var markerLayerEmerg, markerLayerFunAndEnt, markerLayerTouristAtr;
var clearEmeServiceBtn = document.getElementById("clearEmeServiceBtn");
clearEmeServiceBtn.addEventListener(
    'click',
    function () {
        checkEmeService = false;
        document.getElementById("eme").checked = false;
        document.getElementById("selHospital").style.display = "";
        document.getElementById("selHospital").style.display = "none";
        map.removeLayer(layer12);
        window.location.reload();
        // map.removeLayer(markerLayerFunAndEnt);
        // map.removeLayer(markerLayerTouristAtr);
    },
    false
);
var checkEmeService = false;
var closeDialogEme = document.getElementById("dia2Close");
var layer12;
closeDialogEme.addEventListener(
    'click',
    function () {
        checkEmeService = true;
        emeDialog.close();

        map.on('click', function (e) {
            if (checkEmeService) {

                map.removeLayer(layer12);
                var cor = e.coordinate;
                var cordinates = meters2degress(cor[0], cor[1]);
                var longitude = cordinates[0], latitude = cordinates[1];
                console.log(longitude + " " + latitude);
                var centerLongitudeLatitude = ol.proj.fromLonLat([longitude, latitude]);
                layer12 = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        projection: 'EPSG:4326',
                        features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, 2000))]
                    }),
                    style: [
                        new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: 'blue',
                                width: 3
                            }),
                            fill: new ol.style.Fill({
                                color: 'rgba(0, 0, 255, 0.1)'
                            })
                        })
                    ]
                });
                map.addLayer(layer12);
            }
        });
    },
    false
);
var findLocation = document.getElementById('findLocation');
var dialog = document.getElementById('dialog1');
findLocation.addEventListener(
    'click',
    function () {
        locationLinecount = 0;
        locationLine = true;
        dialog.show();
    },
    false
);
var direction = document.getElementById('direction');
direction.addEventListener(
    'click',
    function () {
        var value1 = document.getElementById("cor1").value.split(",");
        var value2 = document.getElementById("cor2").value.split(",");
        var longitude1 = value1[0], latitude1 = value1[1];
        var longitude2 = value2[0], latitude2 = value2[1];

        var markerLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude1, latitude1]))
                    })
                ]
            })
        });
        map.addLayer(markerLayer);

        var markerLayer2 = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude2, latitude2]))
                    })
                ]
            })
        });
        map.addLayer(markerLayer2);

        //For LineDraw
        var lonlat = ol.proj.fromLonLat([longitude1, latitude1]);
        var location2 = ol.proj.fromLonLat([longitude2, latitude2]);
        var linieStyle = [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#d12710',
                    width: 3,
                }),
                text: new ol.style.Text({
                    text: "KM : " + parseInt(distance(latitude1, longitude1, latitude2, longitude2)),
                    scale: 2,
                    fill: new ol.style.Fill({
                        color: '#black',
                    })
                })
            })
        ];
        //create the line       
        var linie = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [new ol.Feature({
                    geometry: new ol.geom.LineString([lonlat, location2]),
                    name: 'Line',
                })]
            })
        });

        //set the style and add to layer
        linie.setStyle(linieStyle);
        map.addLayer(linie);


        // alert(distance(latitude1, longitude1, latitude2, longitude2));
        dialog.close();
    },
    false
);

function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344

        return dist;
    }
}

var clearFindLocation = document.getElementById('flClear');
clearFindLocation.addEventListener(
    'click',
    function () {
        document.getElementById("cor1").value = "";
        document.getElementById("cor2").value = "";
    },
    false
);

var closeDialogBox = document.getElementById('close');
closeDialogBox.addEventListener(
    'click',
    function () {
        dialog.close();
    },
    false
);

var homeNav = document.getElementById('homeNav');
homeNav.addEventListener(
    'click',
    function () {
        // window.location.reload();
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++)
            deleteCookie(cookies[i].split("=")[0]);
        window.open("index.html", "_self");
        // window.open("home2.html", "_SELF");
    },
    false
);
var previousNav = document.getElementById('prevNav');
previousNav.addEventListener(
    'click',
    function () {
        window.history.back();
    },
    false
);
var nextNav = document.getElementById('nextNav');
nextNav.addEventListener(
    'click',
    function () {
        window.history.forward();
    },
    false
);
var clearSelctionNav = document.getElementById('clearSelection');
clearSelctionNav.addEventListener(
    'click',
    function () {
        window.location.reload();
        // var layerArray, len, layer1;
        // layerArray = map.getLayers().getArray();
        // len = layerArray.length;
        // while (len > 0) {
        //   layer1 = layerArray[len - 1];
        //   map.removeLayer(layer1);
        //   len = layerArray.length;
        // }

        // if (document.getElementById("satelliteradio").checked == true) {
        //   map.addLayer(worldImagery);
        // } else if (document.getElementById("osmradio").checked == true) {
        //   map.addLayer(osmMap);
        // } else {
        //   map.addLayer(dist);
        //   // map.addLayer(distNames);
        // }
        // navBarCorr = 0;
        // document.getElementById("coorNavDashboard").innerHTML = "";
        // document.getElementById("adBoundary").checked = false;
        // document.getElementById("bMuniciple").checked = false;
        // document.getElementById("sBuildings").checked = false;
        // document.getElementById("cBuildings").checked = false;
        // document.getElementById("dNetwork").checked = false;
        // document.getElementById("stwboundary").checked = false;
        // document.getElementById("stwpoint").checked = false;
        // document.getElementById("farmHouse").checked = false;
        // document.getElementById("forest").checked = false;
        // document.getElementById("gArea").checked = false;
        // document.getElementById("agriculture").checked = false;
        // document.getElementById("petrolPump").checked = false;
        // document.getElementById("busDepot").checked = false;
        // document.getElementById("tJun").checked = false;
        // document.getElementById("bridges").checked = false;
        // document.getElementById("tIsland").checked = false;
        // document.getElementById("parking").checked = false;
        // document.getElementById("bbanks").checked = false;
        // document.getElementById("bpf").checked = false;
        // document.getElementById("batms").checked = false;
        // document.getElementById("wtot").checked = false;
        // document.getElementById("wwtp").checked = false;
        // document.getElementById("wotl").checked = false;
        // document.getElementById("wwp").checked = false;
        // document.getElementById("wwsp").checked = false;
        // document.getElementById("wt").checked = false;
        // document.getElementById("st2").checked = false;
        // document.getElementById("cToilet").checked = false;
        // document.getElementById("pToilet").checked = false;
        // document.getElementById("rLine").checked = false;
        // document.getElementById("eFireStations").checked = false;
        // document.getElementById("ePoliceStations").checked = false;
        // document.getElementById("ePoliceChowki").checked = false;
        // document.getElementById("eduPri").checked = false;
        // document.getElementById("swmContainer").checked = false;
        // document.getElementById("swmTrStation").checked = false;
        // document.getElementById("mBloodbank").checked = false;
        // document.getElementById("mClinik").checked = false;
        // document.getElementById("mHomeopathic").checked = false;
        // document.getElementById("mHospital").checked = false;
        // document.getElementById("mMedStore").checked = false;
        // document.getElementById("mSurStore").checked = false;
        // document.getElementById("mVeterinaryClinik").checked = false;
        // document.getElementById("abdArea").checked = false;
        // document.getElementById("abdWardBound").checked = false;
        // document.getElementById("abdConnDrain").checked = false;
        // document.getElementById("abdGreenBuilding").checked = false;
        // document.getElementById("abdMddaPark").checked = false;
        // document.getElementById("isolationWard").checked = false;
        // document.getElementById("otherEdu").checked = false;
        // document.getElementById("scadaTubewell").checked = false;
        // document.getElementById("scadaReservoir").checked = false;
    },
    false
);
var zoomIn = document.getElementById('plus');
zoomIn.addEventListener(
    'click',
    function () {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom + 1);
    },
    false
);
var zoomOut = document.getElementById('minus');
zoomOut.addEventListener(
    'click',
    function () {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom - 1);
    },
    false
);
var SatelliteRadioBtn = document.getElementById('satelliteradio');
SatelliteRadioBtn.addEventListener(
    'click',
    function () {
        map.removeLayer(dist);
        map.removeLayer(osmMap);
        // map.removeLayer(distNames);
        map.addLayer(worldImagery);
    },
    false
);
var osmRadioBtn = document.getElementById('osmradio');
osmRadioBtn.addEventListener(
    'click',
    function () {
        map.removeLayer(worldImagery);
        map.removeLayer(dist);
        // map.removeLayer(distNames);
        map.addLayer(osmMap);
    },
    false
);
var gujaratradioBtn = document.getElementById('gujaratradio');
gujaratradioBtn.addEventListener(
    'click',
    function () {
        map.removeLayer(osmMap);
        map.removeLayer(worldImagery);
        map.addLayer(dist);
        // map.addLayer(distNames);
    },
    false
);

var panID = false;
var panNav = document.getElementById("panNav");
panNav.addEventListener(
    'click',
    function () {
        if (panID) {
            document.getElementById("map").style.cursor = "auto";
            panID = false;
        } else {
            document.getElementById("map").style.cursor = "grab";
            panID = true;
        }
    },
    false
);

var locationLine = false, locationLinecount = 0;
var l1 = document.getElementById("l1");
l1.addEventListener(
    'click',
    function () {
        locationLine = true;
        locationLinecount++;
        dialog.close();
    },
    false
);
var l2 = document.getElementById("l2");
l2.addEventListener(
    'click',
    function () {
        locationLine = true;
        locationLinecount++;
        dialog.close();
    },
    false
);

var meters2degress = function (x, y) {
    var lon = x * 180 / 20037508.34;
    //thanks magichim @ github for the correction
    var lat = Math.atan(Math.exp(y * Math.PI / 20037508.34)) * 360 / Math.PI - 90;
    return [lon, lat]
}

var prevLongitude = 0, prevLatitude = 0;
var City = "";

map.on('click', function (e) {

    var c = e.coordinate;
    var cd = meters2degress(c[0], c[1])

    if (navBarCorr == 1) {
        fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + cd[0] + '&lat=' + cd[1])
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                // coordinate = [Lon, Lat];
                // overlay.setPosition(coordinate);

                document.getElementById("coorNavDashboard").innerHTML = '<p>' + json.display_name + '</p>';
                dialog.close();
            });

        navBarCorr = 0;
    }


    var p = new Promise((resolve, reject) => {
        var res = map.getView().getResolution();
        var coord = e.coordinate;
        var projection = map.getView().getProjection();
        var url = boundary.getFeatureInfoUrl(coord, res, projection, { 'INFO_FORMAT': 'application/json' });

        if (locationLine == true) {
            if (locationLinecount == 1) {
                prevLongitude = cd[0];
                prevLatitude = cd[1];
                var markerLayer3 = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: [
                            new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([cd[0], cd[1]]))
                            })
                        ]
                    })
                });
                map.addLayer(markerLayer3);
                locationLinecount++;
            } else if (locationLinecount == 2) {
                var markerLayer3 = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: [
                            new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([cd[0], cd[1]]))
                            })
                        ]
                    })
                });
                map.addLayer(markerLayer3);

                var lonlatnew = ol.proj.fromLonLat([prevLongitude, prevLatitude]);
                var location2new = ol.proj.fromLonLat([cd[0], cd[1]]);
                var linieStyle3 = [
                    new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: '#d12710',
                            width: 3,
                        }),
                        text: new ol.style.Text({
                            text: "KM : " + parseInt(distance(prevLongitude, prevLatitude, cd[0], cd[1])),
                            scale: 2,
                            fill: new ol.style.Fill({
                                color: '#black',
                            })
                        })
                    })
                ];
                //create the line       
                var linie3 = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: [new ol.Feature({
                            geometry: new ol.geom.LineString([lonlatnew, location2new]),
                            name: 'Line',
                        })]
                    })
                });

                //set the style and add to layer
                linie3.setStyle(linieStyle3);
                map.addLayer(linie3);
                locationLinecount++;
            }
        }
        coord = e.coordinate;
        coord = meters2degress(coord[0], coord[1]);
        fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + coord[0] + '&lat=' + coord[1])
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                var AreaSplit;
                if (json.address.residential) {
                    AreaSplit = json.address.residential;
                } else if (json.address.suburb) {
                    AreaSplit = json.address.suburb;
                } else if (json.address.village) {
                    AreaSplit = json.address.village;
                } else if (json.address.city) {
                    AreaSplit = json.address.city;
                } else if (json.address.town) {
                    AreaSplit = json.address.town;
                } else if (json.address.county) {
                    AreaSplit = json.address.county;
                }
                console.log(AreaSplit);
                resolve(AreaSplit);
            });
    });

    if (document.getElementById("eme").checked == true) {
        p.then((Area) => Check(Area))
    } else if (document.getElementById("touristAttRadioBtn").checked == true) {
        p.then((Area) => Check2(Area))
    } else {
        p.then((Area) => Check3(Area))
    }

});

//sync(map);
function Check(Area) {
    alert("A1c");
    fetch('http://localhost:8080/geoserver/hosDeharadunAroundMe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=hosDeharadunAroundMe%3Adehracityhospitalaroundme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {
                if (checkEmeService) {
                    document.getElementById("selHospital").innerHTML = "";
                    document.getElementById("selHospital").style.display = "block";
                    document.getElementById("selHospital").innerHTML += "" + Area + " Goverment Hospitals : <br><br>";
                    var data = JSON.parse(data);
                    for (var i = 0; i < data.features.length; i++) {
                        if (data.features[i].properties.area == Area) {
                            console.log(data.features[i].properties.name);

                            var markerStyle22 = [
                                new ol.style.Style({
                                    stroke: new ol.style.Stroke({
                                        color: '#black',
                                        radius: 10,
                                        scale: 5
                                    }),
                                    text: new ol.style.Text({
                                        text: "KM : ",
                                        scale: 2,
                                        fill: new ol.style.Fill({
                                            color: '#black',
                                        })
                                    })
                                })
                            ];

                            markerLayerEmerg = new ol.layer.Vector({
                                source: new ol.source.Vector({
                                    features: [
                                        new ol.Feature({
                                            geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                        }),
                                    ]
                                }),
                            });
                            // markerLayerEmerg.setStyle(markerStyle22); 

                            map.addLayer(markerLayerEmerg);

                            document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";
                        }
                    }
                }
            })
        })
}
function Check2(Area) {
    fetch('http://localhost:8080/geoserver/touristForAroundMe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=touristForAroundMe%3Atouristforaroundme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {
                if (checkTouristAttraction) {
                    document.getElementById("selHospital").innerHTML = "";
                    document.getElementById("selHospital").style.display = "block";
                    document.getElementById("selHospital").innerHTML += "" + Area + " Tourist Attraction Places : <br><br>";
                    var data = JSON.parse(data);
                    for (var i = 0; i < data.features.length; i++) {
                        if (data.features[i].properties.area == Area) {
                            console.log(data.features[i].properties.name);
                            markerLayerTouristAtr = new ol.layer.Vector({
                                source: new ol.source.Vector({
                                    features: [
                                        new ol.Feature({
                                            geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                        })
                                    ]
                                })
                            });
                            map.addLayer(markerLayerTouristAtr);

                            document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";
                        }
                    }
                }
            })
        })
}
function Check3(Area) {
    fetch('http://localhost:8080/geoserver/funAndEntertainment/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=funAndEntertainment%3Afunandentainmentarountme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {
                if (checkfanAndEntRadioBtn) {
                    document.getElementById("selHospital").innerHTML = "";
                    document.getElementById("selHospital").style.display = "block";
                    document.getElementById("selHospital").innerHTML += "" + Area + " Fun & Entertainment : <br><br>";
                    var data = JSON.parse(data);
                    for (var i = 0; i < data.features.length; i++) {
                        if (data.features[i].properties.area == Area) {
                            console.log(data.features[i].properties.name);
                            markerLayerFunAndEnt = new ol.layer.Vector({
                                source: new ol.source.Vector({
                                    features: [
                                        new ol.Feature({
                                            geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                        })
                                    ]
                                })
                            });
                            map.addLayer(markerLayerFunAndEnt);
                            document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";
                        }
                    }
                }
            })
        })
}

var sidebarbottom = document.getElementById('funbottom');
sidebarbottom.addEventListener(
    'click',
    function () {
        document.getElementById('uparrowbtn').classList.toggle('active');
    },
    false
);
var checkTouristAttraction = false;
var touristAttRadioBtn = document.getElementById('touristAttRadioBtn');
touristAttRadioBtn.addEventListener(
    'click',
    function () {
        checkTouristAttraction = true;
        emeDialog.show();
    },
    false
);

var checkfanAndEntRadioBtn = false;
var fanAndEntRadioBtn = document.getElementById('fanAndEntRadioBtn');
fanAndEntRadioBtn.addEventListener(
    'click',
    function () {
        checkfanAndEntRadioBtn = true;
        emeDialog.show();
    },
    false
);

var coordinate = [];
document.getElementById('cNav').addEventListener('click', function () {
    var dialog = document.getElementById('myFirstDialog');
    dialog.show();
    document.getElementById('Search').onclick = function () {
        var Lon = parseFloat(document.getElementById("Long").value);
        var Lat = parseFloat(document.getElementById("Lati").value);
        console.log(Lon + " " + Lat);
        fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + Lon + '&lat=' + Lat)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                coordinate = [Lon, Lat];
                // overlay.setPosition(coordinate);

                document.getElementById("coorNavDashboard").innerHTML = '<p>' + json.display_name + '</p>';
                dialog.close();
            });
    };
    document.getElementById('Hide2').addEventListener("click", function () {
        //alert("HI");
        dialog.close();
    })
},
    false
);

var allLayerOff = document.getElementById("allLayerOff");
allLayerOff.addEventListener(
    'click',
    function () {
        var layerArray, len, layer1;
        layerArray = map.getLayers().getArray();
        len = layerArray.length;
        while (len > 0) {
            layer1 = layerArray[len - 1];
            map.removeLayer(layer1);
            len = layerArray.length;
        }
    },
    false
);

var imgNavCount = 0;
var imgNav = document.getElementById("imgNav");
imgNav.addEventListener(
    'click',
    function () {
        if (imgNavCount == 0) {
            map.addLayer(worldImagery);
            imgNavCount++;
        } else {
            map.removeLayer(worldImagery);
            imgNavCount = 0;
        }

    },
    false
);
// cDia1

//Navbar Coordinate
var navBarCorr = 0;
var cDia1 = document.getElementById("cDia1");
cDia1.addEventListener(
    'click',
    function () {
        var dialog = document.getElementById('myFirstDialog');
        dialog.close();
        if (navBarCorr == 0) {
            navBarCorr = 1;
        } else {
            navBarCorr = 0;
        }

    },
    false
);

var resetLayer = document.getElementById("resetLayer");
resetLayer.addEventListener(
    'click',
    function () {
        var layerArray, len, layer1;
        layerArray = map.getLayers().getArray();
        len = layerArray.length;
        while (len > 0) {
            layer1 = layerArray[len - 1];
            map.removeLayer(layer1);
            len = layerArray.length;
        }

        if (document.getElementById("satelliteradio").checked == true) {
            map.addLayer(worldImagery);
        } else if (document.getElementById("osmradio").checked == true) {
            map.addLayer(osmMap);
        } else {
            map.addLayer(dist);
            // map.addLayer(distNames);
        }
        document.getElementById("bMuniciple").checked = false;
        document.getElementById("sBuildings").checked = false;
        document.getElementById("cBuildings").checked = false;
        document.getElementById("dNetwork").checked = false;
        document.getElementById("stwboundary").checked = false;
        document.getElementById("stwpoint").checked = false;
        document.getElementById("farmHouse").checked = false;
        document.getElementById("forest").checked = false;
        document.getElementById("gArea").checked = false;
        document.getElementById("agriculture").checked = false;
        document.getElementById("petrolPump").checked = false;
        document.getElementById("busDepot").checked = false;
        document.getElementById("tJun").checked = false;
        document.getElementById("bridges").checked = false;
        document.getElementById("tIsland").checked = false;
        document.getElementById("parking").checked = false;
        document.getElementById("bbanks").checked = false;
        document.getElementById("bpf").checked = false;
        document.getElementById("batms").checked = false;
        document.getElementById("wtot").checked = false;
        document.getElementById("wwtp").checked = false;
        document.getElementById("wotl").checked = false;
        document.getElementById("wwp").checked = false;
        document.getElementById("wwsp").checked = false;
        document.getElementById("wt").checked = false;
        document.getElementById("st2").checked = false;
        document.getElementById("cToilet").checked = false;
        document.getElementById("pToilet").checked = false;
        document.getElementById("rLine").checked = false;
        document.getElementById("eFireStations").checked = false;
        document.getElementById("ePoliceStations").checked = false;
        document.getElementById("ePoliceChowki").checked = false;
        document.getElementById("eduPri").checked = false;
        document.getElementById("swmContainer").checked = false;
        document.getElementById("swmTrStation").checked = false;
        document.getElementById("mBloodbank").checked = false;
        document.getElementById("mClinik").checked = false;
        document.getElementById("mHomeopathic").checked = false;
        document.getElementById("mHospital").checked = false;
        document.getElementById("mMedStore").checked = false;
        document.getElementById("mSurStore").checked = false;
        document.getElementById("mVeterinaryClinik").checked = false;
        document.getElementById("abdArea").checked = false;
        document.getElementById("abdWardBound").checked = false;
        document.getElementById("abdConnDrain").checked = false;
        document.getElementById("abdGreenBuilding").checked = false;
        document.getElementById("abdMddaPark").checked = false;
        document.getElementById("isolationWard").checked = false;
        document.getElementById("otherEdu").checked = false;
        document.getElementById("scadaTubewell").checked = false;
        document.getElementById("scadaReservoir").checked = false;
    },
    false
);

var printNav = document.getElementById('printNav');
printNav.addEventListener(
    'click',
    function () {
        window.print();
    },
    false
);

document.getElementById("lnext").style.display = "none";
var landmarkNext = document.getElementById("landmarkNext");
landmarkNext.addEventListener(
    'click',
    function () {
        var flag = false;
        var cont = document.getElementById("bird").children;
        for (var i = 0; i < cont.length; i++) {
            if (cont[i].tagName == 'INPUT' && cont[i].type == 'checkbox') {
                if (cont[i].checked) {
                    flag = true;
                }
            }
        }
        if (flag) {
            document.getElementById("lnext").style.display = "block";
        } else {
            alert("Please select the Landmark");
        }
    },
    false
);
document.getElementById("LandShow").style.display = "none";
var landmarkClear = document.getElementById("landmarkClear");
landmarkClear.addEventListener(
    'click',
    function () {
        document.getElementById("lnext").style.display = "none";
        document.getElementById("LandShow").style.display = "none";
        document.getElementById("LandATM").checked = false;
        document.getElementById("LandBank").checked = false;
        document.getElementById("LandHospital").checked = false;
        document.getElementById("LandPschool").checked = false;
    },
    false
);

var bfac = document.getElementById('bfac');
bfac.addEventListener(
    'click',
    function () {
        if (bfac.checked == true) {
            map.addLayer(banksLayer);
            document.getElementById('bbanks').checked = true;
            map.addLayer(postOfficeLayer);
            document.getElementById('bpf').checked = true;
            map.addLayer(atmsLayer);
            document.getElementById('batms').checked = true;
        } else {
            map.removeLayer(banksLayer);
            document.getElementById('bbanks').checked = false;
            map.removeLayer(postOfficeLayer);
            document.getElementById('bpf').checked = false;
            map.removeLayer(atmsLayer);
            document.getElementById('batms').checked = false;
        }
    },
    false
);
var wSupply = document.getElementById('wSupply');
wSupply.addEventListener(
    'click',
    function () {
        if (wSupply.checked == true) {
            map.addLayer(waterOverheadTankLayer);
            document.getElementById('wtot').checked = true;
            map.addLayer(waterTreatmentPlantLayer);
            document.getElementById('wwtp').checked = true;
            map.addLayer(waterOverheadTankLandmarkLayer);
            document.getElementById('wotl').checked = true;
            map.addLayer(waterPipelineLayer);
            document.getElementById('wwp').checked = true;
            map.addLayer(waterSupplyPointLayer);
            document.getElementById('wwsp').checked = true;
            map.addLayer(tubewelLayer);
            document.getElementById('wt').checked = true;
        } else {
            map.removeLayer(waterOverheadTankLayer);
            document.getElementById('wtot').checked = false;
            map.removeLayer(waterTreatmentPlantLayer);
            document.getElementById('wwtp').checked = false;
            map.removeLayer(waterOverheadTankLandmarkLayer);
            document.getElementById('wotl').checked = false;
            map.removeLayer(waterPipelineLayer);
            document.getElementById('wwp').checked = false;
            map.removeLayer(waterSupplyPointLayer);
            document.getElementById('wwsp').checked = false;
            map.removeLayer(tubewelLayer);
            document.getElementById('wt').checked = false;
        }
    },
    false
);
var st1 = document.getElementById('st1');
st1.addEventListener(
    'click',
    function () {
        if (st1.checked == true) {
            map.addLayer(streetlightLayer);
            document.getElementById('st2').checked = true;
        } else {
            map.removeLayer(streetlightLayer);
            document.getElementById('st2').checked = false;
        }
    },
    false
);
var sewerage = document.getElementById('sewerage');
sewerage.addEventListener(
    'click',
    function () {
        if (sewerage.checked == true) {
            map.addLayer(communityToiletLayer);
            document.getElementById('cToilet').checked = true;
            map.addLayer(publicLayerToilet);
            document.getElementById('pToilet').checked = true;
        } else {
            map.removeLayer(communityToiletLayer);
            document.getElementById('cToilet').checked = false;
            map.removeLayer(publicLayerToilet);
            document.getElementById('pToilet').checked = false;
        }
    },
    false
);
var rway = document.getElementById('rway');
rway.addEventListener(
    'click',
    function () {
        if (rway.checked == true) {
            map.addLayer(railwayLineLayer);
            document.getElementById('rLine').checked = true;
        } else {
            map.removeLayer(railwayLineLayer);
            document.getElementById('rLine').checked = false;
        }
    },
    false
);
var eServices = document.getElementById('eServices');
eServices.addEventListener(
    'click',
    function () {
        if (eServices.checked == true) {
            map.addLayer(fireStationLayer);
            document.getElementById('eFireStations').checked = true;
            map.addLayer(policeStationLayer);
            document.getElementById('ePoliceStations').checked = true;
            map.addLayer(policeChowkiLayer);
            document.getElementById('ePoliceChowki').checked = true;
        } else {
            map.removeLayer(fireStationLayer);
            document.getElementById('eFireStations').checked = false;
            map.removeLayer(policeStationLayer);
            document.getElementById('ePoliceStations').checked = false;
            map.removeLayer(policeChowkiLayer);
            document.getElementById('ePoliceChowki').checked = false;
        }
    },
    false
);
var edu = document.getElementById('edu');
edu.addEventListener(
    'click',
    function () {
        if (edu.checked == true) {
            map.addLayer(primaryLayer);
            document.getElementById('eduPri').checked = true;
        } else {
            map.removeLayer(primaryLayer);
            document.getElementById('eduPri').checked = false;
        }
    },
    false
);
var swm = document.getElementById('swm');
swm.addEventListener(
    'click',
    function () {
        if (swm.checked == true) {
            map.addLayer(swmContainerLayer);
            document.getElementById('swmContainer').checked = true;
            map.addLayer(swmTransferStationLayer);
            document.getElementById('swmTrStation').checked = true;
        } else {
            map.removeLayer(swmContainerLayer);
            document.getElementById('swmContainer').checked = false;
            map.removeLayer(swmTransferStationLayer);
            document.getElementById('swmTrStation').checked = false;
        }
    },
    false
);
var mServices = document.getElementById('mServices');
mServices.addEventListener(
    'click',
    function () {
        if (mServices.checked == true) {
            map.addLayer(bloodBankLayer);
            document.getElementById('mBloodbank').checked = true;
            map.addLayer(clinikLayer);
            document.getElementById('mClinik').checked = true;
            map.addLayer(homeopathicLayer);
            document.getElementById('mHomeopathic').checked = true;
            map.addLayer(hospitalLayer);
            document.getElementById('mHospital').checked = true;
            map.addLayer(medicalStoreLayer);
            document.getElementById('mMedStore').checked = true;
            map.addLayer(surgicalShopLayer);
            document.getElementById('mSurStore').checked = true;
            map.addLayer(veterinaryLayer);
            document.getElementById('mVeterinaryClinik').checked = true;
        } else {
            map.removeLayer(bloodBankLayer);
            document.getElementById('mBloodbank').checked = false;
            map.removeLayer(clinikLayer);
            document.getElementById('mClinik').checked = false;
            map.removeLayer(homeopathicLayer);
            document.getElementById('mHomeopathic').checked = false;
            map.removeLayer(hospitalLayer);
            document.getElementById('mHospital').checked = false;
            map.removeLayer(medicalStoreLayer);
            document.getElementById('mMedStore').checked = false;
            map.removeLayer(surgicalShopLayer);
            document.getElementById('mSurStore').checked = false;
            map.removeLayer(veterinaryLayer);
            document.getElementById('mVeterinaryClinik').checked = false;
        }
    },
    false
);
var abd = document.getElementById('abd');
abd.addEventListener(
    'click',
    function () {
        if (abd.checked == true) {
            map.addLayer(abdAreaLayer);
            document.getElementById('abdArea').checked = true;
            map.addLayer(abdwardLayer);
            document.getElementById('abdWardBound').checked = true;
            map.addLayer(abdConnectiDrainLayer);
            document.getElementById('abdConnDrain').checked = true;
            map.addLayer(abdgreenBuildingLayer);
            document.getElementById('abdGreenBuilding').checked = true;
            map.addLayer(abdMddaParkLayer);
            document.getElementById('abdMddaPark').checked = true;
        } else {
            map.removeLayer(abdAreaLayer);
            document.getElementById('abdArea').checked = false;
            map.removeLayer(abdwardLayer);
            document.getElementById('abdWardBound').checked = false;
            map.removeLayer(abdConnectiDrainLayer);
            document.getElementById('abdConnDrain').checked = false;
            map.removeLayer(abdgreenBuildingLayer);
            document.getElementById('abdGreenBuilding').checked = false;
            map.removeLayer(abdMddaParkLayer);
            document.getElementById('abdMddaPark').checked = false;
        }
    },
    false
);
var covid = document.getElementById('covid');
covid.addEventListener(
    'click',
    function () {
        if (covid.checked == true) {
            map.addLayer(isolationWardLayer);
            document.getElementById('isolationWard').checked = true;
        } else {
            map.removeLayer(isolationWardLayer);
            document.getElementById('isolationWard').checked = false;
        }
    },
    false
);
var others = document.getElementById('others');
others.addEventListener(
    'click',
    function () {
        if (others.checked == true) {
            map.addLayer(eduOthersLayer);
            document.getElementById('otherEdu').checked = true;
        } else {
            map.removeLayer(eduOthersLayer);
            document.getElementById('otherEdu').checked = false;
        }
    },
    false
);
var scada = document.getElementById('scada');
scada.addEventListener(
    'click',
    function () {
        if (scada.checked == true) {
            map.addLayer(tubewelLayer);
            document.getElementById('scadaTubewell').checked = true;
            map.addLayer(reservoirLayer);
            document.getElementById('scadaReservoir').checked = true;
        } else {
            map.removeLayer(tubewelLayer);
            document.getElementById('scadaTubewell').checked = false;
            map.removeLayer(reservoirLayer);
            document.getElementById('scadaReservoir').checked = false;
        }
    },
    false
);

document.getElementById("landmarkGo").addEventListener('click', function () {
    document.getElementById("LandShow").style.display = "block";
    var AreaSelect = document.getElementById("AreaSelect").value;
    if (document.getElementById("LandHospital").checked == true) {
        Check(AreaSelect);
        document.getElementById("LandShow").innerHTML = "";

        function Check(Area) {
            fetch('http://localhost:8080/geoserver/hosDeharadunAroundMe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=hosDeharadunAroundMe%3Adehracityhospitalaroundme&maxFeatures=50&outputFormat=application%2Fjson')
                .then(function (res) {
                    res.text().then(function (data) {
                        // document.getElementById("ShowHospital").innerHTML = "";
                        var data = JSON.parse(data);
                        document.getElementById(data);
                        // document.getElementById("ShowHospital").innerHTML += "<br>" + Area + "  Hospitals : <br>";
                        for (var i = 0; i < data.features.length; i++) {
                            //console.log(data.features[i].properties.name);
                            //console.log(data.features[i].properties.area);
                            if (data.features[i].properties.area == Area) {
                                console.log(data.features[i].properties.name);
                                //console.log(data.features[i].properties.area);
                                document.getElementById("LandShow").innerHTML += "<li>" + data.features[i].properties.name + "</li>";
                            }
                        }
                    })
                })
        }
    }
    if (document.getElementById("LandPschool").checked == true) {
        Check(AreaSelect);
        document.getElementById("LandShow").innerHTML = "";

        function Check(Area) {
            fetch('http://localhost:8080/geoserver/pschoolLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pschoolLandmark%3Apschoollandmark&maxFeatures=50&outputFormat=application%2Fjson')
                .then(function (res) {
                    res.text().then(function (data) {
                        // document.getElementById("ShowHospital").innerHTML = "";
                        var data = JSON.parse(data);
                        document.getElementById(data);
                        // document.getElementById("ShowHospital").innerHTML += "<br>" + Area + "  Hospitals : <br>";
                        for (var i = 0; i < data.features.length; i++) {
                            //console.log(data.features[i].properties.name);
                            //console.log(data.features[i].properties.area);
                            if (data.features[i].properties.area == Area) {
                                console.log(data.features[i].properties.name);
                                //console.log(data.features[i].properties.area);
                                document.getElementById("LandShow").innerHTML += "<li>" + data.features[i].properties.name + "</li>";
                            }
                        }
                    })
                })
        }
    }
    if (document.getElementById("LandATM").checked == true) {
        Check(AreaSelect);
        document.getElementById("LandShow").innerHTML = "";

        function Check(Area) {
            fetch('http://localhost:8080/geoserver/atmLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atmLandmark%3Aatmsforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
                .then(function (res) {
                    res.text().then(function (data) {
                        // document.getElementById("ShowHospital").innerHTML = "";
                        var data = JSON.parse(data);
                        document.getElementById(data);
                        // document.getElementById("ShowHospital").innerHTML += "<br>" + Area + "  Hospitals : <br>";
                        for (var i = 0; i < data.features.length; i++) {
                            //console.log(data.features[i].properties.name);
                            //console.log(data.features[i].properties.area);
                            if (data.features[i].properties.area == Area) {
                                console.log(data.features[i].properties.name);
                                //console.log(data.features[i].properties.area);
                                document.getElementById("LandShow").innerHTML += "<li>" + data.features[i].properties.name + "</li>";
                            }
                        }
                    })
                })
        }
    }
    if (document.getElementById("LandBank").checked == true) {
        Check(AreaSelect);
        document.getElementById("LandShow").innerHTML = "";

        function Check(Area) {
            fetch('http://localhost:8080/geoserver/BankForLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BankForLandmark%3Abankforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
                .then(function (res) {
                    res.text().then(function (data) {
                        // document.getElementById("ShowHospital").innerHTML = "";
                        var data = JSON.parse(data);
                        document.getElementById(data);
                        // document.getElementById("ShowHospital").innerHTML += "<br>" + Area + "  Hospitals : <br>";
                        for (var i = 0; i < data.features.length; i++) {
                            //console.log(data.features[i].properties.name);
                            //console.log(data.features[i].properties.area);
                            if (data.features[i].properties.area == Area) {
                                console.log(data.features[i].properties.name);
                                //console.log(data.features[i].properties.area);
                                document.getElementById("LandShow").innerHTML += "<li>" + data.features[i].properties.name + "</li>";
                            }
                        }
                    })
                })
        }
    }
});




// var ad = document.getElementById('ad');
// ad.addEventListener(
//   'click',
//   function () {
//     var name = "Name";
//     document.getElementById("tbody").innerHTML += "<tr><td>"+name+"</td>" +
//     "<td style='text-align: center;'><input type='button' class='button button1' value='Delete' id='updateBox'</td>"+"</tr>"; 
//   },
//   false
// );
var bookmarkDialog = document.getElementById("forbookmark");
var bookmamrkNav = document.getElementById('bookmamrkNav');
var bookMarkCount = 0;
bookmamrkNav.addEventListener(
    'click',
    function () {
        if (bookMarkCount == 0) {
            document.getElementById("bookmarkHeading").innerHTML = "Bookmark";
            bookMarkCount++;
        }
        bookmarkDialog.show();
    },
    false
);
var closeBookmark = document.getElementById('closeBookmark');
closeBookmark.addEventListener(
    'click',
    function () {
        bookmarkDialog.close();
    },
    false
);
var clearBookmark = document.getElementById('clearBookmark');
clearBookmark.addEventListener(
    'click',
    function () {
        document.getElementById("NameBook").value = "";
        document.getElementById("DescBook").value = "";
    },
    false
);
var bookmamrkNav, Description, NameBook;
document.getElementById('AddBook').addEventListener('click', function () {
    NameBook = document.getElementById("NameBook").value;
    Description = document.getElementById("DescBook").value;
    var Link = window.location.href;
    document.getElementById("tbody").innerHTML += "<tr><td><a href='" + Link + "'>" + NameBook + "</a></td>" +
        "<td style='text-align: center;'><input type='button' class='btn btn-success' value='Delete' onclick='updateBox(this)'</td>" + "</tr>";
    bookmarkDialog.close();
}, false);

map.on('pointermove', function (e) {
    var Coord = ol.proj.toLonLat(e.coordinate);
    document.getElementById("ShowCoordinatesDetails").innerHTML = "X : " + Coord[0].toPrecision(5) + "    Y : " + Coord[1].toPrecision(5)
})

var adSearchNav = document.getElementById('adSearchNav');
var adSearchDialog = document.getElementById("advSearch");

adSearchNav.addEventListener(
    'click',
    function () {
        adSearchDialog.show();
    },
    false
);

var adlayer, advaceLayer, int;
document.getElementById("ShowResult").addEventListener("click", function () {
    adlayer = LayerName.layername;
    if (adlayer == 'busdepot') {
        advaceLayer = busDepotLayer;
    }
    else if (adlayer == 'bankforlandmark') {
        advaceLayer = banksLayer;
    }
    else if (adlayer == 'parking') {
        advaceLayer = parkingLayer;
    }
    else if (adlayer == 'medicalstore') {
        advaceLayer = medicalStoreLayer;
    }
    var v = Object.values(data);
    var k = Object.keys(data);
    console.log(k);
    console.log(v);
    var KEY = Object.keys(v[0]);
    var str = "";
    //v = JSON.stringify(v);
    var forint = 0;
    int = setInterval(() => {
        if (forint == 0) {
            map.addLayer(advaceLayer);
            forint = 1;
        } else {
            map.removeLayer(advaceLayer);
            forint = 0;
        }
    }, 1000);

    console.log(JSON.stringify(KEY));
    for (var i = 0; i < v.length; i++) {
        var W = v[i];
        str += "<tr>";
        for (var j = 0; j < KEY.length - 1; j++) {
            console.log(W[KEY[j]]);
            str += "<td>" + W[KEY[j]] + "</td>";
        }
        str += "</tr>";
    }
    document.getElementById("AdvanceSearchShowTable").innerHTML = str;

    // document.getElementById("AdvanceSearchShow").innerHTML = JSON.stringify(data);
})

var stopBlinkNav = document.getElementById("stopBlinkNav");
stopBlinkNav.addEventListener(
    'click',
    function () {
        clearInterval(int);
        map.removeLayer(advaceLayer);
    },
    false
);

var closeAdvanceSearch = document.getElementById("closeAdvanceSearch");
closeAdvanceSearch.addEventListener(
    'click',
    function () {
        adSearchDialog.close();
    },
    false
);

var closeAdvance = document.getElementById("closeAdvance");
closeAdvance.addEventListener(
    'click',
    function () {
        adSearchDialog.close();
    },
    false
);

var geolocation = new Geolocation({
    // enableHighAccuracy must be set to true to have the heading value.
    trackingOptions: {
        enableHighAccuracy: true,
    },
    projection: view.getProjection(),
});

function el(id) {
    return document.getElementById(id);
}

el('track').addEventListener('click', function () {
    geolocation.setTracking(this.checked);
});

// update the HTML page when the position changes.
geolocation.on('click', function () {
    el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
    el('altitude').innerText = geolocation.getAltitude() + ' [m]';
    el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
    el('heading').innerText = geolocation.getHeading() + ' [rad]';
    el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
});

// handle geolocation error.
geolocation.on('error', function (error) {
    var info = document.getElementById('info');
    info.innerHTML = error.message;
    info.style.display = '';
});

var accuracyFeature = new Feature();
geolocation.on('change:accuracyGeometry', function () {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

var positionFeature = new Feature();
positionFeature.setStyle(
    new Style({
        image: new CircleStyle({
            radius: 6,
            fill: new Fill({
                color: '#3399CC',
            }),
            stroke: new Stroke({
                color: '#fff',
                width: 2,
            }),
        }),
    })
);

geolocation.on('change:position', function () {
    var coordinates = geolocation.getPosition();
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
});

new VectorLayer({
    map: map,
    source: new VectorSource({
        features: [accuracyFeature, positionFeature],
    }),
});

var x = document.cookie;
x = x.split(";")
console.log(x[0], x[1]);
if (x[0] == "" || x[1] == "") {
    document.getElementById("adSearchNav").style.display = "none";
    document.getElementById("preDefNav").style.display = "none";
    document.getElementById("stopBlinkNav").style.display = "none";
}

document.getElementById("logoutNav").addEventListener("click", function () {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
        deleteCookie(cookies[i].split("=")[0]);
    window.open("index.html", "_self");
})

function setCookie(name, value, expirydays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirydays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

var ids = 0;
document.getElementById('identifyNav').addEventListener(
    'click',
    function () {
        if (ids == 0) {
            map.on('click', function (e) {
                var p = new Promise((resolve, reject) => {
                    var res = map.getView().getResolution();
                    var coord = e.coordinate;
                    var projection = map.getView().getProjection();
                    var url = ArrLayer[ArrLayer.length - 1].getFeatureInfoUrl(coord, res, projection, { 'INFO_FORMAT': 'application/json' });
                    if (url) {
                        $.getJSON(url, function (data) {
                            if (data.features[0]) {
                                var k = Object.keys(data.features[0].properties);
                                var v = Object.values(data.features[0].properties);
                                console.log(k);
                                console.log(v);
                                content.innerHTML = '<p>You clicked here:</p><code>' + v + '</code>';
                                overlay.setPosition(coord);

                            }
                        })
                    }
                    //Check();
                });
                p.then(() => Check())
            })
            ids = 1;
            return false;
        }
        else {
            ids = 0;
            return false;
        }

    },
    false
);

document.getElementById("ShowPreQ").addEventListener("click", function () {
    //    document.getElementById("PreQShow").innerHTML = JSON.stringify(data);

    var v = Object.values(data);
    var k = Object.keys(data);
    console.log(k);
    console.log(v);
    var KEY = Object.keys(v[0]);
    var str = "";
    //v = JSON.stringify(v);
    console.log(JSON.stringify(KEY));
    for (var i = 0; i < v.length; i++) {
        var W = v[i];
        str += "<tr>";
        for (var j = 0; j < KEY.length - 1; j++) {
            console.log(W[KEY[j]]);
            str += "<td>" + W[KEY[j]] + "</td>";
        }
        str += "</tr>";
    }
    document.getElementById("PreQShow").innerHTML = str;
});
