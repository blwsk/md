[@bs.module] external md : ReasonReact.reactClass = "react-markdown";

let make = (~source: string, children) =>
  ReasonReact.wrapJsForReason(~reactClass=md, ~props={"source": source}, children);
