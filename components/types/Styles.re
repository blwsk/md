type rule =
  | Width(string)
  | Height(string)
  | MinHeight(string)
  | Display(string);

let parseStyleType = (d) =>
  switch d {
  | Width(s) => ReactDOMRe.Style.make(~width=s, ())
  | Height(s) => ReactDOMRe.Style.make(~height=s, ())
  | MinHeight(s) => ReactDOMRe.Style.make(~minHeight=s, ())
  | Display(s) => ReactDOMRe.Style.make(~display=s, ())
  };

let combineStyles = (s) => {
  let parsed = List.map(parseStyleType, s);
  List.fold_left(ReactDOMRe.Style.combine, ReactDOMRe.Style.make(), parsed)
};
