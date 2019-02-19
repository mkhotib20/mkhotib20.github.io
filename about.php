<?php include 'header.php'; ?>

  <section style="margin-top: 90px;" class="about-sc">
    <div class="container-custom">
      <h3 class="about-tittle">ALL ABOUT</h3>
    </div>
    <div class="container-custom about-1">
      <div class="row">
        <div class="col-lg-6">
          <img style="width: 100%" src="img/bg-showcase-1.jpg">
        </div>
        <div class="col-lg-6">
          <h3>CV. INDO CLAISS MANDIRI</h3>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, Ut enim ad minim veniam,</p>
        </div>
      </div>
    </div>
  </section>
  <section class="about-sc">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-4">
          <h3 class="about-tittle" >VISION</h3>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, Ut enim ad minim veniam,</p>
        </div>
        <div class="col-md-2"></div>
        <div class="col-lg-6">
          <img style="width: 100%" src="img/bg-showcase-1.jpg">
        </div>
      </div>
    </div>
  </section>
  <section class="about-sc">
    <div class="container-custom about-2">
      <div class="row">
        <div class="col-lg-6">
          <img style="width: 100%" src="img/bg-showcase-1.jpg">
        </div>
        <div class="col-md-2"></div>
        <div class="col-lg-4 text-right">
          <h3 class="about-tittle" >OUR VALUES</h3>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, Ut enim ad minim veniam,</p>
        </div>
      </div>
    </div>
  </section>
  <section class="about-sc">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-4">
          <h3 class="about-tittle" >SERVICES</h3>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, Ut enim ad minim veniam,</p>
        </div>
        <div class="col-md-2"></div>
        <div class="col-lg-6">
          <img style="width: 100%" src="img/bg-showcase-1.jpg">
        </div>
      </div>
    </div>
  </section>
  <section class="about-sc">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-8">
           <div id="mapid"></div>
        </div>
        <div class="col-lg-4">
          <h3 class="about-tittle" >SERVICES</h3>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, Ut enim ad minim veniam,</p>
        </div>
      </div>
    </div>
  </section>
   <script type="text/javascript">
     var mymap = L.map('mapid').setView([-7.282373, 112.794899], 13);
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWtob3RpYiIsImEiOiJjanNibmp1ZHYwYnd0NDNsMWhlODZ2aHpqIn0.iR-zBKesoKMp8sIQV6iY_Q'
    }).addTo(mymap);
     var marker = L.marker([-7.282373, 112.794899]).addTo(mymap);
   </script>


<?php include 'footer.php'; ?>
