import $ from 'jquery';
import { createCarouselView, HORIZONTAL, HorizontalCarousel } from '@component/carousel';
import App from '../app';

// This allows us to use jquery in debug!
window.$ = $;

beforeAll((done) => {
  $(done);
});

describe('App Spec', () => {
  it('should test functions', () => {
    const myMeta = App.getMeta();
    expect(myMeta).toEqual(null);
  });

  it('should render carousels', (done) => {
    loadFixtures('main.html');
    App.start();
    $(document).ready(() => {
      expect($('.scroller').css('transform')).toEqual('matrix(1, 0, 0, 1, 0, 0)');
      $('.next').trigger('click');
      // wait a bit?
      setTimeout(() => {
        // expect($('.scroller').css('transform')).not.toEqual('matrix(1, 0, 0, 1, 0, 0)');
        done();
      }, 500);
    });
  });

  it('should create horizontal carousel instance ', () => {
    loadFixtures('main.html');
    const opts = { el: '.selector' };
    console.log(createCarouselView);
    const carousel = createCarouselView(HORIZONTAL, opts);
    expect(carousel).toBeDefined();
    expect(carousel instanceof HorizontalCarousel).toBe(true);
  });

  // it('should handle qvLauncher show/hide', () => {
  //   const defaultClass = new DefaultClass();
  //   defaultClass.constructor();


  //   expect($('#mensUWCampaign .productpool .productThumbnail:first').attr('id')).toEqual('1627684');
  //   expect($('.productpool .productThumbnailItem:nth-child(2) .qvLauncher')).toBeHidden();


  //   $('.productpool .productThumbnailItem:nth-child(2)').trigger('mouseenter');
  //   expect($('.productpool:nth-child(1) .productThumbnailItem:nth-child(2) .qvLauncher')).not.toBeHidden();

  //   $('.productpool .productThumbnailItem:nth-child(2)').trigger('mouseleave');
  //   expect($('.productpool .productThumbnailItem:nth-child(2) .qvLauncher')).toBeHidden();
  // });
});

