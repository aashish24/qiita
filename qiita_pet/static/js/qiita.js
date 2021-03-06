/*
 * bootstrapAlert will add a Bootstrap alert message to the body of the current
 * page.
 *
 * @param message: Message to display
 * @param severit: One of 'danger', 'info', 'warning' or 'success'.
 * @param timeout: OPTIONAL. When given, time (in ms) before alert fades out
 *
 */
function bootstrapAlert(message, severity, timeout){
  // make timeout an optional parameter
  timeout = timeout || -1;

  severity = typeof severity !== 'undefined' ? severity : 'danger';

  var alertDiv = $('<div>', { 'class': 'alert fade in alert-'+severity, 'role': 'alert', 'id': 'bootstrap-alert'});

  alertDiv.append('<a href="#" class="close" data-dismiss="alert">&times;</a>');
  alertDiv.append('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>');

  // prepend a space to separate the message from the '!' icon
  alertDiv.append(' '+message);

  $('body').prepend(alertDiv);

  if(timeout > 0) {
   window.setTimeout(function() { $('#bootstrap-alert').alert('close'); }, timeout);
  }
}

function show_hide(div) {
	$('#' + div).toggle();
}
