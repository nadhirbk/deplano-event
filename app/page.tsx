import { Calendar, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const googleFormUrl = "https://forms.gle/F6Y47nL6YC79vYRWA";

  return (
    <div className="bg-[#1e2a3a] text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-between">
        <main className="mx-auto max-w-6xl px-4 py-6 sm:flex-1 sm:px-6 sm:py-12">
          {/* Header avec logo DePlano */}
          <div className="mb-4 flex justify-center sm:mb-12">
            <Image
              src="/deplano-logo.svg"
              alt="DePlano"
              width={180}
              height={50}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </div>

          {/* Contenu principal */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge Talk */}
            <div className="mb-4 w-fit rounded-lg bg-[#3ecf8e] px-5 py-2 sm:mb-8 sm:px-6">
              <span className="text-base font-semibold text-white sm:text-lg">Talk</span>
            </div>

            {/* Titre de l'événement */}
            <h1 className="mb-4 text-2xl font-bold leading-tight sm:mb-8 sm:text-4xl lg:text-5xl">
              Le Novel Food :{" "}
              <span className="text-[#3ecf8e]">Frein</span> ou{" "}
              <span className="text-[#3ecf8e]">accélérateur</span>{" "}
              d&apos;innovation ?
            </h1>

            {/* Logos organisateurs */}
            <div className="mb-4 flex items-center gap-4 sm:mb-8 sm:gap-6">
              <Image
                src="/deplano-logo.svg"
                alt="DePlano"
                width={150}
                height={45}
                className="h-8 w-auto sm:h-10"
              />
              <span className="text-3xl font-black text-gray-400 sm:text-4xl">•</span>
              <div className="rounded-md bg-white px-3 py-2 sm:px-4 sm:py-2.5">
                <Image
                  src="/cpme-logo.svg"
                  alt="CPME"
                  width={120}
                  height={40}
                  className="h-6 w-auto sm:h-8"
                />
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="mb-4 flex flex-col gap-2 sm:mb-8 sm:gap-4">
              <div className="flex items-center justify-center gap-3 text-base sm:text-lg lg:justify-start">
                <Calendar className="h-5 w-5 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
                <span>23 janvier 2025</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-base sm:text-lg lg:justify-start">
                <Clock className="h-5 w-5 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
                <span>11h - 13h</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-base sm:text-lg lg:justify-start">
                <MapPin className="h-5 w-5 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
                <a
                  href="https://maps.google.com/?q=Incubateur+Rungis+and+Co+MIN+de+Rungis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-500 underline-offset-4 transition-colors hover:text-[#3ecf8e] hover:decoration-[#3ecf8e]"
                >
                  MIN de Rungis - Incubateur Rungis&amp;Co
                </a>
              </div>
            </div>

            {/* Bouton d'inscription */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-[#3ecf8e] px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-[#35b57a] hover:shadow-lg hover:shadow-[#3ecf8e]/25 sm:w-fit sm:text-lg"
            >
              S&apos;inscrire
            </a>
          </div>
        </main>

        {/* Lien "En savoir plus" */}
        <div className="flex flex-col items-center gap-2 pb-4 sm:gap-3 sm:pb-8">
          <a
            href="#details"
            className="rounded-xl border-2 border-[#3ecf8e] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#3ecf8e]/10 active:scale-95 sm:text-base"
          >
            En savoir plus sur l&apos;événement
          </a>
          <ChevronDown className="h-6 w-6 animate-bounce text-[#3ecf8e]" />
        </div>
      </section>

      {/* Section Détails */}
      <section id="details" className="scroll-mt-16 bg-[#162029] py-12 sm:scroll-mt-4 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* À propos */}
            <div>
              <div className="mb-4 w-fit rounded-lg bg-[#3ecf8e] px-4 py-1.5 sm:mb-6">
                <span className="text-sm font-semibold text-white sm:text-base">À propos</span>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                <p>
                  Le 23 janvier, explorez avec nous un sujet au cœur de l&apos;innovation alimentaire européenne :
                  le Novel Food, frein ou véritable accélérateur d&apos;opportunités ?
                </p>
                <p>
                  Pensé il y a presque 30 ans, le règlement Novel Food suscite aujourd&apos;hui autant d&apos;interrogations
                  que d&apos;espoirs : procédures exigeantes, coûts importants… mais aussi nouveaux marchés,
                  innovations de rupture et potentiels business encore sous-exploités.
                </p>
                <p className="font-medium text-white">
                  Comment les startups peuvent-elles transformer ce cadre réglementaire en levier de croissance ?
                </p>
              </div>
            </div>

            {/* Intervenants */}
            <div>
              <div className="mb-4 w-fit rounded-lg bg-[#3ecf8e] px-4 py-1.5 sm:mb-6">
                <span className="text-sm font-semibold text-white sm:text-base">Intervenants</span>
              </div>
              <div className="flex flex-col gap-6">
                {/* Sophie de Reynal - mise en avant */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-full bg-[#3ecf8e] sm:h-24 sm:w-24" />
                    <Image
                      src="/speakers/sophie.png"
                      alt="Sophie de Reynal"
                      width={96}
                      height={96}
                      className="relative h-20 w-20 rounded-full object-cover grayscale sm:h-24 sm:w-24"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white sm:text-xl">Sophie de Reynal</p>
                    <p className="text-sm text-gray-400 sm:text-base">Directrice marketing, Nutrimarketing Innovation Alimentaire &amp; Communication</p>
                  </div>
                </div>

                {/* Maître Katia Merten-Lentz */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full bg-[#3ecf8e] sm:h-20 sm:w-20" />
                    <Image
                      src="/speakers/katia.png"
                      alt="Maître Katia Merten-Lentz"
                      width={80}
                      height={80}
                      className="relative h-16 w-16 rounded-full object-cover grayscale sm:h-20 sm:w-20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Maître Katia Merten-Lentz</p>
                    <p className="text-sm text-gray-400">Avocate experte en food law et innovation alimentaire</p>
                  </div>
                </div>

                {/* Startups FoodTech */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full bg-[#3ecf8e] sm:h-20 sm:w-20" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-600 text-xl font-bold text-white sm:h-20 sm:w-20 sm:text-2xl">
                      FT
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Startups FoodTech invitées</p>
                    <p className="text-sm text-gray-400">Retours d&apos;expérience terrain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
