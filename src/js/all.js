/* PRETTYPHOTO.JS */

/* ------------------------------------------------------------------------
 * Class: prettyPhoto
 * Use: Lightbox clone for jQuery
 * Author: Stephane Caron (http://www.no-margin-for-errors.com)
 * Version: 3.0.1
 * ------------------------------------------------------------------------- */

(function($){$.prettyPhoto={version:'3.0'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({animation_speed:'fast',slideshow:false,autoplay_slideshow:false,opacity:0.7,show_title:true,allow_resize:false,default_width:500,default_height:344,counter_separator_label:'/',theme:'facebook',hideflash:false,wmode:'opaque',autoplay:true,modal:false,overlay_gallery:false,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},markup:'<div class="pp_pic_holder"> \
      <div class="ppt">&nbsp;</div> \
      <div class="pp_top"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
       <div class="pp_left"> \
       <div class="pp_right"> \
        <div class="pp_content"> \
         <div class="pp_loaderIcon"></div> \
         <div class="pp_fade"> \
          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
          <div class="pp_hoverContainer"> \
           <a class="pp_next" href="#">next</a> \
           <a class="pp_previous" href="#">previous</a> \
          </div> \
          <div id="pp_full_res"></div> \
          <div class="pp_details clearfix"> \
           <p class="pp_description"></p> \
           <a class="pp_close" href="#">Close</a> \
           <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous">Previous</a> \
            <p class="currentTextHolder">0/0</p> \
            <a href="#" class="pp_arrow_next">Next</a> \
           </div> \
          </div> \
         </div> \
        </div> \
       </div> \
       </div> \
      </div> \
      <div class="pp_bottom"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
     </div> \
     <div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \
        <a href="#" class="pp_arrow_previous">Previous</a> \
        <ul> \
         {gallery} \
        </ul> \
        <a href="#" class="pp_arrow_next">Next</a> \
       </div>',image_markup:'<img id="fullResImage" src="" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline clearfix">{content}</div>',custom_markup:''},pp_settings);var matchedObjects=this,percentBased=false,correctSizes,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width()-18,pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize').resize(function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown').keydown(function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');break;case 39:$.prettyPhoto.changePage('next');break;case 27:if(!settings.modal)
$.prettyPhoto.close();break;};return false;};};});}
$.prettyPhoto.initialize=function(){settings=pp_settings;if($.browser.msie&&parseInt($.browser.version)==6)settings.theme="light_square";_buildOverlay(this);if(settings.allow_resize)
$(window).scroll(function(){_center_overlay();});_center_overlay();set_position=jQuery.inArray($(this).attr('href'),pp_images);$.prettyPhoto.open();return false;}
$.prettyPhoto.open=function(event){if(typeof settings=="undefined"){settings=pp_settings;if($.browser.msie&&$.browser.version==6)settings.theme="light_square";_buildOverlay(event.target);pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray("");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=0;}
if($.browser.msie&&$.browser.version==6)$('select').css('visibility','hidden');if(settings.hideflash)$('object,embed').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');movie_width=(parseFloat(grab_param('width',pp_images[set_position])))?grab_param('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(grab_param('height',pp_images[set_position])))?grab_param('height',pp_images[set_position]):settings.default_height.toString();if(movie_width.indexOf('%')!=-1||movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}else{percentBased=false;}
$pp_pic_holder.fadeIn(function(){imgPreloader="";switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position>$(pp_images).size())nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup;$pp_pic_holder.find('#fullResImage').attr('src',pp_images[set_position]);imgPreloader.onload=function(){correctSizes=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':correctSizes=_fitToViewport(movie_width,movie_height);movie='http://www.youtube.com/v/'+grab_param('v',pp_images[set_position]);if(settings.autoplay)movie+="&autoplay=1";toInject=settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':correctSizes=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=correctSizes['width']+'/embed/?moog_width='+correctSizes['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,movie);break;case'quicktime':correctSizes=_fitToViewport(movie_width,movie_height);correctSizes['height']+=15;correctSizes['contentHeight']+=15;correctSizes['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':correctSizes=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':correctSizes=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,frame_url);break;case'custom':correctSizes=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline clearfix"></div></div>').appendTo($('body'));correctSizes=_fitToViewport($(myClone).width(),$(myClone).height());$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0){set_position=0;return;};}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1){set_position=0;}}else{set_position=direction;};if(!doresize)doresize=true;$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage){currentGalleryPage=0;};}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0){currentGalleryPage=totalPage;};}else{currentGalleryPage=direction;};itemsToSlide=(currentGalleryPage==totalPage)?pp_images.length-((totalPage)*itemsPerPage):itemsPerPage;$pp_pic_holder.find('.pp_gallery li').each(function(i){$(this).animate({'left':(i*itemWidth)-((itemsToSlide*itemWidth)*currentGalleryPage)});});};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}
$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}
$.prettyPhoto.close=function(){clearInterval(pp_slideshow);$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if($.browser.msie&&$.browser.version==6)$('select').css('visibility','visible');if(settings.hideflash)$('object,embed').css('visibility','visible');$(this).remove();$(window).unbind('scroll');settings.callback();doresize=true;pp_open=false;delete settings;});};_showContent=function(){$('.pp_loaderIcon').hide();$ppt.fadeTo(settings.animation_speed,1);projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(correctSizes['containerHeight']/2));if(projectedTop<0)projectedTop=0;$pp_pic_holder.find('.pp_content').animate({'height':correctSizes['contentHeight']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':(windowWidth/2)-(correctSizes['containerWidth']/2),'width':correctSizes['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(correctSizes['height']).width(correctSizes['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])=="image"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}
if(correctSizes['resized'])$('a.pp_expand,a.pp_contract').fadeIn(settings.animation_speed);if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();settings.changepicturecallback();pp_open=true;});_insert_gallery();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){if(set_position==setCount-1){$pp_pic_holder.find('a.pp_next').css('visibility','hidden');$pp_pic_holder.find('a.pp_next').addClass('disabled').unbind('click');}else{$pp_pic_holder.find('a.pp_next').css('visibility','visible');$pp_pic_holder.find('a.pp_next.disabled').removeClass('disabled').bind('click',function(){$.prettyPhoto.changePage('next');return false;});};if(set_position==0){$pp_pic_holder.find('a.pp_previous').css('visibility','hidden').addClass('disabled').unbind('click');}else{$pp_pic_holder.find('a.pp_previous.disabled').css('visibility','visible').removeClass('disabled').bind('click',function(){$.prettyPhoto.changePage('previous');return false;});};(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};_getDimensions(imageWidth,imageHeight);};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+16,contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=16)?0:detailsHeight;if($.browser.msie&&$.browser.version==7)detailsHeight+=8;$pp_details.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+$ppt.height()+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}
function _getFileType(itemSrc){if(itemSrc.match(/youtube\.com\/watch/i)){return'youtube';}else if(itemSrc.match(/vimeo\.com/i)){return'vimeo';}else if(itemSrc.indexOf('.mov')!=-1){return'quicktime';}else if(itemSrc.indexOf('.swf')!=-1){return'flash';}else if(itemSrc.indexOf('iframe')!=-1){return'iframe';}else if(itemSrc.indexOf('custom')!=-1){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();titleHeight=$ppt.height(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height($(document).height());};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=(settings.theme=="facebook")?58:38;itemsPerPage=Math.floor((correctSizes['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').hide();}else{$pp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth+navWidth;$pp_pic_holder.find('.pp_gallery').width(galleryWidth).css('margin-left',-(galleryWidth/2));$pp_pic_holder.find('.pp_gallery ul').width(itemsPerPage*itemWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<=totalPage)?Math.floor(set_position/itemsPerPage):totalPage;if(itemsPerPage){$pp_pic_holder.find('.pp_gallery').hide().show().removeClass('disabled');}else{$pp_pic_holder.find('.pp_gallery').hide().addClass('disabled');}
$.prettyPhoto.changeGalleryPage(goToPage);$pp_pic_holder.find('.pp_gallery ul li:eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');$pp_pic_holder.find('.pp_gallery').hide();}}
function _buildOverlay(caller){theRel=$(caller).attr('data-type');galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('data-type').indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(caller).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('data-type').indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):"";}):$.makeArray($(caller).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr('data-type').indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):"";}):$.makeArray($(caller).attr('title'));$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var i=0;i<pp_images.length;i++){var regex=new RegExp("(.*?)\.(jpg|jpeg|png|gif)$");var results=regex.exec(pp_images[i]);if(!results){classname='default';}else{classname='';}
toInject+="<li class='"+classname+"'><a href='#'><img src='"+pp_images[i]+"' width='50' alt='' /></a></li>";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_pic_holder.find('.pp_gallery .pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_gallery .pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_pic_holder.find('.pp_gallery ul li').each(function(i){$(this).css({'position':'absolute','left':i*itemWidth});$(this).find('a').unbind('click').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}
$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':'100%'}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};return this.unbind('click').click($.prettyPhoto.initialize);};function grab_param(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?"":results[1];}})(jQuery);


/* BGSLIDER.JS */

;
(function($, undefined) {
	var _timer = [], _fw = window._fw = $.fn._fw = function(_) {
		var i, name = []
		for (i in _)
			if (_.hasOwnProperty(i))
				name.push(i)
		$(this).each(
				function() {
					for ( var i = 0, opt; i < name.length; i++)
						if (_fw.meth[name[i]])
							opt = $
									.extend(clone(_fw.meth[name[i]]),
											_[name[i]]), opt.init.call($(this)
									.data(name[i], opt), opt)
				})
		return this
	}, _meth = _fw.meth = {}, _hlp = _fw.hlp = {
		clone : function(obj) {
			if (!obj || typeof obj != typeof {})
				return obj
			if (obj instanceof Array)
				return [].concat(obj)
			var tmp = new obj.constructor(), i
			for (i in obj)
				if (obj.hasOwnProperty(i))
					tmp[i] = clone(obj[i])
			return tmp
		},
		srlz : function(str) {
			if (!str)
				return {}
			str = str.split(/[\/&]/)
			for ( var i = 0, tmp, ret = {}; i < str.length; i++)
				if (str[i])
					tmp = str[i].split('='),
							ret[tmp[1] ? tmp[0] : i] = tmp[1] ? tmp[1] : tmp[0]
			return ret
		},
		dStr : function(obj) {
			var key, ret = ''
			for (key in obj)
				if (obj.hasOwnProperty(key))
					if (key / 1 == '' / 1)
						ret += !ret ? obj[key] + '/' : obj[key]
					else
						ret += !ret ? key + '=' + obj[key] + '&' : key + '='
								+ obj[key]
			return ret
		}
	}, clone = _hlp.clone

	$.fn.extend({
		bgSlider : function(opt) {
			opt = opt || {}
			opt = {
				bgSlider : opt
			}
			this._fw(opt)
		}
	})

	$
			.extend(
					_fw.meth,
					{
						bgSlider : {
							slideshow : false,
							duration : 1500,
							easing : '',
							preload : false,
							pagination : false,
							pagActiveCl : 'current',
							pagEv : 'click',
							pagArea : 'a',
							current : 0,
							currN : 0,
							method : 'fit',
							altCSS : {},
							padding : 0,
							preload : false,
							spinner : false,
							minSpinnerWait : 150,
							preloadFu : function() {
								var opt = this, img = $('<img>').css({
									position : 'absolute',
									left : '-999%'
								}).appendTo('body'), num = opt.images.length;
								(function() {
									if (num)
										img.load(arguments.callee).attr({
											src : opt.images[--num]
										})
									else
										img.remove()
								})()
							},
							pagsFu : function() {
								var opt = this, pags = opt.pags = $(opt.pagination
										+ ' li')
								if (!opt.images)
									opt.images = [];
								// pags.each(function(i){
								// opt.images.push($('a',this).attr('href'))
								// })
								for ( var i = 1; i <= 4; i++) {
									opt.images.push('images/photos/photo' + i
											+ '.jpg');
								}
								pags.find(opt.pagArea).each(function(i) {
									$(this).data({
										num : i
									})
								})
								pags.parent().delegate(
										opt.pagination
												+ ':not(.'
												+ opt.pagActiveCl
												+ ')'
												+ (opt.pagArea ? ' '
														+ opt.pagArea : ''),
										opt.pagEv,
										function() {
											var th = $(this)
											opt.changeFu(th.data('num'))
											opt.pags.not(
													th.parent().addClass(
															opt.pagActiveCl))
													.removeClass(
															opt.pagActiveCl);
											// Cufon.replace('.pagination li', {
											// fontFamily: 'Ubuntu', hover:true
											// });
											return false
										})
							},
							preFu : function() {
								var opt = this;
								var num = Math.floor(Math.random()
										* opt.images.length);
								opt.img.css({
									position : 'absolute',
									left : 0,
									top : 0
								}).css(opt.altCSS).attr({
									src : opt.images[num]
								})
								opt.img.each(function() {
									var _f = function() {
										opt.resizeFu()
										opt.img.data({
											width : opt.img.width(),
											height : opt.img.height()
										})
									}
									if (this.complete)
										_f()
									else
										$(this).load(_f)
								})

								opt.holder.css({
									position : 'fixed',
									left : 0,
									right : 0,
									top : 0,
									bottom : 0,
									zIndex : -1
								}).append(opt.img)
								if (opt.spinner)
									opt.spinner.hide()
							},
							resizeFu : function() {
								var opt = this, img = opt.img, w = opt.wi, h = opt.he, l = img
										.css('left'), t = img.css('top'), bw = document.body.offsetWidth
										- opt.padding, bh = document.body.offsetHeight, k = w
										/ h

							},
							changeFu : function(n) {
								var opt = this
								n = Math.floor(Math.random()
										* opt.images.length);
								while (n == opt.currN)
									n = Math.floor(Math.random()
											* opt.images.length);
								opt.currN = n;
								opt.showFu(opt.images[n])
							},
							nextFu : function() {
								var opt = this, n = opt.currN
								opt.changeFu(++n < opt.images.length ? n
										: n = 0)
								opt.pags.eq(n).addClass(opt.pagActiveCl)
										.siblings()
										.removeClass(opt.pagActiveCl)
							},
							prevFu : function() {
								var opt = this, n = opt.currN
								opt.changeFu(--n >= 0 ? n
										: n = opt.images.length - 1)
								opt.pags.eq(n).addClass(opt.pagActiveCl)
										.siblings()
										.removeClass(opt.pagActiveCl);
								// Cufon.replace('.pagination li', { fontFamily:
								// 'Ubuntu', hover:true });
							},
							showFu : function(src) {
								var opt = this, clone = opt.clone = opt.img
										.clone(true)
								if (opt.slideshow)
									clearInterval(_timer[0])
								clone
										.css({
											opacity : 0,
											left : 0,
											top : 0
										})
										.appendTo(opt.holder)
										.width(opt.img.width())
										.load(
												function() {
													var th = $(this)
													opt.holder.find('>*')
															.stop()
													setTimeout(
															function() {
																opt.spinner
																		.hide()
																opt.wi = th
																		.width()
																opt.he = th
																		.height()
																clone
																		.stop()
																		.animate(
																				{
																					opacity : 1
																				},
																				{
																					duration : opt.duration,
																					easing : opt.easing,
																					complete : function() {
																						var tmp = opt.holder
																								.find('img')
																						opt.img = $(this)
																						tmp
																								.not(
																										tmp
																												.last())
																								.remove()
																						opt
																								.resizeFu()
																					}
																				})
															},
															opt.minSpinnerWait)
												}).attr({
											src : src
										})
								opt.spinner.show()
								if (opt.slideshow)
									_timer[0] = setInterval(function() {
										opt.nextFu()
									}, opt.slideshow)
							},
							init : function(opt) {
								var holder = opt.holder = this, img = opt.img = $('<img>')
								if (opt.pagination)
									opt.pagsFu()
								if (opt.spinner)
									opt.spinner = $(opt.spinner)
								opt.preFu()
								if (opt.preload)
									opt.preloadFu()
								window.onresize = function() {
									opt.resizeFu()
								}
								if (opt.slideshow)
									_timer[0] = setInterval(function() {
										opt.nextFu()
									}, opt.slideshow)
								holder.data({
									opt : opt
								})
							}
						}
					})
})(jQuery)


/* SCRIPT.JS */


$(document).ready(function() {
	
	$('.close span, .button1 span, .tabs .nav li a span, .lightbox-image span ').css({opacity:'0'})
	$('.tabs .nav .selected a span').css({opacity:'1'})
	
	$('.close, .button1').hover(function(){
		$(this).find('span').stop().animate({opacity:'1'})							
	}, function(){
		$(this).find('span').stop().animate({opacity:'0'})							
	})
	
	$('.lightbox-image').hover(function(){
		$(this).find('span').stop().animate({opacity:'0.4'})							
	}, function(){
		$(this).find('span').stop().animate({opacity:'0'})							
	})
	
	$('.tabs .nav li a').hover(function(){
		$(this).find('span').stop().animate({opacity:'1'})							
	}, function(){
		if (!$(this).parent().hasClass('selected')) {
			$(this).find('span').stop().animate({opacity:'0'})							
		}
	})
	
	//tabs
	tabs.init();
	
	// prettyPhoto
		$("a[data-type^='prettyPhoto']").prettyPhoto({theme:'light_square'});
	
	//bg animate
	$('#bgSlider').bgSlider({
		duration:1200,
		pagination:'.pagination',
		preload:true,
		spinner:'.bg_spinner'
	})
		
 });

/* PAGES.JS */
$(window).load(function() {	
	var act='';
	
	$('#content > ul > li').css({position:'absolute', display:'none'});
	$('#content > ul > li').find('.box1').css({height:'0'})
	
	$('#menu > li > a span').css({opacity:'0'})
	
	$('#menu > li > a').hover(function(){
		$(this).find(' > span').stop().animate({opacity:'1'},600);						   
	}, function(){
		if (!$(this).hasClass('active')) {
			$(this).find(' > span').stop().animate({opacity:'0'},600);						   
		}
	})
	
	$('#menu > li').each(function(num){
		$(this).data({num:num})
	})
	$('#content > ul > li').each(function(num){
		$(this).data({num:num})
	})
	
	if (location.hash.slice(0,3)=='#!/') {
		page=location.hash.slice(3);
		open_page('#'+page);
		fl=false;
	}
	if ((location.hash=='#')||(location.hash=='')) {
		open_page('');
		fl=true;
			$('#content').stop().animate({height:'668'})
	}
	$('a').click(function(){
		if ($(this).attr('href').slice(0,3)=='#!/') {
			page=$(this).attr('href').slice(3);	
			open_page('#'+page);
			return false;
		}
		if ($(this).attr('data-type')=='close') {
			close_page()	
		}
	})
	function open_page(page){
		location.hash='#!/'+page.slice(1);
		$('#menu a').removeClass('active').find(' > span').stop().animate({opacity:'0'},600);
		//Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
		num=$(page).data('num');
		$('#menu > li').each(function(){					  
			if ($(this).data('num')==num) {
				$(this).find('> a').addClass('active').find('> span').stop().animate({opacity:'1'},600);
				//Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
			}
		})
		fl=false;
		$('#content').stop().animate({height:'868'})
		if (act!='') {
			$(act).find('.box1').stop().animate({height:'0'},700,'easeOutCirc', function(){
				$(act).css({display:'none'});
				$(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},700, 'easeOutCirc', function(){
					act=page;	
				});	
			})
		} else {
			$(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},700, 'easeOutCirc', function(){
				act=page;	
			});		
		}
	}
	function close_page(page){
		$('#menu a').removeClass('active').find(' > span').stop().animate({opacity:'0'},600);
		//Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
		location.hash='#';
		$(act).find('.box1').stop().animate({height:'0'},700,'easeOutCirc', function(){
			$(act).css({display:'none'});
			act='';
			fl=true;
			$('#content').stop().animate({height:'668'})
		});	
		return false;
	}
})

