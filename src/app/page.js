import Aboutsec from "@/components/about/Aboutsec";
import Mainbanner from "@/components/banner/Mainbanner";
import Header from "@/components/header/Header";
import Servicesec from "@/components/service/Servicesec";


export default function Home() {
  return (
    <main>
      <Header />
      <Mainbanner />
      <Aboutsec/>
      <Servicesec/>
    </main>
  );
}
