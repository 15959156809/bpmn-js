'use strict';

module.exports = {
  __depends__: [
    require('diagram-js/lib/features/move')
  ],
  bpmnMove: [ 'type', require('./BpmnMove') ]
};
