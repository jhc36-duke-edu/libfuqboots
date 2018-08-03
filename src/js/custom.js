/*!
 * Your custom javascript
 */
$(document).ready(function() {

    jQuery('.bs-wrap .nav-tabs .nav-link').each(function() {
      var tabText = jQuery(this).text();
      var tabAriaControlsSelector = '#' + jQuery(this).attr('aria-controls');
      jQuery(tabAriaControlsSelector)
        .prepend('<a class="a11yTitle sr-only" href="' + tabAriaControlsSelector + '">' + tabText + ' tab content</a>')
        .append('<a class="sr-only sr-only-focusable" href="' + tabAriaControlsSelector + '-tab">Back to tab list</a>');
    });
    jQuery('.bs-wrap .nav-tabs .nav-link').on('shown.bs.tab', function(e){
      jQuery('.active .a11yTitle').focus();
    });
    /* the first tab is active, enter it by default but only the first time */
    jQuery('.bs-wrap .nav-tabs .nav-link').first().one('focus', function(e) {
      console.log('sup');
      jQuery('.active .a11yTitle').focus();
      jQuery('.bs-wrap .nav-tabs .nav-link').first().off('focus');
    });
  });