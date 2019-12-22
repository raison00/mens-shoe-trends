
/**
   * Entry point for running the application.
   * Must export an object with a start() method.
   *
   * Since this is a feature, the entry point is only used for running it in isolation.
   * When consumed by a page, the entry point will be defined by the consumer.
   */

import $ from 'jquery';
import { createCarouselView, HORIZONTAL, ArrowIconSize } from '@component/carousel'; // non-scaffolded import for carousel
// import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
// import _ from 'underscore';
import '@core/vendor/radio.shim'; // shim app.channel
import './src/scss/mens-shoe-trends.scss';
// import Example from './src/mens-shoe-trends';

const Context = require('@component/common/src/util/Context');

Context.add('product-thumbnail', 'js', require.context('@component/product-thumbnail/src/views/mcom', true, /\.js$/));
Context.add('product-thumbnail', 'hbs', require.context('@component/product-thumbnail/src/templates/partials/component-product-thumbnail/mcom', true, /\.hbs$/));

const PageApp = new Marionette.Application();

PageApp.getMeta = () => null;


PageApp.on('start', () => {
  /*
     Assume templates from above has rendered from Express.js sever side rendering.
     Instantiate vertical/horizontal carousel.,
     */
  $(document).ready(() => {
    const horizontalCarousels = $("[id^='horizontal-holder']").toArray();
    horizontalCarousels.forEach((domCarousel) => {
      const horizontalCarousel = createCarouselView(HORIZONTAL, {
        el: `#${$(domCarousel).attr('id')}`,
        arrowIconSize: ArrowIconSize.LARGE,
        ssr: true,
      });
      horizontalCarousel.render();
    });
    // $(window).resize(() => {
    //   const windowHeight = $(window).height();
    //   const ninetypercent = 0.9 * windowHeight;
    //   $(document).scroll(function () {
    //     const y = $(this).scrollTop();
    //     if (y > ninetypercent) {
    //       $('nav').addClass('sticky');
    //     } else {
    //       $('nav').removeClass('sticky');
    //     }
    //   });
    // }).resize();
  });
});

export default PageApp;
