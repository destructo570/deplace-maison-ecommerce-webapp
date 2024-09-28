var $, Carousel, Debounce, SlideSpacefilling;

$ = require('jquery');

Debounce = require('debounce');

navigator.browserSpecs = (function() {
  var M, tem, ua;
  ua = navigator.userAgent;
  tem = void 0;
  M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: tem[1] || ''
    };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem !== null) {
      return {
        name: tem[1].replace('OPR', 'Opera'),
        version: tem[2]
      };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1]
  };
})();

if (navigator.browserSpecs.name === 'Firefox') {
  $('.featured-item figure').addClass('isFF');
}

SlideSpacefilling = require('./slide-spacefilling');

module.exports = Carousel = (function() {
  function Carousel(el1, opts) {
    this.el = el1;
    this.configure(opts);
    this.wrapper = this.el.find(this.options.wrapper);
    this.touch = {
      delta: {
        distance: 0,
        duration: 0
      }
    };
    this.build(this.options.slideType);
    this.listen();
    if (this.options.auto) {
      this.play();
    }
  }

  Carousel.prototype.configure = function(opts) {
    return this.options = $.extend({
      next: '.next',
      previous: '.prev',
      auto: true,
      interval: 4000,
      speed: 350,
      slides: '.slide',
      wrapper: '.slides',
      keyboard: false,
      touch: true,
      indicators: false,
      slideType: SlideSpacefilling
    }, opts);
  };

  Carousel.prototype.build = function(SlideType) {
    var first, last;
    this.slideEls = [];
    this.slides = [];
    this.current = 0;
    if (this.el.find(this.options.slides).length > 1) {
      this.el.find(this.options.slides).each((function(_this) {
        return function(index, el) {
          return _this.slideEls.push($(el));
        };
      })(this));
      first = this.slideEls[0];
      last = this.slideEls[this.slideEls.length - 1];
      first.before(last.clone(true));
      last.after(first.clone(true));
    }
    this.el.find('.slide').each((function(_this) {
      return function(index, el) {
        return _this.slides.push(new SlideType($(el), index, _this));
      };
    })(this));
    this.measure();
    if (this.el.find(this.options.slides).length > 1) {
      return this.pick(1, 0);
    }
  };

  Carousel.prototype.listen = function() {
    var i, len, ref, slide;
    $(window).on('resize', (function(_this) {
      return function(e) {
        var i, index, len, ref, slide;
        _this.measure();
        _this.wrapper.css({
          width: _this.slides.length * _this.viewport.width
        });
        ref = _this.slides;
        for (i = 0, len = ref.length; i < len; i++) {
          slide = ref[i];
          slide.resize(_this.viewport.width, _this.viewport.height);
        }
        if (_this.slides.length > 1) {
          index = _this.current;
          _this.wrapper.css({
            left: -index * _this.viewport.width
          });
          return _this.resize(0);
        }
      };
    })(this));
    ref = this.slides;
    for (i = 0, len = ref.length; i < len; i++) {
      slide = ref[i];
      slide.listen();
    }
    this.el.find(this.options.next).on('click', (function(_this) {
      return function(e) {
        e.preventDefault();
        return _this.next(true);
      };
    })(this));
    this.el.find(this.options.previous).on('click', (function(_this) {
      return function(e) {
        e.preventDefault();
        return _this.prev(true);
      };
    })(this));
    if (this.options.keyboard) {
      window.addEventListener('keyup', (function(_this) {
        return function(e) {
          switch (e.keyCode) {
            case 39:
              return _this.next();
            case 37:
              return _this.prev();
          }
        };
      })(this));
    }
    if (this.options.touch && this.slides.length > 1) {
      this.wrapper.on('touchstart', (function(_this) {
        return function(e) {
          return _this.touchSetup(e);
        };
      })(this));
      this.wrapper.on('touchmove', (function(_this) {
        return function(e) {
          return _this.touchPan(e);
        };
      })(this));
      return this.wrapper.on('touchend', (function(_this) {
        return function(e) {
          return _this.touchConclude(e);
        };
      })(this));
    }
  };

  Carousel.prototype.touchSetup = function(e) {
    this.touch.start = {
      position: e.touches[0].pageX,
      time: e.timeStamp
    };
    return this.el.addClass('touch');
  };

  Carousel.prototype.touchPan = function(e) {
    this.touch.delta = {
      distance: this.touch.start.position - e.touches[0].pageX,
      duration: e.timeStamp - this.touch.start.time
    };
    if (this.touch.delta.distance > 25) {
      e.preventDefault();
    }
    return this.wrapper.css({
      left: this.current === 0 && this.touch.delta.distance <= 0 ? (Math.sqrt(Math.abs(this.touch.delta.distance))) - (this.viewport.width * this.current) : this.current === this.slides.length - 1 && this.touch.delta.distance > 0 ? (-Math.sqrt(this.touch.delta.distance)) - (this.viewport.width * this.current) : (-this.touch.delta.distance) - (this.viewport.width * this.current)
    });
  };

  Carousel.prototype.touchConclude = function(e) {
    this.el.removeClass('touch');
    if (Math.abs(this.touch.delta.distance) > (this.viewport.width / 4)) {
      if (this.touch.delta.distance > 0) {
        return this.next();
      } else {
        return this.prev();
      }
    } else {
      return this.pick(this.current);
    }
  };

  Carousel.prototype.next = function(speed) {
    if (speed == null) {
      speed = this.options.speed;
    }
    return this.pick(((this.current + 1 < this.slides.length) ? this.current + 1 : 0), speed);
  };

  Carousel.prototype.prev = function(speed) {
    if (speed == null) {
      speed = this.options.speed;
    }
    return this.pick(((this.current - 1 >= 0) ? this.current - 1 : this.slides.length - 1), speed);
  };

  Carousel.prototype.pick = function(index, speed) {
    if (speed == null) {
      speed = this.options.speed;
    }
    if (speed === false) {
      this.dequeue();
    }
    if (this.wrapper.is(':not(:animated)')) {
      return this.wrapper.animate({
        left: -index * this.viewport.width
      }, (function(_this) {
        return function() {
          var i, id, len, ref, slide;
          if (index === 0) {
            index = _this.slides.length - 2;
            _this.wrapper.css({
              left: -index * _this.viewport.width
            });
          } else if (index >= _this.slides.length - 1) {
            index = 1;
            _this.wrapper.css({
              left: -index * _this.viewport.width
            });
          }
          ref = _this.slides;
          for (id = i = 0, len = ref.length; i < len; id = ++i) {
            slide = ref[id];
            if (id !== index) {
              slide.deactivate();
            }
          }
          _this.current = index;
          _this.slides[_this.current].activate();
          return _this.resize(speed);
        };
      })(this));
    }
  };

  Carousel.prototype.play = function() {
    if (this.queue != null) {
      this.dequeue();
    }
    return this.queue = window.setInterval((function(_this) {
      return function() {
        return _this.next(_this.options.speed, false);
      };
    })(this), this.options.interval);
  };

  Carousel.prototype.dequeue = function() {
    return window.clearInterval(this.queue);
  };

  Carousel.prototype.layout = function(e) {
    var i, len, ref, slide;
    this.measure();
    this.wrapper.css({
      width: this.slides.length * this.viewport.width
    });
    ref = this.slides;
    for (i = 0, len = ref.length; i < len; i++) {
      slide = ref[i];
      slide.resize(this.viewport.width, this.viewport.height);
    }
    if (this.slides.length > 1) {
      return this.pick(this.current, 0);
    }
  };

  Carousel.prototype.measure = function() {
    return this.viewport = {
      width: Math.ceil(this.el.outerWidth()),
      height: Math.floor(this.el.outerHeight()),
      ratio: this.el.outerWidth() / this.el.outerHeight()
    };
  };

  Carousel.prototype.resize = function(speed) {
    var i, len, ref, slide;
    if (speed == null) {
      speed = this.options.speed;
    }
    this.measure();
    this.wrapper.css({
      width: this.slides.length * this.viewport.width
    });
    ref = this.slides;
    for (i = 0, len = ref.length; i < len; i++) {
      slide = ref[i];
      slide.resize(this.viewport.width, this.viewport.height);
    }
    return this.wrapper.animate({
      'height': Math.ceil(this.slides[this.current].el.height())
    }, {
      duration: speed,
      queue: false
    });
  };

  return Carousel;

})();