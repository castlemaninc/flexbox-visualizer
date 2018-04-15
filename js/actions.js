console.log("ready");

$('.flex-direction > .control-panel > .btn.row').on('click', function(){
	console.log('clicked');
	$('.container-1').css('flex-direction', 'row');
});

$('.flex-direction > .control-panel > .btn.row-reverse').on('click', function(){
	console.log('clicked');
	$('.container-1').css('flex-direction', 'row-reverse');
});

$('.flex-direction > .control-panel > .btn.column').on('click', function(){
	console.log('clicked');
	$('.container-1').css('flex-direction', 'column');
});

$('.flex-direction > .control-panel > .btn.column-reverse').on('click', function(){
	console.log('clicked');
	$('.container-1').css('flex-direction', 'column-reverse');
});

	

