const ampq = require('amqplib/callback_api');

ampq.connect('amqp://rabbitmq', function(err, connecton) {
    
    if (err) throw err;

    connecton.createChannel(function(err, channel) {
        
        if (err) throw err;

        const queue = 'hello';

        channel.assertQueue(queue, {
            durable: true
        });

        const msg = "Hello World";

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

});