import React from "react";

interface ApiRes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data: ApiRes[] = await res.json();
  //   console.log(data);

  return (
    <div className="w-full min-h-screen">
      {data.map((d, idx) => (
        <div className="w-full border py-2 flex flex-col" key={idx}>
          <h1>ID: {d.id}</h1>
          <h1>Title: {d.title}</h1>
          <h1>Status: {d.completed}</h1>
          <h1>UserId: {d.userId}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
