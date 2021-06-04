var view = new ol.View({
    center: ol.proj.fromLonLat([78.0322, 30.3165]),
    zoom: 11
})

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});

var map = new ol.Map({
    target: 'map',
    layers: [],
    controls: [],
    view: view,
    overlays: [overlay],
});

var boundary = new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/distDehradun/wms',
    params: { 'LAYERS': 'distDehradun:dist' },
    serverType: 'geoserver'
})
var dist = new ol.layer.Tile({
    source: boundary
});

/**
 * Create an overlay to anchor the popup to the map.
 */

var ArrLayer = [];
/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */


//Uncomment
//Uncomment
closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};


//map.addLayer(dist);
dist.setOpacity(0.5);

var osmMap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard'
});
map.addLayer(osmMap);

// Satellite Map
var worldImagery = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 19
    })
});



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


var sidebar = document.getElementById('fun3');
sidebar.addEventListener(
    'click',
    function () {
        document.getElementById('sidenav3').classList.toggle('active');
    },
    false
);

var boundaryMunicipleSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/distDehradun/wms',
    params: { 'LAYERS': 'distDehradun:dist' },
    serverType: 'geoserver'
})
var boundaryMunicipleLayer = new ol.layer.Image({
    source: boundaryMunicipleSource
});
boundaryMunicipleLayer.setOpacity(0.2);
boundaryMunicipleLayer.setZIndex(19);

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

var rightSideBar = document.getElementById('fun2');
rightSideBar.addEventListener(
    'click',
    function () {
        document.getElementById('sidenav2').classList.toggle('active');
    },
    false
);

var sidebarbottom = document.getElementById('funbottom');
sidebarbottom.addEventListener(
    'click',
    function () {
        document.getElementById('uparrowbtn').classList.toggle('active');
    },
    false
);

var plus1 = document.getElementById('plus');
plus1.addEventListener(
    'click',
    function () {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom + 1);
    },
    false
);
var minus = document.getElementById('minus');
minus.addEventListener(
    'click',
    function () {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom - 1);
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

var clearSelection = document.getElementById('clearSelection');
clearSelection.addEventListener(
    'click',
    function () {
        //window.location.reload();
        var layerArray, len, layer1;
        layerArray = map.getLayers().getArray();
        len = layerArray.length;
        while (len > 0) {
            layer1 = layerArray[len - 1];
            map.removeLayer(layer1);
            len = layerArray.length;
        }

        //Length Area Remove
        var helper = document.getElementsByClassName("ol-overlay-container");
        for (var i = 0; i < helper.length; i++) {
            helper[i].style.display = "none";
        }

        map.addLayer(osmMap);

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

var helpNav = document.getElementById('helpNav');
helpNav.addEventListener(
    'click',
    function () {
        window.open("http://sc1dehradun.sgligis.com/Help/guest/index.htm#t=Dehradun_Smart_City_Portal%2FIntroduction.htm", "_BLANK");
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
var locationLine = false, locationLinecount = 0;
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
        alert("Direction");
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

map.on('click', function (e) {

    var c = e.coordinate;
    var cd = meters2degress(c[0], c[1])




    //alert("Map");
    //if (navBarCorr == 1) {
    //    fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + cd[0] + '&lat=' + cd[1])
    //        .then(function (response) {
    //            return response.json();
    //        }).then(function (json) {
    //            console.log(json);
    //            // coordinate = [Lon, Lat];
    //            // overlay.setPosition(coordinate);

    //            document.getElementById("coorNavDashboard").innerHTML = '<p>' + json.display_name + '</p>';
    //            dialog.close();
    //        });

    //    navBarCorr = 0;
    //}

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
        //coord = e.coordinate;
        //coord = meters2degress(coord[0], coord[1]);
        //fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + coord[0] + '&lat=' + coord[1])
        //    .then(function (response) {
        //        return response.json();
        //    }).then(function (json) {
        //        console.log(json);
        //        var AreaSplit;
        //        if (json.address.residential) {
        //            AreaSplit = json.address.residential;
        //        } else if (json.address.suburb) {
        //            AreaSplit = json.address.suburb;
        //        } else if (json.address.village) {
        //            AreaSplit = json.address.village;
        //        } else if (json.address.city) {
        //            AreaSplit = json.address.city;
        //        } else if (json.address.town) {
        //            AreaSplit = json.address.town;
        //        } else if (json.address.county) {
        //            AreaSplit = json.address.county;
        //        }
        //        console.log(AreaSplit);
        //        resolve(AreaSplit);
        //    });
    });
    //if (document.getElementById("eme").checked == true) {
    //    p.then((Area) => Check(Area))
    //} else if (document.getElementById("touristAttRadioBtn").checked == true) {
    //    p.then((Area) => Check2(Area))
    //} else {
    //    p.then((Area) => Check3(Area))
    //}

});

var emeDialog = document.getElementById("dialog2");
var amEmergencyServices = document.getElementById("eme");
amEmergencyServices.addEventListener(
    'click',
    function () {
        //emeDialog.show();
        //if (document.getElementById("eme").checked == true) {
        //    alert("Eme");
        //} else if (document.getElementById("touristAttRadioBtn").checked == true) {
        //    alert("touristAttRadioBtn");
        //} else if (document.getElementById("fanAndEntRadioBtn").checked == true) {
        //    alert("fanAndEntRadioBtn");
        //}
    },
    false
);
var checkTouristAttraction = false;
var touristAttRadioBtn = document.getElementById('touristAttRadioBtn');
touristAttRadioBtn.addEventListener(
    'click',
    function () {
        //checkTouristAttraction = true;
        //emeDialog.show();
    },
    false
);

var checkfanAndEntRadioBtn = false;
var fanAndEntRadioBtn = document.getElementById('fanAndEntRadioBtn');
fanAndEntRadioBtn.addEventListener(
    'click',
    function () {
        //checkfanAndEntRadioBtn = true;
        //emeDialog.show();
        //if (document.getElementById("eme").checked == true) {
        //    alert("Eme");
        //} else if (document.getElementById("touristAttRadioBtn").checked == true) {
        //    alert("touristAttRadioBtn");
        //} else if (document.getElementById("fanAndEntRadioBtn").checked == true) {
        //    alert("fanAndEntRadioBtn");
        //}
    },
    false
);
var b = 0, areaforaroundme;
var COORDINATE;
var goAroundMeBtn = document.getElementById('goAroundMeBtn');

var checkEmeService = false;
var closeDialogEme = document.getElementById("dia2Close");
var layer12;

goAroundMeBtn.addEventListener(
    'click',
    function () {
        emeDialog.show();

        map.on("click", function (e) {
            map.removeLayer(layer12);
            areaforaroundme = parseInt(document.getElementById("areaforaroundme").value);
            if (areaforaroundme == "") {
                alert("Enter Range..");
            }
            var resolution = map.getView().getResolution();
            var cor = e.coordinate;
            COORDINATE = ol.proj.toLonLat(cor);
            var meters2degress = function (x, y) {
                var lon = x * 180 / 20037508.34;
                var lat = Math.atan(Math.exp(y * Math.PI / 20037508.34)) * 360 / Math.PI - 90;
                return [lon, lat]
            }
            var cordinates = meters2degress(cor[0], cor[1]);
            var longitude = cordinates[0], latitude = cordinates[1];
            console.log(longitude + " " + latitude);
            var centerLongitudeLatitude = ol.proj.fromLonLat([longitude, latitude]);
            layer12 = new ol.layer.Vector({
                source: new ol.source.Vector({
                    projection: 'EPSG:4326',
                    features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, areaforaroundme))]
                }),
                style: [
                    new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'blue',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(0, 0, 255, 0.1)'
                        })
                    })
                ]
            });

            if (checkEmeService) {
                map.addLayer(layer12);
            }

            if (document.getElementById("eme").checked == true) {
                Check();
            }
            else if (document.getElementById("touristAttRadioBtn").checked == true) {
                Check5();
            }
            else if (document.getElementById("fanAndEntRadioBtn").checked == true) {
                Check6();
            }

        });

        // alert("Please Click on Map to Identify/Point Your Location");
        // map.addLayer(basemap);
        //map.addLayer(ForPoints);
    },
    false
);

