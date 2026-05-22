(function () {
  var source = localStorage.getItem('mw_lead_source');
  var finalFormId = '28';

  if (source === 'Ad1') finalFormId = '38';
  else if (source === 'Ad2') finalFormId = '39';
  else if (source === 'Ad3') finalFormId = '31';

  function waitForContainer() {
    var container = document.getElementById('cognito-form-container');
    if (!container) return setTimeout(waitForContainer, 50);

    var s = document.createElement('script');
    s.src = "https://www.cognitoforms.com/f/seamless.js";
    s.dataset.key = "e0nIaXPJVE--P962CeJIlA";
    s.dataset.form = finalFormId;
    s.dataset.container = "cognito-form-container";
    document.body.appendChild(s);
  }

  waitForContainer();
})();
