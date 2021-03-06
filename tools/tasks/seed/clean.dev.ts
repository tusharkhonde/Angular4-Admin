import Config from '../../config';
import { clean } from '../../utils';

/**
 * Executes the build process, cleaning all files within the `/dist/dev` directory.
 */
export = clean([Config.DEV_SERVER_DEST, Config.DEV_DEST]);
