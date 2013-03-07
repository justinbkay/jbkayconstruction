// for the interior stuff
$().ready(function() {

  if ($('#img').length === 0) {
    return false;
  }

  var img = [
                {src: 'img/familyroom.jpg', alt: 'Buffalo Bend at River Rim Ranch', text: 'Buffalo Bend at River Rim Ranch.'},
                {src: 'img/custom_barnwood_oven_hood.jpg', alt: 'Custom barnwood oven hood', text: 'Custom Barnwood ovenhood.'},
                {src: 'img/horse_stalls.jpg', alt: 'Custom horse stalls.', text: 'Custom stalls.'},
                {src: 'img/wanscot.jpg', alt: 'Coffered ceiling with Craftsman style wanscot', text: 'Coffered ceiling with Craftsman style wanscot.'},
                {src: 'img/curved_staircase.jpg', alt: 'Circular Stairs with custom stair treads', text: 'Circular Stairs with custom stair treads.'},
                {src: 'img/green_room.jpg', alt: 'Three tone paint with chair rail moldings', text: 'Three tone paint with chair rail moldings.'},
                {src: 'img/custom_range_hood.jpg', alt: 'Custom range hood', text: 'Custom range hood.'},
                {src: 'img/stone_fireplace_1.jpg', alt: 'Stone Fireplace', text: 'Stone Fireplace.'},
                {src: 'img/barn_wood_ceiling.jpg', alt: 'Barn wood ceiling', text: 'Barn wood ceiling.'},
                {src: 'img/barn_door.jpg', alt: 'Barn Door', text: 'Barn Door.'},
                {src: 'img/custom_wood_kitchen.jpg', alt: 'Custom Wood Kitchen', text: 'Custom Wood Kitchen.'},
                {src: 'img/custom_hood_design.jpg', alt: 'Custom Range Hood Design', text: 'Custom Range Hood Design.'},
                {src: 'img/log_rail.jpg', alt: 'Log Stair Rail', text: 'Log Stair Rail.'},
                {src: 'img/euro_shower.jpg', alt: 'Euro Shower Door', text: 'Euro Shower Door.'},
                {src: 'img/wet_bar.jpg', alt: 'Wet Bar', text: 'Wet Bar.'},
                {src: 'img/stone_fireplace.jpg', alt: 'Stone fireplace', text: 'Stone fireplace.'},
                {src: 'img/detailed_ceiling_work.jpg', alt: 'Detailed ceiling work', text: 'Detailed ceiling work.'},
                {src: 'img/custom_kitchen_design.jpg', alt: 'Custom kitchen design', text: 'Custom kitchen design.'},
                {src: 'img/barn_door_feature.jpg', alt: 'Barn door feature', text: 'Barn door feature.'},
                {src: 'img/timber_details.jpg', alt: 'Timber details', text: 'Timber details.'},
                {src: 'img/archway_1.jpg', alt: 'Custom archway feature', text: 'Custom archway feature.'},
                {src: 'img/custom_trim.jpg', alt: 'Custom trim', text: 'Custom trim.'},
                {src: 'img/custom_home.jpg', alt: 'Custom entertainment center', text: 'Custom entertainment center.'},
                {src: 'img/stairs_1.jpg', alt: 'Custom woodwork/stairs', text: 'Custom woodwork/stairs.'},
                {src: 'img/fireplace_1.jpg', alt: 'Custom fireplace/mantle', text: 'Custom fireplace/mantle.'},
                {src: 'img/dining_1.jpg', alt: 'Dining - Kitchen - Living', text: 'Dining - Kitchen - Living.'},
                {src: 'img/kitchen_1.jpg', alt: 'Kitchen', text: 'Kitchen.'},
                {src: 'img/ceiling_1.jpg', alt: 'Custom wood ceiling', text: 'Custom wood ceiling.'},
                {src: 'img/banister.jpg', alt: 'Timber balcony', text: 'Timber balcony.'},
                {src: 'img/kitchen.jpg', alt: 'Custom kitchen', text: 'Custom kitchen.'},
                {src: 'img/staircase.jpg', alt: 'Timber stairs and balcony', text: 'Timber stairs and balcony.'},
                {src: 'img/archway.jpg', alt: 'Archway feature in Rexburg custom home', text: 'Archway feature in Rexburg custom home.'},
                {src: 'img/circular_staircase.jpg', alt: 'Circular staircase in Rexburg custom home', text: 'Circular staircase in Rexburg custom home.'},
                {src: 'img/custom_fireplace.jpg', alt: 'Custom fireplace front in Island Park cabin', text: 'Custom fireplace front in Island Park cabin.'},
                {src: 'img/timber_staircase.jpg', alt: 'Timber staircase in a cabin', text: 'Timber staircase in a cabin.'}
               ];

  for (var i = img.length - 1; i >= 0; i--){
    imageLoader(img[i]);
  };

});

var imageLoader = function(imageDetail) {
  var img = new Image();

  $(img)
      // once the image has loaded, execute this code
      .load(function () {
        // set the image hidden by default
        $(this).hide();

        // with the holding div #loader, apply:
        $('#img')
          // remove the loading class (so no background spinner),
          .removeClass('loading')
          // then insert our image
          .append(this)
          .append('<br /><div style="margin-bottom: 40px;">' + imageDetail.text + '</div>');

        // fade our image in to create a nice effect
        $(this).fadeIn();
      })

      // if there was an error loading the image, react accordingly
      .error(function () {
        alert('error');
        // notify the user that the image could not be loaded
      })

      // *finally*, set the src attribute of the new image to our image
      .attr('src', imageDetail.src)
      .attr('alt', imageDetail.alt);

};
