(function($){

	$.fn.testPlug = function(options){ //fn - позволяет запускать нашу функцию, как нативную функцию jQuery

		var options = $.extend({ // extend - совмещает 2 объекта. принимает 2 параметра ( 1 - текущий ( дефолтный ) объект, 2 - то, с чем нужно совместить/добавить )
			speed: 300
		}, options);
		
		$(window).scroll(function () {
			var TopScr=$(this).scrollTop();
		if (TopScr>300) {
			$('.toTop').show();
		}else {
			$('.toTop').hide();
		};
			
		});

		var make = function(){

			$(this).click(function(e){
				e.preventDefault();
				var id = $(this).attr('href');
				var offset = $(id).offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, options.speed);
			});

		};

		return this.each(make) // this - возвращает то, к чему применяется функция testPlug ( см. index.html )
	}

}(jQuery))