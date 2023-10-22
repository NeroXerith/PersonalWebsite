			
			//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("avatar");
                objImage.style.position = "absolute";
                objImage.style.left = "45px";
                objImage.style.top = "550px";
                objImage.style.height = "100px";
                objImage.style.width = "100px";
                

            }
            function getKeyAndMove(e) 
			{
                var key_code = e.which || e.keyCode;
                switch (key_code) {
					/** LEFT KEY **/
					case 37:
						objImage.style.left = parseInt(objImage.style.left) - 30 + 'px';
						break;
					/** RIGHT KEY **/
					case 39:
						objImage.style.left = parseInt(objImage.style.left) + 30 + 'px';
						break;
					/** UP KEY **/
					case 38:
						objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';
						break;
					/** DOWN KEY **/
					case 40:
						objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
						break;
                }
				
					/** RIGHT KEY **/
				if (event.keyCode == 39) 
					{
						document.getElementById("avatar").src="assets/MaleRight.gif";
					} 
					/** LEFT KEY **/
					else if (event.keyCode == 37)
						{
							document.getElementById("avatar").src="assets/MaleLeft.gif";
						} 
					/** UP KEY **/
					else if (event.keyCode == 38)
						{
							document.getElementById("avatar").src="assets/MaleUD.png";
						} 
					/** DOWN KEY **/
					else if (event.keyCode == 40)
						{
							document.getElementById("avatar").src="assets/MaleUD.png";
						}
				// Debounce				
				function debounce(callback, wait) 
				{
					let timeout;
					return (...args) => 
					{
						clearTimeout(timeout);
						timeout = setTimeout(function () { callback.apply(this, args); }, wait);
					};
				}
				var timeInterval = 0;
				
				window.addEventListener('keyup', debounce( () => 
				{
					 document.getElementById("avatar").src="assets/Male.png";
					 objImage.style.height = "100px";
					 objImage.style.width = "100px";
				}, timeInterval))

				// Avatar overlaps
				/** LEFT SIDE **/
				if (objImage.style.left == '-45px' && objImage.style.top > 0 + 'px')
					{
				objImage.style.left = parseInt(objImage.style.left) + 30 + 'px';		
					}
				/** RIGHT SIDE **/
				if (objImage.style.left == 1275 + 'px' &&  objImage.style.top > 0 + 'px' )
					{
				objImage.style.left = parseInt(objImage.style.left) - 30 + 'px';	
					}
				/** DOWN SIDE **/	
				if (objImage.style.top > 550 + 'px' && objImage.style.left > 0 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}	
				
				/** UPPER SIDE **/	
		
				//left
				if (objImage.style.top == 250 + 'px' && objImage.style.left == 105 + 'px' || objImage.style.top == 250 + 'px' && objImage.style.left <= 195 + 'px'  && objImage.style.left >= 135 + 'px'  || objImage.style.top == 250 + 'px' && objImage.style.left == 75 + 'px' ||  objImage.style.top == 280 + 'px' && objImage.style.left == '-15px' ||  objImage.style.top == 250 + 'px' && objImage.style.left == '45px') 
				{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}		
				if (objImage.style.top == 250 + 'px' && objImage.style.left <= 495 + 'px' && objImage.style.left >= 225 + 'px') 
				{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}
				//right
				if (objImage.style.top == 250 + 'px' && objImage.style.left >= 525 + 'px' && objImage.style.left <= 615 + 'px') 
				{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}
				if (objImage.style.top == 190 + 'px' && objImage.style.left >= 645 + 'px' || objImage.style.top == 190 + 'px' && objImage.style.left >= 1005 + 'px' || objImage.style.top == 220 + 'px' && objImage.style.left >= 1095 + 'px') 
				{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}
				
				
				/** OVERLAPS **/
			if (objImage.style.top < 490 +'px' && objImage.style.top > 340 +'px' &&  objImage.style.left >= '-15px' && objImage.style.left <= 75+'px' || objImage.style.top == 400 +'px' && objImage.style.left == 75 +'px')
				{
					document.getElementById("grass2").style.zIndex = -1;
					document.getElementById("tree").style.zIndex = -1;
					document.getElementById("rock1").style.zIndex = -1;
					
				} else {
					document.getElementById("grass2").style.zIndex = 1;
					document.getElementById("tree").style.zIndex = 1;
					document.getElementById("rock1").style.zIndex = 1;
					
				}
				// Fountain
			if (objImage.style.top == 370 +'px' && objImage.style.left == 615 +'px') 
			{
				objImage.style.left = "585px";
				objImage.style.top = "370";
			}
			if (objImage.style.top == 400 +'px' && objImage.style.left == 615 +'px') 
			{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
			}
			if (objImage.style.top == 400 +'px' && objImage.style.left == 645 +'px') 
			{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
			}
			if (objImage.style.top == 400 +'px' && objImage.style.left == 675 +'px') 
			{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
			}
			if (objImage.style.top == 370 +'px' && objImage.style.left == 645 +'px' || objImage.style.top == 370 +'px' && objImage.style.left == 675 +'px' ) 
			{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';
			}
			if (objImage.style.top == 400 +'px' && objImage.style.left == 705 +'px') 
			{
				objImage.style.left = "735px";
				objImage.style.top = "400";
			}
			if (objImage.style.top == 370 +'px' && objImage.style.left == 705 +'px') 
			{
				objImage.style.left = "735px";
				objImage.style.top = "370";
			}
			if (objImage.style.top == 430 +'px' && objImage.style.left == 675 +'px' ) 
			{
				document.getElementById("fountain").style.zIndex = -1;
			}
			if (objImage.style.top == 340 +'px' && objImage.style.left == 615 +'px' || objImage.style.top == 340 +'px' && objImage.style.left == 675 +'px' || objImage.style.top == 340 +'px' && objImage.style.left == 645 +'px' ) 
			{
				document.getElementById("fountain").style.zIndex = 2;
			} else {
				document.getElementById("fountain").style.zIndex = -1;
			}
				// House
			if(objImage.style.top == 280 +'px' && objImage.style.left == 225 +'px' || objImage.style.top == 310 +'px' && objImage.style.left == 225 +'px' ) {
				objImage.style.zIndex =-4;
			} else {
				objImage.style.zIndex =1;
			}
			if(objImage.style.top == 280 +'px' && objImage.style.left == 75 +'px' || objImage.style.top == 310 +'px' && objImage.style.left == 135 +'px' || objImage.style.top == 310 +'px' && objImage.style.left == 105 +'px' ) {
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
			} 
			if (objImage.style.top == 250 +'px' && objImage.style.left == 75 +'px') 
			{
				objImage.style.left = "45px";
				objImage.style.top = "250px";
			}
			if (objImage.style.top == 280 +'px' && objImage.style.left == 195 +'px') 
			{
				objImage.style.left = "225px";
				objImage.style.top = "280px";
				objImage.style.zIndex =-4;
			}
			if (objImage.style.top == 310 +'px' && objImage.style.left == 195 +'px') 
			{
				objImage.style.left = "225px";
				objImage.style.top = "310px";
				objImage.style.zIndex =-4;
			}
			if (objImage.style.top == 340 +'px' && objImage.style.left == 195 +'px') 
			{
				objImage.style.left = "225px";
				objImage.style.top = "340px";
			}
			if (objImage.style.top == 340 +'px' && objImage.style.left == 165 +'px') 
			{
				objImage.style.left = "225px";
				objImage.style.top = "340px";
			}
			// highschool
			if (objImage.style.top == 220 +'px' && objImage.style.left == 1005 +'px') 
			{
				objImage.style.left = "1005px";
				objImage.style.top = "250px";
			}
			// hospital
			if (objImage.style.top == 250 +'px' && objImage.style.left == 1035 +'px') 
			{
				objImage.style.left = "1005px";
				objImage.style.top = "250px";
			}
			if (objImage.style.top == 280 +'px' && objImage.style.left == 1035 +'px') 
			{
				objImage.style.left = "1005px";
				objImage.style.top = "280px";
			}
			if (objImage.style.top == 310 +'px' && objImage.style.left == 1035 +'px') 
			{
				objImage.style.left = "1005px";
				objImage.style.top = "310px";
			}
			if (objImage.style.top == 340 +'px' && objImage.style.left == 1065 +'px') 
			{
				objImage.style.left = "1035px";
				objImage.style.top = "340px";
			}
			if (objImage.style.top == 340 +'px' && objImage.style.left == 1095 +'px' || objImage.style.top == 340 +'px' && objImage.style.left == 1125 +'px' || objImage.style.top == 340 +'px' && objImage.style.left == 1155 +'px' || objImage.style.top == 340 +'px' && objImage.style.left == 1185 +'px'  ) 
			{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
			}
			if(objImage.style.top == 370 +'px' && objImage.style.left == 1215 +'px' || objImage.style.top == 370 +'px' && objImage.style.left == 1245 +'px' )
			{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
			}
			
			// Tree
			if (objImage.style.top <= 341 +'px' && objImage.style.top >= 339 +'px' && objImage.style.left == '-15px')
			{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
			} else if (objImage.style.top == 370 +'px' && objImage.style.left == '-15px') {
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
			}
			// Tree overlaps
			if (objImage.style.top == 370 +'px' && objImage.style.left == 15 +'px' || objImage.style.top == 370 +'px' && objImage.style.left == 45 +'px' || objImage.style.top == 370 +'px' && objImage.style.left == 75 +'px')
			{
				objImage.style.zIndex =-3;
			}
			
			//portal
			if(objImage.style.top == 520 + 'px' && objImage.style.left == '15px')
					{
				objImage.style.left = "45px";
				objImage.style.top = "520px";
				document.getElementById("avatar").src="assets/about/MaleSUCKED.png";
				objImage.style.height = "130px";
                objImage.style.width = "130px";
				function debounce(callback, wait) 
				{
					let timeout;
					return (...args) => 
					{
						clearTimeout(timeout);
						timeout = setTimeout(function () { callback.apply(this, args); }, wait);
					};
				}
				var timeInterval = 0;
				
				window.addEventListener('keyup', debounce( () => 
				{
					 document.getElementById("avatar").src="assets/about/MaleSUCKED.png";
					 objImage.style.height = "130px";
					 objImage.style.width = "130px";
				}, timeInterval))
				
				if (objImage.style.left == 45 + 'px' && objImage.style.top == 520 + 'px')
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
					}
			if(objImage.style.top == 490 + 'px' && objImage.style.left == '15px' || objImage.style.top == 460 + 'px' && objImage.style.left == '15px')
					{
				objImage.style.left = "45px";
				objImage.style.top = "520px";
					}
			if(objImage.style.top == 460 + 'px' && objImage.style.left == '-15px')
					{
				objImage.style.left = "-15px";
				objImage.style.top = "430px";
					}
			if(objImage.style.top == 550 + 'px' && objImage.style.left == '15px')
					{
				objImage.style.left = "45px";
				objImage.style.top = "520px";
				document.getElementById("avatar").src="assets/about/MaleSUCKED.png";
				objImage.style.height = "130px";
                objImage.style.width = "130px";
				function debounce(callback, wait) 
				{
					let timeout;
					return (...args) => 
					{
						clearTimeout(timeout);
						timeout = setTimeout(function () { callback.apply(this, args); }, wait);
					};
				}
				var timeInterval = 0;
				
				window.addEventListener('keyup', debounce( () => 
				{
					 document.getElementById("avatar").src="assets/about/MaleSUCKED.png";
					 objImage.style.height = "130px";
					 objImage.style.width = "130px";
				}, timeInterval))
				
				if (objImage.style.left == 45 + 'px' && objImage.style.top == 520 + 'px')
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
					}
			if(objImage.style.top == 430 + 'px' && objImage.style.left == '15px' || objImage.style.top == 430 + 'px' && objImage.style.left == '-15px' || objImage.style.top == 400 + 'px' && objImage.style.left == '-15px' || objImage.style.top == 400 + 'px' && objImage.style.left == '15px')
					{
				document.getElementById("home-portal").style.zIndex = 1;
					} else {
						document.getElementById("home-portal").style.zIndex = -1;
					}
			
			
			// Popup Modals
		
			/* Home */
			if (objImage.style.top == 340 + 'px' && objImage.style.left == 225 +'px')
			{
				document.getElementById("popup-home").classList.toggle("active");
			}
			/* Elementary */
			if (objImage.style.top == 280 + 'px' && objImage.style.left == 285 +'px')
			{
				document.getElementById("popup-elementary").classList.toggle("active");
			}
			/* Highschool */
			if (objImage.style.top == 250 + 'px' && objImage.style.left == 915 +'px' || objImage.style.top == 250 + 'px' && objImage.style.left == 945 +'px'  )
			{
				document.getElementById("popup-highschool").classList.toggle("active");
			}
			/* Hospital */
			if (objImage.style.top == 340 + 'px' && objImage.style.left == 1035 +'px')
			{
				document.getElementById("popup-hospital").classList.toggle("active");
			}
			
				
          



		  } window.onload = init;
			
			

	