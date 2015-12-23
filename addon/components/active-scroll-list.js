import Ember from 'ember';

const { run, get, observer } = Ember;

export default Ember.Component.extend({
  tolerance: 0,
  activeIndex: -1,
  scrollTimeout: 2000,

  onActiveIndexChange: observer('activeIndex', function() {
    this.correctScroll();
  }),

  correctTopScroll() {
    let activeIndex = get(this, 'activeIndex');
    if (activeIndex === -1) { return; }
    run.schedule('afterRender', this, function() {
      let containerEl = this.$();
      let activeEl = containerEl.children().eq(activeIndex);
      let tolerance = get(this, 'tolerance');

      let containerHeight = containerEl.height();
      let currentScroll = containerEl.scrollTop();
      let relativePosTop = activeEl.offset().top - containerEl.offset().top;

      let activeElHeight = activeEl.outerHeight();
      let bottomPos = activeElHeight + relativePosTop;
      let scrollTop;
      if ((relativePosTop - tolerance) < 0) {
        scrollTop = currentScroll + relativePosTop - tolerance;
      } else if (containerHeight - tolerance < bottomPos) {
        scrollTop = currentScroll + relativePosTop + tolerance - containerHeight + activeElHeight;
      }
      if (scrollTop !== undefined) {
        containerEl.animate({ scrollTop }, 300);
      }
    });
  },

  correctScroll() {
    this.correctTopScroll();
  },

  onScroll() {
    run.cancel(this._timer);
    this._timer = run.later(this, 'correctScroll', get(this, 'scrollTimeout'));
  },

  willDestroyElement() {
    run.cancel(this._timer);
    this.$().off('scroll', this._scrollListener);
  },

  didInsertElement() {
    this._super(...arguments);
    run.schedule('afterRender', this, function() {
      this._scrollListener = run.bind(this, 'onScroll');
      this.$().on('scroll', this._scrollListener);
      this.correctScroll();
    });
  }

});
