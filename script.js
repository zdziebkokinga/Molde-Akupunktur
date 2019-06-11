
//instagram 
var request = new XMLHttpRequest();
			request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=8036795041.1677ed0.5e63d1c19208462e842e91012549655d&count=3', true);

			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
                  
                  
			    var data = JSON.parse(request.responseText);
			    for (var i=0;i < data.data.length;i++) {
			    	var container = document.getElementById('insta-feed');
			    	var imgURL = data.data[i].images.standard_resolution.url;
			    	console.log(imgURL);
					var div = document.createElement('div');
			        div.setAttribute('class','instapic');
                    
                    container.appendChild(div);
                    
                    
                    var imgLink = document.createElement("a");
                    
                    imgLink.setAttribute("href", "https://www.instagram.com/developer_kingazdziebko/");
                    
                    div.appendChild(imgLink);
                    
                
			        var img = document.createElement('img');
			        img.setAttribute('src',imgURL);
                    img.setAttribute("class", "instapicGrid");
                    
			        imgLink.appendChild(img);
                       
			    }

			    console.log(data);
			  } else {
			  }
			};
			request.onerror = function() {

			};
			request.send();





// navigation         
let mobileNav = document.querySelector(".navigation_nav");
let displayBar = document.querySelector("#navigation_bar");

let bar = document.querySelector("#navigation_bar_close");
        
    displayBar.addEventListener('click', () => {
        if (mobileNav.style.display = "none"){
            mobileNav.style.display = "block";
            displayBar.style.display = "none";
            bar.style.display = 'block';
            }
        });

    bar.addEventListener('click', () =>{
        if(mobileNav.style.display  = 'block'){
            mobileNav.style.display = 'none';
            bar.style.display = 'none';
            displayBar.style.display = 'block';
            }
    });


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









