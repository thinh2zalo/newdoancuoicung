jQuery(document).ready(function($) {
 
  $(".owl-cachep-slider").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:false,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
	pagination : false,
    autoHeight : true,
    transitionStyle:"fade"
  });
  
	var owl = $(".owl-cachep-Book-new");
 
	owl.owlCarousel({
	 items : 3,
	pagination : false
	});
 
	// Custom Navigation Events
	$(".Book-next").click(function(){
    owl.trigger('owl.next');
	})
	$(".Book-prev").click(function(){
    owl.trigger('owl.prev');
	})
	
  var owl2 = $(".owl-cachep-left-slider");
 
owl2.owlCarousel({
	autoPlay : 3000,
	items:3,
	pagination : false
});
 
  // Custom Navigation Events
  $(".left-slider-next").click(function(){
    owl2.trigger('owl.next');
  })
  $(".left-slider-prev").click(function(){
    owl2.trigger('owl.prev');
  })
 
   var owl3 = $(".owl-cachep-left-slider2");
 
owl3.owlCarousel({
	 autoPlay : 3100,
	items:1,
	pagination : false
});
 
  // Custom Navigation Events
  $(".left-slider-next2").click(function(){
    owl3.trigger('owl.next');
  })
  $(".left-slider-prev2").click(function(){
    owl3.trigger('owl.prev');
  })
   var owl4 = $(".owl-cachep-left-slider3");
 
owl4.owlCarousel({
	 autoPlay : 3200,
	items:1,
	pagination : false
});
 
  // Custom Navigation Events
  $(".left-slider-next3").click(function(){
    owl4.trigger('owl.next');
  })
  $(".left-slider-prev3").click(function(){
    owl4.trigger('owl.prev');
  })
  
  var owl5 = $(".owl-cachep-left-slider4");
 
owl5.owlCarousel({
	 autoPlay : 3300,
	items:1,
	pagination : false
});
 
  // Custom Navigation Events
  $(".left-slider-next4").click(function(){
    owl5.trigger('owl.next');
  })
  $(".left-slider-prev4").click(function(){
    owl5.trigger('owl.prev');
  });
    var owl9 = $(".owl-cachep-product-slider");
 
owl9.owlCarousel({
	 autoPlay : 3300,
	items:1,
	pagination : false
});
 
  // Custom Navigation Events
  $(".left-slider-next4").click(function(){
    owl9.trigger('owl.next');
  })
  $(".left-slider-prev4").click(function(){
    owl9.trigger('owl.prev');
  })
 
  var owl6 = $(".owl-cachep-Book2-new");
 
owl6.owlCarousel({
	items:3,
	pagination : false
});
 
  // Custom Navigation Events
  $(".Book2-next").click(function(){
    owl6.trigger('owl.next');
  })
  $(".Book2-prev").click(function(){
    owl6.trigger('owl.prev');
  })
 var owl7 = $(".owl-cachep-Book3-new");
 
owl7.owlCarousel({
	items:3,
	pagination : false
});
 
  // Custom Navigation Events
  $(".Book3-next").click(function(){
    owl7.trigger('owl.next');
  })
  $(".Book3-prev").click(function(){
    owl7.trigger('owl.prev');
  })
  var owl8 = $(".owl-cachep-Book4-new");
 
owl8.owlCarousel({
	items:3,
	pagination : false
});
 
  // Custom Navigation Events
  $(".Book4-next").click(function(){
    owl8.trigger('owl.next');
  })
  $(".Book4-prev").click(function(){
    owl8.trigger('owl.prev');
  })
  
  
var owl10 = $(".owl-cachep-Book-lib");
 
owl10.owlCarousel({
	items:6,
	pagination : false
});

    // Custom Navigation Events
    $(".cachep-Book-lib-next").click(function(){
        owl10.trigger('owl.next');
    });
    $(".cachep-Book-lib-prev").click(function(){
        owl10.trigger('owl.prev');
    });


    var owl11 = $(".owl-cachep-Book-lib1");

    owl11.owlCarousel({
        items:6,
        pagination : false
    });
    $(".cachep-Book-lib-next1").click(function(){
        owl11.trigger('owl.next');
    });
    $(".cachep-Book-lib-prev1").click(function(){
        owl11.trigger('owl.prev');
    });



    var owl12 = $(".owl-cachep-Book-lib2");

    owl12.owlCarousel({
        items:6,
        pagination : false
    });
 


    // Custom Navigation Events


    // Custom Navigation Events
    $(".cachep-Book-lib-next2").click(function(){
        owl12.trigger('owl.next');
    })
    $(".cachep-Book-lib-prev2").click(function(){
        owl12.trigger('owl.prev');
    })
});

 

 
 
 


 
 





 

 
 


 
 
 
