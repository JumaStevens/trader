export default ({ url }) => {
  return new Promise( (resolve, reject) => {
    const socket = new WebSocket(url)
    socket.onopen = () => resolve(socket)
    socket.onerror = (err) => reject(err)
  })
}
