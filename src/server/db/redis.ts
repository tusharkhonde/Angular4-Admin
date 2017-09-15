import * as redis from 'redis';

/**
 * Init Names List.
 */
export function Init() {

  let RedisClient = redis.createClient({url:'redis://auth:foobared@127.0.0.1:6379'});
  RedisClient.quit();
}
