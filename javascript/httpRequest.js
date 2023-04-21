async function get(url)
{
  let response = await fetch(url);
  if(response.ok){
    let result = await response.json()
    return result
  }else{
    return `Error while fetching ${response.status}`
  }
}

async function post(url,postData){
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
