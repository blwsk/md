let component = ReasonReact.statelessComponent("Post");

let make = (~post=?, _children) => {
  ...component,
  render: (_self) => {
    let content =
      switch post {
      | Some(post) => <Article post />
      | None => <NotFound />
      };
    content
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
