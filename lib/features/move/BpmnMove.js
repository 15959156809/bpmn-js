'use strict';

var HIGH_PRIORITY = 1500;

function BpmnMove(eventBus, move, moveCanvas, rules) {

  // eventBus.on('shape.move.start', HIGH_PRIORITY, function(event) {
  //   var context = event.context,
  //       shapes = event.shapes;
  //
  //   // check if we can move the elements
  //   if (!canExecute) {
  //     // suppress move operation
  //     event.stopPropagation();
  //
  //     return false;
  //   }
  // });
}

BpmnMove.$inject = [ 'eventBus', 'move', 'moveCanvas', 'rules' ];

module.exports = BpmnMove;
