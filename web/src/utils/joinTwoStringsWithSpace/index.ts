function joinTwoStringsWithSpace(string1:string, string2?:string) {
  let merge = string1;
  if(string2) merge += ` ${string2}`;
  return merge;
}

export default joinTwoStringsWithSpace;