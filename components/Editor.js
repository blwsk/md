// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block         = require("bs-platform/lib/js/block.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var React         = require("react");
var Article$Md    = require("./Article.js");
var ReasonReact   = require("reason-react/src/ReasonReact.js");
var PostEditor$Md = require("./PostEditor.js");

var component = ReasonReact.reducerComponent("Editor");

function make(post, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      var match = self[/* state */2];
      var stagedPost = match[/* stagedPost */1];
      var updatePost = function (updatedText) {
        var updatedPost = {
          text: updatedText,
          id: stagedPost.id,
          title: stagedPost.title,
          timestamp: stagedPost.timestamp
        };
        return Curry._2(self[/* reduce */1], (function () {
                      return /* UpdatePost */[updatedPost];
                    }), /* () */0);
      };
      return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("button", {
                          onClick: Curry._1(self[/* reduce */1], (function () {
                                  return /* Edit */0;
                                }))
                        }, "Edit"), React.createElement("button", {
                          onClick: Curry._1(self[/* reduce */1], (function () {
                                  return /* Preview */1;
                                }))
                        }, "Preview")), match[/* preview */0] !== 0 ? ReasonReact.element(/* None */0, /* None */0, Article$Md.make(stagedPost, /* array */[])) : ReasonReact.element(/* None */0, /* None */0, PostEditor$Md.make(stagedPost, updatePost, /* array */[])));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* preview : false */0,
              /* stagedPost */post
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (typeof action === "number") {
        if (action !== 0) {
          return /* Update */Block.__(0, [/* record */[
                      /* preview : true */1,
                      /* stagedPost */state[/* stagedPost */1]
                    ]]);
        } else {
          return /* Update */Block.__(0, [/* record */[
                      /* preview : false */0,
                      /* stagedPost */state[/* stagedPost */1]
                    ]]);
        }
      } else {
        return /* Update */Block.__(0, [/* record */[
                    /* preview */state[/* preview */0],
                    /* stagedPost */action[0]
                  ]]);
      }
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (props) {
        var post = props.post;
        return make(post, /* array */[]);
      }));

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
