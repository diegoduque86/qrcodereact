const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("hello_world.proto", {});
const Object = grpc.loadPackageDefinition(packageDef);
const Package = Object.helloworld;

const server = new grpc.Server();
server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());

server.addService(Package.Greeter.service, {
  SayHello: SayHello,
});
server.start();

function SayHello(call, callback) {
  console.log("SayHello");
  callback(null, { 
    message: call.request.name
  });
}
