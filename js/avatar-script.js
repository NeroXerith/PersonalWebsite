			
			//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("avatar");
                objImage.style.position = "absolute";
                objImage.style.left = "615px";
                objImage.style.top = "100px";
                objImage.style.height = "130px";
                objImage.style.width = "130px";

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
					 objImage.style.height = "130px";
					 objImage.style.width = "130px";
				}, timeInterval))

				// when avatar overlaps
				/** SPAWN AREA **/	
				if (objImage.style.top < 100 + 'px' && objImage.style.left > 0 + 'px' || objImage.style.top == 70 + 'px' && objImage.style.left >= 615 + 'px' || objImage.style.top == 70 + 'px' && objImage.style.left <= 615 + 'px')
					{
					objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
				/** LEFT SIDE **/
				if (objImage.style.left == 15 + 'px' && objImage.style.top > 0 + 'px')
					{
				objImage.style.left = parseInt(objImage.style.left) + 30 + 'px';		
					}
				/** RIGHT SIDE **/
				if (objImage.style.left == 1215 + 'px' &&  objImage.style.top > 0 + 'px' )
					{
				objImage.style.left = parseInt(objImage.style.left) - 30 + 'px';	
					}
				/** DOWN SIDE **/	
				if (objImage.style.top == 520 + 'px' && objImage.style.left > 0 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}	
				/** UPPER SIDE **/	
				if (objImage.style.top < 160 + 'px' && objImage.style.left < 585 + 'px' || objImage.style.top < 160 + 'px' && objImage.style.left > 645 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}	
					
				/** FIRST LAYER **/
				if (objImage.style.left == 45 + 'px' &&  objImage.style.top == 220 + 'px' || objImage.style.left < 285 + 'px' &&  objImage.style.top == 220 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}
				if (objImage.style.left == 45 + 'px' &&  objImage.style.top == 250 + 'px' || objImage.style.left < 285 + 'px' &&  objImage.style.top == 250 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}

				if (objImage.style.left > 315 + 'px' &&  objImage.style.top == 220 + 'px' || objImage.style.left < 2000 + 'px' &&  objImage.style.top == 220 + 'px' )
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}
				if (objImage.style.left > 360 + 'px' &&  objImage.style.top == 250 + 'px' || objImage.style.left < 2000 + 'px' &&  objImage.style.top == 250 + 'px' )
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
				if (objImage.style.left == 225 + 'px' &&  objImage.style.top == 280 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
				if (objImage.style.left == 375 + 'px' &&  objImage.style.top == 280 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
					
				/** SECOND LAYER **/
				if (objImage.style.left == 45 + 'px' &&  objImage.style.top == 370 + 'px'  || objImage.style.left == 75 + 'px' &&  objImage.style.top == 370 + 'px'   || objImage.style.left < 765 + 'px' &&  objImage.style.top == 370 + 'px' || objImage.style.left > 795 + 'px' &&  objImage.style.top == 370 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) - 30 + 'px';	
					}
				
				if (objImage.style.left == 45 + 'px' &&  objImage.style.top == 400 + 'px' || objImage.style.left < 765 + 'px' &&  objImage.style.top == 400 + 'px' || objImage.style.left > 825 + 'px' &&  objImage.style.top == 400 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
				if (objImage.style.left == 735 + 'px' &&  objImage.style.top == 430 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}
				if (objImage.style.left == 855 + 'px' &&  objImage.style.top == 430 + 'px')
					{
				objImage.style.top = parseInt(objImage.style.top) + 30 + 'px';	
					}	
				
				// PORTAL Function 
				
				/** PORTAL 1 **/
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 160 + 'px')
				{
					document.getElementById("avatar").src="assets/MaleSUCKED.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";	
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
					 document.getElementById("avatar").src="assets/MaleSUCKED.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
					
				}
				
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 160 + 'px')
				{
					setTimeout("location.href = 'about.html';", 1500);	
				}
				
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 190 + 'px')
				{

					document.getElementById("avatar").src="assets/MaleSUCKED.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";
					objImage.style.top = 160+'px';
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
					 document.getElementById("avatar").src="assets/MaleSUCKED.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 190 + 'px')
				{
					setTimeout("location.href = 'about.html';", 1500);	
				}
				
				
				}
				
				/** PORTAL 2 **/
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 310 + 'px')
				{
					document.getElementById("avatar").src="assets/MaleSUCKED2.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";	
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
					 document.getElementById("avatar").src="assets/MaleSUCKED2.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 340 + 'px')
				{
					document.getElementById("avatar").src="assets/MaleSUCKED2.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";
					objImage.style.top = 310+'px';
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
					 document.getElementById("avatar").src="assets/MaleSUCKED2.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 340 + 'px' || objImage.style.left == 1185 + 'px' && objImage.style.top == 310 + 'px' || objImage.style.left == 1185 + 'px' && objImage.style.top == 190 + 'px')
				{
					setTimeout("location.href = 'contact.html';", 1500);	
				}
				
				/** PORTAL 3 **/
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 490 + 'px')
				{
					document.getElementById("avatar").src="assets/MaleSUCKED3.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";	
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
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 1185 + 'px'  && objImage.style.top == 460 + 'px')
				{
					document.getElementById("avatar").src="assets/MaleSUCKED3.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";
					objImage.style.top = 490+'px';
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
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 1185 + 'px' && objImage.style.top == 490 + 'px' || objImage.style.left == 1185 + 'px' && objImage.style.top == 460 + 'px')
				{
					setTimeout("location.href = 'resume.html';", 1500);	
				}




				/** PORTAL 4 **/
				if (objImage.style.left == 45 + 'px'  && objImage.style.top == 490 + 'px')
				{
					document.getElementById("avatar").src="assets/gallery/MaleSUCKED.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";	
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
					 document.getElementById("avatar").src="assets/gallery/MaleSUCKED.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 45 + 'px'  && objImage.style.top == 460 + 'px')
				{
					document.getElementById("avatar").src="assets/gallery/MaleSUCKED.png";
				    objImage.style.height = "160px";
                    objImage.style.width = "170px";
					objImage.style.top = 490+'px';
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
					 document.getElementById("avatar").src="assets/gallery/MaleSUCKED.png";
					 objImage.style.height = "160px";
					 objImage.style.width = "170px";
				}, timeInterval))
				}
				if (objImage.style.left == 45 + 'px' && objImage.style.top == 490 + 'px' || objImage.style.left == 45 + 'px' && objImage.style.top == 460 + 'px')
				{
					setTimeout("location.href = 'gallery.html';", 1500);	
				}
									
				/** TORCH FIRST STAIR **/
				if (objImage.style.left == 315 + 'px' &&  objImage.style.top == 220 + 'px')
					{
				document.getElementById("torch-green").style.zIndex = -1;
				document.getElementById("torch-green2").style.zIndex = -1;
					} else {
						document.getElementById("torch-green").style.zIndex = 1;
						document.getElementById("torch-green2").style.zIndex = 1;
					}
					
				/** TORCH SECOND STAIR **/
				if (objImage.style.left == 855 + 'px' &&  objImage.style.top == 430 + 'px' || objImage.style.left == 705 + 'px' &&  objImage.style.top == 430 + 'px')
					{
				document.getElementById("torch-green3").style.zIndex = -1;
				document.getElementById("torch-green4").style.zIndex = -1;

					} else {
						document.getElementById("torch-green3").style.zIndex = 1;
						document.getElementById("torch-green4").style.zIndex = 1;

					}

				
            }
			

			window.onload = init;
			
			

	