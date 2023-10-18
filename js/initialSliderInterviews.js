var splideInterviews = new Splide( '#splideInterviews', {
    pagination: false,
} );
var barInterviews    = splideInterviews.root.querySelector( '#InterviewSliderProgress' );


splideInterviews.on( 'mounted move', function () {

    var endInterviews  = splideInterviews.Components.Controller.getEnd() + 1;
    var rateInterviews = Math.min( ( splideInterviews.index + 1 ) / endInterviews, 1 );
    barInterviews.style.width = String( 100 * rateInterviews ) + '%';

});

splideInterviews.mount();