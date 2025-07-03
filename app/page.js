import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PageLayoutManager from './components/PageLayoutManager';
import ContentManager from './components/ContentManager';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PageLayoutManager>
        <ContentManager />
      </PageLayoutManager>
    </>
  );
}