const url = `https://picsum.photos/v2/list`;

const getImageData = async (id) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const result = data.find(item => item.id === id.toString());
    return result;
  } catch (e) {
    throw new Error('Some thing was wrong');
  }
  return;
}

const getComment = async (id) => {
  
}

export { getImageData, getComment };