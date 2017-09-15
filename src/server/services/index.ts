import * as express from 'express';
import { nameList } from './name.list';
import { userName } from './user.name';

export function init(app: express.Application) {
    nameList(app);
    userName(app);
}
