const data = {
    value: ''
  };
  
  const el = document.getElementById('inputEl');
  
  Object.defineProperty(data, 'prop', {
    get: function() {
      return this.value;
    },
    set: function(value) {
      this.value = value;
      el.value = value;
      printVal();
    }
  });
  
  
  el.addEventListener('keyup', (event) => {
    data.prop = event.target.value;
  });
  
  function printVal() {
    const el = document.getElementById('val');
    el.innerText = data.prop;
  }
  
  const btn = document.getElementById('incrementVal');
  btn.addEventListener('click', () => {
      data.prop = Number(data.prop) + 1;
  });