import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="landing">
        <header>
          <Header />
        </header>
        <main className="text-white">Hero</main>
      </div>
      <section className="h-full">About</section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
