let component = ReasonReact.statelessComponent("Article");

[@bs.val] external date : int => string = "Date";

let make = (~post: PostRecord.post, _children) => {
  ...component,
  render: (_self) =>
    <div className="article" style=Styles.p_80_20>
      <small> (ReasonReact.stringToElement("Created at " ++ date(post##createdAt))) </small>
      <br />
      <small> (ReasonReact.stringToElement("Updated at " ++ date(post##updatedAt))) </small>
      <Markdown source=post##text />
    </div>
};
