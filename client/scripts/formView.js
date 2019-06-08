var FormView = {
  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(event.target);
    console.log($(this).serialize());
    console.log(window.location.href);
    var message = {};
    var url = new URL(window.location.href);
    message.username = url.searchParams.get('username');
    message.text = $('input[name = message]').val();
    message.roomname = RoomsView.$select.val();
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};