closeDialogEme.addEventListener(
    'click',
    function () {
        /* checkEmeService = true;*/
        emeDialog.close();
        checkEmeService = true;

        //map.on('click', function (e) {
        //    if (checkEmeService) {
        //        map.removeLayer(layer12);
        //        var cor = e.coordinate;
        //        var cordinates = meters2degress(cor[0], cor[1]);
        //        var longitude = cordinates[0], latitude = cordinates[1];
        //        console.log(longitude + " " + latitude);
        //        var centerLongitudeLatitude = ol.proj.fromLonLat([longitude, latitude]);
        //        layer12 = new ol.layer.Vector({
        //            source: new ol.source.Vector({
        //                projection: 'EPSG:4326',
        //                features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, 2000))]
        //            }),
        //            style: [
        //                new ol.style.Style({
        //                    stroke: new ol.style.Stroke({
        //                        color: 'blue',
        //                        width: 3
        //                    }),
        //                    fill: new ol.style.Fill({
        //                        color: 'rgba(0, 0, 255, 0.1)'
        //                    })
        //                })
        //            ]
        //        });
        //        map.addLayer(layer12);
        //    }
        //});
    },
    false
);

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

document.getElementById('line').addEventListener(
    'click',
    function () {


        var raster = new ol.layer.Tile({
            source: new ol.source.OSM(),
        });

        //   var source = new VectorSource();
        var source = new ol.source.Vector();
        var vector = new ol.layer.Vector({
            source: source,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffcc33',
                    width: 2,
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: '#ffcc33',
                    }),
                }),
            }),
        });

        /**
         * Currently drawn feature.
         * @type {import("../src/ol/Feature.js").default}
         */
        var sketch;

        /**
         * The help tooltip element.
         * @type {HTMLElement}
         */
        var helpTooltipElement;

        /**
         * Overlay to show the help messages.
         * @type {Overlay}
         */
        var helpTooltip;

        /**
         * The measure tooltip element.
         * @type {HTMLElement}
         */
        var measureTooltipElement;

        /**
         * Overlay to show the measurement.
         * @type {Overlay}
         */
        var measureTooltip;

        /**
         * Message to show when the user is drawing a polygon.
         * @type {string}
         */
        var continuePolygonMsg = 'Click to continue drawing the polygon';

        /**
         * Message to show when the user is drawing a line.
         * @type {string}
         */
        var continueLineMsg = 'Click to continue drawing the line';

        /**
         * Handle pointer move.
         * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
         */
        createMeasureTooltip();
        createHelpTooltip();

        var pointerMoveHandler = function (evt) {
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = 'Click to start drawing';

            if (sketch) {
                var geom = sketch.getGeometry();
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg;
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg;
                }
            }

            helpTooltipElement.innerHTML = helpMsg;
            helpTooltip.setPosition(evt.coordinate);

            helpTooltipElement.classList.remove('hidden');
        };

        //   var map = new Map({
        //     layers: [raster, vector],
        //     target: 'map',
        //     view: new View({
        //       center: [-11000000, 4600000],
        //       zoom: 15,
        //     }),
        //   });

        map.addLayer(vector);


        map.on('pointermove', pointerMoveHandler);

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });



        var draw; // global so we can remove it later

        /**
         * Format length output.
         * @param {LineString} line The line.
         * @return {string} The formatted length.
         */
        var formatLength = function (line) {
            var length = ol.sphere.getLength(line);
            var output;
            if (length > 100) {
                output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
            } else {
                output = Math.round(length * 100) / 100 + ' ' + 'm';
            }
            return output;
        };

        /**
         * Format area output.
         * @param {Polygon} polygon The polygon.
         * @return {string} Formatted area.
         */
        var formatArea = function (polygon) {
            var area = ol.sphere.getArea(polygon);
            var output;
            if (area > 10000) {
                output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
            } else {
                output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
            }
            return output;
        };

        function addInteraction() {
            // var type = typeSelect.value == 'area' ? 'Polygon' : 'LineString';
            draw = new ol.interaction.Draw({
                source: source,
                type: "LineString",
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 2,
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)',
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)',
                        }),
                    }),
                }),
            });
            map.addInteraction(draw);


            var listener;
            draw.on('drawstart', function (evt) {
                // set sketch
                sketch = evt.feature;

                /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;

                listener = sketch.getGeometry().on('change', function (evt) {
                    var geom = evt.target;
                    var output;
                    if (geom instanceof ol.geom.Polygon) {
                        output = formatArea(geom);
                        tooltipCoord = geom.getInteriorPoint().getCoordinates();
                    } else if (geom instanceof ol.geom.LineString) {
                        output = formatLength(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    }
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            });

            draw.on('drawend', function () {
                measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
                measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            });
        }

        /**
         * Creates a new help tooltip
         */
        function createHelpTooltip() {
            if (helpTooltipElement) {
                helpTooltipElement.parentNode.removeChild(helpTooltipElement);
            }
            helpTooltipElement = document.createElement('div');
            helpTooltipElement.className = 'ol-tooltip hidden';
            helpTooltip = new ol.Overlay({
                element: helpTooltipElement,
                offset: [15, 0],
                positioning: 'center-left',
            });
            map.addOverlay(helpTooltip);
        }

        /**
         * Creates a new measure tooltip
         */
        function createMeasureTooltip() {
            if (measureTooltipElement) {
                measureTooltipElement.parentNode.removeChild(measureTooltipElement);
            }
            measureTooltipElement = document.createElement('div');
            measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
            measureTooltip = new ol.Overlay({
                element: measureTooltipElement,
                offset: [0, -15],
                positioning: 'bottom-center',
            });
            map.addOverlay(measureTooltip);
        }

        /**
         * Let user change the geometry type.
         */
        //   typeSelect.onchange = function () {
        //     map.removeInteraction(draw);
        //     addInteraction();
        //   };

        addInteraction();
        map.on('dblclick', function () {
            map.removeInteraction(draw);
            //addInteraction();
            map.removeOverlay(measureTooltip);
            map.removeOverlay(helpTooltip);
        });

    },
    false
);


