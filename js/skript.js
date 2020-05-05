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
        centerPadding: '40px',
     
        
        responsive:[
            {
            breakepoint:1200,
            settings:{
                slidesToShow: 2, 
                
            },
            
            breakepoint:400,
                settings:{
                    slidesToShow: 1
                }

        }]
     
       
        
    });
});