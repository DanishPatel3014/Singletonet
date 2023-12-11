import Aboutsec from "@/components/about/Aboutsec";
import Mainbanner from "@/components/banner/Mainbanner";
import Expertise from "@/components/expertise/Expertise";
import Header from "@/components/header/Header";
import Servicesec from "@/components/service/Servicesec";


export default function Home() {
  return (
    <main>
      <Header />
      <Mainbanner />
      <Aboutsec/>
      <Servicesec/>
      <Expertise/>
    </main>
  );
}
