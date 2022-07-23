let rodada = 1;
let matrizJogo = Array(3); 

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;	
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;	
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;	
matrizJogo['c'][3] = 0;	


$(document).ready(function(){
	$("#btnIniciarJogo").click( function(){

		if($("#apelido1").val() == ""){
			alert("Digite um apelido para o jogador 1");
			return false;
		}

		if($("#apelido2").val() == ""){
			alert("Digite um apelido para o jogador 2");
			return false;
		} 

		$("#jogador1").html($("#apelido1").val());
		$("#jogador2").html($("#apelido2").val());

		$("#paginaInicial").hide();
		$("#palcoJogo").show();		
	});

	$(".jogada").click( function(){

		let idClicado = this.id;
		$("#"+idClicado).off();
		jogada(idClicado);	
	});

	function jogada(id){
		let icone = '';
		let ponto = 0;

		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		} else{
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}

		rodada++;

		$("#"+id).css("background",icone);

		let linhaColuna = id.split('-');

		matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

		verificaCombinacao();

	}

	function verificaCombinacao(){

		let pontos = 0;
		for(let i = 1; i <= 3; i++){
			pontos = pontos + matrizJogo['a'][i];
		}

		ganhador(pontos);

		pontos = 0;
		for(let i = 1; i <= 3; i++){
			pontos = pontos + matrizJogo['b'][i];
		}

		ganhador(pontos);

		pontos = 0;
		for(let i = 1; i <= 3; i++){
			pontos = pontos + matrizJogo['c'][i];
		}

		ganhador(pontos);

		for(let l = 1; l <= 3; l++){
			pontos = 0;
			pontos += matrizJogo['a'][l];
			pontos += matrizJogo['b'][l];
			pontos += matrizJogo['c'][l];

			ganhador(pontos);
		}

		pontos = 0;
		pontos += matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
		ganhador(pontos);

		pontos = 0;
		pontos += matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];
		ganhador(pontos);

	}

	function ganhador(pontos){

		if(pontos == -3){
			let jogador1 = $("#apelido1").val();
			alert(jogador1+' é o vencedor');
			$(".jogada").off();
		} else if(pontos == 3){
			let jogador2 = $("#apelido2").val();
			alert(jogador2+' é o vencedor');
			$(".jogada").off();
		}
	}

	
});