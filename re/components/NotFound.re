let component = ReasonReact.statelessComponent("NotFound");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <div>
      <h1> (ReasonReact.stringToElement("404")) </h1>
      <div> (ReasonReact.stringToElement("Not found")) </div>
    </div>
};
