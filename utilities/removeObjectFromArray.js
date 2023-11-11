module.exports.removeObjectFromArray = (array, property, value) => {
  const index = array.findIndex(obj => obj[property] === value);
  if (index !== -1) {
    array.splice(index, 1);
  }
}