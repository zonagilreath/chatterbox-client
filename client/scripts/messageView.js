var MessageView = {
  render: _.template(`
      <div class="chat <%- roomname %>">
        <div class="username <%- username %>"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)
};
