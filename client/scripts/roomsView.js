var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (var room in Rooms.roomnames) {
      this.renderRoom(room);
    }
  },

  render: _.template(`<option><%- roomname %></option>`),

  renderRoom: function(roomname) {
    this.$select.append(this.render({ roomname: roomname }));
  }
};
