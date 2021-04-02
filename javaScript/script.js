$(document).ready(function(){
    $("#imgMenu").click(function(){
      if($(this).attr("src") == "../img/menu/menu-open.svg") 
        $(this).attr("src","../img/menu/menu.svg");
      else
        $(this).attr("src","../img/menu/menu-open.svg");
    });
  });