document.getElementById('area').addEventListener(
    'click',
    function () {


        var raster = new ol.layer.Tile({
            source: new ol.source.OSM(),
        });

        //   var source = new VectorSource();
        var source = new ol.source.Vector();
        var vector = new ol.layer.Vector({
            source: source,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffcc33',
                    width: 2,
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: '#ffcc33',
                    }),
                }),
            }),
        });

        /**
         * Currently drawn feature.
         * @type {import("../src/ol/Feature.js").default}
         */
        var sketch;

        /**
         * The help tooltip element.
         * @type {HTMLElement}
         */
        var helpTooltipElement;

        /**
         * Overlay to show the help messages.
         * @type {Overlay}
         */
        var helpTooltip;

        /**
         * The measure tooltip element.
         * @type {HTMLElement}
         */
        var measureTooltipElement;

        /**
         * Overlay to show the measurement.
         * @type {Overlay}
         */
        var measureTooltip;

        /**
         * Message to show when the user is drawing a polygon.
         * @type {string}
         */
        var continuePolygonMsg = 'Click to continue drawing the polygon';

        /**
         * Message to show when the user is drawing a line.
         * @type {string}
         */
        var continueLineMsg = 'Click to continue drawing the line';

        /**
         * Handle pointer move.
         * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
         */
        createMeasureTooltip();
        createHelpTooltip();

        var pointerMoveHandler = function (evt) {
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = 'Click to start drawing';

            if (sketch) {
                var geom = sketch.getGeometry();
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg;
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg;
                }
            }

            helpTooltipElement.innerHTML = helpMsg;
            helpTooltip.setPosition(evt.coordinate);

            helpTooltipElement.classList.remove('hidden');
        };

        //   var map = new Map({
        //     layers: [raster, vector],
        //     target: 'map',
        //     view: new View({
        //       center: [-11000000, 4600000],
        //       zoom: 15,
        //     }),
        //   });

        map.addLayer(vector);


        map.on('pointermove', pointerMoveHandler);

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });



        var draw; // global so we can remove it later

        /**
         * Format length output.
         * @param {LineString} line The line.
         * @return {string} The formatted length.
         */
        var formatLength = function (line) {
            var length = ol.sphere.getLength(line);
            var output;
            if (length > 100) {
                output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
            } else {
                output = Math.round(length * 100) / 100 + ' ' + 'm';
            }
            return output;
        };

        /**
         * Format area output.
         * @param {Polygon} polygon The polygon.
         * @return {string} Formatted area.
         */
        var formatArea = function (polygon) {
            var area = ol.sphere.getArea(polygon);
            var output;
            if (area > 10000) {
                output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
            } else {
                output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
            }
            return output;
        };

        function addInteraction() {
            // var type = typeSelect.value == 'area' ? 'Polygon' : 'LineString';
            draw = new ol.interaction.Draw({
                source: source,
                type: "Polygon",
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 2,
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)',
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)',
                        }),
                    }),
                }),
            });
            map.addInteraction(draw);


            var listener;
            draw.on('drawstart', function (evt) {
                // set sketch
                sketch = evt.feature;

                /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;

                listener = sketch.getGeometry().on('change', function (evt) {
                    var geom = evt.target;
                    var output;
                    if (geom instanceof ol.geom.Polygon) {
                        output = formatArea(geom);
                        tooltipCoord = geom.getInteriorPoint().getCoordinates();
                    } else if (geom instanceof ol.geom.LineString) {
                        output = formatLength(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    }
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            });

            draw.on('drawend', function () {
                measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
                measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            });
        }

        /**
         * Creates a new help tooltip
         */
        function createHelpTooltip() {
            if (helpTooltipElement) {
                helpTooltipElement.parentNode.removeChild(helpTooltipElement);
            }
            helpTooltipElement = document.createElement('div');
            helpTooltipElement.className = 'ol-tooltip hidden';
            helpTooltip = new ol.Overlay({
                element: helpTooltipElement,
                offset: [15, 0],
                positioning: 'center-left',
            });
            map.addOverlay(helpTooltip);
        }

        /**
         * Creates a new measure tooltip
         */
        function createMeasureTooltip() {
            if (measureTooltipElement) {
                measureTooltipElement.parentNode.removeChild(measureTooltipElement);
            }
            measureTooltipElement = document.createElement('div');
            measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
            measureTooltip = new ol.Overlay({
                element: measureTooltipElement,
                offset: [0, -15],
                positioning: 'bottom-center',
            });
            map.addOverlay(measureTooltip);
        }

        /**
         * Let user change the geometry type.
         */
        //   typeSelect.onchange = function () {
        //     map.removeInteraction(draw);
        //     addInteraction();
        //   };

        addInteraction();
        map.on('dblclick', function () {
            map.removeInteraction(draw);
            //addInteraction();
            map.removeOverlay(measureTooltip);
            map.removeOverlay(helpTooltip);
        });

    },
    false
);

