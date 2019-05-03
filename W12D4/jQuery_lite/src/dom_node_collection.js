class DOMNodeCollection{

    constructor(htmlEles) {
        this.htmlEles = htmlEles;
    }

    html(str) {
        if (str === undefined) {
            return this.htmlEles[0].innerHTML;
        } else {
          this.htmlEles.forEach( ele => {
            ele.innerHTML = str;
          });
        }
    }

    empty() {
      this.htmlEles.forEach( ele => {
        ele.innerHTML = "";
      });
    }

    append(args) {
      if (typeof args === "string") {
        this.htmlEles.forEach( ele => {
          ele.innerHTML += args;
        });
      } else if (args instanceof HTMLElement) {
        this.htmlEles.forEach( ele => {
          ele.innerHTML += args.outerHTML;
        });
      } else if (args instanceof DOMNodeCollection) {
        this.htmlEles.forEach( ele => {
          args.htmlEles.forEach(argsEle => {
             ele.innerHTML += argsEle.outerHTML;
          })
        });
      }
    }

    attr(key, val) {
      if (!val) {
        return this.htmlEles[0][key];
      } else {
        this.htmlEles.forEach( ele => {
          ele[key] = val;
        })
      }
    }
    
    addClass(className) {
        this.attr("className",className);
    }
    
    removeClass(className) {
        if (className === undefined) {
            this.htmlEles.forEach( ele => {
                ele.removeAttribute("class");
            });
        } else if (typeof className === 'string' ) {
            this.htmlEles.forEach( ele => {
                if (ele.className === className) {
                    ele.removeAttribute("class");
                }
            });
        }
        
    }

    children() {
      let childrenArr = [];

      this.htmlEles.forEach( ele => {
        const eleChildren = ele.children;
        const eleChildrenArr = [];
        for (let i = 0; i < eleChildren.length; i++) {
          eleChildrenArr.push(eleChildren.item(i));
        }
        childrenArr = childrenArr.concat(eleChildrenArr);
      })

      return new DOMNodeCollection(childrenArr);
    }

    parent() {
      let parentArr = [];

      this.htmlEles.forEach( ele => {
        const eleParent = ele.parentElement;
        parentArr.push(eleParent)
      })

      return new DOMNodeCollection(parentArr);
    }

    find(selector) {
        const selected = [];
        this.htmlEles.forEach(ele => {
          const selectedEle = ele.querySelectorAll(selector);
          selectedEle.forEach(e => { 
                if (!selected.includes(e)) selected.push(e);
            }); 
        });
        return new DOMNodeCollection(selected);
    }

    remove() {
        this.htmlEles.forEach(ele => {
            ele.parentNode.removeChild(ele);  
        });
    }
    
    on(action, callback) {
      this.htmlEles.forEach( ele => {
        ele.addEventListener(action, callback);
        ele.callback = callback;
      })
    }
    
    off(action) {
      this.htmlEles.forEach( ele => {
        ele.removeEventListener(action, ele.callback)
        delete ele.callback;
      })
    }
    
  }
  
  
  module.exports = DOMNodeCollection;
  