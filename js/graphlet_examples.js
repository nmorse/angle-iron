var graph_examples = {"Bees App":
{"graph":{"name":"Bees App","template":""}, "nodes":[
  {"id":"n8","name":"FlowerField","template":"<h2>flower field</h2>  <div>{{work}}</div>"},
  {"id":"n7","name":"Bees","template":"<h2>Bees here</h2>   <input #input1 (keyup)=\"onChange($event, input1.value)\" [value]=\"colorOfFlower\" />   <button (click)=\"buzzReady()\">send color flower to be visited</button>"},
  {"id":"n6","name":"App","templateUrl":"templates/app.html"}
 ],
 "edges":[
  ["n6","n7","set","color","",0],
  ["n7","n6","pub","buzz","",1],
  ["n6","n8","set","work","",2]
 ],
 "views":[{"name":"first","nodes":{"n8":{"position":{"x":390,"y":173},"width":110},"n7":{"position":{"x":214,"y":174},"width":60},"n6":{"position":{"x":314,"y":76},"width":80}},"edges":{}},{"name":"second view","nodes":{"n8":{"position":{"x":429,"y":200}},"n7":{"position":{"x":414,"y":108}},"n6":{"position":{"x":205,"y":201}}},"edges":{}},{"name":"sideways","nodes":{"n6":{"position":{"x":465,"y":122}},"n7":{"position":{"x":177,"y":208}},"n8":{"position":{"x":115,"y":118}}},"edges":{}}]
},
"Guessing Game":
{"graph":{"name":"Guessing Game","template":"<div id='prompt'></div><input id='guess'/><button id='enter_button'>Enter</button>"}, "nodes":[
  {"id":"n16","name":"end","process":["this.prompt =  prompt + \", no more guesses left. The secret number of \" + secret;"]},
  {"id":"n15","name":"guess again","process":["this.prompt =  prompt + \", guess again\";"]},
  {"id":"n14","name":"game over?","process":["this.game_over =  (count>=7);"]},
  {"id":"n13","name":"prompt","data":{"prompt":"Sorry, all guesses are used up, the number was "},"process":["this.prompt = prompt + secret"]},
  {"id":"n12","name":"count","io":{"selector":"#count","valve":3},"data":{"count":0}},
  {"id":"n11","name":"","process":["this.count = +count + 1;"]},
  {"id":"n4","name":"prompt","data":{"prompt":"Too High"}},
  {"id":"n2","name":"prompt","data":{"prompt":"Too Low"}},
  {"id":"n10","name":"env","io":{"selector":"","valve":0,"as_type":""}},
  {"name":"enter","id":"n0","io":{"selector":"#enter_button"}},
  {"name":"think","process":["this.secret = Math.floor(Math.random(1)*100) + 1;"],"id":"n1"},
  {"name":"prompt","io":{"selector":"#prompt"},"id":"n3"},
  {"name":"prompt","id":"n5","data":{"prompt":"Guess a number (1 - 100)"}},
  {"id":"n6","name":"secret"},
  {"id":"n7","name":"diff","process":["this.diff = guess - secret;"]},
  {"id":"n8","name":"guess","io":{"selector":"#guess","valve":3}},
  {"id":"n9","name":"prompt","data":{"prompt":"Great! You guessed it, in {{count}} guess(es) "},"process":["this.prompt = prompt.replace(\"{{count}}\", count);"]}
 ],
 "edges":[
  ["n1","n5","flo","next","",0],
  ["n1","n6","set","","",1],
  ["n5","n3","set","","",2],
  ["n7","n8","get","","",3],
  ["n7","n6","get","","",4],
  ["n7","n9","flo","","",5],
  ["n9","n3","set","","",6],
  ["n10","n1","sub","graph_init","",7],
  ["n2","n3","set","","",8],
  ["n7","n2","flo","","diff < 0",9],
  ["n4","n3","set","","",10],
  ["n7","n4","flo","","diff > 0",11],
  ["n0","n11","sub","click","",12],
  ["n11","n12","get","","",13],
  ["n11","n12","set","","",14],
  ["n11","n7","flo","","count < 8",15],
  ["n11","n13","flo","","",16],
  ["n13","n3","set","","",17],
  ["n13","n6","get","","",18],
  ["n9","n12","get","","",19],
  ["n4","n14","flo","","",20],
  ["n2","n14","flo","","",21],
  ["n14","n12","get","","",22],
  ["n14","n15","flo","","!game_over",23],
  ["n14","n16","flo","","game_over",24],
  ["n16","n3","set","","",25],
  ["n15","n3","set","","",26],
  ["n15","n3","get","","",27],
  ["n16","n3","get","","",28],
  ["n16","n6","get","","",29]
 ],
 "views":[{"name":"primary","nodes":{"n16":{"position":{"x":716,"y":264}},"n15":{"position":{"x":642,"y":28}},"n14":{"position":{"x":715,"y":161}},"n13":{"position":{"x":362,"y":303},"width":60},"n12":{"position":{"x":533,"y":440},"width":60},"n11":{"position":{"x":343,"y":431},"width":60},"n4":{"position":{"x":170,"y":136},"width":100},"n2":{"position":{"x":249,"y":184},"width":100},"n10":{"position":{"x":5,"y":19},"width":60},"n0":{"position":{"x":530,"y":378},"width":60},"n1":{"position":{"x":69,"y":96},"width":60},"n3":{"position":{"x":533,"y":208},"width":60},"n5":{"position":{"x":428,"y":96},"width":200},"n6":{"position":{"x":69,"y":286},"width":60},"n7":{"position":{"x":198,"y":363},"width":80},"n8":{"position":{"x":533,"y":323},"width":60},"n9":{"position":{"x":326,"y":241},"width":180}},"edges":{}}]
}
};
