/*!
 * Your custom javascript
 */
$(document).ready(function() {

    jQuery('.nav-link').each(function() {
      var tabText = jQuery(this).text();
      var tabAriaControlsSelector = '#' + jQuery(this).attr('aria-controls');
      jQuery(tabAriaControlsSelector).prepend('<a class="a11yTitle sr-only sr-only-focusable" href="' + tabAriaControlsSelector + '">' + tabText + ' tab content</a>');
    });
    jQuery('.nav-link').on('shown.bs.tab', function(e){
      jQuery('.a11yTitle:visible').focus();
    });
  });