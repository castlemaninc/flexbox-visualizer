console.log("ready");

// flex-direction

$('.flex-direction > .control-panel > .btn.row').on('click', function(){	
	$('.container-1').css('flex-direction', 'row');
});

$('.flex-direction > .control-panel > .btn.row-reverse').on('click', function(){
	$('.container-1').css('flex-direction', 'row-reverse');
});

$('.flex-direction > .control-panel > .btn.column').on('click', function(){
	$('.container-1').css('flex-direction', 'column');
});

$('.flex-direction > .control-panel > .btn.column-reverse').on('click', function(){
	$('.container-1').css('flex-direction', 'column-reverse');
});

// flex-wrap 

$('.flex-wrap > .control-panel > .btn.nowrap').on('click', function(){
	$('.container-2').css('flex-wrap', 'nowrap');
});

$('.flex-wrap > .control-panel > .btn.wrap').on('click', function(){
	$('.container-2').css('flex-wrap', 'wrap');
});

$('.flex-wrap > .control-panel > .btn.wrap-reverse').on('click', function(){
	$('.container-2').css('flex-wrap', 'wrap-reverse');
});

// justify-content

$('.justify-content > .control-panel > .btn.flex-start').on('click', function(){
	$('.container-3').css('justify-content', 'flex-start');
});

$('.justify-content > .control-panel > .btn.flex-end').on('click', function(){
	$('.container-3').css('justify-content', 'flex-end');
});

$('.justify-content > .control-panel > .btn.center').on('click', function(){
	$('.container-3').css('justify-content', 'center');
});

$('.justify-content > .control-panel > .btn.space-between').on('click', function(){
	$('.container-3').css('justify-content', 'space-between');
});

$('.justify-content > .control-panel > .btn.space-around').on('click', function(){
	$('.container-3').css('justify-content', 'space-around');
});

$('.justify-content > .control-panel > .btn.space-evenly').on('click', function(){
	$('.container-3').css('justify-content', 'space-evenly');
});

// align-items 

$('.align-items > .control-panel > .btn.flex-start').on('click', function(){
	$('.container-4').css('align-items', 'flex-start');
});

$('.align-items > .control-panel > .btn.flex-end').on('click', function(){
	$('.container-4').css('align-items', 'flex-end');
});

$('.align-items > .control-panel > .btn.center').on('click', function(){
	$('.container-4').css('align-items', 'center');
});

$('.align-items > .control-panel > .btn.stretch').on('click', function(){
	$('.container-4').css('align-items', 'stretch');
});

$('.align-items > .control-panel > .btn.baseline').on('click', function(){
	$('.container-4').css('align-items', 'baseline');
});

// align-content

$('.align-content > .control-panel > .btn.flex-start').on('click', function(){
	$('.container-5').css('align-content', 'flex-start');
});

$('.align-content > .control-panel > .btn.flex-end').on('click', function(){
	$('.container-5').css('align-content', 'flex-end');
});

$('.align-content > .control-panel > .btn.center').on('click', function(){
	$('.container-5').css('align-content', 'center');
});

$('.align-content > .control-panel > .btn.stretch').on('click', function(){
	$('.container-5').css('align-content', 'stretch');
});

$('.align-content > .control-panel > .btn.space-between').on('click', function(){
	$('.container-5').css('align-content', 'space-between');
});

$('.align-content > .control-panel > .btn.space-around').on('click', function(){
	$('.container-5').css('align-content', 'space-around');
});