/* BG.JS */
var fl;
$(document).ready(function() {

	var w_img = 2800, h_img = 1700;
	var w, new_w, h, new_h, num;
	var h_cont = 1000, h_cont_new = 1000;
	setWidth();
	setHeight();
	w = new_w;
	h = new_h;
	setSize();
	function setWidth() {
		new_w = $(window).width();
	}
	function setHeight() {
		new_h = $(window).height();
	}
	function setSize() {
		if ((w / w_img) > (h / h_img)) {
			w_img_new = w + 20;
			h_img_new = ~~((w + 20) * h_img / w_img);
		} else {
			h_img_new = h + 20;
			w_img_new = ~~((h + 20) * w_img / h_img);
		}
		$('#bgSlider img').css({
			width : w_img_new,
			height : h_img_new
		});
		if (h > h_cont) {
			m_top = ~~((h - h_cont) / 2);
		} else
			m_top = 0
		$('.box').stop().animate({
			paddingTop : m_top + 20
		}, 1000, 'easeOutCirc');
		h_cont_new = h_cont
	}
	setInterval(setNew, 1);
	function setNew() {
		setWidth();
		setHeight();
		if (fl) {
			h_cont = 800;
		} else {
			h_cont = 1000;
		}
		if ((w != new_w) || (h != new_h) || (h_cont_new != h_cont)) {
			w = new_w;
			h = new_h;
			setSize();
		}
	}
})

/* TABS.JS */
	tabs = {
  init : function(){
   $('.tabs').each(function(){

    var th=$(this),
     tContent=$('.tab-content',th),
     navA=$('.nav a',th)

    tContent.not(tContent.eq(0)).hide()

    navA.click(function(){
     	var th=$(this),
      	tmp=th.attr('href')
     	tContent.not($(tmp.slice(tmp.indexOf('#'))).fadeIn(1000)).hide()
	 	$(th).parent().addClass('selected').siblings().removeClass('selected').find('span').stop().animate({opacity:'0'},600);
	 	//Cufon.refresh();
    	return false;
    });
   });

  }
 }