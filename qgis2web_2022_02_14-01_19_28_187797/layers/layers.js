var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                interactive: true,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_Atelierdetransformation_2 = new ol.format.GeoJSON();
var features_Atelierdetransformation_2 = format_Atelierdetransformation_2.readFeatures(json_Atelierdetransformation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atelierdetransformation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atelierdetransformation_2.addFeatures(features_Atelierdetransformation_2);
var lyr_Atelierdetransformation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Atelierdetransformation_2, 
                style: style_Atelierdetransformation_2,
                interactive: true,
                title: '<img src="styles/legend/Atelierdetransformation_2.png" /> Atelier de transformation'
            });
var format_Limitedudpartement_3 = new ol.format.GeoJSON();
var features_Limitedudpartement_3 = format_Limitedudpartement_3.readFeatures(json_Limitedudpartement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitedudpartement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedudpartement_3.addFeatures(features_Limitedudpartement_3);
var lyr_Limitedudpartement_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitedudpartement_3, 
                style: style_Limitedudpartement_3,
                interactive: true,
                title: '<img src="styles/legend/Limitedudpartement_3.png" /> Limite du département'
            });
var format_AlexandreGoueffon_4 = new ol.format.GeoJSON();
var features_AlexandreGoueffon_4 = format_AlexandreGoueffon_4.readFeatures(json_AlexandreGoueffon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlexandreGoueffon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlexandreGoueffon_4.addFeatures(features_AlexandreGoueffon_4);
var lyr_AlexandreGoueffon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlexandreGoueffon_4, 
                style: style_AlexandreGoueffon_4,
                interactive: true,
                title: '<img src="styles/legend/AlexandreGoueffon_4.png" /> Alexandre Goueffon'
            });
var format_LaFermedesPerrieres_5 = new ol.format.GeoJSON();
var features_LaFermedesPerrieres_5 = format_LaFermedesPerrieres_5.readFeatures(json_LaFermedesPerrieres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaFermedesPerrieres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaFermedesPerrieres_5.addFeatures(features_LaFermedesPerrieres_5);
var lyr_LaFermedesPerrieres_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaFermedesPerrieres_5, 
                style: style_LaFermedesPerrieres_5,
                interactive: true,
                title: '<img src="styles/legend/LaFermedesPerrieres_5.png" /> La Ferme des Perrieres'
            });
var format_LafermedeRomaison_6 = new ol.format.GeoJSON();
var features_LafermedeRomaison_6 = format_LafermedeRomaison_6.readFeatures(json_LafermedeRomaison_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LafermedeRomaison_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LafermedeRomaison_6.addFeatures(features_LafermedeRomaison_6);
var lyr_LafermedeRomaison_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LafermedeRomaison_6, 
                style: style_LafermedeRomaison_6,
                interactive: true,
                title: '<img src="styles/legend/LafermedeRomaison_6.png" /> La ferme de Romaison'
            });
var format_LaBcheMel_7 = new ol.format.GeoJSON();
var features_LaBcheMel_7 = format_LaBcheMel_7.readFeatures(json_LaBcheMel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaBcheMel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaBcheMel_7.addFeatures(features_LaBcheMel_7);
var lyr_LaBcheMel_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaBcheMel_7, 
                style: style_LaBcheMel_7,
                interactive: true,
                title: '<img src="styles/legend/LaBcheMel_7.png" /> La Bêche à Mel'
            });
var format_Auxlgumesclestes_8 = new ol.format.GeoJSON();
var features_Auxlgumesclestes_8 = format_Auxlgumesclestes_8.readFeatures(json_Auxlgumesclestes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Auxlgumesclestes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Auxlgumesclestes_8.addFeatures(features_Auxlgumesclestes_8);
var lyr_Auxlgumesclestes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Auxlgumesclestes_8, 
                style: style_Auxlgumesclestes_8,
                interactive: true,
                title: '<img src="styles/legend/Auxlgumesclestes_8.png" /> Aux légumes célestes'
            });
var format_Aujardindubrandalon_9 = new ol.format.GeoJSON();
var features_Aujardindubrandalon_9 = format_Aujardindubrandalon_9.readFeatures(json_Aujardindubrandalon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aujardindubrandalon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aujardindubrandalon_9.addFeatures(features_Aujardindubrandalon_9);
var lyr_Aujardindubrandalon_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aujardindubrandalon_9, 
                style: style_Aujardindubrandalon_9,
                interactive: true,
                title: '<img src="styles/legend/Aujardindubrandalon_9.png" /> Au jardin du brandalon'
            });
