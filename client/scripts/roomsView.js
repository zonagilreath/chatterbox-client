var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms datalist'),
  $newroom: $('#newroom'),

  initialize: function() {
    this.$select.html('');
    for (var room in Rooms.roomnames) {
      this.renderRoom(room);
    }
    this.$button.on('click', function() {
      Rooms.add($('#newroom').val());
      $('#newroom').val('');
      RoomsView.initialize();
    });
  },

  render: _.template(`<option><%- roomname %></option>`),

  renderRoom: function(roomname) {
    this.$select.append(this.render({ roomname: roomname }));
  }
};