//var NameBook, Description;
//document.getElementById('BookMarks').addEventListener(
//    'click',
//    function () {
//        var BookDialog = document.getElementById("BookDialog");
//        BookDialog.show();
//        document.getElementById("AddBook").onclick = function () {
//            NameBook = document.getElementById("NameBook").value;
//            Description = document.getElementById("DescBook").value;
//            var Link = window.location.href;
//            document.getElementById("tbody").innerHTML += "<tr><td><a style='color:black;' href='" + Link + "'>" + NameBook + "</a></td>" +
//                "<td style='text-align: center;'><input type='button' class='btn btn-danger'  value='Delete' onclick='updateBox(this)'</td>" + "</tr>";
//            BookDialog.close();
//        }
//        document.getElementById("CancelBook").onclick = function () {
//            BookDialog.close();
//        }
//    },
//    false
//);


var layer12;





var markerLayerEmerg;

var Area = "";
function Check() {
    fetch('http://localhost:8080/geoserver/hosDeharadunAroundMe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=hosDeharadunAroundMe%3Adehracityhospitalaroundme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {

                document.getElementById("selHospital").innerHTML = "";
                document.getElementById("selHospital").style.display = "block";
                var data = JSON.parse(data);
                document.getElementById("selHospital").innerHTML += "<br>" + Area + "  Hospitals : <br>";
                console.log(Area);

                for (var i = 0; i < data.features.length; i++) {
                    if (arePointsNear(data.features[i].geometry.coordinates, COORDINATE, areaforaroundme)) {
                        console.log(data.features[i].properties.name);

                        markerLayerEmerg = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [
                                    new ol.Feature({
                                        geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                    })
                                ]
                            })
                        });
                        map.addLayer(markerLayerEmerg);
                        document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";

                    }

                }


            })
        })
}

