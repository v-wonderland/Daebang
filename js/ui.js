// $(document).ready(function() {
//         $('a[href*=#]').bind('click', function(e) {
//                 e.preventDefault(); // prevent hard jump, the default behavior

//                 var target = $(this).attr("href"); // Set the target as variable

//                 // perform animated scrolling by getting top-position of target-element and set it as scroll target
//                 $('html, body').stop().animate({
//                         scrollTop: $(target).offset().top
//                 }, 600, function() {
//                         location.hash = target; //attach the hash (#jumptarget) to the pageurl
//                 });

//                 return false;
//         });
// });
$(function(){

	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
		
	});        
        
	$('html').addClass('on');

        $('#mainPage header h1').each(function(){
		var idx = ($(this).index() * .2) + .2;
		$(this).css({
			opacity:'1',
			transform:'translateY(0)',
			transitionDuration:idx + 's'
		});
	});

	$('#mainPage .gnb li').each(function(){
		var idx = ($(this).index() * .2) + .2;
		$(this).css({
			opacity:'1',
			transform:'translateY(0)',
			transitionDuration:idx + 's'
		});
	});

	$('#mainPage header .search_btn').each(function(){
		var idx = ($(this).index() * .2) + 1.2;
		$(this).css({
			opacity:'1',
			transform:'translateY(0)',
			transitionDuration:idx + 's'
		});
	});

	$('#mainPage header .go_brand').each(function(){
	var idx = ($(this).index() * .2) + 1.2;
	$(this).css({
		opacity:'1',
		transform:'translateY(0)',
		transitionDuration:idx + 's'
	});
	});

	$('body *').each(function(){
		if($(this).offset().top > $(window).height() * .65){
			if($(this).hasClass('left')){
				$(this).css({
					opacity:'0',
					transform:'translateX(-150px)'
				});
			}else if($(this).hasClass('right')){
				$(this).css({
					opacity:'0',
					transform:'translateX(150px)'
				});
			}else if($(this).hasClass('move')){
				$(this).css({
					opacity:'0',
					transform:'translateY(150px)'
				});
			}
		}
	});
        
	$(window).scroll(function() {
		var st = $(window).scrollTop() + 800;

		$('.page-section').each(function(i) {
				var $this = $(this);
				var my_st = $this.offset().top
				if (my_st <= st) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
	}).scroll();
	
	
	$(window).scroll(function(){
			var st = $(window).scrollTop();
			var bh = $(window).height();

			$('.move.left').each(function(){
					var $this = $(this);
					var my_st = $this.offset().top - (bh * 0.8);

					if(st > my_st){
							$this.addClass('active');
					}
			});

			$('.move.right').each(function(){
					var $this = $(this);
					var my_st = $this.offset().top - (bh * 0.8);

					if(st > my_st){
							$this.addClass('active');
					}
			});
			$('.move').each(function(){
					var $this = $(this);
					var my_st = $this.offset().top - (bh * 0.8);

					if(st > my_st){
							$this.addClass('active');
					}
			});
	});

	$('#goBrand').click(function(){
		$('#mainPage').addClass('move_left');
		$('#brandPage').addClass('move_left');
	})
	$('#goMain').click(function(){
		$('#mainPage').removeClass('move_left');
		$('#brandPage').removeClass('move_left');
	});

	var scrollTop = $(".scrollTop");
        
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});



