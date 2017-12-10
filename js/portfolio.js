$(function() {
  $('.portfolio-square').click(function(event) {
    var filename = $(event.target).parent('.portfolio-square').attr('id');
    window.open('./pdf/' + filename + '.pdf', '_blank');
  });
});
