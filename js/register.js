"use strict"
window.onload=function(){
	$(".inp").blur(function(){
		var str = $(".inp").val()
		if(str==""){
			$(".text1").html("手机号码不能为空");
			return;
		}
		var pat = /^1+\d{10}/;
		if(!pat.test(str)){
			$(".text1").html("用户名只能为11位手机号");
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
			$(".text3").html("密码格式不对");
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
