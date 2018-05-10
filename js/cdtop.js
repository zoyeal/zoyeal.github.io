(function () {
	window.onload = function(){
	    var offset = 100,
	    scroll_top_duration = 600,
	    topbtn = document.getElementById("cdtop");

	    window.onscroll = function(){
	      if (document.documentElement.scrollTop>offset) {
	          addClass(topbtn,'cd-is-visible');
	      }
	      else{
	          removeClass(topbtn,'cd-is-visible');
	          removeClass(topbtn,'cd-fade-out');
	      }
	      if (document.documentElement.scrollTop>scroll_top_duration) {
	          addClass(topbtn,'cd-fade-out');
	      }
	    }

	    topbtn.onclick = function(){ 
	    	timer = setInterval(function(){
	            //获取滚动条的滚动高度
	            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	            //用于设置速度差，产生缓动的效果
	            var speed = Math.floor(-osTop / 4);
	            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
	            isTop =true;  //用于阻止滚动事件清除定时器
	            if(osTop == 0){
	                clearInterval(timer);
	            }
	        },30);
	    }
	}

	function hasClass( elements,cName ){ 
	  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
	}; 

	function addClass( elements,cName ){ 
	  if( !hasClass( elements,cName ) ){ 
	    elements.className += " " + cName; 
	  }; 
	}; 

	function removeClass( elements,cName ){ 
	  if( hasClass( elements,cName ) ){ 
	    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
	  }; 
	};
})();