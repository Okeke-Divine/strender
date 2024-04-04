import { useState, useEffect } from "react";
import api from "../utils/api";
//components
import DocumentTittle from "../utils/documentTitle";
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNews from "../components/LatestNews";

export default function CategoryPostList({ lastestNewsDesc }) {
  return (
    <>
      <main className="mainComponent">
        <DocumentTittle title="Category" />
        <div className="mb-5">
          <ComponentTitle title="Categories" url={null} />
        </div>
      </main>
    </>
  );
}
