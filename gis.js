var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:11
        }).fitBounds([[-7.35806022147,112.52618375],[-7.16344019812,112.879377627]]);
        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var measureControl = new L.Control.Measure({
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        var bounds_group = new L.featureGroup([]);
        var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 28
        });
        basemap0.addTo(map);
        function setBounds() {
        }
        function pop_Surabaya_bagianUTM_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>Wilayah</strong><br />' + (feature.properties['Wilayah'] !== null ? Autolinker.link(String(feature.properties['Wilayah'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Kota</strong><br />' + (feature.properties['Kota'] !== null ? Autolinker.link(String(feature.properties['Kota'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Luas</strong><br />' + (feature.properties['Luas'] !== null ? Autolinker.link(String(feature.properties['Luas'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Surabaya_bagianUTM_0_0() {
            return {
                pane: 'pane_Surabaya_bagianUTM_0',
                opacity: 1,
                color: 'rgba(0,0,0,0.3)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(234,242,131,0.3)',
            }
        }
        map.createPane('pane_Surabaya_bagianUTM_0');
        map.getPane('pane_Surabaya_bagianUTM_0').style.zIndex = 400;
        map.getPane('pane_Surabaya_bagianUTM_0').style['mix-blend-mode'] = 'normal';
        var layer_Surabaya_bagianUTM_0 = new L.geoJson(json_Surabaya_bagianUTM_0, {
            attribution: '<a href=""></a>',
            pane: 'pane_Surabaya_bagianUTM_0',
            onEachFeature: pop_Surabaya_bagianUTM_0,
            style: style_Surabaya_bagianUTM_0_0,
        });
        bounds_group.addLayer(layer_Surabaya_bagianUTM_0);
        map.addLayer(layer_Surabaya_bagianUTM_0);
        function pop_BatasPembagianWilayahSurabaya_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Batas</th>\
                        <td>' + (feature.properties['Batas'] !== null ? Autolinker.link(String(feature.properties['Batas'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_BatasPembagianWilayahSurabaya_1_0(feature) {
            switch(String(feature.properties['Batas'])) {
                case 'Batas Kota':
                    return {
                pane: 'pane_BatasPembagianWilayahSurabaya_1',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '10,5,1,5,1,5',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 7.0,
                fillOpacity: 0,
            }
                    break;
                case 'Batas Wilayah':
                    return {
                pane: 'pane_BatasPembagianWilayahSurabaya_1',
                opacity: 1,
                color: 'rgba(255,212,128,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 6.0,
                fillOpacity: 0,
            }
                    break;
            }
        }
        map.createPane('pane_BatasPembagianWilayahSurabaya_1');
        map.getPane('pane_BatasPembagianWilayahSurabaya_1').style.zIndex = 401;
        map.getPane('pane_BatasPembagianWilayahSurabaya_1').style['mix-blend-mode'] = 'normal';
        var layer_BatasPembagianWilayahSurabaya_1 = new L.geoJson(json_BatasPembagianWilayahSurabaya_1, {
            attribution: '<a href=""></a>',
            pane: 'pane_BatasPembagianWilayahSurabaya_1',
            onEachFeature: pop_BatasPembagianWilayahSurabaya_1,
            style: style_BatasPembagianWilayahSurabaya_1_0,
        });
        bounds_group.addLayer(layer_BatasPembagianWilayahSurabaya_1);
        map.addLayer(layer_BatasPembagianWilayahSurabaya_1);
        function pop_JaringanFiberOptic_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Id</th>\
                        <td>' + (feature.properties['Id'] !== null ? Autolinker.link(String(feature.properties['Id'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Panjang</th>\
                        <td>' + (feature.properties['Panjang'] !== null ? Autolinker.link(String(feature.properties['Panjang'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Status</th>\
                        <td>' + (feature.properties['Status'] !== null ? Autolinker.link(String(feature.properties['Status'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">HH_1_2</th>\
                        <td>' + (feature.properties['HH_1_2'] !== null ? Autolinker.link(String(feature.properties['HH_1_2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">HH_2_2</th>\
                        <td>' + (feature.properties['HH_2_2'] !== null ? Autolinker.link(String(feature.properties['HH_2_2'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_JaringanFiberOptic_2_0(feature) {
            switch(String(feature.properties['Status'])) {
                case 'CROSS':
                    return {
                pane: 'pane_JaringanFiberOptic_2',
                opacity: 1,
                color: 'rgba(233,5,1,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'GALVANIS':
                    return {
                pane: 'pane_JaringanFiberOptic_2',
                opacity: 1,
                color: 'rgba(31,120,180,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'GORONG-GORONG':
                    return {
                pane: 'pane_JaringanFiberOptic_2',
                opacity: 1,
                color: 'rgba(50,228,6,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'ROJOK':
                    return {
                pane: 'pane_JaringanFiberOptic_2',
                opacity: 1,
                color: 'rgba(242,235,9,0.960784)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
            }
        }
        map.createPane('pane_JaringanFiberOptic_2');
        map.getPane('pane_JaringanFiberOptic_2').style.zIndex = 402;
        map.getPane('pane_JaringanFiberOptic_2').style['mix-blend-mode'] = 'normal';
        var layer_JaringanFiberOptic_2 = new L.geoJson(json_JaringanFiberOptic_2, {
            attribution: '<a href=""></a>',
            pane: 'pane_JaringanFiberOptic_2',
            onEachFeature: pop_JaringanFiberOptic_2,
            style: style_JaringanFiberOptic_2_0,
        });
        bounds_group.addLayer(layer_JaringanFiberOptic_2);
        map.addLayer(layer_JaringanFiberOptic_2);
        function pop_PointsofInterest_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>Lat</strong><br />' + (feature.properties['Lat'] !== null ? Autolinker.link(String(feature.properties['Lat'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Long</strong><br />' + (feature.properties['Long'] !== null ? Autolinker.link(String(feature.properties['Long'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Nama</strong><br />' + (feature.properties['Nama'] !== null ? Autolinker.link(String(feature.properties['Nama'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Jenis</strong><br />' + (feature.properties['Jenis'] !== null ? Autolinker.link(String(feature.properties['Jenis'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Deskripsi</strong><br />' + (feature.properties['Deskripsi'] !== null ? Autolinker.link(String(feature.properties['Deskripsi'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_PointsofInterest_3_0(feature) {
            switch(String(feature.properties['Jenis'])) {
                case 'BLC':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 7.2,
                opacity: 1,
                color: 'rgba(31,120,180,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 5.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(208,214,117,1.0)',
            }
                    break;
                case 'CCTV':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 10.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
            }
                    break;
                case 'Gudang Perlengkapan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 8.8,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,20,238,1.0)',
            }
                    break;
                case 'HANDHOLE':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 7.2,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
                case 'Kesehatan':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
                case 'Lain-lain':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 7.2,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
                case 'Pemerintahan':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 5.5,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,239,5,1.0)',
            }
                    break;
                case 'Pendidikan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 9.2,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,68,17,1.0)',
            }
                    break;
                case 'Pos PMK':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 8.8,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(227,26,28,1.0)',
            }
                    break;
                case 'Rusunawa':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 4.71794871795,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,160,44,1.0)',
            }
                    break;
                case 'Terminal':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 4.4,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
            }
                    break;
            }
        }
        function style_PointsofInterest_3_1(feature) {
            switch(String(feature.properties['Jenis'])) {
                case 'BLC':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 5.625,
                opacity: 1,
                color: 'rgba(101,177,227,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(127,183,232,1.0)',
            }
                    break;
                case 'CCTV':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 6.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,0,0,1.0)',
            }
                    break;
                case 'Gudang Perlengkapan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 7.7,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(132,16,240,1.0)',
            }
                    break;
                case 'HANDHOLE':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 4.32,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
                case 'Kesehatan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 6.66666666667,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,0,0,1.0)',
            }
                    break;
                case 'Lain-lain':
                    return {
                pane: 'pane_PointsofInterest_3',
            }
                    break;
                case 'Pemerintahan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 8.8,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,235,7,1.0)',
            }
                    break;
                case 'Pendidikan':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 6.13333333333,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(192,110,55,1.0)',
            }
                    break;
                case 'Pos PMK':
                    return {
                pane: 'pane_PointsofInterest_3',
                shape: 'square',
                radius: 5.28,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,133,133,1.0)',
            }
                    break;
                case 'Rusunawa':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 4.71794871795,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,160,44,1.0)',
            }
                    break;
                case 'Terminal':
                    return {
                pane: 'pane_PointsofInterest_3',
                radius: 4.4,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_PointsofInterest_3');
        map.getPane('pane_PointsofInterest_3').style.zIndex = 403;
        map.getPane('pane_PointsofInterest_3').style['mix-blend-mode'] = 'normal';
        var layer_PointsofInterest_3 = new L.geoJson.multiStyle(json_PointsofInterest_3, {
            attribution: '<a href=""></a>',
            pane: 'pane_PointsofInterest_3',
            onEachFeature: pop_PointsofInterest_3,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_PointsofInterest_3_0(feature));
            },function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_PointsofInterest_3_1(feature));
            },
        ]});
        bounds_group.addLayer(layer_PointsofInterest_3);
        map.addLayer(layer_PointsofInterest_3);
        var baseMaps = {};
        L.control.layers(baseMaps,{'Points of Interest<br /><table><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_BLC0.png" /></td><td>BLC</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_CCTV1.png" /></td><td>CCTV</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_GudangPerlengkapan2.png" /></td><td>Gudang Perlengkapan</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_HANDHOLE3.png" /></td><td>HANDHOLE</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Kesehatan4.png" /></td><td>Kesehatan</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Lainlain5.png" /></td><td>Lain-lain</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Pemerintahan6.png" /></td><td>Pemerintahan</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Pendidikan7.png" /></td><td>Pendidikan</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_PosPMK8.png" /></td><td>Pos PMK</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Rusunawa9.png" /></td><td>Rusunawa</td></tr><tr><td style="text-align: center;"><img src="legend/PointsofInterest_3_Terminal10.png" /></td><td>Terminal</td></tr></table>': layer_PointsofInterest_3,'Jaringan Fiber Optic<br /><table><tr><td style="text-align: center;"><img src="legend/JaringanFiberOptic_2_CROSS0.png" /></td><td>CROSS</td></tr><tr><td style="text-align: center;"><img src="legend/JaringanFiberOptic_2_GALVANIS1.png" /></td><td>GALVANIS</td></tr><tr><td style="text-align: center;"><img src="legend/JaringanFiberOptic_2_GORONGGORONG2.png" /></td><td>GORONG-GORONG</td></tr><tr><td style="text-align: center;"><img src="legend/JaringanFiberOptic_2_ROJOK3.png" /></td><td>ROJOK</td></tr></table>': layer_JaringanFiberOptic_2,'Batas Pembagian Wilayah Surabaya<br /><table><tr><td style="text-align: center;"><img src="legend/BatasPembagianWilayahSurabaya_1_BatasKota0.png" /></td><td>Batas Kota</td></tr><tr><td style="text-align: center;"><img src="legend/BatasPembagianWilayahSurabaya_1_BatasWilayah1.png" /></td><td>Batas Wilayah</td></tr></table>': layer_BatasPembagianWilayahSurabaya_1,'<img src="legend/Surabaya_bagianUTM_0.png" /> Surabaya_bagian UTM': layer_Surabaya_bagianUTM_0,},{collapsed:false}).addTo(map);
        setBounds();
        var i = 0;
        layer_Surabaya_bagianUTM_0.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Wilayah'] !== null?String('<div style="color: #000000; font-size: 13pt; font-weight: bold; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Wilayah']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Surabaya_bagianUTM_0'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        map.addControl(new L.Control.Search({
            layer: layer_PointsofInterest_3,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Nama'}));
        resetLabels([layer_Surabaya_bagianUTM_0]);
        map.on("zoomend", function(){
            resetLabels([layer_Surabaya_bagianUTM_0]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_Surabaya_bagianUTM_0]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_Surabaya_bagianUTM_0]);
        });