import * as express from 'express';
import * as redis from 'redis';


export function userName(app: express.Application) {


  app.get('/api/user-list',
    (req:any, res:any, next:any) => {
      const email = req.query['email'];
      let RedisClient = redis.createClient(/*{url:'redis://auth:foobared@127.0.0.1:6379'}*/);
      RedisClient.get(email,
        (err:any, reply:any) => {
          res.json(reply);
        });

      RedisClient.quit();
    });


  app.post('/api/user-list',
    (req:any, res:any, next:any) => {
      let RedisClient = redis.createClient(/*{url:'redis://auth:foobared@127.0.0.1:6379'}*/),
        request = req.body;
      RedisClient.set(request['email'], request['password'],
        (err:any, reply:any) => {
          res.json({success: true});
        });

      RedisClient.quit();
    });



}
