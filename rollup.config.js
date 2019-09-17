// rollup.config.js
import devConf from './build/config.dev';
import prodConf from './build/config.prod';

export default () => {
    if (process.env.BUILD === 'dev') {
        return [prodConf, devConf];
    }
    return prodConf;
}
