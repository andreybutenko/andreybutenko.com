module.exports = {
  projectLink: linkData => {
    const [label, url] = linkData.split(', ');
    return `<a href="${url}" target="_blank">${label}</a>`;
  }
};