function Check5() {
    fetch('http://localhost:8080/geoserver/touristForAroundMe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=touristForAroundMe%3Atouristforaroundme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {
                document.getElementById("selHospital").innerHTML = "";
                document.getElementById("selHospital").style.display = "block";
                var data = JSON.parse(data);
                document.getElementById("selHospital").innerHTML += "<br>" + Area + "  Tourist Attraction : <br>";
                console.log(Area);
                for (var i = 0; i < data.features.length; i++) {
                    if (arePointsNear(data.features[i].geometry.coordinates, COORDINATE, areaforaroundme)) {
                        console.log(data.features[i].properties.name);
                        var markerLayerEmerg = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [
                                    new ol.Feature({
                                        geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                    })
                                ]
                            })
                        });
                        map.addLayer(markerLayerEmerg);
                        document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";
                    }
                }
            })
        })
}

function Check6() {
    fetch('http://localhost:8080/geoserver/funAndEntertainment/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=funAndEntertainment%3Afunandentainmentarountme&maxFeatures=50&outputFormat=application%2Fjson')
        .then(function (res) {
            res.text().then(function (data) {
                document.getElementById("selHospital").innerHTML = "";
                document.getElementById("selHospital").style.display = "block";
                var data = JSON.parse(data);
                document.getElementById("selHospital").innerHTML += "<br>" + Area + "  Fun & Entertainment : <br>";
                console.log(Area);
                for (var i = 0; i < data.features.length; i++) {
                    if (arePointsNear(data.features[i].geometry.coordinates, COORDINATE, areaforaroundme)) {
                        console.log(data.features[i].properties.name);
                        var markerLayerEmerg = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [
                                    new ol.Feature({
                                        geometry: new ol.geom.Point(ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]))
                                    })
                                ]
                            })
                        });
                        map.addLayer(markerLayerEmerg);
                        document.getElementById("selHospital").innerHTML += data.features[i].properties.name + "<br>";
                    }
                }
            })
        })
}

var clearEmeServiceBtn = document.getElementById("clearEmeServiceBtn");
clearEmeServiceBtn.addEventListener(
    'click',
    function () {
        checkEmeService = false;
        document.getElementById("eme").checked = false;
        document.getElementById("selHospital").style.display = "";
        document.getElementById("selHospital").style.display = "none";
        map.removeLayer(layer12);

        var layerArray, len, layer1;
        layerArray = map.getLayers().getArray();
        len = layerArray.length;
        while (len > 0) {
            layer1 = layerArray[len - 1];
            map.removeLayer(layer1);
            len = layerArray.length;
        }
        checkEmeService = false;
        map.addLayer(osmMap);
        //window.location.reload();
        // map.removeLayer(markerLayerFunAndEnt);
        // map.removeLayer(markerLayerTouristAtr);
    },
    false
);
//for area

