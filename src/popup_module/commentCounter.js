const counterComment = (item) => item.reduce((count, i) => count + (i !== null), 0);

export default counterComment;