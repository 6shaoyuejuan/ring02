"use strict";
 /*发送短信*/
     var mendian_name = "shanghai";
   
     var default_msg = $(".u_city_ipt").val();
     var null_msg = '号码不能为空！';
     var errorno_msg = '请核对手机号码！';
     var more_msg = '可再次发送';
    var shopMsg = new SmsClass("#do_smssend", ".u_city_ipt", "#city_form_jq", mendian_name);
  
jQuery(function($) {
   $('.indexw_header_input_text').focus(function() {
      var val = $('.indexw_header_input_text').val();
      if (val=='戒托') {
          $(this).attr('value','');
      }
      $(this).attr('value', '').css({'color':'#666','font-size':'12px'}); 
    });
    $('.indexw_header_input_text').blur(function() {
      var val = $('.indexw_header_input_text').val();
      if (val=="") {
        $('.indexw_header_input_text').attr('value', '戒托').css({'color':'#999','font-size':'12px'});
      }
    });

    // /***全屏动画**/
    $(".superslide").slide({ titCell:".num ul" , mainCell:".superslidepic" , effect:"fold", autoPlay:true, delayTime:1000 ,interTime:4000, autoPage:true });
   
    setTimeout(function(){
      $(".ind_focus_img").hide();
    },2000);
    
  //定制图片小轮播

    var diytab=setInterval(diypro, 2500);
    var thmun=0;
    
    function diypro(){
      var num=parseInt($('#diy_focus_jq div').length);
      if (thmun>=num) {
        thmun=0;
      }
      $('#diy_focus_jq').find('div').fadeOut(800);
      $('#diy_focus_jq').find('div').eq(thmun).fadeIn(800);
      thmun++;
    };
    function stoptab(){
      clearInterval(diytab);
    }; 
    // $('#diy_focus_jq div').mouseenter(function() {
    //   stoptab();
    // });
    // $('#diy_focus_jq div').mouseleave(function() {
    //     diytab=setInterval(diypro, 1500);
    // });
  //系列产品图片小轮播
    
    var tab=setInterval(tabpro, 9000);
    var tabmun=0;
    $('.g_tab_wp em').mouseover(function() {
      stoptab();
      var ind=$(this).index();    
      tabmun=ind+1;
      $('.g_tab_wp em').removeClass('on');
      $(this).addClass('on');
      $(this).parent().siblings('.g_tab_cnt').hide();
      $(this).parent().siblings('.g_tab_cnt').eq(ind).show();
    });
    $('.g_tab_cnt,.g_tab_wp em').mouseleave (function() {
      tab=setInterval(tabpro, 3000);
    });
    $('.g_tab_cnt').mouseover(function() {
      stoptab();
    });
    function tabpro(){
      var num=parseInt($('.g_tab_wp em').length);
      if (tabmun>=num) {
        tabmun=0;
      }
      $('.g_tab_wp em').removeClass('on');
      $('.g_tab_wp em').eq(tabmun).addClass('on');
      $('.g_tab_cnt').hide();
      $('.g_tab_cnt').eq(tabmun).show();
      tabmun++;
    };
    function stoptab(){
      clearInterval(tab);
    };

   // 戒托
    var rngind=0;
    var _this=$('.f_rng_focus').find('ul');
    var num=_this.find('li').length;
    var li_w=274;
    var view_count=3;
    $('#u_rngs_next').click(function(){
      console.log('a');
      rngind++;
      if(rngind + view_count >= num){
        rngind--; 
      }
      _this.animate({'left':'-'+(li_w*rngind)+'px'},400);

      if(rngind === num-(view_count+1)){
        $('#u_rngs_next').addClass('on');
      }else{
        $('#u_rngs_prev').addClass('on');
      }
    });
    
  $('#u_rngs_prev').click(function(){
      rngind--;
      if(rngind < 0){
        rngind = 0;
      }
      _this.animate({'left':'-'+(li_w*rngind)+'px'},400);

      if(rngind === 0){
        $('#u_rngs_prev').removeClass('on');
      }else{
        $('#u_rngs_next').removeClass('on');
      }
    });

  $('.f_rng_focus ul li').hover(
    function () {
      $(this).animate({'margin-top':'-12px'},400);
    },function () {
       $(this).animate({'margin-top':'0'},400);
    });


   //门店tab
  
    function getPromotDialog(){
                    
               $.ajax({
                   data : {'token' : token},dataType: 'json',type: "GET",url: g_baseUrls.relBase+'/promot/',
                   cache : false,
                   success: function(data){
                       if(data['cname'] !='unknow'){
                           switchTab(data['cname']);
                           if(data['code']==200){
                               $('.shade_wrap_op').show();
                               $('.gprs_wrap').addClass('gprs_'+data['cname']+'_wrap');
                               $('.gprs_city_a').addClass('gprs_a_'+data['cname']);$('.gprs_city_a').attr('rel',data['url']);$('.gprs_city_a').attr('data-c',data['cname']);
                               $('.shade_wrap').show();
                           }else{return false;}}else{return false;}
                   }
               });
      };
       function switchTab(name){
             $('.tab_alist').children().removeClass('a_on'); 
             $('.a_city').filter('[name='+name+']').addClass('a_on');
             $('.a_city').filter('[name='+name+']').show();
            shopMsg.expeshop = name;
       };
         
    $(".u_city_ipt").focus(function(){
        var tmpVal = $.trim($(".u_city_ipt").val());
       // if(tmpVal == default_msg || tmpVal == null_msg || tmpVal == errorno_msg || tmpVal == more_msg){
       if(tmpVal == "" || tmpVal =='免费发送地址到手机'){
          $(".u_city_ipt").val('');
        }
        $(".u_city_ipt").css({"width":'240px','color':'#000'});
        $(".btn_city_senms").show();
      }).blur(function(){
        if($.trim($(".u_city_ipt").val()) == ''){
          $(".u_city_ipt").val(default_msg);
          $(".btn_city_senms").hide();
          $(".u_city_ipt").removeAttr('style');
        }
      });
   

    $('#do_smssend').click(function(){
      shopMsg.smsSend(".u_city_ipt", default_msg, null_msg, errorno_msg, more_msg);
    });

      //门店切换
      $('.tab_alist a').mouseenter(function(){
        $('.tab_alist a').removeClass('a_on');
        $(this).addClass('a_on');
        var tab_a=$(this).index();
        var name=$(this).attr('name'); 
        var map=$(this).attr('data');
         shopMsg.expeshop = name;
        
        $(".tab_city_pic").children(".a_city").hide();
        $(".tab_city_pic").children('.a_city').filter('[name='+name+']').show();  
        $('.u_city_map').attr('href', map);
      });     
      //增加视频
      $("#clk_vidoe img").click(function(event) {
        $(".opp_video,.s_shdw_opa").show();
      });
       $(".s_shdw_opa").click(function(event) {
        $(".opp_video,.s_shdw_opa").hide();
      });
      
    /***所有图片高亮显示***/
    $(".gs_gray_wp img,.gs_wht_wp img").mouseenter(function(){
      $(this).fadeTo(100, 0.8,function(){
        $(this).fadeTo(100, 1);
      });
    });
     
});
 