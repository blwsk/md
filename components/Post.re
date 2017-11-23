let component = ReasonReact.statelessComponent("Post");

let make = (~post=?, _children) => {
  ...component,
  render: (_self) => {
    let source =
      switch post {
      | Some(post) => post##text
      | None => "# 404"
      };
    <div> <Markdown source /> </div>
  }
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    (props) => {
      let post = Js.Nullable.to_opt(props##post);
      make(~post?, [||])
    }
  );
