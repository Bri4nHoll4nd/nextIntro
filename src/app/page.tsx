import "@/styles/stylesheet.css";
import Link from "next/link";

export default function Home() {
  return (
    <div id="mainPage">
      <Link legacyBehavior href="products">
        <a id="goToProducts">Go to products</a>
      </Link>
    </div>
  )
}
