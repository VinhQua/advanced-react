import useFetch from "../08-CustomHooks/useFetch";

const URI = `https://api.github.com/users/vinhqua`;
function ConditionRedering() {
  const { isLoading, isError, data: user } = useFetch(URI);

  if (!user) return;
  const { avatar_url, company, bio, login, name } = user;

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {!isError && (
        <div>
          <img
            style={{ width: "150px", borderRadius: "25px" }}
            src={avatar_url}
            alt={login}
          />
          <h2>{name}</h2>
          <h4>works at{company}</h4>
          <p>{bio}</p>
        </div>
      )}
    </section>
  );
}

export default ConditionRedering;
