			
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
			
			
			
			
			$("#sub").mouseenter(function(){
			      $(this).fadeTo(100, 0.8,function(){
			        $(this).fadeTo(100, 1);
			      });
			    });
				
			$("#sub").click(function(){
				$.ajax({
					url:"loginCheck.php",
					async:true,
					data:"tel="+$('#userphone').val()+"&password="+$("#passId").val(),
					type:"post",
					success:function(data){
						if(data=="1"){
							//保存cookie
							location.href="../index.html";
						}else{
							$("#errmsg").html("亲，用户名或者密码错误，登录失败，请想好再输！");
						}
					}		
				});	
			});
