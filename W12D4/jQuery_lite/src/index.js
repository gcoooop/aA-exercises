const DOMNodeCollection = require("./dom_node_collection")

function jQueryLite(arg) {
  
  if (typeof arg === "string") {
    const nodeList = document.querySelectorAll(arg);
    const nodeArr = [];
    nodeList.forEach( node => {
      nodeArr.push(node);
    });
    return new DOMNodeCollection(nodeArr);
  } else if (arg instanceof HTMLElement) {
     return new DOMNodeCollection([arg]);
  } else if( arg instanceof Function){
      const functions = []
      functions.push(arg)
      let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(stateCheck);
          functions.forEach(f =>{ f()})
        }
      }, 100);
  }

}

window.$l = jQueryLite;

window.$l.extend = function(...args) {
  const res = {};

  args.forEach( arg => {
    Object.keys(arg).forEach( key => {
      res[key] = arg[key];
    })
  })

  return res;
}

window.$l.ajax = function(options) {
    const xhr = new XMLHttpRequest();
    let defaults = {
        contentType: options.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
        type: options.type || 'GET',
        success: options.success || function() {},
        error: options.error || function() {},
        url: options.url || document.URL,
        data: options.data || {}
    }

    defaults = $l.extend(defaults, options);
    xhr.open(defaults.type, defaults.url);
    xhr.onload = function() {
        if (xhr.status < 400) {
          return defaults.success( JSON.parse(xhr.response) ) ;
        } else {
          return defaults.error( JSON.parse(xhr.response) );
        }
    };

    xhr.send(options.data)
}

// $.ajax({
//     type: 'GET',
//     url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
//     success(data) {
//       console.log("We have your weather!")
//       console.log(data);
//     },
//     error() {
//       console.error("An error occurred.");
//     },
//  });

// //step 1 - create xhr object
// const xhr = new XMLHttpRequest();

// // step 2 - specify path and verb
// xhr.open('POST', 'api/path/to/resource');

// // step 3 - register a callback
// xhr.onload = function () {
//   console.log(xhr.status) // for status info
//   console.log(xhr.responseType) //the type of data that was returned
//   console.log(xhr.response) //the actual response. For JSON api calls, this will be a JSON string
// }

// // step 4 - send off the request with optional data
// const optionalData = { name: "User1", password : "123456" };
// xhr.send(optionalData);