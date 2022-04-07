exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();

  const { id } = event;
 
  client.sync
    .services(context.TWILIO_SYNC_SERVICE_SID)
    .documents(id)
    .fetch()
    .then(result => {
      console.log(result.data);
      callback(null, {
        ...result.data,
        found: true
      })
  })
  .catch(err => {
    if (err.code === 20404) {
      return callback(null,{found:false})
    } else {
      console.error(err)
      callback(err)
    }
  })


  

  
}