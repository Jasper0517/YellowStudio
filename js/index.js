const vm = new Vue({
  el: "#section_works",
  data:{
    workdata: []
  },
  mounted(){
    let obj = this;
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        obj.workdata = JSON.parse(res);
      }
    });
  }
});

$(window).scroll(function(e){
  if($(window).scrollTop() > 0){
    $("nav,.explore").addClass("at_top");
  }else{
    $("nav,.explore").removeClass("at_top");
  }
});

$(window).mousemove(function(e){
  let x = e.pageX;
  let y = e.pageY;
  
  let about_x = x - $('#section_about').offset().left
  let about_y = y - $('#section_about').offset().top
  
  $('.mountain').css('transform','translateX(' + (x / -20 + 50) + 'px)')
  
  $('.r1text').css('transform','translateX(' + (about_y / -5) + 'px)')
  $('.r2text').css('transform','translateX(' + (about_y / -7) + 'px)')
  $('.r3text').css('transform','translateX(' + (about_y / -9) + 'px)')
  
    $('.tri1').css('transform','translateX(' + (about_x / -5) + 'px)')
    $('.tri2').css('transform','translateX(' + (about_x / -7) + 'px)')
    $('.tri3').css('transform','translateX(' + (about_x / -9) + 'px)')
    $('.tri4').css('transform','translateX(' + (about_x / -11) + 'px)')
    $('.tri5').css('transform','translateX(' + (about_x / -13) + 'px)')
  
  
  
  //cat_look
  let cat_left = $('#cat').offset().left;
  let cat_top = $('#cat').offset().top;
  let top = $('#section_about').offset().top;
  let url = 'https://awiclass.monoame.com/catpic/';

  
  if((y - top) < 0 || ((y - top) > $("#section_about").outerHeight())){
    $('#cross').css('opacity',0)
  }else{
    $('#cross').css('opacity',1)
  }
  
  $('#cross').css('left',x+'px');
  $('#cross').css('top',y-top+'px');
  
  if(y - top > 0 ){
    if((x - (200 / 2)) < cat_left){
      $('#cat').attr('src',url + 'cat_left.png')
    }
    if((x - (200 / 2)) > cat_left){
      $('#cat').attr('src',url + 'cat_right.png')
    }
    if((x - (200 / 2)) < cat_left && (y - cat_top) < 0){
      $('#cat').attr('src',url + 'cat_lefttop.png')
    }
    if((x - (200 / 2)) > cat_left && (y - cat_top) < 0){
      $('#cat').attr('src',url + 'cat_righttop.png')
    }
    if((x - cat_left) >= 0 && (x - cat_left) <= 200){
      $('#cat').attr('src',url + 'cat_top.png')
    }
  }
  
  
  //cat_up
  
  if(Math.abs((x - $('#cat_blue').offset().left) - 
              $('#cat_blue').width()/2) < 50){
    $('#cat_blue').css('bottom','0px');
  }else{
    $('#cat_blue').css('bottom','-50px');
  }
  if(Math.abs((x - $('#cat_grey').offset().left) - 
              $('#cat_grey').width()/2) < 50){
    $('#cat_grey').css('bottom','0px');
  }else{
    $('#cat_grey').css('bottom','-50px');
  }
  if(Math.abs((x - $('#cat_yellow').offset().left) - 
              $('#cat_yellow').width()/2) < 50){
    $('#cat_yellow').css('bottom','0px');
  }else{
    $('#cat_yellow').css('bottom','-50px');
  }
});


$(document).on('click','a',function(e){
  e.preventDefault()
  let target = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
});