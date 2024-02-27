// import './App.css'
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import CreateBlog from "./components/CreateBlog";

function App() {
  const [page, setPage] = useState("home");
  const [data, setData] = useState([
    {
      id: 1,
      title: "Title Lorem1",
      description: "Description Lorem1",
    },
    {
      id: 2,
      title: "Title Lorem2",
      description: "Description Lorem2",
    },
    {
      id: 3,
      title: "Title Lorem3",
      description: "Description Lorem3",
    },
  ]);

  function handleCreate(title, description) {
    setData([
      ...data,
      { id: data[data.length - 1].id + 1, title, description },
    ]);
    setPage("home");
  }

  return (
    <div>
      {page === "create" && <CreateBlog handleCreate={handleCreate} />}
      {page === "home" && (
        <>
          <Header onClickCreateBlog={() => setPage("create")} />
          <div className="grid grid-cols-2 gap-4">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
