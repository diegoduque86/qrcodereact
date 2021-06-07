const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("hello_world.proto", {});
const Object = grpc.loadPackageDefinition(packageDef);
const ObjectPackage = Object.helloworld;

const client = new ObjectPackage.Greeter(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.SayHello({ auth: "200" }, (err, response) => {
  console.log(response);
});
