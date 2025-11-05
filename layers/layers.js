var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_LOTESCC_1 = new ol.format.GeoJSON();
var features_LOTESCC_1 = format_LOTESCC_1.readFeatures(json_LOTESCC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTESCC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTESCC_1.addFeatures(features_LOTESCC_1);
var lyr_LOTESCC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTESCC_1, 
                style: style_LOTESCC_1,
                popuplayertitle: 'LOTES CC',
                interactive: true,
    title: 'LOTES CC<br />\
    <img src="styles/legend/LOTESCC_1_0.png" /> Bloque - Infraestructura<br />\
    <img src="styles/legend/LOTESCC_1_1.png" /> Libre<br />\
    <img src="styles/legend/LOTESCC_1_2.png" /> Reserva<br />\
    <img src="styles/legend/LOTESCC_1_3.png" /> Vendido<br />\
    <img src="styles/legend/LOTESCC_1_4.png" /> <br />' });
var format_DEPARTAMENTOS_2 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_2 = format_DEPARTAMENTOS_2.readFeatures(json_DEPARTAMENTOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_2.addFeatures(features_DEPARTAMENTOS_2);
var lyr_DEPARTAMENTOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTOS_2, 
                style: style_DEPARTAMENTOS_2,
                popuplayertitle: 'DEPARTAMENTOS ',
                interactive: true,
    title: 'DEPARTAMENTOS <br />\
    <img src="styles/legend/DEPARTAMENTOS_2_0.png" /> Libre<br />\
    <img src="styles/legend/DEPARTAMENTOS_2_1.png" /> Reserva<br />\
    <img src="styles/legend/DEPARTAMENTOS_2_2.png" /> Vendido<br />\
    <img src="styles/legend/DEPARTAMENTOS_2_3.png" /> <br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_LOTESCC_1.setVisible(true);lyr_DEPARTAMENTOS_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_LOTESCC_1,lyr_DEPARTAMENTOS_2];
lyr_LOTESCC_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'descripción': 'descripción', 'LOTES_INMUEBLE': 'LOTES_INMUEBLE', 'LOTES_AREA (m2)': 'LOTES_AREA (m2)', 'LOTES_PRECIO ($us)': 'LOTES_PRECIO ($us)', 'LOTES_ESTADO': 'LOTES_ESTADO', 'LOTES_TITULAR': 'LOTES_TITULAR', });
lyr_DEPARTAMENTOS_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'DEPARTAMENTOS_BLQ': 'DEPARTAMENTOS_BLQ', 'DEPARTAMENTOS_INMUEBLE': 'DEPARTAMENTOS_INMUEBLE', 'DEPARTAMENTOS_AREA (m2)': 'DEPARTAMENTOS_AREA (m2)', 'DEPARTAMENTOS_PRECIO ($us)': 'DEPARTAMENTOS_PRECIO ($us)', 'DEPARTAMENTOS_ESTADO': 'DEPARTAMENTOS_ESTADO', 'DEPARTAMENTOS_TITULAR': 'DEPARTAMENTOS_TITULAR', });
lyr_LOTESCC_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'descripción': 'TextEdit', 'LOTES_INMUEBLE': 'TextEdit', 'LOTES_AREA (m2)': 'TextEdit', 'LOTES_PRECIO ($us)': 'TextEdit', 'LOTES_ESTADO': 'TextEdit', 'LOTES_TITULAR': 'TextEdit', });
lyr_DEPARTAMENTOS_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'DEPARTAMENTOS_BLQ': 'TextEdit', 'DEPARTAMENTOS_INMUEBLE': 'TextEdit', 'DEPARTAMENTOS_AREA (m2)': 'TextEdit', 'DEPARTAMENTOS_PRECIO ($us)': 'Range', 'DEPARTAMENTOS_ESTADO': 'TextEdit', 'DEPARTAMENTOS_TITULAR': 'TextEdit', });
lyr_LOTESCC_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'folders': 'hidden field', 'description': 'hidden field', 'descripción': 'hidden field', 'LOTES_INMUEBLE': 'inline label - always visible', 'LOTES_AREA (m2)': 'inline label - always visible', 'LOTES_PRECIO ($us)': 'inline label - always visible', 'LOTES_ESTADO': 'inline label - always visible', 'LOTES_TITULAR': 'hidden field', });
lyr_DEPARTAMENTOS_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'DEPARTAMENTOS_BLQ': 'inline label - always visible', 'DEPARTAMENTOS_INMUEBLE': 'inline label - always visible', 'DEPARTAMENTOS_AREA (m2)': 'inline label - always visible', 'DEPARTAMENTOS_PRECIO ($us)': 'inline label - always visible', 'DEPARTAMENTOS_ESTADO': 'inline label - always visible', 'DEPARTAMENTOS_TITULAR': 'hidden field', });
lyr_DEPARTAMENTOS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});