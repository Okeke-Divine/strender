"use client";
import { useEffect } from "react";
// import Head from "next/head";

export default function SetDocumentTitle({ title }) {
  useEffect(() => {
    // Set the document title when the component mounts or 'title' prop changes
    document.title = title ? `${title} - Strender` : "Strender";
    // Optionally, return a cleanup function if necessary
    return () => {
      // Reset the document title when the component unmounts
      document.title = "Strender";
    };
  }, [title]); // Run this effect whenever 'title' prop changes

  // This component doesn't render anything directly, so you can return null
  return null;
}
