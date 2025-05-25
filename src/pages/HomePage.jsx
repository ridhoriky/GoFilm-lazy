import React, { Suspense } from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import RowList from "../constant/RowList";

const HomePage = () => {
  return (
    <div>
      <Hero />
      {RowList.list.map((list) => (
        <Suspense key={list.id} fallback={<div>Loading row...</div>}>
          <Row
            rowID={list.id}
            title={list.name}
            fetchURL={list.fetchURL}
            type={list.type}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default HomePage;
