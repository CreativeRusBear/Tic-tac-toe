for (var i=0; i<9; i++) {
 	document.getElementById('mainBlock').innerHTML+='<div class="block"></div>';
}

var firstPlayer=prompt("Введите имя первого ирока","1-ый игрок" );
var secondPlayer=prompt("Введите имя второго игрока", "2-ой игрок");

var turn=0;

document.getElementById('mainBlock').onclick = function (event){
 	console.log(event);
 	if (event.target.className=='block'){
 		if (turn%2==0){
 			event.target.innerHTML='X';
 		}else{
 			event.target.innerHTML='O';
 		}
 		turn++;
 		checkWinner();
 	}
 	function checkWinner(){
 		var allElementsInMainBlock= document.getElementsByClassName('block');
 		console.log(allElementsInMainBlock);
 		if ((allElementsInMainBlock[0].innerHTML=='X' && allElementsInMainBlock[1].innerHTML=='X' && allElementsInMainBlock[2].innerHTML=='X') || 
 			(allElementsInMainBlock[3].innerHTML=='X' && allElementsInMainBlock[4].innerHTML=='X' && allElementsInMainBlock[5].innerHTML=='X') || 
 			(allElementsInMainBlock[6].innerHTML=='X' && allElementsInMainBlock[7].innerHTML=='X' && allElementsInMainBlock[8].innerHTML=='X') ||
 			(allElementsInMainBlock[0].innerHTML=='X' && allElementsInMainBlock[3].innerHTML=='X' && allElementsInMainBlock[6].innerHTML=='X') ||
 			(allElementsInMainBlock[1].innerHTML=='X' && allElementsInMainBlock[4].innerHTML=='X' && allElementsInMainBlock[7].innerHTML=='X') ||
 			(allElementsInMainBlock[2].innerHTML=='X' && allElementsInMainBlock[5].innerHTML=='X' && allElementsInMainBlock[8].innerHTML=='X') ||
 			(allElementsInMainBlock[0].innerHTML=='X' && allElementsInMainBlock[4].innerHTML=='X' && allElementsInMainBlock[8].innerHTML=='X') ||
 			(allElementsInMainBlock[2].innerHTML=='X' && allElementsInMainBlock[4].innerHTML=='X' && allElementsInMainBlock[6].innerHTML=='X')){
 			alert('В этой борьбе победил '+firstPlayer+'. Поздравляю!');
 		}else if ((allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[1].innerHTML=='O' && allElementsInMainBlock[2].innerHTML=='O') || 
 				  (allElementsInMainBlock[3].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[5].innerHTML=='O') || 
 				  (allElementsInMainBlock[6].innerHTML=='O' && allElementsInMainBlock[7].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
 			      (allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[3].innerHTML=='O' && allElementsInMainBlock[6].innerHTML=='O') ||
 			      (allElementsInMainBlock[1].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[7].innerHTML=='O') ||
 			      (allElementsInMainBlock[2].innerHTML=='O' && allElementsInMainBlock[5].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
 			      (allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
 			      (allElementsInMainBlock[2].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[6].innerHTML=='O')){
 			alert('В этой борьбе победил '+secondPlayer+'. Поздравляю!');
 		}else{
  			if (allElementsInMainBlock[0].innerHTML!=0 && allElementsInMainBlock[1].innerHTML!=0 && allElementsInMainBlock[2].innerHTML!=0 && 
 			    allElementsInMainBlock[3].innerHTML!=0 && allElementsInMainBlock[4].innerHTML!=0 && allElementsInMainBlock[5].innerHTML!=0 &&
 				allElementsInMainBlock[6].innerHTML!=0 && allElementsInMainBlock[7].innerHTML!=0 && allElementsInMainBlock[8].innerHTML!=0){
  				alert('Ничья!');
  			}
  		}

 	}
}

//012
//345
//678