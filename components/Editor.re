type actions =
  | Edit
  | Preview
  | UpdatePost(PostRecord.post);

type state = {
  preview: bool,
  stagedPost: PostRecord.post
};

let component = ReasonReact.reducerComponent("Editor");

let make = (~post: PostRecord.post, _children) => {
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
    let updatePost = (updatedText) => {
      let updatedPost = {
        "text": updatedText,
        "id": stagedPost##id,
        "title": stagedPost##title,
        "timestamp": stagedPost##timestamp
      };
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
      </div>
      (preview ? <Article post=stagedPost /> : <PostEditor post=stagedPost updatePost />)
    </div>
  }
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    (props) => {
      let post = props##post;
      make(~post, [||])
    }
  );
