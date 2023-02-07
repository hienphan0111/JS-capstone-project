import getData from '../modules/api.js';

const getImageData = async (id) => {
  let result;
  try {
    const data = await getData();
    result = data.find((item) => item.id === id.toString());
  } catch (e) {
    throw new Error('Some thing was wrong');
  }
  return result;
};

export { getImageData, getComment };