function arePointsNear(checkPoint, centerPoint, km) {
    console.log(km);
    km = km / 1000;
    var ky = 45000 / 360;
    var kx = Math.cos(Math.PI * centerPoint[1] / 180.0) * ky;
    var dx = Math.abs(centerPoint[0] - checkPoint[0]) * kx;
    var dy = Math.abs(centerPoint[1] - checkPoint[1]) * ky;
    console.log(dx, dy, dx * dx + dy * dy);
    return Math.sqrt(dx * dx + dy * dy) <= km;
}

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

        //Length Area Remove
        var helper = document.getElementsByClassName("ol-overlay-container");
        for (var i = 0; i < helper.length; i++) {
            helper[i].style.display = "none";
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


//var ids = 0;
//document.getElementById('identifyNav').addEventListener(
//    'click',
//    function () {
//        alert("Clicked");
//        if (ids == 0) {
//            map.on('click', function (e) {
//                var p = new Promise((resolve, reject) => {
//                    var res = map.getView().getResolution();
//                    var coord = e.coordinate;
//                    var projection = map.getView().getProjection();
//                    var url = ArrLayer[ArrLayer.length - 1].getFeatureInfoUrl(coord, res, projection, { 'INFO_FORMAT': 'application/json' });
//                    if (url) {
//                        $.getJSON(url, function (data) {
//                            if (data.features[0]) {
//                                var k = Object.keys(data.features[0].properties);
//                                var v = Object.values(data.features[0].properties);
//                                console.log(k);
//                                console.log(v);
//                                content.innerHTML = '<p>You clicked here:</p><code>' + v + '</code>';
//                                overlay.setPosition(coord);

//                            }
//                        })
//                    }
//                    //Check();
//                });
//                p.then(() => Check())
//            })
//            ids = 1;
//            return false;
//        }
//        else {
//            ids = 0;
//            return false;
//        }

//    },
//    false
//);

var Idet = 0;
document.getElementById("identifyNav").addEventListener("click", function () {
    if (Idet == 0) {
        map.on('click', function (e) {
            Idet = 1;
            var p = new Promise((resolve, reject) => {
                var res = map.getView().getResolution();
                var coord = e.coordinate;
                var projection = map.getView().getProjection();
                var url = ArrLayer[ArrLayer.length - 1].getFeatureInfoUrl(coord, res, projection, { 'INFO_FORMAT': 'application/json' });

                if (url) {
                    $.getJSON(url, function (data) {
                        if (data.features[0]) {
                            document.getElementById("popup").style.display = "block";
                            var k = Object.keys(data.features[0].properties);
                            var v = Object.values(data.features[0].properties);
                            console.log(k);
                            console.log(v);
                            content.innerHTML = '<p>Result :</p><code>' + v + '</code>';
                            overlay.setPosition(coord);
                        }
                    })
                }
            });
        })
    } else {
        Idet = 0;
    }
})


var selectgroup = document.getElementById("selectgroup");
selectgroup.addEventListener(
    'change',
    function () {
        piechart()
    },
    false
);

var closePie = document.getElementById("closePie");
closePie.addEventListener(
    'click',
    function () {
        document.getElementById("pieChartDialog").close();
    },
    false
);

function piechart() {
    document.getElementById("pieChartDialog").show();
    var SelectChart = document.getElementById("selectgroup").value;
    if (SelectChart == "Bank") {
        document.getElementById("piechart").style.display = "";
        var BankCount, ATMCount, POSToffCount;

        fetch('http://localhost:8080/geoserver/BankForLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BankForLandmark%3Abankforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
            .then(function (res) {
                res.text().then(function (data) {
                    var data = JSON.parse(data);
                    BankCount = data.features.length;
                    console.log(BankCount);
                })
            });
        fetch('http://localhost:8080/geoserver/atmLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atmLandmark%3Aatmsforlandmark&maxFeatures=50&outputFormat=application%2Fjson')
            .then(function (res) {
                res.text().then(function (data) {
                    var data = JSON.parse(data);
                    ATMCount = data.features.length;
                    console.log(ATMCount);
                })
            });
        fetch('http://localhost:8080/geoserver/postoffice/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=postoffice%3Apostoffice&maxFeatures=50&outputFormat=application%2Fjson')
            .then(function (res) {
                res.text().then(function (data) {
                    var data = JSON.parse(data);
                    POSToffCount = data.features.length;
                    console.log(POSToffCount);
                })
            })

        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['BANK', BankCount],
                ['ATM', ATMCount],
                ['Post Office', POSToffCount]
            ]);

            var options = {
                title: 'Bank,ATMs & Post office'
            };

            const chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
    }

    if (SelectChart == "Building") {
        document.getElementById("piechart").style.display = "";
        console.log("BUILDING");
        var CentralCount, StateCount;
        var p1 = new Promise((resolve, reject) => {
            fetch('http://localhost:8080/geoserver/stateGovernmentOffice/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=stateGovernmentOffice%3Astate%20government%20office&maxFeatures=50&outputFormat=application%2Fjson')
                .then(function (res) {
                    res.text().then(function (data) {
                        var data = JSON.parse(data);
                        StateCount = data.features.length;
                        console.log(StateCount);
                        Fetch2();
                    })
                });

            function Fetch2(params) {
                fetch('http://localhost:8080/geoserver/centralGovtBuildings/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=centralGovtBuildings%3Acentral%20government%20buildings&maxFeatures=50&outputFormat=application%2Fjson')
                    .then(function (res) {
                        res.text().then(function (data) {
                            var data = JSON.parse(data);
                            CentralCount = data.features.length;
                            console.log(CentralCount);
                            DraaeingChart();
                        })
                    });
            }
        });


        function DraaeingChart() {
            google.charts.load('current', {
                'packages': ['corechart']
            });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Central Govt Building', CentralCount],
                    ['State Govt Building', StateCount]
                ]);

                var options = {
                    title: 'Building'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }
        }
    }
}

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
    //var Link = window.location.href;
    var centerBook, zoomBook;
    zoomBook = view.getZoom();
    centerBook = view.getCenter();
    var c = centerBook.toString().split(",");
    document.getElementById("tbody").innerHTML += "<tr><td><a  style='cursor: pointer;'  onclick='getBookmark1(" + zoomBook + "," + c[0] + "," + c[1] + ")'>" + NameBook + "</a></td>" +
        "<td style='text-align: center;'><input type='button' class='btn btn-success' value='Delete' onclick='updateBox(this)'</td>" + "</tr>";
    //alert(zoomBook  +  " " + c[0] + " "+ c[1]);
    bookmarkDialog.close();
}, false);

function getBookmark1(zoom1, c1, c2) {
    view.animate({
        zoom: zoom1
    }, {
        center: [c1, c2],
    });
}

function updateBox(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    document.getElementById("tbody").deleteRow(index);
}
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
        });
    },
    false
);


document.getElementById("logoutNav").addEventListener("click", function () {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    window.open("/", "_self");
});

document.getElementById("blinkLayer").addEventListener("click", function () {
    var bLayer = localStorage.getItem("blink");
    if (bLayer == "BusDepot") {
        blink(busDepotLayer);
    } else if (bLayer == "FarmHouse") {
        blink(farmhouseLayer);
    } else if (bLayer == "Parking") {
        blink(parkingLayer);
    } else if (bLayer == "PostOffice") {
        blink(postOfficeLayer);
    }
});
var varBlink, isTrue = true;
function blink(lyr) {
    varBlink = setInterval(function () {
        if (isTrue) {
            map.addLayer(lyr);
            isTrue = false;
        } else {
            map.removeLayer(lyr);
            isTrue = true;
        }
    }, 700);
}



document.getElementById("homeNav").addEventListener("click", function () {
    //document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    //window.open("/", "_self");
    view.animate({
        zoom: 12
    }, {
        center: ol.proj.fromLonLat([78.0322, 30.3165]),
    })
});

