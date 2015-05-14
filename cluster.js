
var enableClustering = true;

if(enableClustering){
  // Connect to the cluster with a MongoDB URL. Better if it's a replica set
  var connectOptions;
  Cluster.connect("mongodb://127.0.0.1:3001/meteor", connectOptions = {
    // Value of 0 to 1, mentioning which portion of requestes to process here or proxy
    // If 1, all the requests allocated to this host will get processed
    // If 0.5 half of the requsted allocated to this host will get processed, others will get proxied
    // If 0, only do proxying 
    selfWeight: 1 // optional
  });

  // Register a service to the cluster
  var options;
  Cluster.register("myMeteorService", options = {
    endpoint: "http://10.47.12.42:3000"//,
    //balancer: "balancer URL, if this is a balancer", // optional
    //uiService: "service to proxy UI" // (optional) read to the end for more info
  });

  // Expose services to the public
  Cluster.allowPublicAccess(["myMeteorService"]);

  // Discover a DDP connection
  // > This is available on both the client and the server
  Cluster.discoverConnection("myMeteorService");
}
