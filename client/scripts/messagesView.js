var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {},

  render: function() {},

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }
};
