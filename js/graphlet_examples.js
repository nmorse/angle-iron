var graph_examples = {"Bees App":
  {"graph":{"name":"ComponentApp","template":""}, "nodes":[
    {"id":"n7","name":"Bees","@View":{"template":"<h2>Bees here</h2><div><input #input1 (keyup)=\"onChange($event, input1.value)\" [value]=\"colorOfFlower\" />   <button (click)=\"buzzReady()\">send color flower to be visited</button></div>"},"@Component":{"selector":"bee","events":[],"property":[]}},
    {"name":"App","@View":{"template":"<h2>Bees here</h2><div><input #input1 (keyup)=\"onChange($event, input1.value)\" [value]=\"colorOfFlower\" />   <button (click)=\"buzzReady()\">send color flower to be visited</button></div>"},"@Component":{"selector":"app","events":[],"property":[]},"id":"n0"},
    {"name":"Flowers","@View":{"template":"<h2>flower field</h2>  <div>{{work}}</div>"},"@Component":{"selector":"flowers","events":[],"property":[]},"id":"n1"}
   ],
   "edges":[
    ["n0","n1","set","work","",0],
    ["n7","n0","pub","buzz","",1],
    ["n0","n7","set","color","",2]
   ],
   "views":[{"name":"first","nodes":{"n7":{"position":{"x":214,"y":174},"width":60},"n0":{"position":{"x":306,"y":79},"width":60},"n1":{"position":{"x":372,"y":171},"width":80}},"edges":{}},{"name":"second view","nodes":{"n8":{"position":{"x":429,"y":200}},"n7":{"position":{"x":414,"y":108}},"n6":{"position":{"x":205,"y":201}}},"edges":{}},{"name":"sideways","nodes":{"n6":{"position":{"x":465,"y":122}},"n7":{"position":{"x":177,"y":208}},"n8":{"position":{"x":115,"y":118}}},"edges":{}}]
  }
};
