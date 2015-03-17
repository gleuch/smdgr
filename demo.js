(function($) {
  $(document).ready(function() {
    // add cards and sets
    for (var i = 0; i < 10; i++) {

      // Card set
      if ((i % 5) - 2 == 1) {


      // Card
      } else {
        var html = $('<div/>')
        html.addClass('smudge-card smudge-drag ui-widget-content').css('z-index', 1000-i).html('Card ' + (i+1)).attr('card-'+ i)
        $('#container').append(html)
      }

      
    }

    $('.smudge-drag').each(function() {
      $(this).draggable({
        start: function() {
        },
        drag: function() {
          $(this).data('dragged', true)
        },
        stop: function() {
          $(this).data('dragged', false)
          $(this).hide()
        }
      });
    });


    // hide splash after 3 sec
    setTimeout(function() {
      $('#splash').addClass('fade');
    }, 1000);

  });
})(jQuery);