const jsonServer = require('json-server')
const CrudeServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

CrudeServer.use(middleware)
CrudeServer.use(route)
CrudeServer.listen(PORT,()=>{
  console.log(`Crude App server started at ${PORT}`);
})