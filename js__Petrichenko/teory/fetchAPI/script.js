fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body: JSON.stringify({name:'alexs'}),
    headers:{
      'Content-type':'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));
