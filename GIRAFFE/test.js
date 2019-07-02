module.exports = (nodes, links) => {
  alert('Hello world');

  console.log({nNodes: nodes.length});
  console.log(links.length);

  return JSON.stringify({nNodes: nodes.length})
}
