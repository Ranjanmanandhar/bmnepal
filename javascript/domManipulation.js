export function changeClassName(name){
    this.className = name;
  }
  
  export function insertNewElement(elementType,elementToInsertAfter)
  {
    let element = document.createElement(elementType);
    elementToInsertAfter.append(element)
  }
  
  function getSelectValue(){
      return this.value;
  }
  
  function setSelectValue(value){
    this.value = value;
  }