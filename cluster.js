
var enableClustering = true;

if(enableClustering){
  // Connect to the cluster with a MongoDB URL. Better if it's a replica set
  var connectOptions;
  // 10.47.12.42  // 127.0.0.1
  Cluster.connect("mongodb://localhost/discover"/*, connectOptions = {
    // Value of 0 to 1, mentioning which portion of requestes to process here or proxy
    // If 1, all the requests allocated to this host will get processed
    // If 0.5 half of the requsted allocated to this host will get processed, others will get proxied
    // If 0, only do proxying 
    selfWeight: 1 // optional
  }*/);

  // Register a service to the cluster
  var options;
  Cluster.register("myMeteorService");

  // Expose services to the public
  //Cluster.allowPublicAccess(["myMeteorService"]);

  // Discover a DDP connection
  // > This is available on both the client and the server
  //Cluster.discoverConnection("myMeteorService");
}
