
import { Header } from "@/components/Header";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="inline-block text-[42px] text-white bg-[#5C2E2E] px-[120px] py-[55px] max-sm:text-[32px] max-sm:px-5 max-sm:py-[30px]">
          Early Access Program
        </section>

        <EarlyAccessForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
