			$("#my_cart_show").mouseover(function(){
				$("#indexw_header_cart").css(
					"display","block"
				);
			});
			$("#my_cart_show").mouseout(function(){
				$("#indexw_header_cart").css(
					 "display","none"
				);
			});
			$(".indexw_header_gray").mouseover(function(){
				$(".header_show").css(
					"display","block"
				);
				$("#indexw_header_cart").css(
					 "display","none"
				);
			});
			$(".indexw_header_gray").mouseout(function(){
				$(".header_show").css(
					 "display","none"
				);
			});
				
				
				
				$("#my_cart_show").mouseover(function(){
				$("#indexw_header_cart").css(
					"display","block"
				);
			});
			$("#indexw_header_cart").mouseover(function(){
				$("#indexw_header_cart").css(
					"display","block"
				);
			});
			$("#my_cart_show").mouseout(function(){
				$("#indexw_header_cart").css(
					 "display","none"
				);
			});
			$("#indexw_header_cart").mouseout(function(){
				$("#indexw_header_cart").css(
					 "display","none"
				);
			});
			$(".indexw_header_gray").mouseover(function(){
				$(".header_show").css(
					"display","block"
				);
				$("#indexw_header_cart").css(
					 "display","none"
				);
			});
			$(".indexw_header_gray").mouseout(function(){
				$(".header_show").css(
					 "display","none"
				);
			});		
		
			$(".indexw_nav_li:nth-of-type(1)").mouseover(
				function(){
					$(".m_idx_snav_hide,.m_idx_snav_wp").css("display","block")
			});
			$(".m_idx_snav_hide,.m_idx_snav_wp").mouseover(
				function(){
					$(".m_idx_snav_hide,.m_idx_snav_wp").css("display","block")
			});
			$(".indexw_nav_li").mouseout(
				function(){
					$(".m_idx_snav_hide,.m_idx_snav_wp").css("display","none")
			});
			$(".m_idx_snav_hide,.m_idx_snav_wp").mouseout(
				function(){
					$(".m_idx_snav_hide,.m_idx_snav_wp").css("display","none")
			});		
		
				/************************放大镜**************************/
				
				
				$(".loadImg_effect").bigMirror({
					mirrorWidth:200,
					mirrorHeight:200,
					multiple:2,
					direction:"右",
					bigImgPath:"images/z3.jpg"	
				});

				/************************商品详情**************************/
				
				
				
				
				/************************精美包包**************************/
				var tab=setInterval(tabpro, 9000);
			    var tabmun=0;
			    $('.f_brand_tlt a').mouseover(function() {
			      stoptab();
			      var ind=$(this).index();    
			      tabmun=ind+1;
			      $('.f_brand_tlt a').removeClass('on');
			      $(this).addClass('on');
			      $(this).parent().siblings('.f_brand_con').find('div').hide();
			      $(this).parent().siblings('.f_brand_con').find('div').eq(ind).show();
			    });
			    $('.f_brand_con div,.f_brand_tlt a').mouseleave (function() {
			      tab=setInterval(tabpro, 3000);
			    });
			    $('.f_brand_con div').mouseover(function() {
			      stoptab();
			    });
			    function tabpro(){
			      var num=parseInt($('.f_brand_tlt a').length);
			      if (tabmun>=num) {
			        tabmun=0;
			      }
			      $('.f_brand_tlt a').removeClass('on');
			      $('.f_brand_tlt a').eq(tabmun).addClass('on');
			      $('.f_brand_con').find('div').hide();
			      $('.f_brand_con').find('div').eq(tabmun).show();
			      tabmun++;
			    };
			    function stoptab(){
			      clearInterval(tab);
			    };
				