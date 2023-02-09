const counterComment = (item) => {
  let count = 0;
  item.forEach((i) => i !== null ? count += 1 : 0);
  return count;
}

export default counterComment;