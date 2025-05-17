import Link from "next/link";

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  image: string;
}

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
