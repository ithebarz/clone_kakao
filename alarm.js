function alarm_toggle(img){
  var a = document.getElementById('a_info');

  // when alarm is on
  if( a.title === 'alarm off' ){
    img.setAttribute("src","icon/alarm_off.png");
    a.setAttribute("title", "alarm on");
  }
  // when alarm is off
  else{
    img.setAttribute("src",'icon/alarm_on.png');
    a.setAttribute("title", "alarm off");
  }
}
