import { forumData } from "../Data/Data";

export const Rightbar = () => {
  const { accountId, username, name, picUrl } = forumData;
  return (
    <div className="Right-continer" key={accountId}>
      <div>
        <button>home</button>
        <button>explore</button>
        <button>bookmark</button>
        <button>profile</button>
      </div>
      <div className="profile">
        <img src={picUrl} />
        <h2>{name}</h2>
        <h3>@{username}</h3>
      </div>
    </div>
  );
};
