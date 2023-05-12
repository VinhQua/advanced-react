import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const URI = `https://api.github.com/users`;
function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const fetchUsers = useCallback(async (URI) => {
    try {
      const res = await axios.get(URI);
      setUsers(() => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchUsers(URI);
  }, []);

  return (
    <section>
      <h1>Fetch Data</h1>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank" rel="noreferrer">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default UseEffectFetch;
