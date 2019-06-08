var Friends = {
  toggleStatus: function(username) {
    $(`.${username}`).toggleClass(`friend`);
  }
};
