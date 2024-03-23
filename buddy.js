position = 0;
forward = true;
loops = 1000;
loopTotal = 0;
session = 'farts';

function boosh(){
	let buddy = "t('_'t)";
	let size = 100;
	let rightSize = size - position;
	let leftSize = position - Math.floor(buddy.length/2);


	let output = '';
	let left = '';
	let right = '';

	forward ? position++ : position--;
	
	if(position >= size){
		forward = false;
	}
	if(position <= 0){
		forward = true;
	}

	loopTotal++;

	if(loopTotal > loops){
		clearInterval(session);
	}


	//make left
	for(let j = 0; j <= leftSize; j++){
		left += ' ';
	}

	//make right
	for(let j = 0; j < rightSize; j++){
		right += ' ';
	}

	output = left + buddy + right;
	console.clear();
	console.log('');console.log('');console.log('');
	console.log(output);
}

session = setInterval(boosh,30);
