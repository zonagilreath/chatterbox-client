var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {},

  render: function(dataList) {
    for (var i = 0; i < dataList.length; i++) {
      if (dataList[i].roomname !== undefined) {
        // console.log(dataList[i].roomname);
        Rooms.roomnames[dataList[i].roomname] = 1;
      }
      this.renderMessage(dataList[i]);
    }
    console.log(Rooms.roomnames);
  },

  renderMessage: function(message) {
    if (
      message.text !== undefined &&
      message.username !== undefined &&
      message.roomname !== undefined
    ) {
      this.$chats.append(MessageView.render(message));
    }
  }
};
