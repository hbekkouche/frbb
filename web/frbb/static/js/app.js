$(function() {
  // let's go.
  app();
});

var app = function() {
  $(document).keypress(function(e) {
    console.log('key '+  e.which + 'pressed.');
    
    // If we're in a form field, do NOT also check the +48 char
    var isInFormField = $(e.target).is('input');
    // will try the number + 48 (in case this is a keypad-less computer) but only when not in a form
    var normalizeKeyCodeForNonNumericalPad = isInFormField ? 0 : 48;
    // see if we have a registered listener.
    var link = URL_KEY_MAP[e.which] || URL_KEY_MAP[e.which + normalizeKeyCodeForNonNumericalPad];
    if (link) {
      // Go to the page
      window.location.href = link;
    }
    
    var action = ACTION_MAP[e.which] || ACTION_MAP[e.which + normalizeKeyCodeForNonNumericalPad];
    if (action) {
      action();
    }

    var form = $("form");
    // This is useful when using on a desktop computer without a keypad.
    if (form.length && e.which === 13) {
      form.submit();
    }
  });
  console.log(URL_KEY_MAP);
  console.log(ACTION_MAP);
};


var setEl = function(from, to) {
  document.getElementById(from).value = document.getElementById(to).value;
};
