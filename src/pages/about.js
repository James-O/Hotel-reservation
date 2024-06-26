import {React,useEffect,useState} from 'react'


export default function About() {
  const [profiles, getProfiles] = useState(null);

  
  useEffect(() => {
    const endpoint = 'https://iriri-backend.onrender.com/api/v1/profile/preview/';

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5MjQwMDk0LCJpYXQiOjE3MTkyMzY0OTQsImp0aSI6ImY3YmI5YWEwZGRkMzQ4NzU5YWIzMWZjZWU2ODY1ZDljIiwidXNlcl9pZCI6IjQ3MjNmNWI4LWZkNWUtNDRjYi05Y2MwLTJlOTE5NmEzNmIxOSJ9.Em-Uod3LDqFHEeOoBggvuNnwK5O2Y6qdGK2LEujorNc';

    fetch(endpoint, {
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res=>{
        return res.json()
      })
      .then(data=>
        //console.log(data)
        getProfiles(data)
        )
  }, []);

  let UserProfile=({profiles})=>{
    return(
      <div>
        {
          profiles.map((profile)=>(
            <div>
              <h5>{profile.email}</h5>
            </div>
          ))
        }
      </div>
    )
  }  

  return (
      <div>
          <h1>Data</h1>
          {profiles && <UserProfile profiles={profiles}/>}
      </div>
  );
};
