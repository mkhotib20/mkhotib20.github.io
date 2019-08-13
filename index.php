<?php $page="home"; include "header.php" ?>
        <section class="main-bg">
            <div class="container">
                <div class="row p-2">
                    <div class="col-md-6">
                        <div class="px-5 py-2">
                            <h1>Jalur Fiber Optik Surabaya</h1>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quod dolorum quae sed optio. 
                                Minus dolorem soluta enim, fuga quaerat, quis quia placeat at iste alias ab nisi, tenetur dignissimos!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quod dolorum quae sed optio. 
                                Minus dolorem soluta enim, fuga quaerat, quis quia placeat at iste alias ab nisi, tenetur dignissimos!</p>
                                <br>
                                <button onclick="window.location.href='map.php'" class="btn btn-tr" style="width: 50%;" href="map.php">Explore Map</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img id="bg" src="img/bg.svg" style="width: 100%">
                    </div>
                </div>
            </div>
        </section>
        
<?php include "footer.php"?>
<script>
    $('.btn-tr').hover(function() {
        $(this).fadeOut(150, function(){
            $(this).html('<span class="fe fe-map panah"></span>')
        }).fadeIn(150)
    }, function() {
        $(this).fadeOut(150, function(){
            $(this).text('Explore Map')
        }).fadeIn(150)
    })
    $('#bg').hover(function(){
        $(this).attr('src', 'img/bghov.svg')
    }, function(){
        $(this).attr('src', 'img/bg.svg')
    })
</script>