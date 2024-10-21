import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/Articles/Articles";
import Banner from "@/components/templates/index/Banner/Banner";
import Latest from "@/components/templates/index/Latest/Latest";
import Promote from "@/components/templates/index/Promote/Promote";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer/>
    </>
  );
}
