// Generated by CoffeeScript 1.10.0
(function() {
  var block;

  block = function(tree) {
    var contents, memo, name;
    memo = {};
    tree.match({
      tag: 'block'
    }, function(node) {
      var ref;
      if (((ref = node.attrs) != null ? ref.name : void 0) != null) {
        memo[node.attrs.name] = node.content;
      }
      return '';
    });
    for (name in memo) {
      contents = memo[name];
      tree.match({
        tag: name
      }, function(node) {
        var content, i, len;
        for (i = 0, len = contents.length; i < len; i++) {
          content = contents[i];
          if (content.tag != null) {
            node = content;
            break;
          }
        }
        return node;
      });
    }
    return tree;
  };

  module.exports = block;

}).call(this);
