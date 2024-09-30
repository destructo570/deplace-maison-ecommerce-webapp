var $, Indicator;

$ = require('jquery');

module.exports = Indicator = (function() {
  function Indicator(slide, options) {
    this.slide = slide;
    if (options == null) {
      options = {};
    }
    this.options = $.extend(true, {
      class_name: 'dot'
    }, options);
    this.el = $('<div />').addClass(this.options.class_name);
    this.el.appendTo(this.slide.carousel.options.indicators);
    this.listen();
  }

  Indicator.prototype.listen = function() {
    return this.el.on('click', (function(_this) {
      return function(e) {
        return _this.slide.carousel.pick(_this.slide.index, 0, true);
      };
    })(this));
  };

  Indicator.prototype.activate = function() {
    return this.el.addClass('on');
  };

  Indicator.prototype.deactivate = function() {
    return this.el.removeClass('on');
  };

  return Indicator;

})();
