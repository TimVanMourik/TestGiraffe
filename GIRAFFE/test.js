module.exports = (nodes, links) => {
  alert('Hello world');
  console.log(process.env);
  console.log({nNodes: nodes.length});
  console.log(links.length);

  return "Hello Mars"
}
