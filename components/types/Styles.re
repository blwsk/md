type display =
  | Flex;

type rule =
  | Width(string)
  | Height(string)
  | MinHeight(string)
  | MinWidth(string)
  | Display(display);

let makeDisplay = (d) =>
  switch d {
  | Flex => ReactDOMRe.Style.make(~display="flex", ())
  };

let parseStyleType = (d) =>
  switch d {
  | Width(s) => ReactDOMRe.Style.make(~width=s, ())
  | Height(s) => ReactDOMRe.Style.make(~height=s, ())
  | MinHeight(s) => ReactDOMRe.Style.make(~minHeight=s, ())
  | MinWidth(s) => ReactDOMRe.Style.make(~minWidth=s, ())
  | Display(s) => makeDisplay(s)
  };

let css = (s) => {
  let parsed = List.map(parseStyleType, s);
  List.fold_left(ReactDOMRe.Style.combine, ReactDOMRe.Style.make(), parsed)
};
