type post = {
  .
  "id": string,
  "title": string,
  "text": string,
  "createdAt": int,
  "updatedAt": int,
  "tags": array(string),
  "published": Js.boolean
};

let setText = (text, post) : post => Js.Obj.assign(post, {"text": text});

let setTitle = (title, post) : post => Js.Obj.assign(post, {"title": title});

let addTag = (tag, post) : post => Js.Obj.assign(post, {"tags": Js.Array.append(tag, post##tags)});

let setPublished = (published, post) : post => Js.Obj.assign(post, {"published": published});
