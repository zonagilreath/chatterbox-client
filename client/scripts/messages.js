var Messages = {
  results: [],
  update: function(dataList) {
    this.results = dataList;
    MessagesView.render(dataList);
  }
  // roomname: [] ?
  // this.roomname ?
};
