;(function(a){"use strict";function c(b,d,e,f){function l(a){a.timeout&&(g.cycleTimeout=setTimeout(function(){c(b,a,0,!a.rev)},a.timeout))}if(!d.busy){var g=b[0].parentNode,h=b[d.currSlide],i=b[d.nextSlide];if(0!==g.cycleTimeout||e)if(e||!g.cyclePause){d.before.length&&a.each(d.before,function(a,b){b.apply(i,[h,i,d,f])});var j=function(){a.browser.msie&&this.style.removeAttribute("filter"),a.each(d.after,function(a,b){b.apply(i,[h,i,d,f])}),l(d)};d.nextSlide!=d.currSlide&&(d.busy=1,a.fn.cycle.custom(h,i,d,j));var k=d.nextSlide+1==b.length;d.nextSlide=k?0:d.nextSlide+1,d.currSlide=k?b.length-1:d.nextSlide-1}else l(d)}}function d(a,b,d){var e=a[0].parentNode,f=e.cycleTimeout;return f&&(clearTimeout(f),e.cycleTimeout=0),b.nextSlide=b.currSlide+d,0>b.nextSlide?b.nextSlide=a.length-1:b.nextSlide>=a.length&&(b.nextSlide=0),c(a,b,1,d>=0),!1}var b="Lite-1.6";a.fn.cycle=function(b){return this.each(function(){b=b||{},this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=0,this.cyclePause=0;var e=a(this),f=b.slideExpr?a(b.slideExpr,this):e.children(),g=f.get();if(2>g.length)return window.console&&console.log("terminating; too few slides: "+g.length),void 0;var h=a.extend({},a.fn.cycle.defaults,b||{},a.metadata?e.metadata():a.meta?e.data():{}),i=a.isFunction(e.data)?e.data(h.metaAttr):null;i&&(h=a.extend(h,i)),h.before=h.before?[h.before]:[],h.after=h.after?[h.after]:[],h.after.unshift(function(){h.busy=0});var j=this.className;h.width=parseInt((j.match(/w:(\d+)/)||[])[1],10)||h.width,h.height=parseInt((j.match(/h:(\d+)/)||[])[1],10)||h.height,h.timeout=parseInt((j.match(/t:(\d+)/)||[])[1],10)||h.timeout,"static"==e.css("position")&&e.css("position","relative"),h.width&&e.width(h.width),h.height&&"auto"!=h.height&&e.height(h.height);var k=0;f.css({position:"absolute",top:0}).each(function(b){a(this).css("z-index",g.length-b)}),a(g[k]).css("opacity",1).show(),a.browser.msie&&g[k].style.removeAttribute("filter"),h.fit&&h.width&&f.width(h.width),h.fit&&h.height&&"auto"!=h.height&&f.height(h.height),h.pause&&e.hover(function(){this.cyclePause=1},function(){this.cyclePause=0});var l=a.fn.cycle.transitions[h.fx];if(l&&l(e,f,h),f.each(function(){var b=a(this);this.cycleH=h.fit&&h.height?h.height:b.height(),this.cycleW=h.fit&&h.width?h.width:b.width()}),h.cssFirst&&a(f[k]).css(h.cssFirst),h.timeout)for(h.speed.constructor==String&&(h.speed={slow:600,fast:200}[h.speed]||400),h.sync||(h.speed=h.speed/2);250>h.timeout-h.speed;)h.timeout+=h.speed;h.speedIn=h.speed,h.speedOut=h.speed,h.slideCount=g.length,h.currSlide=k,h.nextSlide=1;var m=f[k];h.before.length&&h.before[0].apply(m,[m,m,h,!0]),h.after.length>1&&h.after[1].apply(m,[m,m,h,!0]),h.click&&!h.next&&(h.next=h.click),h.next&&a(h.next).unbind("click.cycle").bind("click.cycle",function(){return d(g,h,h.rev?-1:1)}),h.prev&&a(h.prev).unbind("click.cycle").bind("click.cycle",function(){return d(g,h,h.rev?1:-1)}),h.timeout&&(this.cycleTimeout=setTimeout(function(){c(g,h,0,!h.rev)},h.timeout+(h.delay||0)))})},a.fn.cycle.custom=function(b,c,d,e){var f=a(b),g=a(c);g.css(d.cssBefore);var h=function(){g.animate(d.animIn,d.speedIn,d.easeIn,e)};f.animate(d.animOut,d.speedOut,d.easeOut,function(){f.css(d.cssAfter),d.sync||h()}),d.sync&&h()},a.fn.cycle.transitions={fade:function(a,b,c){b.not(":eq(0)").hide(),c.cssBefore={opacity:0,display:"block"},c.cssAfter={display:"none"},c.animOut={opacity:0},c.animIn={opacity:1}},fadeout:function(b,c,d){d.before.push(function(b,c,d,e){a(b).css("zIndex",d.slideCount+(e===!0?1:0)),a(c).css("zIndex",d.slideCount+(e===!0?0:1))}),c.not(":eq(0)").hide(),d.cssBefore={opacity:1,display:"block",zIndex:1},d.cssAfter={display:"none",zIndex:0},d.animOut={opacity:0},d.animIn={opacity:1}}},a.fn.cycle.ver=function(){return b},a.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:!1,prev:null,speed:1e3,slideExpr:null,sync:!0,timeout:4e3}})(jQuery);
jQuery(document).ready(function(a){"placeholder"in document.createElement("input")||(a("input[placeholder], textarea[placeholder]").each(function(){var b=a(this).attr("placeholder");""==this.value&&(this.value=b),a(this).focus(function(){this.value==b&&(this.value="")}).blur(function(){""==a.trim(this.value)&&(this.value=b)})}),a("form").submit(function(){a(this).find("input[placeholder], textarea[placeholder]").each(function(){this.value==a(this).attr("placeholder")&&(this.value="")})}))});

jQuery(window).load(function() {
	jQuery('.genesis-awesome-slider').flexslider({
		namespace      : "flex-",
		selector       : ".slides > li",
		animation      : "slide",
		easing         : "swing",
		direction      : "horizontal",
		reverse        : false,
		animationLoop  : true,
		smoothHeight   : true,
		slideshow      : true,
		slideshowSpeed : 8000,
		animationSpeed : 800,
		controlNav     : false,
		start          : function(){},
		before         : function(){},
		after          : function(){},
		end            : function(){},
		added          : function(){},
		removed        : function(){}
	});
});


jQuery(document).ready(function($) {
	$('#genesis-awesome-testimonials ul').cycle({
		fx: 'fade',
		before : function( curr, next ) {
			$("#genesis-awesome-testimonials ul").css({ 'height' : $(next).height() });
		}
	});
}); 
