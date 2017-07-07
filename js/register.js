"use strict"


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
			
			
/***************************正则验证**************************************/			
			
window.onload=function(){
	$(".inp").blur(function(){
		var str = $(".inp").val()
		if(str==""){
			$(".text1").html("手机号码不能为空");
			return;
		}
		var pat = /^1+\d{10}/;
		if(!pat.test(str)){
			$(".text1").html("手机号只能为11位手机号");
			return;
		}else{
			$(".text1").html("");
		}
	});
	$(".inpcode").blur(function(){
		var str = $(".inpcode").val()
		if(str==""){
			$(".text2").html("请输入验证码");
			return;
		}
		var pat = /\d{6}/;
		if(!pat.test(str)){
			$(".text2").html("验证码格式不对");
			return;
		}else{
			$(".text2").html("");
		}
	});
	$(".pass").blur(function(){
		var str = $(".pass").val()
		if(str==""){
			$(".text3").html("密码不为空，请填写密码");
			return;
		}
		var pat = /(\d|[a-z]|[A-Z]){6,}/;
		if(!pat.test(str)){
			$(".text3").html("密码格式错误，至少6位");
			return;
		}else{
			$(".text3").html("");
		}
	});
	$(".passw").blur(function(){
		var str = $(".passw").val()
		if(str==""){
			$(".text4").html("确认密码不能为空");
			return;
		}
		var pat = /(\d|[a-z]|[A-Z]){6,}/;
		if(!pat.test(str)){
			$(".text4").html("密码格式错误，至少6位");
			return;
		}else{
			$(".text4").html("");
		}
	});
	
		$("#sub").click(function(){
			
			if($(".text1").html()==""&&$(".text2").html()==""&&$(".text3").html()==""&&$(".text4").html()==""&&$(".inp").val()!=""&&$(".inpcode").val()!=""&&$(".password").val()!=""&&$(".password1").val()!=""){
				location.href="../index.html";
			}
		})
	}
	
/***************************高亮图**************************************/	
	
$("#mfcode,#sub").mouseenter(function(){
			      $(this).fadeTo(100, 0.8,function(){
			        $(this).fadeTo(100, 1);
			      });
			    });



/***************************验证手机号是否存在**************************************/				
$("#userphone").blur(function(){
	
	
	$.ajax({
		url:"checkUser.php",
		async:true,
		data:"tel="+this.value,
		type:"get",
		success:function(data){
			if(data=="1"){
				$(".text1").html("该手机号已被注册");
			}else{
				$(".text1").html("该手机号未注册");
			}
		}		
	});	
});
/***************************倒计时**************************************/
var counter = document.getElementById("mfcode");
			var s = 60;
			function count(){
				s--;
				if(s<=0){
					s=0;
				}
				counter.value = s;
			}
			counter.onclick = function(){
				count();
			setInterval(count,1000);
			}

