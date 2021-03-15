var p1 = prompt("Jogador 1 digite seu nome")
$('#blue').html("<span id='blue'>"+p1+"</span>")
var p2 = prompt("Jogador 2 digite seu nome")
$('#red').html("<span id='red'>"+p2+"</span>")

$("#turnB").hide();
//  true: A
//  false:B
turn = true;

count = new Array(7).fill(1)

$("table td").click(function(e) {
               var rowIndex = $(this).parent().index('tr');
               var tdIndex = $(this).index('tr:eq(' + rowIndex + ') td');
               if (turn) {
                 $("#turnB").show();
                 $("#turnA").hide();
                 $("table tr:eq("+(5-count[tdIndex]+") td:eq("+(tdIndex)+")")).addClass('blue');

               }else {
                 $("#turnA").show();
                 $("#turnB").hide();
                 var pos = $("table tr:eq("+(5-count[tdIndex]+") td:eq("+(tdIndex)+")"));
                 if (pos.css("background-color")!='rgb(90, 201, 232)') pos.addClass('red');
               }
               turn=!turn;
               count[tdIndex]++;
               winner()
});

function winner() {
  for (var i=0; i < 5;i++){
    for (var j=0; j < 7; j++){
      var cor = $("table tr:eq("+i+") td:eq("+(j)+")").css("background-color");
      if(cor != 'rgb(128, 128, 128)'){
        console.log(cor);
        if(cor == $("table tr:eq("+i+") td:eq("+(j+1)+")").css("background-color") &&
           cor == $("table tr:eq("+i+") td:eq("+(j+2)+")").css("background-color") &&
           cor == $("table tr:eq("+i+") td:eq("+(j+3)+")").css("background-color")){
             msgWinner();
             break;
          }
          if(cor == $("table tr:eq("+(i+1)+") td:eq("+j+")").css("background-color") &&
            cor == $("table tr:eq("+(i+2)+") td:eq("+j+")").css("background-color") &&
            cor == $("table tr:eq("+(i+3)+") td:eq("+j+")").css("background-color")){
              msgWinner();
              break;
          }
      }
    }
  }
}

function checkHor(num) {
  return num > 4;
}

function msgWinner() {
  if (!turn) {
    alert(p1+" é campeão");
  }
  else {
    alert(p2+" é campeão");
  }
  location.reload();
}
