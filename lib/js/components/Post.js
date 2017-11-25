// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Article$Md  = require("./Article.js");
var NotFound$Md = require("./NotFound.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Post");

function make(post, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      if (post) {
        return ReasonReact.element(/* None */0, /* None */0, Article$Md.make(post[0], /* array */[]));
      } else {
        return ReasonReact.element(/* None */0, /* None */0, NotFound$Md.make(/* array */[]));
      }
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (props) {
        var post = props.post;
        return make((post == null) ? /* None */0 : [post], /* array */[]);
      }));

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */