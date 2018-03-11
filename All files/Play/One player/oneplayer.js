var Player=prompt('Введите ваше имя','Player');
var writeO;
for (var i=0; i<9; i++) {
	document.getElementById('mainBlock').innerHTML+='<div class="block" onclick="rectangleSquare('+i+')"></div>';	
}
var allElementsInMainBlock = new Array(9);
for (i=0; i<9; i++) {
	allElementsInMainBlock[i]=0;
}
var divElements=document.getElementsByClassName('block');
/*onclick*/
function rectangleSquare (value){
	if (allElementsInMainBlock[value]==0){
			writeX(value);
			allElementsInMainBlock[value]=1;
			console.log(allElementsInMainBlock);
			console.log(divElements);
			if (checkWinner()==true){
				alert('Ты выиграл! Поздравляю!');
			}else{
				/*checkNobody();*/
				computerSolution();
				checkNobody();
			}
	}	
}
/*написание 'X' в нужной ячейке */	
function writeX(value){
	for (var i=0; i<9; i++) {
		if (value==i){
		allElementsInMainBlock[value]='X';
		divElements[value].innerHTML=allElementsInMainBlock[value];
		}	
	}
}

/*проверка на победу*/
function checkWinner(){
	if ((allElementsInMainBlock[0]==allElementsInMainBlock[1] && allElementsInMainBlock[1]==allElementsInMainBlock[2] && allElementsInMainBlock[2]>0) || 
	    (allElementsInMainBlock[3]==allElementsInMainBlock[4] && allElementsInMainBlock[4]==allElementsInMainBlock[5] && allElementsInMainBlock[5]>0) ||
	    (allElementsInMainBlock[6]==allElementsInMainBlock[7] && allElementsInMainBlock[7]==allElementsInMainBlock[8] && allElementsInMainBlock[8]>0) || 
	    (allElementsInMainBlock[0]==allElementsInMainBlock[3] && allElementsInMainBlock[3]==allElementsInMainBlock[6] && allElementsInMainBlock[6]>0) || 
	    (allElementsInMainBlock[1]==allElementsInMainBlock[4] && allElementsInMainBlock[4]==allElementsInMainBlock[7] && allElementsInMainBlock[7]>0) || 
	    (allElementsInMainBlock[2]==allElementsInMainBlock[5] && allElementsInMainBlock[5]==allElementsInMainBlock[8] && allElementsInMainBlock[8]>0) ||
	    (allElementsInMainBlock[0]==allElementsInMainBlock[4] && allElementsInMainBlock[4]==allElementsInMainBlock[8] && allElementsInMainBlock[8]>0) ||
	    (allElementsInMainBlock[2]==allElementsInMainBlock[4] && allElementsInMainBlock[4]==allElementsInMainBlock[6] && allElementsInMainBlock[6]>0)){
		return true;
	}
}

/*проверка на ничью*/
function checkNobody() {
	checkForADraw=false;
	for (i=0; i<9; i++) {
		if (allElementsInMainBlock[i]==0){
			checkForADraw=true;
		}
	}
	if (checkForADraw==false){
		alert('Ничья');
	}
}

