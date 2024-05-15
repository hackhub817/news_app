import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy_news";
export default function NewPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {/* <li>
          {" "}
          <Link href="news/first-news">FIRST Link</Link>
        </li>
        <li>
          {" "}
          <Link href="news/second-news">SECOND Link</Link>
        </li>
        <li>
          {" "}
          <Link href="news/third-news">THIRD Link</Link>
        </li> */}

        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
