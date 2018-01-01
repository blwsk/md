open ReactDOMRe;

type display =
  | Flex
  | FlexColumn;

type position =
  | Fixed;

let makeDisplay = (d) =>
  switch d {
  | Flex => Style.make(~display="flex", ())
  | FlexColumn => Style.make(~display="flex", ~flexDirection="column", ())
  };

let makePosition = (p) =>
  switch p {
  | Fixed => Style.make(~position="fixed", ())
  };

type rule =
  | Width(string)
  | Height(string)
  | MinHeight(string)
  | MinWidth(string)
  | Display(display)
  | Position(position)
  | Margin(string)
  | Padding(string)
  | FlexGrow;

let parseStyleType = (d) =>
  switch d {
  | Width(s) => Style.make(~width=s, ())
  | Height(s) => Style.make(~height=s, ())
  | MinHeight(s) => Style.make(~minHeight=s, ())
  | MinWidth(s) => Style.make(~minWidth=s, ())
  | Display(s) => makeDisplay(s)
  | Margin(s) => Style.make(~margin=s, ())
  | Padding(s) => Style.make(~padding=s, ())
  | FlexGrow => Style.make(~flexGrow="1", ())
  | Position(s) => makePosition(s)
  };

let css = (s) => {
  let parsed = List.map(parseStyleType, s);
  List.fold_left(Style.combine, Style.make(), parsed)
};
