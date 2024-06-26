import {React,useEffect,useState} from 'react'

function Blog() {
  const [profiles, getProfiles] = useState(null);

  const endpoint = 'https://iriri-backend.onrender.com/api/v1/profile/preview/';

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5MjQ4MDk5LCJpYXQiOjE3MTkyNDQ0OTksImp0aSI6ImQwZjBlZGQ4NmQ3NzQzOGE5Zjc2ODQwNDY2NjkxZmM0IiwidXNlcl9pZCI6IjQ3MjNmNWI4LWZkNWUtNDRjYi05Y2MwLTJlOTE5NmEzNmIxOSJ9.z9d_KXOjFz9j7z65_3PEGspkiagkH2ynl2AOAjkpsbk';

fetch(endpoint, {
    method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc., depending on your API
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Adjust based on your API's requirements
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // or response.text() if the response is not JSON
})
.then(data => {
    console.log(data); // Handle the response data
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
  return (
    <div>Blog</div>
  )
}

export default Blog