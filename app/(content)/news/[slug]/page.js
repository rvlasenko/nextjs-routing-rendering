import { getAllNews } from "@/lib/news";
import Link from "next/link";
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
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            className="news-image"
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
