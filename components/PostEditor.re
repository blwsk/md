open Styles;

let component = ReasonReact.statelessComponent("PostEditor");

let divStyles = css([Display(Flex), Width("100%")]);

let textareaStyles = css([Display(Flex), Width("700px")]);

let make = (~post: PostRecord.post, ~updatePost, _children) => {
  let onChange = (event) => {
    let value = ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value;
    updatePost(value)
  };
  {
    ...component,
    render: (_self) =>
      <div style=divStyles> <textarea style=textareaStyles value=post##text onChange /> </div>
  }
};
