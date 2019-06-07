var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {},

  render: _.template(`<option><%- roomname %></option>`),

  renderRoom: function(roomname) {
    console.log(roomname);
    this.$select.append(this.render({ roomname: roomname }));
  }
};
