$(function(){
			$('button').click(function() {
				$('#popup-container').css('display' , 'flex')
			})
			$('#popup-container').click(function (e) {
				if(this === e.target) {
				$('#popup-container').css('display' , 'none')
				}
			})
$("#phone").mask("+7 (999) 999-99-99");			
		})