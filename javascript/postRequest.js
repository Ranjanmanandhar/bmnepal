async function postRequestOne(url,postData){
    let response = await fetch(url,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(postData)
    });
  
    if(response.ok){
        let result = await response.json();
        return result
    }else{
      return `Error while making post request ${response.status}`
    }
  }
  
  async function postRequestTwo(url,postData){
    let response = await fetch(url,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(postData)
    });
  
    if(response.ok){
        let result = await response.json();
        return result
    }else{
      return `Error while making post request ${response.status}`
    }
  }
  
  async function postRequestThree(url,postData){
    let response = await fetch(url,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(postData)
    });
  
    if(response.ok){
        let result = await response.json();
        return result
    }else{
      return `Error while making post request ${response.status}`
    }
  }
  
  (
    async()=>{
    await postRequestOne('https://jsonplaceholder.typicode.com/posts',data);
     await postRequestTwo('https://jsonplaceholder.typicode.com/posts',data2); 
     await postRequestThree('https://jsonplaceholder.typicode.com/posts',data3);
  })()
  