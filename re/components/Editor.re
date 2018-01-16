type actions =
  | Edit
  | Preview
  | UpdatePost(PostRecord.post);

type state = {
  preview: bool,
  stagedPost: PostRecord.post
};

let component = ReasonReact.reducerComponent("Editor");

let style = Styles.css([Display(FlexColumn), Width("100%"), Height("100%")]);

let controlStyle = Styles.css([Position(Fixed)]);

let make = (~post: PostRecord.post, ~savePost, _children) => {
  ...component,
  initialState: () => {preview: false, stagedPost: post},
  reducer: (action, state) =>
    switch action {
    | Edit => ReasonReact.Update({...state, preview: false})
    | Preview => ReasonReact.Update({...state, preview: true})
    | UpdatePost(updatedPost) => ReasonReact.Update({...state, stagedPost: updatedPost})
    },
  render: (self) => {
    let {preview, stagedPost} = self.state;
    let updatePost = (text) => {
      let updatedPost = PostRecord.setText(text, stagedPost);
      self.reduce((_e) => UpdatePost(updatedPost), ())
    };
    let togglePublishPost = () => {
      let updatedPublished = ! Js.to_bool(stagedPost##published);
      let updatedPost = PostRecord.setPublished(updatedPublished ? Js.true_ : Js.false_, post);
      self.reduce((_e) => UpdatePost(updatedPost), ())
    };
    let blah = Js.to_bool(stagedPost##published) ? "Published" : "Unpublished";
    <div style>
      <div style=controlStyle>
        <button className=(preview ? "" : "disabled") onClick=(self.reduce((_e) => Edit))>
          (ReasonReact.stringToElement("Edit"))
        </button>
        <button className=(preview ? "disabled" : "") onClick=(self.reduce((_e) => Preview))>
          (ReasonReact.stringToElement("Preview"))
        </button>
        <button onClick=((_e) => savePost(post))> (ReasonReact.stringToElement("Save")) </button>
        <button onClick=((_e) => togglePublishPost())>
          (ReasonReact.stringToElement(blah))
        </button>
      </div>
      (preview ? <Article post /> : <PostEditor post updatePost />)
    </div>
  }
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    (props) => {
      let post = props##post;
      let savePost = props##savePost;
      make(~post, ~savePost, [||])
    }
  );
