var $, Indicator, LazyLoad, Slide;

$ = require('jquery');

Indicator = require('./indicator');

LazyLoad = require('util/image-load');

module.exports = Slide = (function() {
  function Slide(el, index, carousel) {
    this.el = el;
    this.index = index;
    this.carousel = carousel;
    this.image = this.el.children('img');
    if (this.carousel.options.indicators) {
      this.dot = new Indicator(this);
    }
  }

  Slide.prototype.listen = function() {
    return new LazyLoad(this.image, (function(_this) {
      return function() {
        _this.el.addClass('loaded');
        _this.measure();
        return _this.carousel.layout();
      };
    })(this));
  };

  Slide.prototype.activate = function() {
    this.el.addClass('active');
    return this.dot.activate();
  };

  Slide.prototype.deactivate = function() {
    this.el.removeClass('active');
    return this.dot.deactivate();
  };

  Slide.prototype.measure = function() {
    return this.dimensions = {
      width: this.image.width(),
      height: this.image.height(),
      ratio: this.image.width() / this.image.height()
    };
  };

  Slide.prototype.resize = function(width, height) {
    return this.el.css({
      width: Math.ceil(width)
    });
  };

  return Slide;

})();
