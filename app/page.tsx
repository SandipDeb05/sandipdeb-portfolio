import FeaturedProjects from "@/features/home/FeaturedProjects";
import HeroSection from "@/features/home/Hero";
import RecentBlogs from "@/features/home/RecentBlogs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecentBlogs />
      <FeaturedProjects />
    </main>
  );
}
