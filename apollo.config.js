module.exports = {
  client: {
    includes: [__dirname + '/src/queries/**'],
    service: {
      name: "hello-service",
      url: "http://localhost:4000/graphql",
    }
  }
}