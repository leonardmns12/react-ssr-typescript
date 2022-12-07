import React, { useState } from "react";
import useDebounce from "./hooks/useSearch";

export type Comment = {
  commentId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

interface IAppProps {
  comments: Comment[];
}

const App: React.FC<IAppProps> = ({ comments }): React.ReactElement => {
  const [search, setSearch] = useState<string>("");
  const data = useDebounce(search, comments, 1000);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="Search Comments..."
        className="search-input"
      />
      {data.map((comment) => (
        <div className="card" key={comment.id}>
          Email From: <span>{comment.email}</span>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
