(function($) {
  $(document).ready(function() {
    // add cards and sets
    for (var i = 0; i < 4; i++) {

      // Card set
      if (false) {//(i % 5) - 2 == 1) {


      // Card
      } else {
        var html = $('<div/>')
        html.addClass('smudge-card smudge-drag ui-widget-content').css('z-index', 10000000-i).css('background-image', 'url("cards/' + (i + 1) + '.jpg")').attr('card-' + i)
        $('#container').append(html)
      }

      
    }

    var html = $('<div/>')
    html.addClass('smudge-card ui-widget-content fin').css('z-index', 1).html('<h1>FIN</h1>')
    $('#container').append(html)

    var touch_timeout, drag_ct = $('.smudge-drag').size();
    $('.smudge-drag').each(function() {
      $(this).on('touchstart', function() {
        touch_timeout = setTimeout(function() {
          alert('show share/options')
        }, 500);
      });

      $(this).on('touchmove', function() {
        clearTimeout(touch_timeout)
      });

      $(this).draggable({
        start: function(e) {
          $(this).get(0).start_x = e.clientX
          $(this).get(0).start_y = e.clientY
          clearTimeout(touch_timeout)
        },
        drag: function(e) {
          $(this).get(0).pos_x = e.clientX
          $(this).get(0).pos_y = e.clientY
          $(this).data('dragged', true)
          clearTimeout(touch_timeout);
        },
        revert: function() {
          var dx = $(this).get(0).start_x - $(this).get(0).pos_x;
          var dy = $(this).get(0).start_y - $(this).get(0).pos_y;

          if (Math.abs(dx) > Math.abs(dy)) {
            $(this).css('z-index', $(this).css('z-index') - drag_ct)
            return true;
          } else {
            return true;
          }
        },
        stop: function(e) {
          clearTimeout(touch_timeout);
          $(this).data('dragged', false)
          var dx = $(this).get(0).start_x - $(this).get(0).pos_x;
          var dy = $(this).get(0).start_y - $(this).get(0).pos_y;

          if (Math.abs(dx) > Math.abs(dy)) {
          } else {
            if (dy > 0) {
              alert('Dive into stack')
            }
          }
        }
      });
    });


    // hide splash after 3 sec
    setTimeout(function() {
      $('#splash').addClass('fade');
    }, 1000);

  });
})(jQuery);