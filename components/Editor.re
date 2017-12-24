type actions =
  | Edit
  | Preview
  | UpdatePost(PostRecord.post);

type state = {
  preview: bool,
  stagedPost: PostRecord.post
};

let component = ReasonReact.reducerComponent("Editor");

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
    let {preview, stagedPost: post} = self.state;
    let updatePost = (text) => {
      let updatedPost = PostRecord.setText(text, post);
      self.reduce((_e) => UpdatePost(updatedPost), ())
    };
    <div>
      <div>
        <button onClick=(self.reduce((_e) => Edit))>
          (ReasonReact.stringToElement("Edit"))
        </button>
        <button onClick=(self.reduce((_e) => Preview))>
          (ReasonReact.stringToElement("Preview"))
        </button>
        <button onClick=((_e) => savePost(post))> (ReasonReact.stringToElement("Save")) </button>
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
