import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Developer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Despre Dezvoltator</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder-developer.jpg"
                alt="Dezvoltator"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Numele Meu</h2>
              <p className="text-lg text-muted-foreground">
                Dezvoltator Full-Stack cu pasiune pentru tehnologie și inovație.
              </p>
              <div className="space-y-2">
                <p>
                  Sunt un dezvoltator web cu experiență în crearea de aplicații moderne și responsive.
                  Specializat în React, TypeScript, și Node.js.
                </p>
                <p>
                  Îmi place să lucrez la proiecte care au impact pozitiv asupra utilizatorilor și să învăț
                  mereu lucruri noi în domeniul tehnologiei.
                </p>
                <p>
                  Când nu codez, mă ocup cu cititul, sportul și explorarea de noi idei în domeniul AI și web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Developer;