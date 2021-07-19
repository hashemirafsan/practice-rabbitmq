const ampq = require('amqplib/callback_api');

ampq.connect('amqp://rabbitmq', function(err, connecton) {
    
    if (err) throw err;

    connecton.createChannel(function(err, channel) {
        
        if (err) throw err;

        const queue = 'hello';

        channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, { noAck: true });
    });

});