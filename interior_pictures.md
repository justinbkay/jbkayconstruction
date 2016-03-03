---
layout: default
title: Interior Pictures of our work
permalink: /interior_pictures/
---

<div class="row">
  <div class="col-lg-3">
  </div>
  <div class="col-xs-12 col-lg-6">
    <h2 class="spacer-top marginleft10">Interior Pictures</h2>
    <div id="primer">
      <img src="/assets/images/timber_railings.jpg" alt="Timber Railings" class="img-rounded img-responsive" />
      <br>
      <div style="margin-bottom: 40px; margin-left: 10px;" class="lead">Timber Railings.</div>
    </div>

    <div id="img" class="center">
    </div>
  </div>
  <div class="col-lg-3">
  </div>
</div>

<script type="text/javascript">
// for the interior stuff
$().ready(function() {

  if ($('#img').length === 0) {
    return false;
  }

  var img = [
                {src: '/assets/images/stone_box.jpg', alt: '6\' Stone Box', text: '6\' Stone Box'},
                {src: '/assets/images/sculpted_shower_door.jpg', alt: 'Sculpted Shower Door', text: 'Sculpted Shower Door'},
                {src: '/assets/images/reclaimed_timber_ceiling.jpg', alt: 'Reclaimed Timber Ceiling', text: 'Reclaimed Timber Ceiling'},
                {src: '/assets/images/kitchen_0914.jpg', alt: 'Kitchen', text: 'Kitchen'},
                {src: '/assets/images/iron_fireplace_doors.jpg', alt: 'Iron Fireplace Doors', text: 'Iron Fireplace Doors'},
                {src: '/assets/images/fireplace_0914.jpg', alt: 'Fireplace', text: 'Fireplace'},
                {src: '/assets/images/decorative_railing.jpg', alt: 'Decorative Railing', text: 'Decorative Railing'},
                {src: '/assets/images/copper_ceiling.jpg', alt: 'Copper Ceiling', text: 'Copper Ceiling'},
                {src: '/assets/images/familyroom.jpg', alt: 'Buffalo Bend at River Rim Ranch', text: 'Buffalo Bend at River Rim Ranch.'},
                {src: '/assets/images/custom_barnwood_oven_hood.jpg', alt: 'Custom barnwood oven hood', text: 'Custom Barnwood ovenhood.'},
                {src: '/assets/images/horse_stalls.jpg', alt: 'Custom horse stalls.', text: 'Custom stalls.'},
                {src: '/assets/images/wanscot.jpg', alt: 'Coffered ceiling with Craftsman style wanscot', text: 'Coffered ceiling with Craftsman style wanscot.'},
                {src: '/assets/images/curved_staircase.jpg', alt: 'Circular Stairs with custom stair treads', text: 'Circular Stairs with custom stair treads.'},
                {src: '/assets/images/green_room.jpg', alt: 'Three tone paint with chair rail moldings', text: 'Three tone paint with chair rail moldings.'},
                {src: '/assets/images/custom_range_hood.jpg', alt: 'Custom range hood', text: 'Custom range hood.'},
                {src: '/assets/images/stone_fireplace_1.jpg', alt: 'Stone Fireplace', text: 'Stone Fireplace.'},
                {src: '/assets/images/barn_wood_ceiling.jpg', alt: 'Barn wood ceiling', text: 'Barn wood ceiling.'},
                {src: '/assets/images/barn_door.jpg', alt: 'Barn Door', text: 'Barn Door.'},
                {src: '/assets/images/custom_wood_kitchen.jpg', alt: 'Custom Wood Kitchen', text: 'Custom Wood Kitchen.'},
                {src: '/assets/images/custom_hood_design.jpg', alt: 'Custom Range Hood Design', text: 'Custom Range Hood Design.'},
                {src: '/assets/images/log_rail.jpg', alt: 'Log Stair Rail', text: 'Log Stair Rail.'},
                {src: '/assets/images/euro_shower.jpg', alt: 'Euro Shower Door', text: 'Euro Shower Door.'},
                {src: '/assets/images/wet_bar.jpg', alt: 'Wet Bar', text: 'Wet Bar.'},
                {src: '/assets/images/stone_fireplace.jpg', alt: 'Stone fireplace', text: 'Stone fireplace.'},
                {src: '/assets/images/detailed_ceiling_work.jpg', alt: 'Detailed ceiling work', text: 'Detailed ceiling work.'},
                {src: '/assets/images/custom_kitchen_design.jpg', alt: 'Custom kitchen design', text: 'Custom kitchen design.'},
                {src: '/assets/images/barn_door_feature.jpg', alt: 'Barn door feature', text: 'Barn door feature.'},
                {src: '/assets/images/timber_details.jpg', alt: 'Timber details', text: 'Timber details.'},
                {src: '/assets/images/archway_1.jpg', alt: 'Custom archway feature', text: 'Custom archway feature.'},
                {src: '/assets/images/custom_trim.jpg', alt: 'Custom trim', text: 'Custom trim.'},
                {src: '/assets/images/custom_home.jpg', alt: 'Custom entertainment center', text: 'Custom entertainment center.'},
                {src: '/assets/images/stairs_1.jpg', alt: 'Custom woodwork/stairs', text: 'Custom woodwork/stairs.'},
                {src: '/assets/images/fireplace_1.jpg', alt: 'Custom fireplace/mantle', text: 'Custom fireplace/mantle.'},
                {src: '/assets/images/dining_1.jpg', alt: 'Dining - Kitchen - Living', text: 'Dining - Kitchen - Living.'},
                {src: '/assets/images/kitchen_1.jpg', alt: 'Kitchen', text: 'Kitchen.'},
                {src: '/assets/images/ceiling_1.jpg', alt: 'Custom wood ceiling', text: 'Custom wood ceiling.'},
                {src: '/assets/images/banister.jpg', alt: 'Timber balcony', text: 'Timber balcony.'},
                {src: '/assets/images/kitchen.jpg', alt: 'Custom kitchen', text: 'Custom kitchen.'},
                {src: '/assets/images/staircase.jpg', alt: 'Timber stairs and balcony', text: 'Timber stairs and balcony.'},
                {src: '/assets/images/archway.jpg', alt: 'Archway feature in Rexburg custom home', text: 'Archway feature in Rexburg custom home.'},
                {src: '/assets/images/circular_staircase.jpg', alt: 'Circular staircase in Rexburg custom home', text: 'Circular staircase in Rexburg custom home.'},
                {src: '/assets/images/custom_fireplace.jpg', alt: 'Custom fireplace front in Island Park cabin', text: 'Custom fireplace front in Island Park cabin.'},
                {src: '/assets/images/timber_staircase.jpg', alt: 'Timber staircase in a cabin', text: 'Timber staircase in a cabin.'},
                {src: '/assets/images/entry_way.jpg', alt: 'Entry Way with custom floor', text: 'Entry Way with Custom Hardwood Floor'},
                {src: '/assets/images/stair_case_custom.jpg', alt: 'Custom Staircase and cat walk', text: 'Custom stair case'},
                {src: '/assets/images/kitchen_custom.jpg', alt: 'Custom kitchen', text: 'Custom Kitchen'}
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
          .append('<br /><div style="margin-bottom: 40px;margin-left: 10px;" class="lead">' + imageDetail.text + '</div>');

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
      .attr('alt', imageDetail.alt)
      .attr('class', 'img-rounded img-responsive');

};
</script>
