import { ls } from "./localStorage";

const mockedText =
  "A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them.";

export const getMockText = () => {
  return new Promise(function(resolve, reject) {
    if (ls.hasKey("text")) {
      return resolve(ls.get("text"));
    }
    let text = setDraftText(mockedText);

    return resolve(text);
  });
};

export const setDraftText = str => {
  let arr = str.split(" ");
  let text = arr.map((text, index) => {
    return { text, index, 'className': '' };
  });
  ls.set("text", text);

  return text;
};
