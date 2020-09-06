// https://www.w3schools.com/howto/howto_js_dropdown.asp
// class="dropdown-content" 에게 class="btn_toggle" 을 추가/삭제 해주는 기능


function btnDropdown(){ 
  document.querySelector('.dropdown-content').classList.toggle('btn_toggle');
}

function radioBtnToggle(t){
  while(true){
    if(t.tagName === 'A'){
      var c = t.children;
      var arr = []; // 자식요소 배열
      var stopLoop = false;

      while(true){
        if(stopLoop) break;
        for(var i=0; i<c.length; i++){
          if(c[i].tagName === 'I'){
            var radioImg = document.querySelectorAll('.dropdown-content .icon-ok-circled');
            for(var x=0; x<radioImg.length; x++){
                radioImg[x].style.display = 'none';
            }

            c[i].style.display = 'block';
            stopLoop = true;
            break;
          }
          else{
            var e = c[i].children;
            for(var n=0; n<e.length; n++){
              arr.push(e[n]);
            }
          }
        }
        c = arr; //자식 요소 배열을 c에 담아서 다시 for문으로 돌려줌
        arr = []; //자식 요소 배열 초기화
      }
      break;
    }
    else{
      t = t.parentNode;
    }
  }
}

window.addEventListener("click", function(event){
  var originTarget = event.target;
  var t = event.target;
  while(true){
    if( t.tagName === 'HTML'){
      if( event.target.className === 'dropbtn' ){ // 수정
        break;
      }
      var dropdowns = document.querySelector('.dropdown-content');
      var cList = dropdowns.classList;
      if(cList[1] == 'btn_toggle'){
        btnDropdown();
      }
      break;
    }
    if( t.classList.contains('dropdown-content') ){
      radioBtnToggle(originTarget);
      break;
    }
    else{
      t = t.parentNode;
    }
  }
});
