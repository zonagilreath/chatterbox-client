var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    this.$chats.empty();
    MessagesView.render(Messages.results);
  },

  render: function(dataList) {
    for (var i = 0; i < dataList.length; i++) {
      if (dataList[i].roomname !== undefined) {
        Rooms.roomnames[dataList[i].roomname] = 1;
      }
      this.renderMessage(dataList[i]);
    }
  },

  renderMessage: function(message) {
    if (
      message.text !== undefined &&
      message.username !== undefined &&
      message.roomname !== undefined
    ) {
      var messageElement = $(MessageView.render(message));
      messageElement.find(`.username`).on('click', function(event) {
        Friends.toggleStatus(event.target.textContent);
      });
      this.$chats.append(messageElement);
    }
  }
};
