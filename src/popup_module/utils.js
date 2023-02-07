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

const getComment = async () => {
  let result;
  try {
    const res = await fetch(url);
    result = await res.json();
  } catch (e) {
    throw new Error('Some thing was wrong');
  }
  return result;
};

export { getImageData, getComment };