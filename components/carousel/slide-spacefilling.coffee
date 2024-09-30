var $, ImageCover, Slide, SpacefillingSlide,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$ = require('jquery');

Slide = require('carousel/slide');

ImageCover = require('util/image-cover');

module.exports = SpacefillingSlide = (function(superClass) {
  extend(SpacefillingSlide, superClass);

  function SpacefillingSlide(el, index, carousel) {
    SpacefillingSlide.__super__.constructor.call(this, el, index, carousel);
    this.cover = new ImageCover(this.image);
  }

  SpacefillingSlide.prototype.resize = function(width, height) {
    this.el.css({
      width: Math.ceil(width),
      height: Math.ceil(height)
    });
    return this.center();
  };

  SpacefillingSlide.prototype.center = function() {
    this.measure();
    return this.cover.resize();
  };

  return SpacefillingSlide;

})(Slide);
