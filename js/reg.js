//collect data from the form
var $reg=new Object();

$(document).ready(function(){
  $("#next").click(function(){
	$reg.name= $("#name").val();
    $reg.email=$("#email").val();
    $reg.pwd=$("#pwd").val();
    $reg.univ=$("#univ").val();
    $reg.col=$("#col").val();
    $reg.sex=$('input[name=sex]:checked', '#reg').val();
  });
  $('#degree ul').children('li').on('click', function () {
    $reg.degree= $(this).attr('data-name');
  });
  $('#pucourse ul').children('li').on('click', function () {
    $reg.stream= $(this).attr('data-name');
  });
  $('#arts ul').children('li').on('click', function () {
	 $reg.course= $(this).attr('data-name');
	  });
  $('#science ul').children('li').on('click', function () {
	  $reg.course= $(this).attr('data-name');
	  });
  $('#commerce ul').children('li').on('click', function () {
	  $reg.course= $(this).attr('data-name');
	  });
  $('#enggcourse ul').children('li').on('click', function () {
	  $reg.course=$(this).attr('data-name');
	  });
  
  //post data to server
  $("#yes").click(function() {
	  
	  var obj = {id:$reg.id,name: $reg.name, sex:$reg.sex,email:$reg.email,pwd:$reg.pwd,univ:$reg.univ,col:$reg.col,degree:$reg.degree,stream:$reg.stream,course:$reg.course };
	  var str = $.param(obj);
	  $.ajax({
          type: 'GET',
          data: str,
          //change the url for your project
          url: 'http://www.goalopportunities.com/backend/remote.php?'+str,
          success: function(data){
              console.log(data);
          },
          error: function(){
              console.log(data);
              alert('Please try again later');
          }
      });
	}); 
});
