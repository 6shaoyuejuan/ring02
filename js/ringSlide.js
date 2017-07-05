	var diytab=setInterval(diypro, 2500);
			    var thmun=0;
			    
			    function diypro(){
			      var num=parseInt($('.ringSlide ul li').length);
			      if (thmun>=num) {
			        thmun=0;
			      }
			      $('.ringSlide').find('li').fadeOut(800);
			      $('.ringSlide').find('li').eq(thmun).fadeIn(800);
			      thmun++;
			    };
			    function stoptab(){
			      clearInterval(diytab);
			    }; 
		
		
		
		var tab=setInterval(tabpro, 9000);
			    var tabmun=0;
			    $('#pro_list em').mouseover(function() {
			      stoptab();
			      var ind=$(this).index();    
			      tabmun=ind+1;
			      $('#pro_list em').removeClass('on');
			      $(this).addClass('on');
			      $(this).parent().siblings('.pro_tab').hide();
			      $(this).parent().siblings('.pro_tab').eq(ind).show();
			    });
			    $('.pro_tab,#pro_list em').mouseleave (function() {
			      tab=setInterval(tabpro, 3000);
			    });
			    $('.pro_tab').mouseover(function() {
			      stoptab();
			    });
			    function tabpro(){
			      var num=parseInt($('#pro_list em').length);
			      if (tabmun>=num) {
			        tabmun=0;
			      }
			      $('#pro_list em').removeClass('on');
			      $('#pro_list em').eq(tabmun).addClass('on');
			      $('.pro_tab').hide();
			      $('.pro_tab').eq(tabmun).show();
			      tabmun++;
			    };
			    function stoptab(){
			      clearInterval(tab);
			    };
		
		
		
		var rngind=0;
		    var _this=$('.rec_list').find('ul');
		    var num=_this.find('li').length;
		    var li_w=274;
		    var view_count=3;
		    $('.rec_next').click(function(){
		      console.log('a');
		      rngind++;
		      if(rngind + view_count >= num){
		        rngind--; 
		      }
		      _this.animate({'left':'-'+(li_w*rngind)+'px'},400);
		
		      if(rngind === num-(view_count+1)){
		        $('.rec_next').addClass('on');
		      }else{
		        $('.rec_prev').addClass('on');
		      }
		    });
		    
		  $('.rec_prev').click(function(){
		      rngind--;
		      if(rngind < 0){
		        rngind = 0;
		      }
		      _this.animate({'left':'-'+(li_w*rngind)+'px'},400);
		
		      if(rngind === 0){
		        $('.rec_prev').removeClass('on');
		      }else{
		        $('.rec_next').removeClass('on');
		      }
		    });
		
		  $('.rec_list ul li').hover(
		    function () {
		      $(this).animate({'margin-top':'-12px'},400);
		    },function () {
		       $(this).animate({'margin-top':'0'},400);
		    });
		
		
	