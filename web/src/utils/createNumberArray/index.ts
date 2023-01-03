function createNumberArray(startAt:number, endAt:number) {
  if(startAt > endAt) return [];
  const arr = [];
  
  for(let i = startAt; i < endAt; i++) arr.push(i);
  return arr;
}

export default createNumberArray;