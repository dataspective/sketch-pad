var color = 0,
 	monochrome = 1;


$(document).ready(function(){
	createNew();
	button();
});

function promptCommand(){
	cells = prompt('Size grid (hint: 960 = 960 x 960 grid):', '960'),
 	time  = prompt('Time sketch fades (in seconds)', '20') * 1000;
};

function createSketchPad(cells, time){
	cells = cells * 2;
	i    = 0;
	$div = "<div class='style newDiv'></div>";
	while(i < cells){
		$("#gridWrap").append($div);
		i++;
	}
	if(color ===  1){
		$('.newDiv').mouseenter(hoverChangeColor);
	} else if (monochrome === 1){
		$('.newDiv').mouseenter(hoverChange);
	};
};

function createNew(){
	promptCommand();
	createSketchPad(cells, time);
}

function hoverChangeColor(){
	var rand = '#' + (0x000000 + (Math.random()) * 0xffffff);
		$(this).animate({backgroundColor: rand}, 'slow').mouseleave(function(){
			$(this).animate({backgroundColor: '#E6E6E6'}, time);
		});
};

function hoverChange(){
		$(this).animate({backgroundColor: 'black'}, 'slow').mouseleave(function(){
			$(this).animate({backgroundColor: 'white'}, time);
		});
};

function button(){
	$('.button').click(function(){
		$('.newDiv').remove();
		monochrome = 0;
		color = 1;
 		createNew();
	});
	$('.button2').click(function(){
		$('.newDiv').remove();
		color = 0;
		monochrome = 1;
 		createNew();
	});		
};






