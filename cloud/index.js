/* jshint esversion: 6 */

// THE ORDER MATTERS, objects and helpers a globally required so event handlers,
// functions and jobs can use them without explicitly requiring them
// 1. setup the pfobjects
require('./pfobjects');
// 2. setup the helper modules
require('./helpers');
// 3. setup the event handlers
require('./event-handlers');
// 4. setup the cloud functions (global so everything below can use)
require('./functions')
// 5. setup the cloud jobs
require('./jobs');
