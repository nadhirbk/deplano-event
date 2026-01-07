"use client";

import { Calendar, ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const googleFormUrl = "https://forms.gle/F6Y47nL6YC79vYRWA";

  return (
    <div className="bg-[#1e2a3a] text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-center py-4 sm:justify-between sm:py-8">
        <main className="mx-auto max-w-6xl px-4 sm:px-6 pb-2 flex flex-col justify-center sm:flex-1">
          {/* Header avec logo DePlano */}
          <div className="mb-8 flex justify-center sm:mb-12">
            <Image
              src="/deplano-logo.svg"
              alt="DePlano"
              width={180}
              height={50}
              priority
              className="h-8 w-auto sm:h-12"
            />
          </div>

          {/* Contenu principal - Layout 2 colonnes sur desktop */}
          <div className="flex flex-col items-center gap-5 sm:gap-4 lg:flex-row lg:items-start lg:gap-12">
            {/* Colonne gauche - Contenu */}
            <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
              {/* Badge Talk */}
              <div className="mb-3 w-fit rounded-full bg-[#3ecf8e]/20 px-3 py-1 ring-2 ring-[#3ecf8e] sm:mb-6 sm:px-6 sm:py-2">
                <span className="text-xs font-semibold text-[#3ecf8e] sm:text-lg">Talk</span>
              </div>

              {/* Titre de l'événement */}
              <h1 className="mb-2 text-xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl">
                Le Novel Food :{" "}
                <span className="text-[#3ecf8e]">Frein</span> ou{" "}
                <span className="text-[#3ecf8e]">accélérateur</span>{" "}
                d&apos;innovation ?
              </h1>

              {/* Organisateurs */}
              <div className="mb-2 flex items-center justify-center gap-3 sm:mb-6 sm:gap-5 lg:justify-start">
                <span className="text-xs font-semibold text-gray-400 sm:text-sm">Organisé par</span>
                <a href="https://deplano.fr/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/deplano-logo.svg"
                    alt="DePlano"
                    width={100}
                    height={30}
                    className="h-5 w-auto sm:h-6"
                  />
                </a>
                <span className="text-xl font-bold text-gray-400">&amp;</span>
                <a href="https://cpme94.fr/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-2 py-1 transition-opacity hover:opacity-80">
                  <Image
                    src="/cpme94.png"
                    alt="CPME 94"
                    width={80}
                    height={24}
                    className="h-6 w-auto sm:h-8"
                  />
                </a>
              </div>

              {/* Informations pratiques */}
              <div className="mb-2 flex flex-col gap-1 sm:mb-6 sm:gap-3">
                <div className="flex items-center justify-center gap-2 text-sm sm:gap-3 sm:text-lg lg:justify-start">
                  <Calendar className="h-4 w-4 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
                  <span>23 janvier 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm sm:gap-3 sm:text-lg lg:justify-start">
                  <Clock className="h-4 w-4 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
                  <span>11h - 13h</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm sm:gap-3 sm:text-lg lg:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 text-gray-400 sm:h-6 sm:w-6" />
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
                      className="h-5 w-auto sm:h-7"
                    />
                  </a>
                </div>
              </div>

              {/* Logos partenaires - cachés sur mobile */}
              <div className="mt-4 hidden flex-col gap-1 sm:mt-6 sm:flex">
                <span className="text-center text-xs font-semibold text-gray-400 sm:text-sm lg:text-left">Avec le soutien de</span>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                  <div className="rounded-md bg-white px-2 py-1 sm:px-3 sm:py-1.5">
                    <Image
                      src="/foodtech.png"
                      alt="FoodTech"
                      width={80}
                      height={24}
                      className="h-5 w-auto sm:h-6"
                    />
                  </div>
                  <div className="rounded-md bg-white px-2 py-1 sm:px-3 sm:py-1.5">
                    <Image
                      src="/agroalia.avif"
                      alt="Agroalia"
                      width={80}
                      height={24}
                      className="h-5 w-auto sm:h-6"
                    />
                  </div>
                  <div className="rounded-md bg-[#FFCD00] px-2 py-1 sm:px-3 sm:py-1.5">
                    <Image
                      src="/bpi.svg"
                      alt="Bpifrance"
                      width={100}
                      height={32}
                      className="h-4 w-auto sm:h-5"
                    />
                  </div>
                </div>
              </div>

              {/* CTA S'inscrire - Desktop uniquement, aligné à gauche */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 hidden rounded-xl bg-[#3ecf8e] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#35b57a] hover:scale-105 active:scale-95 lg:inline-block"
              >
                S&apos;inscrire gratuitement
              </a>
            </div>

            {/* Colonne droite - Photo Katia en grand */}
            <div className="relative lg:shrink-0 flex flex-col items-center mt-2 sm:mt-0">
              <div className="mb-3 w-fit rounded-full bg-[#3ecf8e]/20 px-3 py-1 ring-2 ring-[#3ecf8e] sm:mb-6 sm:px-6 sm:py-2">
                <span className="text-xs font-semibold text-[#3ecf8e] sm:text-lg">Main Guest</span>
              </div>
              {/* Layout horizontal sur mobile, vertical sur desktop */}
              <div className="flex flex-row items-center gap-3 sm:flex-col sm:gap-0">
                <div className="relative shrink-0">
                  <Image
                    src="/speakers/katia.png"
                    alt="Maître Katia Merten-Lentz"
                    width={320}
                    height={320}
                    className="h-24 w-24 rounded-full object-cover grayscale sm:h-64 sm:w-64 lg:h-80 lg:w-80"
                  />
                </div>
                <div className="text-left sm:mt-4 sm:text-center sm:max-w-xs lg:max-w-sm">
                  <p className="text-sm font-semibold text-white sm:text-xl lg:text-2xl">Maître Katia Merten-Lentz</p>
                  <p className="text-xs font-semibold text-gray-300 sm:text-sm lg:text-base">Avocate Food Law</p>
                  <p className="text-xs text-gray-400 sm:block lg:text-sm">Experte alimentation humaine et animale, innovation et sécurité alimentaire &amp; procédures d&apos;autorisations européennes</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* CTAs en bas */}
        <div className="flex flex-col items-center gap-2 pb-2 pt-8 sm:gap-3 sm:pb-4 sm:pt-2">
          {/* S'inscrire - mobile/tablette seulement */}
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#3ecf8e] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#35b57a] hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base lg:hidden"
          >
            S&apos;inscrire gratuitement
          </a>
          {/* En savoir plus - toujours visible et centré */}
          <button
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl border-2 border-[#3ecf8e] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#3ecf8e]/10 active:scale-95 sm:px-6 sm:py-3 sm:text-base"
          >
            En savoir plus sur l&apos;événement
          </button>
          <ChevronDown className="h-5 w-5 animate-bounce text-[#3ecf8e] sm:h-6 sm:w-6" />
        </div>
      </section>

      {/* Section Détails */}
      <section id="details" className="scroll-mt-24 bg-[#162029] py-12 sm:scroll-mt-8 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* À propos */}
            <div>
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6">
                <span className="text-sm font-semibold text-[#3ecf8e] sm:text-base">À propos</span>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                <p>
                  Pensé il y a près de 30 ans et révisé il y a 7 ans pour dynamiser l&apos;innovation et faciliter l&apos;accès au marché européen, le règlement Novel Food suscite toujours autant d&apos;espoirs que de zones d&apos;ombre.
                </p>
                <p>
                  Entre procédures longues, exigences élevées et investissements lourds, la route est complexe. Mais les marchés à créer, les innovations de rupture et les opportunités business n&apos;ont jamais été aussi prometteurs.
                </p>
                <p className="font-medium text-white">
                  Comment continuer à booster l&apos;audace dans la FoodTech européenne ? Quels leviers activer pour concilier innovation, sécurité et accès rapide au marché ?
                </p>
                <p>
                  Pour y répondre, Me Katia Merten Lenz, référence européenne du Novel Food, décryptera les dernières tendances réglementaires et les évolutions à venir.
                </p>
                <p>
                  À ses côtés, Sophie de Reynal, spécialiste de l&apos;innovation alimentaire, apportera une vision terrain et opérationnelle.
                </p>
                <p>
                  Des startups de la FoodTech viendront également témoigner : défis concrets face au Novel Food, stratégies d&apos;adaptation, opportunités saisies pour accélérer leur croissance.
                </p>
                <p className="font-medium text-white">
                  Un talk essentiel pour toutes celles et ceux qui veulent comprendre et anticiper le futur de l&apos;innovation alimentaire en Europe.
                </p>
              </div>
            </div>

            {/* Intervenants */}
            <div>
              <div className="mb-4 w-fit rounded-full bg-[#3ecf8e]/20 px-5 py-2 ring-2 ring-[#3ecf8e] sm:mb-6">
                <span className="text-sm font-semibold text-[#3ecf8e] sm:text-base">Intervenants</span>
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
                      className="h-16 w-16 rounded-full object-cover grayscale sm:h-20 sm:w-20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Sophie de Reynal</p>
                    <p className="text-sm text-gray-400">Directrice marketing, Nutrimarketing Innovation Alimentaire &amp; Communication</p>
                  </div>
                </div>

                {/* Basma Sadani */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/speakers/basma.png"
                      alt="Basma Sadani"
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover grayscale sm:h-20 sm:w-20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Basma Sadani</p>
                    <p className="text-sm text-gray-400">Co-fondatrice @DePlano</p>
                  </div>
                </div>

                {/* Les Minuscules */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/minuscules.png"
                      alt="Les Minuscules"
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Les Minuscules</p>
                    <p className="text-sm text-gray-400">Alternatives protéiques à base de farine d&apos;insecte</p>
                  </div>
                </div>

                {/* Dooda */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-white sm:h-20 sm:w-20">
                    <Image
                      src="/dooda8.png"
                      alt="Dooda"
                      width={80}
                      height={80}
                      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">Dooda</p>
                    <p className="text-sm text-gray-400">Ingrédients à base d&apos;insectes pour nourrir les animaux, les plantes et les humains</p>
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
