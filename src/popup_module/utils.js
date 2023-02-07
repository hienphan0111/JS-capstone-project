const url = 'https://picsum.photos/v2/list';

const getImageData = async (id) => {
  let result;
  try {
    const res = await fetch(url);
    const data = await res.json();
    result = data.find((item) => item.id === id.toString());
  } catch (e) {
    throw new Error('Some thing was wrong');
  }
  return result;
};

const getComment = async (id) => {
  return id;
};

export { getImageData, getComment };