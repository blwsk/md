'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('../components/Post.js');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbielawski/personal/ml_re/md/pages/post.js?entry';

exports.default = function (props) {
  var post = props.url.query.post;
  console.log(props);
  return post ? _react2.default.createElement(_Post2.default, { post: post, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }) : _react2.default.createElement(_Post2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVSxBQUVqQjs7Ozs7Ozs7a0JBQWUsaUJBQVMsQUFDdEI7TUFBTSxPQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsTUFBdkIsQUFBNkIsQUFDN0I7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2dDQUFjLEFBQUMsZ0NBQUssTUFBTixBQUFZO2dCQUFaO2tCQUFQLEFBQU87QUFBQTtHQUFBLENBQVAsbUJBQThCLEFBQUM7O2dCQUFEO2tCQUFyQyxBQUFxQyxBQUN0QztBQURzQztBQUFBLEdBQUE7QUFIdkMiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2JpZWxhd3NraS9wZXJzb25hbC9tbF9yZS9tZCJ9