define(['jquery','scrollto'],function($,scrollto){

	function BackTop(el, opts){
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});
		if(this.opts.mod == 'move'){
			this.$el.on('click',$.proxy(this._move, this));
		}else{
			this.$el.on('click',$.proxy(this._go, this));
		}
		$(window).on('scroll',$.proxy(this._checkPosition, this));
		this._checkPosition();
	}
	BackTop.prototype._move = function(){
		this.scroll.slowMove();
	}
	BackTop.prototype._go = function(){
		this.scroll.toTopFast();
	}
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		if($(window).scrollTop() > this.opts.pos){
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	}
	BackTop.DEFAULTS = {
		mod: 'move',
		pos: $(window).scrollTop(),
		speed: 800
	}
	$.fn.extend({
		backtop: function(){
			return this.each(function(opts) {
				new BackTop(this, opts);
			});
		}
	});

	return {
		BackTop : BackTop
	}
});