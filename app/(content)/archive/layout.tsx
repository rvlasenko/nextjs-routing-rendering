export default function Layout({
  archive,
  latest,
}: {
  archive: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <div>
      <h1>Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
