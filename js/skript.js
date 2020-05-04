$(document).ready(function(){
    $('.trips__body').slick({
        adaptiveHeight: true,
        
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        autoplay:true,
        easing:'easeInSine',
        autoplaySpeed:5000,
        centerMode:true,
     
        
        responsive:[
            {
            breakepoint:1200,
            settings:{
                slidesToShow: 2, 
                //centerPadding: '40px',
            },
            
            breakepoint:400,
                settings:{
                    slidesToShow: 1
                }

        }]
     
       
        
    });
});