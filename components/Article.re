let component = ReasonReact.statelessComponent("Article");

[@bs.val] external date : int => string = "Date";

let make = (~post: PostRecord.post, _children) => {
  ...component,
  render: (_self) =>
    <div>
      <div> (ReasonReact.stringToElement(date(post##timestamp))) </div>
      <Markdown source=post##text />
    </div>
};
