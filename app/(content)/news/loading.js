export default function Loading() {
  return (
    <div className="skeleton-container">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
        </div>
      ))}
    </div>
  );
}
