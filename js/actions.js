console.log("ready");

// flex-direction

$('.flex-direction > .control-panel > .btn.row').on('click', function(){
	// console.log('clicked');
	$('.container-1').css('flex-direction', 'row');
});

$('.flex-direction > .control-panel > .btn.row-reverse').on('click', function(){
	// console.log('clicked');
	$('.container-1').css('flex-direction', 'row-reverse');
});

$('.flex-direction > .control-panel > .btn.column').on('click', function(){
	// console.log('clicked');
	$('.container-1').css('flex-direction', 'column');
});

$('.flex-direction > .control-panel > .btn.column-reverse').on('click', function(){
	// console.log('clicked');
	$('.container-1').css('flex-direction', 'column-reverse');
});

// flex-wrap 

$('.flex-wrap > .control-panel > .btn.nowrap').on('click', function(){
	// console.log('clicked');
	$('.container-2').css('flex-wrap', 'nowrap');
});

$('.flex-wrap > .control-panel > .btn.wrap').on('click', function(){
	// console.log('clicked');
	$('.container-2').css('flex-wrap', 'wrap');
});

$('.flex-wrap > .control-panel > .btn.wrap-reverse').on('click', function(){
	// console.log('clicked');
	$('.container-2').css('flex-wrap', 'wrap-reverse');
});

// justify-content

$('.justify-content > .control-panel > .btn.flex-start').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'flex-start');
});

$('.justify-content > .control-panel > .btn.flex-end').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'flex-end');
});

$('.justify-content > .control-panel > .btn.center').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'center');
});

$('.justify-content > .control-panel > .btn.space-between').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'space-between');
});

$('.justify-content > .control-panel > .btn.space-around').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'space-around');
});

$('.justify-content > .control-panel > .btn.space-evenly').on('click', function(){
	console.log('clicked');
	$('.container-3').css('justify-content', 'space-evenly');
});