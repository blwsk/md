let component = ReasonReact.statelessComponent("PostEditor");

let style = Styles.css([Width("100%"), Height("100%")]);

let textareaStyle = Styles.css([Padding("80px")]);

let make = (~post: PostRecord.post, ~updatePost, _children) => {
  let onChange = (event) => {
    let value = ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value;
    updatePost(value)
  };
  {
    ...component,
    render: (_self) =>
      <div className="editor" style>
        <textarea style=textareaStyle value=post##text onChange />
      </div>
  }
};