map.on('pointermove', function (e) {
    var Coord = ol.proj.toLonLat(e.coordinate);
    document.getElementById("ShowCoordinatesDetails").innerHTML = "X : " + Coord[0].toPrecision(5) + "    Y : " + Coord[1].toPrecision(5)
})

var previousMapCor = 0, previousMapZoom = 0, moveCor=0;
var nextMapCor = 0, nextMapZoom = 0;

map.on('movestart', function (e) {
    previousMapCor = nextMapCor;
    previousMapZoom = nextMapZoom;
    nextMapZoom = view.getZoom();
    nextMapCor= view.getCenter();
    moveCor = nextMapCor.toString().split(",");
});

var previousNav = document.getElementById('prevNav');
previousNav.addEventListener(
    'click',
    function () {
        var c = previousMapCor.toString().split(",");
        var a = meters2degress(c[0], c[1]);
        view.animate({
            zoom: previousMapZoom
        }, {
                center: ([moveCor[0], moveCor[1]]),
        })
    },
    false
);
var nextNav = document.getElementById('nextNav');
nextNav.addEventListener(
    'click',
    function () {
        var c = nextMapCor.toString().split(",");
        var a = meters2degress(c[0], c[1]);
        view.animate({
            zoom: nextMapZoom
        }, {
            center: ([moveCor[0], moveCor[1]]),
        })
    },
    false
);

var x = document.cookie;
x = x.split(";")
console.log(x[0], x[1]);

//document.getElementById("AdvanceSearch").style.display = "none";
//document.getElementById("predefnav").style.display = "none";
//document.getElementById("stopblinknav").style.display = "none";
//document.getElementById("preDefNav").style.display = "none";

if (x[0] == "" || x[1] == "") {
    document.getElementById("stopBlinkNav").style.display = "none";
    document.getElementById("as").style.display = "none";
}
var cookies2 = document.cookie.split(";");
//alert(cookies2[1]);
if (cookies2[1] == ' role=hospital') {
    document.getElementById("detailGreenArea").style.display = "none";
    document.getElementById("detailBankingAndPostalFacility").style.display = "none";
    document.getElementById("detailSewerage").style.display = "none";
    document.getElementById("detailRailway").style.display = "none";
    document.getElementById("detailEmeServices").style.display = "none";
    document.getElementById("detailSolidWasteMan").style.display = "none";
    document.getElementById("detailAreaBasedDevelopment").style.display = "none";
    document.getElementById("detailBuilding").style.display = "none";
    document.getElementById("detailScada").style.display = "none";
    document.getElementById("detailOthers").style.display = "none";
    document.getElementById("detailStormWater").style.display = "none";
    document.getElementById("detailWaterSupply").style.display = "none";

} else if (cookies2[1] == 'role=firestation') {
    document.getElementById("detailGreenArea").style.display = "none";
    document.getElementById("detailBankingAndPostalFacility").style.display = "none";
    document.getElementById("detailSewerage").style.display = "none";
    document.getElementById("detailRailway").style.display = "none";
    document.getElementById("detailSolidWasteMan").style.display = "none";
    document.getElementById("detailAreaBasedDevelopment").style.display = "none";
    document.getElementById("detailOthers").style.display = "none";
    document.getElementById("detailEducation").style.display = "none";
    document.getElementById("detailCovid").style.display = "none";
    document.getElementById("detailMedicalServices").style.display = "none";

} else if (cookies2[1] == 'role=forest') {
    document.getElementById("detailStreetLight").style.display = "none";
    document.getElementById("detailEmeServices").style.display = "none";
    document.getElementById("detailEducation").style.display = "none";
    document.getElementById("detailStormWater").style.display = "none";
    document.getElementById("detailSewerage").style.display = "none";
    document.getElementById("detailRailway").style.display = "none";
    document.getElementById("detailAreaBasedDevelopment").style.display = "none";
    document.getElementById("detailBuilding").style.display = "none";
    document.getElementById("detailScada").style.display = "none";
    document.getElementById("detailOthers").style.display = "none";
    document.getElementById("detailCovid").style.display = "none";
    document.getElementById("detailMedicalServices").style.display = "none";
    document.getElementById("detailBankingAndPostalFacility").style.display = "none";

} else {
    // alert(cookies[0] + " " + cookies[1] + " " + cookies[2]);
    // For Admin
}



