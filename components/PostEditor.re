let component = ReasonReact.statelessComponent("PostEditor");

let textareaStyle = ReactDOMRe.Style.make(~width="100%", ~height="400px", ());

let make = (~post: PostRecord.post, ~updatePost, _children) => {
  let onChange = (event) => {
    let value = ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value;
    updatePost(value)
  };
  {
    ...component,
    render: (_self) => <div> <textarea style=textareaStyle value=post##text onChange /> </div>
  }
};
