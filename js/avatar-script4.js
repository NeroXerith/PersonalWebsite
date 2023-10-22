			
			//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("avatar");
                objImage.style.position = "absolute";
                objImage.style.left = "465px";
                objImage.style.top = "340px";
                objImage.style.height = "140px";
                objImage.style.width = "140px";
                

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
					 objImage.style.height = "140px";
					 objImage.style.width = "140px";
				}, timeInterval))

				// Avatar overlaps
				/** LEFT SIDE **/
				if (objImage.style.left == 315+ 'px' && objImage.style.top == 370 + 'px')
					{
					objImage.style.top = "340px";
					objImage.style.left = "315px";
					}
				if (objImage.style.left >= 345+ 'px' && objImage.style.left <= 465+ 'px' && objImage.style.top == 370 + 'px' || objImage.style.left >= 495+ 'px' && objImage.style.left <= 555+ 'px' && objImage.style.top == 370 + 'px' )
					{
					objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}
					if (objImage.style.left >= 495+ 'px' && objImage.style.left <= 555+ 'px' && objImage.style.top == 310 + 'px' || objImage.style.left >= 255+ 'px' && objImage.style.left <= 465+ 'px' && objImage.style.top == 280 + 'px' )
					{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
			
				

			// Resume
				if (objImage.style.left == 315+ 'px' && objImage.style.top == 310 + 'px')
					{
					objImage.style.top = "310px";
					objImage.style.left = "345px";
					document.getElementById("popup-resume").classList.toggle("active");
					}
				if (objImage.style.left == 315+ 'px' && objImage.style.top == 340 + 'px')
					{
					objImage.style.top = "340px";
					objImage.style.left = "345px";
					document.getElementById("popup-resume").classList.toggle("active");
					}
			
			//portal
			if(objImage.style.top == 340 + 'px' && objImage.style.left == '555px')
					{
				objImage.style.top = "340px";
                objImage.style.left = "525px";
				document.getElementById("avatar").src="assets/resume/MaleSUCKED.png";
				objImage.style.height = "140px";
                objImage.style.width = "140px";
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
					 document.getElementById("avatar").src="assets/resume/MaleSUCKED.png";
					 objImage.style.height = "140px";
					 objImage.style.width = "140px";
				}, timeInterval))
				
				if (objImage.style.left == 525 + 'px' && objImage.style.top == 340 + 'px')
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
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
			
			
			
				
          



		  } window.onload = init;
			
			

	