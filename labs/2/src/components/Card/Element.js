class Element {
    //set element as a component 
      set component(component) {
        this.component = component;
      }


    //function to return component for this class
      get component() {
        return this.component;
      }


    //element constructor for this class
      constructor(element) {
        //creates DOM element for this class
        this.element = document.createElement(element);
        //append DOM element to document body
        document.body.appendChild(this.element);
      }

    //renders this componenet and sets it in the DOM element HTML 
      render() {
        this.element.innerHTML = this.component.render();
      }
    
    }
  
  export default Element;
  