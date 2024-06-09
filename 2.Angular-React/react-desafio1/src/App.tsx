import React from 'react'

interface User {
  email: string;
}

function App() {
 const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => alert(e))
  }, [])

  return (
    <ul>
      {users.map((user, index) => <li key={index}>{user.email}</li> )}
    </ul>

  )
}

export default App
