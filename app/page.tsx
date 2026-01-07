import { Calendar, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const googleFormUrl = "https://forms.gle/F6Y47nL6YC79vYRWA";

  return (
    <div className="bg-[#1e2a3a] text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-between py-8 sm:py-12">
        <main className="mx-auto max-w-6xl flex-1 px-4 sm:px-6 flex flex-col justify-center">
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

          {/* Contenu principal - Layout 2 colonnes sur desktop */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Colonne gauche - Contenu */}
            <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
              {/* Badge Talk */}
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6 sm:px-6">
                <span className="text-base font-semibold text-[#3ecf8e] sm:text-lg">🎤 Talk</span>
              </div>

              {/* Titre de l'événement */}
              <h1 className="mb-4 text-2xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl">
                Le Novel Food :{" "}
                <span className="text-[#3ecf8e]">Frein</span> ou{" "}
                <span className="text-[#3ecf8e]">accélérateur</span>{" "}
                d&apos;innovation ?
              </h1>

              {/* Organisateurs */}
              <div className="mb-4 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4 lg:justify-start">
                <span className="text-xs text-gray-400 sm:text-sm">Organisé par</span>
                <Image
                  src="/deplano-logo.svg"
                  alt="DePlano"
                  width={100}
                  height={30}
                  className="h-5 w-auto sm:h-6"
                />
                <span className="text-gray-500">•</span>
                <div className="rounded bg-white px-2 py-1">
                  <Image
                    src="/cpme-logo.svg"
                    alt="CPME 94"
                    width={80}
                    height={24}
                    className="h-4 w-auto sm:h-5"
                  />
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:gap-3">
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
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <span>MIN de Rungis -</span>
                    <Image
                      src="/rungis&co.svg"
                      alt="Incubateur Rungis&Co"
                      width={120}
                      height={32}
                      className="h-6 w-auto sm:h-7"
                    />
                  </a>
                </div>
              </div>

              {/* Bouton d'inscription */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full rounded-full bg-[#3ecf8e] px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-[#3ecf8e]/30 transition-all hover:bg-[#35b57a] hover:shadow-xl hover:shadow-[#3ecf8e]/40 hover:scale-105 sm:w-fit sm:px-10 sm:py-4 sm:text-lg"
              >
                🎟️ S&apos;inscrire gratuitement
              </a>
            </div>

            {/* Colonne droite - Photo Katia en grand */}
            <div className="relative lg:shrink-0 flex flex-col items-center">
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6 sm:px-6">
                <span className="text-base font-semibold text-[#3ecf8e] sm:text-lg">⭐ Main Guest</span>
              </div>
              <div className="relative">
                <Image
                  src="/speakers/katia.png"
                  alt="Maître Katia Merten-Lentz"
                  width={320}
                  height={320}
                  className="h-48 w-48 rounded-full object-cover grayscale sm:h-64 sm:w-64 lg:h-80 lg:w-80"
                />
              </div>
              <div className="mt-4 text-center max-w-xs lg:max-w-sm">
                <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">Maître Katia Merten-Lentz</p>
                <p className="text-sm text-gray-400 lg:text-base">Avocate Food Law</p>
                <p className="text-xs text-gray-500 lg:text-sm">Experte alimentation humaine et animale, innovation et sécurité alimentaire</p>
              </div>
            </div>
          </div>

          {/* Logos partenaires - sur une même ligne */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start">
            <span className="text-xs text-gray-400 sm:text-sm">Avec le soutien de</span>
            <div className="rounded-md bg-white px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-xs font-bold text-gray-800 sm:text-sm">FoodTech</span>
            </div>
            <div className="rounded-md bg-white px-3 py-1.5 sm:px-4 sm:py-2">
              <Image
                src="/bpi.svg"
                alt="Bpifrance"
                width={100}
                height={32}
                className="h-5 w-auto sm:h-7"
              />
            </div>
          </div>
        </main>

        {/* Lien "En savoir plus" en bas */}
        <div className="flex flex-col items-center gap-2 pb-4 sm:gap-3">
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
      <section id="details" className="scroll-mt-24 bg-[#162029] py-12 sm:scroll-mt-8 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* À propos */}
            <div>
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6">
                <span className="text-sm font-semibold text-[#3ecf8e] sm:text-base">📋 À propos</span>
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
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6">
                <span className="text-sm font-semibold text-[#3ecf8e] sm:text-base">👥 Intervenants</span>
              </div>
              <div className="flex flex-col gap-6">
                {/* Sophie de Reynal - mise en avant */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/speakers/sophie.png"
                      alt="Sophie de Reynal"
                      width={96}
                      height={96}
                      className="h-20 w-20 rounded-full object-cover grayscale sm:h-24 sm:w-24"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white sm:text-xl">Sophie de Reynal</p>
                    <p className="text-sm text-gray-400 sm:text-base">Directrice marketing, Nutrimarketing Innovation Alimentaire &amp; Communication</p>
                  </div>
                </div>

                {/* Maître Katia Merten-Lentz */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/speakers/katia.png"
                      alt="Maître Katia Merten-Lentz"
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover grayscale sm:h-20 sm:w-20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Maître Katia Merten-Lentz</p>
                    <p className="text-sm text-gray-400">Avocate Food Law - Experte alimentation humaine et animale</p>
                  </div>
                </div>

                {/* Startups FoodTech */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600 text-xl font-bold text-white sm:h-20 sm:w-20 sm:text-2xl">
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
