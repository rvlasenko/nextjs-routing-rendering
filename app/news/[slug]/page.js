import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = getAllNews().find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="news-image"
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