var format_BrunoVincent_10 = new ol.format.GeoJSON();
var features_BrunoVincent_10 = format_BrunoVincent_10.readFeatures(json_BrunoVincent_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrunoVincent_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrunoVincent_10.addFeatures(features_BrunoVincent_10);
var lyr_BrunoVincent_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BrunoVincent_10, 
                style: style_BrunoVincent_10,
                interactive: true,
                title: '<img src="styles/legend/BrunoVincent_10.png" /> Bruno Vincent'
            });
var format_Aujardindubonheur_11 = new ol.format.GeoJSON();
var features_Aujardindubonheur_11 = format_Aujardindubonheur_11.readFeatures(json_Aujardindubonheur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aujardindubonheur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aujardindubonheur_11.addFeatures(features_Aujardindubonheur_11);
var lyr_Aujardindubonheur_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aujardindubonheur_11, 
                style: style_Aujardindubonheur_11,
                interactive: true,
                title: '<img src="styles/legend/Aujardindubonheur_11.png" /> Au jardin du bonheur'
            });
var format_Etapesdetrajet_12 = new ol.format.GeoJSON();
var features_Etapesdetrajet_12 = format_Etapesdetrajet_12.readFeatures(json_Etapesdetrajet_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etapesdetrajet_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etapesdetrajet_12.addFeatures(features_Etapesdetrajet_12);
var lyr_Etapesdetrajet_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etapesdetrajet_12, 
                style: style_Etapesdetrajet_12,
                interactive: true,
                title: '<img src="styles/legend/Etapesdetrajet_12.png" /> Etapes de trajet'
            });
var format_Localisationdesproducteurs_13 = new ol.format.GeoJSON();
var features_Localisationdesproducteurs_13 = format_Localisationdesproducteurs_13.readFeatures(json_Localisationdesproducteurs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localisationdesproducteurs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localisationdesproducteurs_13.addFeatures(features_Localisationdesproducteurs_13);
var lyr_Localisationdesproducteurs_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localisationdesproducteurs_13, 
                style: style_Localisationdesproducteurs_13,
                interactive: true,
                title: '<img src="styles/legend/Localisationdesproducteurs_13.png" /> Localisation des producteurs'
            });
var format_commmunesproduction_14 = new ol.format.GeoJSON();
var features_commmunesproduction_14 = format_commmunesproduction_14.readFeatures(json_commmunesproduction_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commmunesproduction_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commmunesproduction_14.addFeatures(features_commmunesproduction_14);
var lyr_commmunesproduction_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_commmunesproduction_14, 
                style: style_commmunesproduction_14,
                interactive: true,
                title: '<img src="styles/legend/commmunesproduction_14.png" /> commmunesproduction'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Communes_1.setVisible(false);lyr_Atelierdetransformation_2.setVisible(true);lyr_Limitedudpartement_3.setVisible(true);lyr_AlexandreGoueffon_4.setVisible(true);lyr_LaFermedesPerrieres_5.setVisible(true);lyr_LafermedeRomaison_6.setVisible(true);lyr_LaBcheMel_7.setVisible(true);lyr_Auxlgumesclestes_8.setVisible(true);lyr_Aujardindubrandalon_9.setVisible(true);lyr_BrunoVincent_10.setVisible(true);lyr_Aujardindubonheur_11.setVisible(true);lyr_Etapesdetrajet_12.setVisible(true);lyr_Localisationdesproducteurs_13.setVisible(true);lyr_commmunesproduction_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Communes_1,lyr_Atelierdetransformation_2,lyr_Limitedudpartement_3,lyr_AlexandreGoueffon_4,lyr_LaFermedesPerrieres_5,lyr_LafermedeRomaison_6,lyr_LaBcheMel_7,lyr_Auxlgumesclestes_8,lyr_Aujardindubrandalon_9,lyr_BrunoVincent_10,lyr_Aujardindubonheur_11,lyr_Etapesdetrajet_12,lyr_Localisationdesproducteurs_13,lyr_commmunesproduction_14];
