function Crud() {

  const url = 'https://jsonplaceholder.typicode.com/posts';

  // GET or READ
  let intervalId;
  function getData(url) {
    intervalId = setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => console.log('GET data', jsonData))
        .catch((error) => console.error(error));
    }, 5000);
  }
  getData(url);

  function stopInterval(id){
    setTimeout(() => {
      clearInterval(id);
    }, 10000)
  }
  stopInterval(intervalId);

  // POST or CREATE
  function postData(url, options) {
    fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => console.log('POST data', jsonData))
      .catch((error) => console.error(error));
  }

  const customData = {
    body: 'This is created data by me',
    id: 2021,
    title: 'my created data',
    userId: 2021
  }

  postData(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customData)
  })

  // PUT or UPDATE

  function updateData(url, options) {
    fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => console.log('PUT data', jsonData))
      .catch((error) => console.error(error));
  }

  const updateId = 1;
  const updatedData = {
    body: 'This is updated data ',
    title: 'my updated data',
  }

  updateData(`${url}/${updateId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })

  // DELETE 
  function deleteData(url, options) {
    fetch(url, options)
      .then((response) => response.json())
      .then((jsonData) => console.log('DELETE data', jsonData))
      .catch((error) => console.error(error));
  }

  deleteData(`${url}/${updateId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })


  return (
    <>
      <h1>CRUD Operations</h1>
    </>
  )
}

export default Crud