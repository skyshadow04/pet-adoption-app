import Homepage from './pages/homepage/page'
import NavigationBar from './pages/parts/navigation/navigation-bar';
import Footer from './pages/parts/footer/footer';

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">
        <Homepage />
      </main>
      <Footer />
    </div>
    </>
  );
}
