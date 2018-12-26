var firstPlayer,secondPlayer;
firstPlayer=(async function getName () {
    const {value: name} = await swal({
        title: 'Введите имя первого игрока',
        input: 'text',
        inputPlaceholder: 'Первый игрок',
        showCancelButton: false,
        inputValidator: (value) => {
            return !value && 'Ошибка! Введите имя первого игрока и повторите попытку!'
        }
    })
    if (name) {
        firstPlayer=name;
        secondPlayer=(async function getName () {
            const {value: name} = await swal({
                title: 'Введите имя второго игрока',
                input: 'text',
                inputPlaceholder: 'Второй игрок',
                showCancelButton: false,
                inputValidator: (value) => {
                    return !value && 'Ошибка! Введите имя второго игрока и повторите попытку!'
                }
            })

            if (name) {
                secondPlayer=name;
            }
        })()
    }
})()
for (var i=0; i<9; i++) {
    document.getElementById('mainBlock').innerHTML+='<div class="block"></div>';
}
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
            swal('Победа!','В этой борьбе победил '+firstPlayer+'! Поздравляю!','success');
        }else if ((allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[1].innerHTML=='O' && allElementsInMainBlock[2].innerHTML=='O') ||
            (allElementsInMainBlock[3].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[5].innerHTML=='O') ||
            (allElementsInMainBlock[6].innerHTML=='O' && allElementsInMainBlock[7].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
            (allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[3].innerHTML=='O' && allElementsInMainBlock[6].innerHTML=='O') ||
            (allElementsInMainBlock[1].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[7].innerHTML=='O') ||
            (allElementsInMainBlock[2].innerHTML=='O' && allElementsInMainBlock[5].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
            (allElementsInMainBlock[0].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[8].innerHTML=='O') ||
            (allElementsInMainBlock[2].innerHTML=='O' && allElementsInMainBlock[4].innerHTML=='O' && allElementsInMainBlock[6].innerHTML=='O')){
            swal('Победа!','В этой борьбе победил '+secondPlayer+'! Поздравляю!','success');
        }else{
            if (allElementsInMainBlock[0].innerHTML!=0 && allElementsInMainBlock[1].innerHTML!=0 && allElementsInMainBlock[2].innerHTML!=0 &&
                allElementsInMainBlock[3].innerHTML!=0 && allElementsInMainBlock[4].innerHTML!=0 && allElementsInMainBlock[5].innerHTML!=0 &&
                allElementsInMainBlock[6].innerHTML!=0 && allElementsInMainBlock[7].innerHTML!=0 && allElementsInMainBlock[8].innerHTML!=0){
                swal('Ничья!',firstPlayer+' и '+secondPlayer+', вы сыграли в ничью, неплохо','warning');
            }
        }
    }
}