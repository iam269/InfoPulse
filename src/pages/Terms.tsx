import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Termeni și Condiții</h1>

          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptarea Termenilor</h2>
            <p>
              Prin accesarea și utilizarea acestui site web, acceptați să fiți legat de acești termeni și condiții.
              Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați acest site.
            </p>

            <h2>2. Utilizarea Conținutului</h2>
            <p>
              Conținutul acestui site este oferit doar în scopuri informaționale. Nu garantăm acuratețea sau completitudinea informațiilor.
            </p>

            <h2>3. Proprietatea Intelectuală</h2>
            <p>
              Toate drepturile de proprietate intelectuală asupra conținutului acestui site aparțin InfoPulse sau licențiatorilor săi.
            </p>

            <h2>4. Limitarea Răspunderii</h2>
            <p>
              InfoPulse nu va fi responsabil pentru niciun fel de daune directe, indirecte sau incidentale rezultate din utilizarea acestui site.
            </p>

            <h2>5. Modificări ale Termenilor</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările vor fi efective imediat după publicare.
            </p>

            <h2>6. Contact</h2>
            <p>
              Dacă aveți întrebări despre acești termeni și condiții, vă rugăm să ne contactați.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;