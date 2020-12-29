exports.handler = async (event) => {
  console.log('__EVENT__', event);

  return {
    statusCode: 200,
    body: 'foobar'
  }
}
