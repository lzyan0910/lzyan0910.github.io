        function  JumpToweibo()
        {
        	var system ={};  
   			var p = navigator.platform;       
    		system.win = p.indexOf("Win") == 0;  
  	        system.mac = p.indexOf("Mac") == 0;  
  		    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
   		    if(system.win||system.mac||system.xll)
			{//pc 
     		  window.location.href="http://www.weibo.com/u/3865190713/";  
   			 }else
			{//moble
     		  window.location.href="http://m.weibo.cn/u/3865190713/";  
   			 }
       }