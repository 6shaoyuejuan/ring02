
$(document).ready(function(){

var showDetailMessage = function(){
	if( $.isempty(gCurrCfg) || $.isempty(gCurrCfg.comments) ) return ;
	if( $.isempty(gCurrCfg.comments.topic) || $.isempty(gCurrCfg.comments.topicId) ) return ;
	
	var url = url = g_baseUrls.base+'/comment/productStyleComment/id/'+gCurrCfg.comments.topicId+'/topic/'+gCurrCfg.comments.topic;
	
	if( !$.isempty(gCurrCfg.comments.pagenum) ){
		url += '/pagenum/'+gCurrCfg.comments.pagenum ;
	}
	if( !$.isempty(gCurrCfg.comments.pagesize) ){
		url += '/pagesize/'+gCurrCfg.comments.pagesize ;
	}
	if( !$.isempty(gCurrCfg.comments.type) ){
		url += '/type/'+gCurrCfg.comments.type ;
	}
	
	
	if( $('#loadingCommentShow').length <= 0 ){
		$(document.body).append('<div id="loadingCommentShow" class="loadingShow">'+g_commonInfos.loadingImg+'</div>');
	}
	
	var resultAreaEleMent = $('#commentContent');
	var loadingEleMent = $('#loadingCommentShow');
	
	//设置loading位置
	setLoadingPos('loadingCommentShow','commentContent');

	$('#proComment').block();
	$.ajax({
		type: 'get',
		url: url,
		success: function(resp){
			var str = '';
			info = eval('('+resp+')');
			results = info.rows;
			$('#comment_rscnt').html(info.rscnt);
			if(isBldMmbLogin()){							
				$('#showLoginString').hide();
			}else{
				$('#captchaContain').css('visibility','hidden');
			}						
			hideNickName();
			if($.isempty(resp) || $.isempty(results) || results.length < 1){
				str += '<ul><li>暂无留言</li></ul>';
			}else{
				$('#comment_rscnt').html(info.rscnt);
				for(var i=0;i<results.length;i++){
					if(results[i]['nick_name'] == 'Anonymous') results[i]['nick_name'] = '匿名用户';
					
					if( results[i]['type'] == gCurrCfg.comments.typeComment ){
						ul_class = 'commBtn';
					}else if( results[i]['type'] == gCurrCfg.comments.typeConsulting ){
						ul_class = 'quesBtn';
					}else if( results[i]['type'] == gCurrCfg.comments.typeBuyershow){
						ul_class = 'showBtn';
					}
					
					str += '<ul  class="'+ul_class+'"><li>';
					str += '<span>'+results[i]['nick_name'];
					if( results[i]['type'] == gCurrCfg.comments.typeComment ){
						str += '【评论】';
					}else if( results[i]['type'] == gCurrCfg.comments.typeConsulting ){
						str += '【咨询】';
						
					}else if( results[i]['type'] == gCurrCfg.comments.typeBuyershow ){
						str += '【买家秀】';
					}
					str += results[i]['create_time']+'</span>';
					str += '</li><div class="resetClear" />';
					if( results[i]['type'] == gCurrCfg.comments.typeBuyershow){
						str += '<li><p><a style="text-decoration:underline" href="'+results[i]['content']+'" target="_blank">'+results[i]['title']+'</a></p></li></ul><div class="resetClear" />';
					}else{
						str += '<li><p>'+results[i]['content']+'</p></li></ul><div class="resetClear" />';
					}
					if(!$.isempty(results[i]['reply'])){
						str += '<ol><li><label>&nbsp;</label><span>客服回复:</span></li>';
						str += '<li><p>'+results[i]['reply']+'</p></li><div class="resetClear" />';
					}
					str += '</ol><div class="resetClear" />';
				}


				//分页
				/*<ul class="page">
				<li class="last">上一页</li>
				<li><span></span></li>
				<li class="next">下一页</li>
				<li class="cur">1</li>
				<li>&nbsp;/&nbsp;</li>
				<li class="total">28</li>
				</ul>*/
				var navStr = '';
				var navStr1 = '<div class="resetClear"></div>';
				if( !$.isempty(info.page_nav_bar) ){
					var pnb = info.page_nav_bar;
					if(typeof pnb.page_nav_pages == "object" && pnb.page_nav_pages.length > 0){
						navStr += '<table border="0" cellpadding="2" cellspacing="0" align="center">';
						navStr += '<tr>';
						navStr1 += '<ul class="page">';
						if(parseInt(pnb.curpage) > 1){
							navStr += '<td><div id="commentPage" class="pageLast" rel="'+(parseInt(pnb.curpage)-1)+'" alt="上一页" title="翻到上一页"/></div></td>';
							navStr1 += '<li id="commentPage" rel="'+(parseInt(pnb.curpage)-1)+'" alt="上一页" title="翻到上一页" class="last">上一页</li><li><span></span></li>';
						}
						for(var i = 0; i < pnb.page_nav_pages.length; i++){
							navStr += '<td>';
							var loopPage = pnb.page_nav_pages[i];
							if(loopPage == pnb.curpage){
								navStr += '<span class="bold">'+loopPage+'</span> ';
							}else if(loopPage > 0){
								navStr += '<a id="commentPage" href="javascript:void(0)" class="page_nav_lnk" rel="'+loopPage+'">'+loopPage+'</span>';
							}else{
								navStr += '... ';
							}
							navStr += '</td>';
						}
						if(pnb.curpage != pnb.lastpage){
							navStr += '<td><div id="commentPage" class="pageNext" rel="'+(parseInt(pnb.curpage)+1)+'" alt="下一页" title="翻到下一页"/></div></td>';
							navStr1 += '<li id="commentPage" rel="'+(parseInt(pnb.curpage)+1)+'" alt="下一页" title="翻到下一页" class="next">下一页</li>';
						}
						navStr += '</tr>';
						navStr += '</table>';
						navStr1 += '<li class="cur">'+pnb.curpage+'</li><li>&nbsp;/&nbsp;</li><li class="total">'+pnb.lastpage+'</li></ul><div class="resetClear"></div>';
					}
				}
				//str += navStr;
				str += navStr1;
			}
			resultAreaEleMent.html(str);
			
			//绑定事件
			//翻页
			$('*[id=commentPage]').click(function(){
				gCurrCfg.comments.pagenum = $(this).attr('rel');
				showDetailMessage();
			});
			
			if( loadingEleMent.length > 0 ) loadingEleMent.fadeOut();
			resultAreaEleMent.fadeTo('slow',1);
				
			$('#proComment').unblock();
		},
		error: function(){}
	});
};
	
	//评论咨询
	//showDetailMessage();
	
	//评论中获得会员的昵称
	$('#commentFormNickName').attr('value',getCurLogMemNick());
	
	$('#commemtSubmitBtn').click(function(){
		if( !isBldMmbLogin() && ( $('#commentFormType').val() == gCurrCfg.comments.typeComment || $('#commentFormType').val() == gCurrCfg.comments.typeConsulting || $('#commentFormType').val() == gCurrCfg.comments.typeBuyershow) ){
			memberLoginPop({'url':window.location.href});
			return;
		}
		
		$('#commentFormTitle').val('');
		var content = $('#commentFormContent').val();
		var checkcode = $('#commentFormCheckCode').val();
		var error = null;

		//如果咨询类型是买家秀，那么把url当做content
		if( $('#commentFormType').val() == gCurrCfg.comments.typeBuyershow ){
			content = $.trim($('#buyerShowUrl').val());
			var buyerShowTitle = $('#buyerShowTitle').val();
			$('#commentFormTitle').val(buyerShowTitle);
			$('#commentFormContent').val(content);
			if( $.isempty(buyerShowTitle) ){
				error = '标题必须输入';
			}else if( !/^(http:\/\/){1}(.*)+/.test(content) ){
				error = '帖子链接必须填写，且必须以http://开头';
			}		
		}

		if( $.isempty(content) && $('#commentFormType').val() != gCurrCfg.comments.typeBuyershow ){
			error = '内容不能为空！';			
		}else if( content.length < 5  && $('#commentFormType').val() != gCurrCfg.comments.typeBuyershow ){
			error = '内容不能少于5个字，请多写一点吧！';
		}else if( content.length > 1024  && $('#commentFormType').val() != gCurrCfg.comments.typeBuyershow ){
			error = '内容不能多于1024个字！';
		}else if( $.isempty(checkcode) && $('#commentFormType').val() != gCurrCfg.comments.typeBuyershow  || checkcode.length!=4){
			error = '请填写正确的验证码！';			
		}
 		
		var resultAreaId = 'proComment';
		var resultAreaElement = $('#'+resultAreaId);
			
		if( !$.isempty(error) ){
			resultAreaElement.block();
			commonPromptPop({'promptMsg':error,'callback':function(){ resultAreaElement.unblock();}});
	        return;
		}
	        
		var title = '咨询';
		if( gCurrCfg.comments.type == gCurrCfg.comments.typeComment ) title = '评论';
		if( gCurrCfg.comments.type == gCurrCfg.comments.typeBuyershow ) title = '帖子';
	        
		if( !$.isempty($('#commentFormNickName').val()) ){
			$('#commentFormTitle').val($('#commentFormNickName').val()+'提交的'+title);
		}else if( $('#commentFormType').val() != gCurrCfg.comments.typeBuyershow ){
			$('#commentFormTitle').val('匿名用户提交的'+title);
		}

		if( $('#commentFormType').val() == gCurrCfg.comments.typeBuyershow ){
			$('#commentFormTitle').val(buyerShowTitle);
		}
		
		$('#frmComment').ajaxSubmit({
			description: '',
			resetForm: false,
			beforeSubmit: function(){
				$.processBlock(resultAreaId);
			},
			success: function(resp){
				resultAreaElement.unblock();
				try{
					resultAreaElement.block();
					
					var retcode = $.dealWithRetInDialog(resp,true);
					var message = '提交失败，请稍候再试！';
					if(retcode.code == 1){
						message = title+"提交成功，我们的工作人员会在一个工作日内审核回复。感谢您的支持！";
						$('a[name="regCaptchaPic"]').click();
						$('#commentFormContent').val('');
						$('#buyerShowTitle').val('');
						$('#buyerShowUrl').val('');
					}else{
						if( !$.isempty(retcode.info) ) message = retcode.info;
					}
					
					commonPromptPop({'promptMsg':message,callback:function(){resultAreaElement.unblock();}});
					resultAreaElement.block();
				}catch(e){}
			}
		});
	});
	//验证码

	$('a[name="regCaptchaPic"]').click(function(){
		try{
			$('img[name="regCaptchaPic"]')
			.load(function(){
				$(this).unbind('load');
				$('a[name="regCaptchaPic"]').html('换一换').removeClass('ac_loading');
			})
			.attr('src',g_baseUrls.base+'/auth/captcha/size/4/ssns/zbird/r/'+((new Date()).getTime()));
			
			$('a[name="regCaptchaPic"]').html('Loading...').addClass('ac_loading');
		}catch(e){}
	});
	$('a[name="regCaptchaPic"]').click();
});	

function hideNickName(){
	$('#commentFormNickName').parent().hide();
}