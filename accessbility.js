$(document).ready(function(){
  $(".invisible-content").hide();
  $(document).on('click',"#btn-accessibility",function(){
    var moreLessButton=$(".invisible-content").is(":visible")?'Show More':'Show Less';
    $(this).text(moreLessButton);
    $(this).parent(".box-accessibility").find(".invisible-content").toggle();
    $(this).parent(".box-accessibility").find(".visible-content").toggle();
  });
});