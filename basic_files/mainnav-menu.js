/**
* Accessible Menu Functionality for library.fuqua.duke.edu
* Enables the following types of navigation:
*  1. mouse hover
*  2. keyboard-only accessibility
*  3. Works on JAWS, NVDA, and VoiceOver
* */


// Add classes to set up the menu
$('#navmenu > ul > li > ul').each(function() {
    // give the submenu aria attibutes
    $(this).attr('aria-hidden', 'true');
    // give this link aria attibutes
    $(this).parent().find('> a').attr('aria-haspopup', 'true').attr('aria-expanded', 'false');
  });

  // Reset aria attributes to original state
  function resetVisibility() {
    $('#navmenu > ul > li > a[aria-haspopup]').attr('aria-expanded', 'false');
    $('#navmenu > ul > li > ul').attr('aria-hidden', 'true');
  }

  // Toggle aria attributes for when the menu item triggers a click event
  function toggleVisibility($toggleTrigger, $toggleTarget) {
    var state = $toggleTrigger.attr('aria-expanded');

    /* reset these aria attributes */
    $toggleTrigger.attr('aria-expanded', 'false');
    $toggleTarget.attr('aria-hidden', 'true');

    /* toggle attributes */
    if (state == 'false') {
        $toggleTrigger.attr('aria-expanded', 'true');
        $toggleTarget.attr('aria-hidden', 'false');
    }
    else if (state = 'true') {
        $toggleTrigger.attr('aria-expanded', 'false');
        $toggleTarget.attr('aria-hidden', 'true');
    }
  }

  // When we get to the last child close this menu and reset all values
  $('#navmenu > ul > li > ul > li:last-child > a').blur(function() {
    resetVisibility();
  })

  // Keyboard arrow key functionality
  $('#navmenu > ul > li > a[aria-haspopup]').on('focus', function(e) {
    $this = $(this);
    resetVisibility();

    $this.keydown(function(e) {

      /* if down arrow */
      if (e.keyCode === 40) {
        console.log('40');
        $(this).attr('aria-expanded', 'true');
        $(this).parent().find('> ul').attr('aria-hidden', 'false');
        return false;
      }
      /* if up arrow */
      if (e.keyCode === 38) {
        console.log('38');
        $(this).attr('aria-expanded', 'false');
        $(this).parent().find('> ul').attr('aria-hidden', 'true');
        return false;
      }
      /* if right arrow */
      if (e.keyCode === 39) {
        console.log('39');
        resetVisibility();
        $(this).parent().next().find('> a').focus();
        return false;
      }
      /* if right arrow */
      if (e.keyCode === 37) {
        console.log('37');
        resetVisibility();
        $(this).parent().prev().find('> a').focus();
        return false;
      }
    });
  });

  // On click of top level main menu nav toggle the aria attributes
  $('#navmenu a[aria-haspopup]').on('click', function(e) {
    var $toggleTrigger = $(this);
    var $toggleTarget = $(this).parent().find('ul');
    toggleVisibility($toggleTrigger, $toggleTarget );
    e.preventDefault();
  });

  // On mouseenter explicitly reset aria attributes to correct values to ensure they do not get out of sync.
  $('#navmenu a[aria-haspopup]').parent().mouseenter(function() {
    var $toggleTrigger = $(this).find('[aria-expanded]');
    var $toggleTarget = $(this).find('ul');
    $toggleTrigger.attr('aria-expanded', 'true');
    $toggleTarget.attr('aria-hidden', 'false');
  });

  // On mouseleave explicitly reset aria attributes to correct values to ensure they do not get out of sync.
  $('#navmenu a[aria-haspopup]').parent().mouseleave(function() {
    var $toggleTrigger = $(this).find('[aria-expanded]');
    var $toggleTarget = $(this).find('ul');
    $toggleTrigger.attr('aria-expanded', 'false');
    $toggleTarget.attr('aria-hidden', 'true');
  });