/*ход компьютера*/
function computerSolution() {
	for(i=0; i<9; i++){
		if (allElementsInMainBlock[i]==0){
			writeO=i; 
		}
	}
	for (i=0; i<3; i++) {
	  if (allElementsInMainBlock[0] == allElementsInMainBlock[1] && allElementsInMainBlock[2] == 0 && allElementsInMainBlock[0] == i) writeO = 2;
	  if (allElementsInMainBlock[0] == allElementsInMainBlock[2] && allElementsInMainBlock[1] == 0 && allElementsInMainBlock[0] == i) writeO = 1;
	  if (allElementsInMainBlock[1] == allElementsInMainBlock[2] && allElementsInMainBlock[0] == 0 && allElementsInMainBlock[2] == i) writeO = 0;
	  if (allElementsInMainBlock[3] == allElementsInMainBlock[4] && allElementsInMainBlock[5] == 0 && allElementsInMainBlock[3] == i) writeO = 5;
	  if (allElementsInMainBlock[3] == allElementsInMainBlock[5] && allElementsInMainBlock[4] == 0 && allElementsInMainBlock[3] == i) writeO = 4;
	  if (allElementsInMainBlock[4] == allElementsInMainBlock[5] && allElementsInMainBlock[3] == 0 && allElementsInMainBlock[5] == i) writeO = 3;
	  if (allElementsInMainBlock[6] == allElementsInMainBlock[7] && allElementsInMainBlock[8] == 0 && allElementsInMainBlock[6] == i) writeO = 8;
	  if (allElementsInMainBlock[6] == allElementsInMainBlock[8] && allElementsInMainBlock[7] == 0 && allElementsInMainBlock[6] == i) writeO = 7;
	  if (allElementsInMainBlock[7] == allElementsInMainBlock[8] && allElementsInMainBlock[6] == 0 && allElementsInMainBlock[8] == i) writeO = 6;

	  if (allElementsInMainBlock[6] == allElementsInMainBlock[3] && allElementsInMainBlock[0] == 0 && allElementsInMainBlock[6] == i) writeO = 0;
	  if (allElementsInMainBlock[6] == allElementsInMainBlock[0] && allElementsInMainBlock[3] == 0 && allElementsInMainBlock[6] == i) writeO = 3;
	  if (allElementsInMainBlock[3] == allElementsInMainBlock[0] && allElementsInMainBlock[6] == 0 && allElementsInMainBlock[3] == i) writeO = 6;
	  if (allElementsInMainBlock[7] == allElementsInMainBlock[4] && allElementsInMainBlock[1] == 0 && allElementsInMainBlock[7] == i) writeO = 1;
	  if (allElementsInMainBlock[7] == allElementsInMainBlock[1] && allElementsInMainBlock[4] == 0 && allElementsInMainBlock[7] == i) writeO = 4;
	  if (allElementsInMainBlock[4] == allElementsInMainBlock[1] && allElementsInMainBlock[7] == 0 && allElementsInMainBlock[4] == i) writeO = 7;
	  if (allElementsInMainBlock[8] == allElementsInMainBlock[5] && allElementsInMainBlock[2] == 0 && allElementsInMainBlock[8] == i) writeO = 2;
	  if (allElementsInMainBlock[8] == allElementsInMainBlock[2] && allElementsInMainBlock[5] == 0 && allElementsInMainBlock[8] == i) writeO = 5;
	  if (allElementsInMainBlock[5] == allElementsInMainBlock[2] && allElementsInMainBlock[8] == 0 && allElementsInMainBlock[5] == i) writeO = 8;

	  if (allElementsInMainBlock[6] == allElementsInMainBlock[4] && allElementsInMainBlock[2] == 0 && allElementsInMainBlock[6] == i) writeO = 2;
	  if (allElementsInMainBlock[6] == allElementsInMainBlock[2] && allElementsInMainBlock[4] == 0 && allElementsInMainBlock[6] == i) writeO = 4;
	  if (allElementsInMainBlock[4] == allElementsInMainBlock[2] && allElementsInMainBlock[6] == 0 && allElementsInMainBlock[4] == i) writeO = 6;
	  if (allElementsInMainBlock[0] == allElementsInMainBlock[4] && allElementsInMainBlock[8] == 0 && allElementsInMainBlock[0] == i) writeO = 8;
	  if (allElementsInMainBlock[0] == allElementsInMainBlock[8] && allElementsInMainBlock[4] == 0 && allElementsInMainBlock[0] == i) writeO = 4;
	  if (allElementsInMainBlock[4] == allElementsInMainBlock[8] && allElementsInMainBlock[0] == 0 && allElementsInMainBlock[4] == i) writeO = 0;
	}

		computerWrite(writeO);
		allElementsInMainBlock[writeO]=2;
		if (checkWinner()==true){
			alert('Победил компьютер!');
		}
	}
//}
/*запись 'O' в нужную ячейку*/
function computerWrite(value) {
	for (i=0; i<9; i++) {
		if (value==i){
			allElementsInMainBlock[value]='O';
			divElements[value].innerHTML=allElementsInMainBlock[value];
		}
	}
}