lyr_Communes_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', });
lyr_Atelierdetransformation_2.set('fieldAliases', {'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'nom': 'nom', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Limitedudpartement_3.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', });
lyr_AlexandreGoueffon_4.set('fieldAliases', {'id': 'id', 'trajetgoue': 'trajetgoue', 'Nom': 'Nom', });
lyr_LaFermedesPerrieres_5.set('fieldAliases', {'id': 'id', 'TrajetFPer': 'TrajetFPer', 'Nom': 'Nom', });
lyr_LafermedeRomaison_6.set('fieldAliases', {'id': 'id', 'romaisondi': 'romaisondi', 'Nom': 'Nom', });
lyr_LaBcheMel_7.set('fieldAliases', {'id': 'id', 'trajetbech': 'trajetbech', 'Nom': 'Nom', });
lyr_Auxlgumesclestes_8.set('fieldAliases', {'id': 'id', 'Trajets': 'Trajets', 'Nom': 'Nom', });
lyr_Aujardindubrandalon_9.set('fieldAliases', {'id': 'id', 'Brandalon': 'Brandalon', 'Nom': 'Nom', });
lyr_BrunoVincent_10.set('fieldAliases', {'id': 'id', 'directBV': 'directBV', 'Nom': 'Nom', });
lyr_Aujardindubonheur_11.set('fieldAliases', {'id': 'id', 'jardinbonh': 'jardinbonh', 'Nom': 'Nom', });
lyr_Etapesdetrajet_12.set('fieldAliases', {'Itinéraire': 'Itinéraire', 'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'Horaires': 'Horaires', });
lyr_Localisationdesproducteurs_13.set('fieldAliases', {'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'nom struct': 'nom struct', 'nom': 'nom', 'Vente': 'Vente', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_commmunesproduction_14.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'layer': 'layer', 'path': 'path', });
lyr_Communes_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', });
lyr_Atelierdetransformation_2.set('fieldImages', {'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'nom': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Limitedudpartement_3.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', });
lyr_AlexandreGoueffon_4.set('fieldImages', {'id': 'TextEdit', 'trajetgoue': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LaFermedesPerrieres_5.set('fieldImages', {'id': 'TextEdit', 'TrajetFPer': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LafermedeRomaison_6.set('fieldImages', {'id': 'TextEdit', 'romaisondi': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LaBcheMel_7.set('fieldImages', {'id': 'TextEdit', 'trajetbech': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Auxlgumesclestes_8.set('fieldImages', {'id': 'TextEdit', 'Trajets': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Aujardindubrandalon_9.set('fieldImages', {'id': 'TextEdit', 'Brandalon': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BrunoVincent_10.set('fieldImages', {'id': 'TextEdit', 'directBV': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Aujardindubonheur_11.set('fieldImages', {'id': 'TextEdit', 'jardinbonh': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Etapesdetrajet_12.set('fieldImages', {'Itinéraire': 'TextEdit', 'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Horaires': '', });
lyr_Localisationdesproducteurs_13.set('fieldImages', {'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'nom struct': 'TextEdit', 'nom': 'TextEdit', 'Vente': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_commmunesproduction_14.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_': '', 'auxiliar_1': '', 'layer': '', 'path': '', });
lyr_Communes_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', '_mean': 'no label', '_mean_1': 'no label', });
lyr_Atelierdetransformation_2.set('fieldLabels', {'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'nom': 'no label', });
lyr_Limitedudpartement_3.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', '_mean': 'no label', '_mean_1': 'no label', });
lyr_AlexandreGoueffon_4.set('fieldLabels', {'id': 'no label', 'trajetgoue': 'no label', 'Nom': 'no label', });
lyr_LaFermedesPerrieres_5.set('fieldLabels', {'id': 'no label', 'TrajetFPer': 'no label', 'Nom': 'no label', });
lyr_LafermedeRomaison_6.set('fieldLabels', {'id': 'no label', 'romaisondi': 'no label', 'Nom': 'no label', });
lyr_LaBcheMel_7.set('fieldLabels', {'id': 'no label', 'trajetbech': 'no label', 'Nom': 'no label', });
lyr_Auxlgumesclestes_8.set('fieldLabels', {'id': 'no label', 'Trajets': 'no label', 'Nom': 'no label', });
lyr_Aujardindubrandalon_9.set('fieldLabels', {'id': 'no label', 'Brandalon': 'no label', 'Nom': 'no label', });
lyr_BrunoVincent_10.set('fieldLabels', {'id': 'no label', 'directBV': 'no label', 'Nom': 'no label', });
lyr_Aujardindubonheur_11.set('fieldLabels', {'id': 'no label', 'jardinbonh': 'no label', 'Nom': 'no label', });
lyr_Etapesdetrajet_12.set('fieldLabels', {'Itinéraire': 'no label', 'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'Horaires': 'no label', });
lyr_Localisationdesproducteurs_13.set('fieldLabels', {'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'nom struct': 'no label', 'nom': 'no label', 'Vente': 'no label', });
lyr_commmunesproduction_14.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', '_mean': 'no label', '_mean_1': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_commmunesproduction_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});