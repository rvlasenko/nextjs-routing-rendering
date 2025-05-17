import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <NewsList news={getAllNews()} />
    </>
  );
}
