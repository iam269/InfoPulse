import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

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
                src="./src/assets/ionitaaurelmihai.jpg"
                alt="Dezvoltator"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Ionita Aurel Mihai</h2>
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

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Conectează-te cu mine online</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/iam269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/eusuntaurel1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ionitaaurel32@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
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