var t;
document.getElementById("apply").addEventListener("click", function () {
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "block";
    var layer = document.getElementById('layer').value;
    var url99, plen, timer;
    timer = 0;
    clearInterval(t);
    map.removeLayer(petrolPumpLayer);
    map.removeLayer(banksLayer);
    map.removeLayer(primaryLayer);
    map.removeLayer(farmhouseLayer);
    if (layer == 'sgb') {
        clearInterval(t);
        url99 = 'http://localhost:8080/geoserver/banks/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=banks%3Abanks&maxFeatures=50&outputFormat=application%2Fjson';
        t = setInterval(() => {
            if (timer == 0) {
                map.addLayer(banksLayer);
                timer = 1;
            } else {
                map.removeLayer(petrolPumpLayer);
                map.removeLayer(banksLayer);
                map.removeLayer(primaryLayer);
                map.removeLayer(farmhouseLayer);

                timer = 0;

            }
        }, 500);
    } else if (layer == 'cgb') {
        clearInterval(t);
        url99 = 'http://localhost:8080/geoserver/petrolpump/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=petrolpump%3Apetrolpump&maxFeatures=50&outputFormat=application%2Fjson';
        t = setInterval(() => {
            if (timer == 0) {
                map.addLayer(petrolPumpLayer);
                timer = 1;
            } else {
                map.removeLayer(petrolPumpLayer);
                map.removeLayer(banksLayer);
                map.removeLayer(primaryLayer);
                map.removeLayer(farmhouseLayer);
                timer = 0;

            }
        }, 500);
    } else if (layer == 'pri') {
        clearInterval(t);
        url99 = 'http://localhost:8080/geoserver/pschoolLandmark/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pschoolLandmark%3Apschoollandmark&maxFeatures=50&outputFormat=application%2Fjson';
        t = setInterval(() => {
            if (timer == 0) {
                map.addLayer(primaryLayer);
                timer = 1;
            } else {
                map.removeLayer(petrolPumpLayer);
                map.removeLayer(banksLayer);
                map.removeLayer(primaryLayer);
                map.removeLayer(farmhouseLayer);
                timer = 0;
            }
        }, 500);
    } else if (layer == 'clg') {
        clearInterval(t);
        url99 = 'http://localhost:8080/geoserver/farmHouse/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=farmHouse%3Afarmhouse&maxFeatures=50&outputFormat=application%2Fjson';
        t = setInterval(() => {
            if (timer == 0) {
                map.addLayer(farmhouseLayer);
                timer = 1;
            } else {
                map.removeLayer(petrolPumpLayer);
                map.removeLayer(banksLayer);
                map.removeLayer(primaryLayer);
                map.removeLayer(farmhouseLayer);
                timer = 0;
            }
        }, 500);
    }

    $.getJSON(url99, function (data) {
        plen = Object.keys(data.features).length;
        document.getElementById('tbl1').innerHTML = "";
        document.getElementById('tbl1').innerHTML = "<tr><th>Sr No.</th><th>Name</th></tr>";
        var table = document.getElementById('tbl1');

        for (var i = 0; i < plen; i++) {
            var newRow = table.insertRow(i + 1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            //var cell3 = newRow.insertCell(2);
            //var cell4 = newRow.insertCell(3);
            cell1.innerHTML = (i + 1) + '.';
            //cell2.innerHTML = Object.values(data.features)[i].properties.gid;
            cell2.innerHTML = Object.values(data.features)[i].properties.name;
            //cell4.innerHTML = Object.values(data.features)[i].properties.name;
        }
        console.log(Object.values(data.features)[0].properties);
    });

})

document.getElementById("adv").style.display = "none";
document.getElementById("advcls").addEventListener("click", function () {
    //clearInterval(t);
    //map.removeLayer(petrolPumpLayer);
    //map.removeLayer(banksLayer);
    //map.removeLayer(primaryLayer);
    //map.removeLayer(farmhouseLayer);
    document.getElementById("adv").style.display = "none";
});

document.getElementById("stopBlinkNav").addEventListener("click", function () {
    //clearInterval(varBlink);
    //map.removeLayer(busDepotLayer);
    //map.removeLayer(farmhouseLayer);
    //map.removeLayer(parkingLayer);
    //map.removeLayer(postOfficeLayer);
    clearInterval(t);
    map.removeLayer(petrolPumpLayer);
    map.removeLayer(banksLayer);
    map.removeLayer(primaryLayer);
    map.removeLayer(farmhouseLayer);
});

function filterFunction() {
    var input, filter, tbl, tr, td, i, txtValue;
    input = document.getElementById("sinput");
    filter = input.value.toUpperCase();
    tbl = document.getElementById("tbl1");
    tr = tbl.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("d2").style.display = "none";
    document.getElementById("d1").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "block";
});


function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };

//alert("asca");

//var geolocation = new ol.Geolocation({
//    // enableHighAccuracy must be set to true to have the heading value.
//    trackingOptions: {
//        enableHighAccuracy: true,
//    },
//    projection: view.getProjection(),
//});

//function el(id) {
//    return document.getElementById(id);
//}

//el('track').addEventListener('click', function () {
//    geolocation.setTracking(this.checked);
//});

//// update the HTML page when the position changes.
//geolocation.on('click', function () {
//    el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
//    el('altitude').innerText = geolocation.getAltitude() + ' [m]';
//    el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
//    el('heading').innerText = geolocation.getHeading() + ' [rad]';
//    el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
//});

//// handle geolocation error.
//geolocation.on('error', function (error) {
//    var info = document.getElementById('info');
//    info.innerHTML = error.message;
//    info.style.display = '';
//});

//var accuracyFeature = new ol.Feature();
//geolocation.on('change:accuracyGeometry', function () {
//    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
//});

//var positionFeature = new ol.Feature();
//positionFeature.setStyle(
//    new ol.Style({
//        image: new ol.style.CircleStyle({
//            radius: 6,
//            fill: new ol.style.Fill({
//                color: '#3399CC',
//            }),
//            stroke: new ol.style.Stroke({
//                color: '#fff',
//                width: 2,
//            }),
//        }),
//    })
//);

//geolocation.on('change:position', function () {
//    var coordinates = geolocation.getPosition();
//    positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
//});

//new ol.layer.VectorLayer({
//    map: map,
//    source: new ol.source.VectorSource({
//        features: [accuracyFeature, positionFeature],
//    }),
//});