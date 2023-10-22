			
			//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("avatar");
                objImage.style.position = "absolute";
                objImage.style.left = "225px";
                objImage.style.top = "460px";
                objImage.style.height = "160px";
                objImage.style.width = "160px";
                

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
					 objImage.style.height = "160px";
					 objImage.style.width = "160px";
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
				if (objImage.style.top == 520 + 'px' && objImage.style.left > 0 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}	
				
				/** UPPER SIDE **/	
		
				//left
				if (objImage.style.top == 250 + 'px' && objImage.style.left > 0 +'px' || objImage.style.top == 250 + 'px' && objImage.style.left == '-15px' ) 
				{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}		
			
				
				
				
				/** OVERLAPS **/
				if(objImage.style.top == 340 + 'px' && objImage.style.left == '225px' || objImage.style.top == 370 + 'px' && objImage.style.left == '285px' ) {
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
				}
				if(objImage.style.top == 370 + 'px' && objImage.style.left == '345px' || objImage.style.top == 370 + 'px' && objImage.style.left == '315px'  ) {
					objImage.style.top = "400px";
					objImage.style.left = "345px";	
				}
				if(objImage.style.top == 370 + 'px' && objImage.style.left == '375px' ){
					objImage.style.top = "370px";
					objImage.style.left = "405px";
				}
				if(objImage.style.top == 310 + 'px' && objImage.style.left == '435px'){
					objImage.style.top = "310px";
					objImage.style.left = "465px";
				}
				if(objImage.style.top == 280 + 'px' && objImage.style.left == '435px'  ){
					objImage.style.top = "280px";
					objImage.style.left = "465px";
				}
				if(objImage.style.top == 340 + 'px' && objImage.style.left == '435px'){
					objImage.style.top = "305px";
					objImage.style.left = "475px";
				}
				if(objImage.style.top == 335 + 'px' && objImage.style.left == '415px'){
					objImage.style.top = "340px";
					objImage.style.left = "495px";
				}
				if(objImage.style.top == 340 + 'px' && objImage.style.left == '405px'){
					objImage.style.top = "370px";
					objImage.style.left = "405px";
				}
				if(objImage.style.top == 275 + 'px' && objImage.style.left == '475px'){
					objImage.style.top = "310px";
					objImage.style.left = "495px";
				}
				//table left
				if(objImage.style.top == 340 + 'px' && objImage.style.left == '255px'){
					objImage.style.top = "370px";
					objImage.style.left = "255px";
				}
				//table top
				if(objImage.style.top == 280 + 'px' && objImage.style.left >= 255+ 'px' && objImage.style.left <= 315 +'px'){
					document.getElementById("direct").style.zIndex = 2;
				} else {
					document.getElementById("direct").style.zIndex = -1;
				}
				if(objImage.style.top == 280 + 'px' && objImage.style.left == 345+ 'px'){
					objImage.style.top = "280px";
					objImage.style.left = "315px";
					document.getElementById("direct").style.zIndex = 2;
				}
				if(objImage.style.top == 310 + 'px' && objImage.style.left >= 225+ 'px' && objImage.style.left <= 255 +'px'){
					document.getElementById("direct").style.zIndex = 2;
				} else {
					document.getElementById("direct").style.zIndex = -1;
				}
				if(objImage.style.top == 310 + 'px' && objImage.style.left == 285+ 'px'){
					objImage.style.top = "310px";
					objImage.style.left = "255px";
					document.getElementById("direct").style.zIndex = 2;
				} else if (objImage.style.top == 280 + 'px' && objImage.style.left >= 255+ 'px' && objImage.style.left <= 315 +'px') {
					document.getElementById("direct").style.zIndex = 2;
				} 
				if(objImage.style.top == 310 + 'px' && objImage.style.left == '315px'){
					objImage.style.top = "280px";
					objImage.style.left = "315px";
					document.getElementById("direct").style.zIndex = 2;
				} else if (objImage.style.top == 280 + 'px' && objImage.style.left == 315+ 'px') {
					document.getElementById("direct").style.zIndex = 2;
				} 
			//portal
			if(objImage.style.top == 490 + 'px' && objImage.style.left == '45px' || objImage.style.top == 460 + 'px' && objImage.style.left == '45px' || objImage.style.top == 460 + 'px' && objImage.style.left == '15px' || objImage.style.top == 490 + 'px' && objImage.style.left == '15px' )
					{
				objImage.style.top = "490px";
                objImage.style.left = "45px";
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
					 objImage.style.height = "160px";
					 objImage.style.width = "160px";
				}, timeInterval))
				
				if (objImage.style.left == 45 + 'px' && objImage.style.top == 490 + 'px')
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
					}
			
			if (objImage.style.top == 460 + 'px' && objImage.style.left == '-15px' )
			{
			objImage.style.top = "430px";
            objImage.style.left = "-15px";	
			}
			if(objImage.style.top == 430 + 'px' && objImage.style.left == '15px' || objImage.style.top == 430 + 'px' && objImage.style.left == '-15px' || objImage.style.top == 400 + 'px' && objImage.style.left == '-15px' || objImage.style.top == 400 + 'px' && objImage.style.left == '15px')
					{
				document.getElementById("home-portal").style.zIndex = 1;
					} else {
						document.getElementById("home-portal").style.zIndex = -1;
					}
			if(objImage.style.top == 370 + 'px' &&  objImage.style.left == '15px' || objImage.style.top == 370 + 'px' &&  objImage.style.left <= 0 +'px' || objImage.style.top >= 310 + 'px' && objImage.style.top <= 370 + 'px' && objImage.style.left == '-15px')
					{
				document.getElementById("home-portal").style.zIndex = 1;
					}
			
			// Popup Modals
		
			/* Contacts */
			if (objImage.style.top == 280 + 'px' && objImage.style.left > 585 +'px' && objImage.style.left < 855 +'px')
			{
				document.getElementById("popup-contact").classList.toggle("active");
			}
			
			/* Direct Email Linked */
			if (objImage.style.top == 370 + 'px' && objImage.style.left == 405 +'px')
			{
				setTimeout("location.href = 'mailto:biene.bryle.sanico@adamson.edu.ph?subject= YOUR SUBJECT &body=TYPE YOUR MESSAGE HERE '", 2000);
			}
			
			// Table 

				
          



		  } window.onload = init;
			
			

	