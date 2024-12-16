import DoubleTrouble from "./Components/DoubleTrouble";
import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";
import OurBlogs from "./Components/OurBlogs";
import OurInsta from "./Components/OurInsta";
import TopPicks from "./Components/TopPicks";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <DoubleTrouble />
        <TopPicks />
        <NewArrivals />
        <OurBlogs />
        <OurInsta />
      </div>
    </main>
  );
}
