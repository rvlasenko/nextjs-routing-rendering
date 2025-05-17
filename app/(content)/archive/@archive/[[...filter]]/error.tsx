"use client";

export default function FilterError({ error }: { error: Error }) {
  return (
    <div id="error">
      <h1>Invalid Filter</h1>
      <p>{error.message}</p>
    </div>
  );
}
