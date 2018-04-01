   
$( "document" ).ready( function() {
 
   $('#full').gallery({
      source: "#images img",
      easing: "linear",
      waitTime: 2000,
      changeTime: 400,
      showCaptions: true,
      captionTarget: "#caption"
    });

    $("#full").on({
      mouseenter: function() {
        $("#full").gallery("stopAnimation");
      },
      mouseleave: function() {
        $("#full").gallery("resumeAnimation");
      }
    });

    $("#full").on({
      galleryimageload: function() {
        console.log("new image loaded");
      },
      galleryclick: function() {
        console.log("gallery source image clicked");
      },
      galleryanimationstop: function() {
        console.log("gallery animation stopped");
      },
      galleryanimationresume: function() {
        console.log("gallery animation resumed");
      }
    });

    } );


jQuery(function(){
        FooNav.init({
          classes: 'fon-shadow',
          items: {
            container: '.sidenav',
            selector: 'h1,h2,h3,h4,h5,h6',
            exclude: '#comments'
          },
          position: 'fon-top-left',
          theme: 'fon-light'
        }).ready(function(nav){
          nav.buttons.append('<span class="demo-arrow"> Nav</span>');
        });
      });
   
   
  