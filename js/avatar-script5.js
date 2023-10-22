			
			//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("avatar");
                objImage.style.position = "absolute";
                objImage.style.left = "615px";
                objImage.style.top = "490px";
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
				/** Upper SIDE **/
				if (objImage.style.left >= 15+ 'px' && objImage.style.left <= 975+ 'px' &&  objImage.style.top == 430 + 'px' || objImage.style.left >= 1005+ 'px' && objImage.style.left <= 1275+ 'px' &&  objImage.style.top == 430 + 'px')
					{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';
					}
				if (objImage.style.left == 1305 + 'px' && objImage.style.top == 460 + 'px')
					{
					objImage.style.top = "460px";
					objImage.style.left = "1275px";
					}
				if (objImage.style.left == 1305 + 'px' && objImage.style.top == 490 + 'px')
					{
					objImage.style.top = "490px";
					objImage.style.left = "1275px";
					}
				if (objImage.style.left == 1305 + 'px' && objImage.style.top == 520 + 'px')
					{
					objImage.style.top = "520px";
					objImage.style.left = "1275px";
					}
				if (objImage.style.left == 135 + 'px' && objImage.style.top == 430 + 'px')
					{
					objImage.style.top = "460px";
					objImage.style.left = "135px";
					}
				if (objImage.style.left == 135 + 'px' && objImage.style.top == 550 + 'px')
					{
					objImage.style.top = "520px";
					objImage.style.left = "135px";
					}
				if (objImage.style.left == '-15px' && objImage.style.top == 520 + 'px')
					{
					objImage.style.top = "520px";
					objImage.style.left = "15px";
					}
				if (objImage.style.left == '-15px' && objImage.style.top == 490 + 'px')
					{
					objImage.style.top = "490px";
					objImage.style.left = "15px";
					}
				if (objImage.style.left == '-15px' && objImage.style.top == 460 + 'px')
					{
					objImage.style.top = "460px";
					objImage.style.left = "15px";
					}
				// lower
				if (objImage.style.left >= 15+ 'px' && objImage.style.left <= 975+ 'px' &&  objImage.style.top == 550 + 'px' || objImage.style.left >= 1005+ 'px' && objImage.style.left <= 1275+ 'px' &&  objImage.style.top == 550 + 'px')
					{
					objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';
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
			if(objImage.style.top == 490 + 'px' && objImage.style.left == '1215px')
					{
				objImage.style.top = "520px";
                objImage.style.left = "1185px";
				document.getElementById("avatar").src="assets/MaleSUCKED3.png";
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
					 document.getElementById("avatar").src="assets/MaleSUCKED3.png";
					 objImage.style.height = "140px";
					 objImage.style.width = "140px";
				}, timeInterval))
				
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 490 + 'px' || objImage.style.left == 1185 + 'px' && objImage.style.top == 520 + 'px' )
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
					}
			
			if(objImage.style.top == 520 + 'px' && objImage.style.left == '1215px')
					{
				objImage.style.top = "520px";
                objImage.style.left = "1185px";
				document.getElementById("avatar").src="assets/MaleSUCKED3.png";
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
					 document.getElementById("avatar").src="assets/MaleSUCKED3.png";
					 objImage.style.height = "140px";
					 objImage.style.width = "140px";
				}, timeInterval))
				
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 520 + 'px')
				{
					setTimeout("location.href = 'index.html';", 1500);	
				}
					}
				if(objImage.style.top == 460 + 'px' && objImage.style.left == '1215px')
					{
				objImage.style.top = "490px";
                objImage.style.left = "1185px";
				document.getElementById("avatar").src="assets/MaleSUCKED3.png";
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
					 document.getElementById("avatar").src="assets/MaleSUCKED3.png";
					 objImage.style.height = "140px";
					 objImage.style.width = "140px";
				}, timeInterval))
				
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 490 + 'px')
				{
					setTimeout("location.href = 'index.html';", 3000);	
				}
					}
			
			
			// Popup Modals
		
			/* Contacts */
			if (objImage.style.top == 280 + 'px' && objImage.style.left > 585 +'px' && objImage.style.left < 855 +'px')
			{
				document.getElementById("popup-contact").classList.toggle("active");
			}
			

			
				
          



		  } window.onload = init;
			
			

	