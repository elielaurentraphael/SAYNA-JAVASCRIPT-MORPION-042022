var grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
var arr1 = ['item1', 'item2', 'item3'];
var arr2 = ['item4', 'item5', 'item6'];
var arr3 = ['item7', 'item8', 'item9'];
var arr4 = ['item1', 'item4', 'item7'];
var arr5 = ['item2', 'item5', 'item8'];
var arr6 = ['item3', 'item6', 'item9'];
var arr7 = ['item1', 'item5', 'item9'];
var arr8 = ['item3', 'item5', 'item7'];
var success;
var gameOver = false;
var arr = [];
var clicked = 0;
var choice = 9;
var playerScore = 0;
var cpuScore = 0;
var player = {
    name: 'player1',
    team: '',
    arr: []
};
var cpu = {
    name: 'computer',
    team: '',
    arr: []
}



$('.cpu-score').html(cpuScore);
$('.you-score').html(playerScore);



function findElement(check) {
    switch (true) {
        case success = arr1.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr1);
            setTimeout(on, 700, check.name);
            break;

        case success = arr2.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr2);
            setTimeout(on, 700, check.name);
            break;

        case success = arr3.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr3);
            setTimeout(on, 700, check.name);
            break;

        case success = arr4.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr4);
            setTimeout(on, 700, check.name);
            break;

        case success = arr5.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr5);
            setTimeout(on, 700, check.name);
            break;

        case success = arr6.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr6);
            setTimeout(on, 700, check.name);
            break;

        case success = arr7.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr7);
            setTimeout(on, 700, check.name);
            break;

        case success = arr8.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr8);
            setTimeout(on, 700, check.name);
            break;

    }

}

success;



function choiseCase(clicked_id) {
    if (clicked % 2 == 0) {
        $('#' + clicked_id).html('<p class = "animated bounceIn" style = "font-size:2em;color:#4286f4;">' + player.team + '</p>')
        grid.splice(grid.indexOf(clicked_id), 1);
        player.arr.push(clicked_id);
        if (player.arr.length >= 3) {
            findElement(player);
        }
        if (choice === 0) {
            finished();
        }
        $('.player-turn').css({ "border-bottom": "none" })
        $('.cpu-turn').css({ "border-bottom": "3px solid #e29126" })
        $('#' + clicked_id).prop("disabled", true);
        setTimeout(computer, 1300)
    }

    choice -= 1;
    clicked++;
}

function computer() {
    var ran = Math.floor(Math.random() * choice);
    var res = grid[ran];
    $('#' + res).html('<p class = "animated bounceIn" style = "font-size:2em;color:#e29126;">' + cpu.team + '</p>')
    cpu.arr.push(grid[ran]);
    grid.splice(grid.indexOf(res), 1);
    if (cpu.arr >= 3) {
        findElement(cpu);
    }
    if (choice === 0) {
        finished();
    }
    $('#' + res).prop("disabled", true);
    $('.cpu-turn').css({ "border-bottom": "none" })
    $('.player-turn').css({ "border-bottom": "3px solid #e29126" })


    choice -= 1;
    clicked++;
}


function reset() {
    $('.grid-item').empty();
    player.arr = [];
    cpu.arr = [];
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    choice = 9;
    gameOver = false;
    cpuScore = 0;
    playerScore = 0;
    $('.cpu-score').html(cpuScore);
    $('.you-score').html(playerScore);
}


function winning(valeur) {
    if (clicked % 2 == 0) {
        $('#' + valeur[0] + ' , #' + valeur[1] + ' , #' + valeur[2]).html('<p class = "animated bounceIn" style="font-size:2em;color:#3fcc64;">' + player.team + '</p>');
        playerScore++;
        $('.you-score').html(playerScore);
    } else {
        $('#' + valeur[0] + ' , #' + valeur[1] + ' , #' + valeur[2]).html('<p class = "animated bounceIn" style="font-size:2em;color:#3fcc64;">' + cpu.team + '</p>');
        cpuScore++;
        $('.cpu-score').html(cpuScore);
    }
    var item = document.getElementsByClassName('grid-item');
    for (let i = 0; i < item.length; i++) {
        item[i].onclick(function() {
            item[i].prop("disabled", false);
        });
    }
}


function teamchoice(clicked_id) {
    $('.layer').removeClass('animated');
    $('.layer').fadeOut(400);
    player.team = document.getElementById(clicked_id).innerHTML;
    if (player.team === 'X') {
        cpu.team = 'O';
    } else {
        cpu.team = 'X';
    }
}


function winnershow() {
    $('.layer2').removeClass('animated');
    $('.layer2').fadeOut(400);
    $('.grid-item').empty();
    player.arr = [];
    cpu.arr = [];
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    choice = 9;
    gameOver = false;
}


function matchnul() {
    $('.layer3').removeClass('animated');
    $('.layer3').fadeOut(400);
    $('.grid-item').empty();
    player.arr = [];
    cpu.arr = [];
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    choice = 9;
    gameOver = false;
}




function on(val) {
    $('.layer2').show();
    $('.winner-name').html(val + ' wins!');
}

function on3() {
    $('.layer3').removeClass('animated');
    $('.layer3').show();
}

function finished() {
    if (choice === 0 && gameOver === false) {
        on3();
    }
}