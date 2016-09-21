/**
 * C3.js
 * (c) 2016 Masayuki Tanaka and the C3.js contributors (See package.json)
 * License: MIT
 */

import { ChartInternal } from './internals/index';
import { Chart } from './chart/index';
import { Axis } from './axis/index';


const version = '1.0.0';

const generate = function generate(config) {
    return new Chart(config);
};

const chart = {
    fn: Chart.prototype,
    internal: {
        fn: ChartInternal.prototype,
        axis: {
            fn: Axis.prototype,
        },
    },
};

export {
    version,
    generate,
    chart,
};