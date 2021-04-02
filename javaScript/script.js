$(document).ready(function(){
    $("#minhaTabela").hide();
    $("#newS").hide();
    $("#imgMenu").click(function(){
      if($(this).attr("src") == "../img/menu/menu-open.svg") 
        $(this).attr("src","../img/menu/menu.svg");
      else
        $(this).attr("src","../img/menu/menu-open.svg");
    });
  });
function consultaCep() {
  let cep = document.getElementById("InputCep").value;
  let url = "https://viacep.com.br/ws/" + cep + "/json/";
  $.ajax({
    url: url,
    type: "GET",
    success: function(response){
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#localidade").html(`${response.localidade}/${response.uf}`);
      $("#cep").html(response.cep);
      $("#meuForm").hide();
      $("#minhaTabela").show();
      $("#newS").show();
    },
  });
};
function newSearch(){
  $("#meuForm").show();
  $("#meuForm input").val("");
  $("#minhaTabela").hide();
  $("#newS").hide();
}