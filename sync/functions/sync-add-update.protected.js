exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();

  const { document } = event;

  console.log(document);
 
  client.sync
    .services(context.TWILIO_SYNC_SERVICE_SID)
    .documents
    .create(document)
    .then(result => {
      console.log(result);
      callback(null, 
        result
      )
  })
    .catch(err => {
      console.log(err.status);
      if(err.status === 409){
        console.log(document.data);
        client.sync
          .services(context.TWILIO_SYNC_SERVICE_SID)
          .documents(document.uniqueName)
          .update({data: document.data, ttl: document.ttl})
          .then(result => {
            console.log(result);
            callback(null, 
              result
            )
          })
          .catch(err => {
            console.log(err);
            callback(err);
          })
      }

    else {
      console.log(err);
      callback(err);
    }
    
  })


  

  
}