/* eslint-disable react/prop-types */
import avatar from "../assets/react.svg";
export function Person({ name, images, nickName = "ShakeAndBake" }) {
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt="" style={{ width: "50px" }} />
      <h2>{name}</h2>
      <p>NickName: {nickName}</p>
    </div>
  );
}
