<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="css/leaflet.css">
        <link rel="stylesheet" href="css/qgis2web.css">
        <link rel="stylesheet" href="css/leaflet-search.css">
        <link rel="stylesheet" href="css/leaflet-measure.css">
        <title>Peta FIber Optic Surabay | <?php echo ucfirst($page)?></title>
        <link rel="icon" href="img/icon.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="lib/css/feathericon.min.css">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:600,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="lib/css/bootstrap.min.css">
        <link rel="stylesheet/less" href="style.less">
        <style>
        html, body, #map {
            width: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Web Gis</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="break"></div>
                
                <div class="break"></div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item <?php if($page=='home'){echo 'active';} ?>">
                        <a class="nav-link" href="index.php">Home</a>
                    </li>
                    <li class="nav-item <?php if($page=='map'){echo 'active';} ?>">
                        <a class="nav-link" href="map.php#12/-7.2679/112.7568">Peta</a>
                    </li>
                    <li class="nav-item <?php if($page=='ttg'){echo 'active';} ?>">
                        <a class="nav-link" href="#">Tentang</a>
                    </li>
                </ul>
            </div>
        </nav>