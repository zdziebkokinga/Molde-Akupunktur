
//dropdown 1
   let dropdown = document.getElementById('dropdown');
   
    let hint = document.getElementById('dropdown_content');
    
    let rotateup = document.querySelector("#fa_rotate_up");

    let rotatedown = document.querySelector("#fa_rotate_down");

dropdown.addEventListener('click', function(){
    
      if(hint.style.display == 'none'){        
        hint.style.display = 'block';
        rotateup.style.display = 'block';
        rotatedown.style.display = 'none';
     }
    
      else{
        hint.style.display = 'none';
        rotateup.style.display = 'none';
        rotatedown.style.display = 'block';
      }

    });



// dropdown 2
    let dropdown2 = document.getElementById('dropdown2');
    let hint2 = document.getElementById('dropdown_content_2');
    
    let rotateup2 = document.querySelector("#fa_rotate_up_2");

    let rotatedown2 = document.querySelector("#fa_rotate_down_2");

dropdown2.addEventListener('click', function(){

      if(hint2.style.display == 'none'){
        hint2.style.display = 'block';
        rotateup2.style.display = 'block';
        rotatedown2.style.display = 'none';
      }
    
      else{
        hint2.style.display = 'none';
        rotateup2.style.display = 'none';
        rotatedown2.style.display = 'block';
      }

    });
