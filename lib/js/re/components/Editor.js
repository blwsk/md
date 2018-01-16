// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block         = require("bs-platform/lib/js/block.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var React         = require("react");
var Styles$Md     = require("../types/Styles.js");
var Article$Md    = require("./Article.js");
var ReasonReact   = require("reason-react/lib/js/src/ReasonReact.js");
var PostEditor$Md = require("./PostEditor.js");
var PostRecord$Md = require("../types/PostRecord.js");

var component = ReasonReact.reducerComponent("Editor");

var style = Styles$Md.css(/* :: */[
      /* Display */Block.__(4, [/* FlexColumn */1]),
      /* :: */[
        /* Width */Block.__(0, ["100%"]),
        /* :: */[
          /* Height */Block.__(1, ["100%"]),
          /* [] */0
        ]
      ]
    ]);

var controlStyle = Styles$Md.css(/* :: */[
      /* Position */Block.__(5, [/* Fixed */0]),
      /* [] */0
    ]);

function make(post, savePost, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      var match = self[/* state */2];
      var stagedPost = match[/* stagedPost */1];
      var preview = match[/* preview */0];
      var updatePost = function (text) {
        var updatedPost = PostRecord$Md.setText(text, stagedPost);
        return Curry._2(self[/* reduce */1], (function () {
                      return /* UpdatePost */[updatedPost];
                    }), /* () */0);
      };
      var match$1 = +stagedPost.published;
      var blah = match$1 !== 0 ? "Published" : "Unpublished";
      return React.createElement("div", {
                  style: style
                }, React.createElement("div", {
                      style: controlStyle
                    }, React.createElement("button", {
                          className: preview !== 0 ? "" : "disabled",
                          onClick: Curry._1(self[/* reduce */1], (function () {
                                  return /* Edit */0;
                                }))
                        }, "Edit"), React.createElement("button", {
                          className: preview !== 0 ? "disabled" : "",
                          onClick: Curry._1(self[/* reduce */1], (function () {
                                  return /* Preview */1;
                                }))
                        }, "Preview"), React.createElement("button", {
                          onClick: (function () {
                              return Curry._1(savePost, post);
                            })
                        }, "Save"), React.createElement("button", {
                          onClick: (function () {
                              var updatedPublished = 1 - +stagedPost.published;
                              var updatedPost = PostRecord$Md.setPublished(updatedPublished !== 0 ? true : false, post);
                              return Curry._2(self[/* reduce */1], (function () {
                                            return /* UpdatePost */[updatedPost];
                                          }), /* () */0);
                            })
                        }, blah)), preview !== 0 ? ReasonReact.element(/* None */0, /* None */0, Article$Md.make(post, /* array */[])) : ReasonReact.element(/* None */0, /* None */0, PostEditor$Md.make(post, updatePost, /* array */[])));
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
        var savePost = props.savePost;
        return make(post, savePost, /* array */[]);
      }));

exports.component    = component;
exports.style        = style;
exports.controlStyle = controlStyle;
exports.make         = make;
exports.$$default    = $$default;
exports.default      = $$default;
exports.__esModule   = true;
/* component Not a pure module */