module.exports = {
  getPreview: postContent => postContent.split('<p>///</p>')[0],
  getAntiPreview: postContent => postContent.split('<p>///</p>')[1] || '',
  hasContent: str => str.length > 0
};