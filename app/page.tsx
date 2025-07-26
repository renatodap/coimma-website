import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

export default function HomePage() {
  // Reusable component classes
  const sectionContainer = "max-w-screen-xl mx-auto px-6 lg:px-8";
  const sectionPadding = "py-20 lg:py-24";
  const sectionTitle = "text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-snug text-[#5c0a0a]";
  const sectionSubtitle = "text-lg lg:text-xl text-gray-600 leading-relaxed text-balance";
  const cardBase = "bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300";
  const cardShadow = "shadow-sm hover:shadow-md border border-gray-50";
  const ctaButton = "inline-flex items-center justify-center px-8 py-3 bg-[#5c0a0a] text-white rounded-2xl font-semibold tracking-tight transition-all duration-200 hover:bg-[#4a0808] hover:scale-105";
  const iconContainer = "w-14 h-14 rounded-2xl flex items-center justify-center mb-6";
  const divider = "w-12 h-0.5 bg-[#5c0a0a] mx-auto";

  return (
    <>
      <Header />
      <main className="bg-white text-[#333] antialiased">
        {/* 1. Hero Section with Video */}
        <section className="relative bg-[#5c0a0a] min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
              <VideoPlayer
                src="/video.mp4"
                poster="/placeholder.jpg"
                title="Olhar no Futuro"
                description="A COIMMA é respeitada pela longa história de excelência e inovação."
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-center max-w-4xl mx-auto px-6">
                <h1 className="text-white text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight mb-6">
                  Olhar no Futuro
                </h1>
                <p className="text-white/90 text-xl lg:text-2xl font-light leading-relaxed text-balance">
                  A COIMMA é respeitada pela longa história de excelência e inovação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Destaques Section */}
        <section className={`bg-gray-50/50 ${sectionPadding}`}>
          <div className={sectionContainer}>
            <div className="text-center mb-16">
              <h2 className={`${sectionTitle} mb-4`}>Destaques</h2>
              <div className={`${divider} mb-6`}></div>
              <p className={sectionSubtitle}>Conheça nossos produtos mais inovadores</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Megatron */}
              <article className={`${cardBase} ${cardShadow} text-center group`}>
                <div className="mb-8">
                  <img src="/megatron.png" alt="Megatron" className="w-32 h-32 object-cover rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c0a0a] mb-3 tracking-tight">Megatron</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-balance">O Megatron é um tronco de contenção hidráulico inovador…</p>
                <a href="/produtos/megatron" className={ctaButton}>Ver Produto</a>
              </article>
              {/* Troncos Robust Plus */}
              <article className={`${cardBase} ${cardShadow} text-center group relative`}>
                <div className="absolute -top-3 -right-3 bg-[#ffcc00] text-[#5c0a0a] px-4 py-2 rounded-full text-sm font-bold tracking-tight">
                  NOVO
                </div>
                <div className="mb-8">
                  <img src="/troncosrobustplus.png" alt="Troncos Robust Plus" className="w-32 h-32 object-cover rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c0a0a] mb-3 tracking-tight">Troncos Robust Plus</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-balance">LANÇAMENTO!!!</p>
                <a href="/produtos/troncos-robust-plus" className={ctaButton}>Ver Produto</a>
              </article>
              {/* Balanças Rodoviárias */}
              <article className={`${cardBase} ${cardShadow} text-center group`}>
                <div className="mb-8">
                  <img src="/pesagemrodoviaria.png" alt="Balanças Rodoviárias" className="w-32 h-32 object-cover rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#5c0a0a] mb-3 tracking-tight">Balanças Rodoviárias</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-balance">Conheça as soluções da Coimma para pesagem rodoviária…</p>
                <a href="/produtos/balancas-rodoviarias" className={ctaButton}>Ver Produto</a>
              </article>
            </div>
          </div>
        </section>

        {/* 3. Nossas Soluções Section */}
        <section className={`bg-white ${sectionPadding}`}>
          <div className={sectionContainer}>
            <div className="text-center mb-16">
              <h2 className={`${sectionTitle} mb-4`}>Nossas Soluções</h2>
              <div className={`${divider} mb-6`}></div>
              <p className={sectionSubtitle}>Soluções completas para o agronegócio brasileiro</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pesagem Animal */}
              <article className={`${cardBase} ${cardShadow} text-center group min-h-[280px] flex flex-col justify-between`}>
                <div>
                  <div className="mb-6">
                    <img src="/pesagemanimal.png" alt="Pesagem Animal" className="w-20 h-20 object-cover rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c0a0a] mb-4 tracking-tight">Pesagem Animal</h3>
                </div>
                <a href="/produtos/pesagem-animal" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5c0a0a] text-white rounded-xl font-medium tracking-tight transition-all duration-200 hover:bg-[#4a0808] text-sm">
                  Ver Solução
                </a>
              </article>
              {/* Contenção Animal */}
              <article className={`${cardBase} ${cardShadow} text-center group min-h-[280px] flex flex-col justify-between`}>
                <div>
                  <div className="mb-6">
                    <img src="/contencaoanimal.png" alt="Contenção Animal" className="w-20 h-20 object-cover rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c0a0a] mb-4 tracking-tight">Contenção Animal</h3>
                </div>
                <a href="/produtos/contencao-animal" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5c0a0a] text-white rounded-xl font-medium tracking-tight transition-all duration-200 hover:bg-[#4a0808] text-sm">
                  Ver Solução
                </a>
              </article>
              {/* Acessórios para Pecuária */}
              <article className={`${cardBase} ${cardShadow} text-center group min-h-[280px] flex flex-col justify-between`}>
                <div>
                  <div className="mb-6">
                    <img src="/acessoriosparapecuaria.png" alt="Acessórios para Pecuária" className="w-20 h-20 object-cover rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c0a0a] mb-4 tracking-tight">Acessórios para Pecuária</h3>
                </div>
                <a href="/produtos/acessorios-pecuaria" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5c0a0a] text-white rounded-xl font-medium tracking-tight transition-all duration-200 hover:bg-[#4a0808] text-sm">
                  Ver Solução
                </a>
              </article>
              {/* Pesagem Rodoviária */}
              <article className={`${cardBase} ${cardShadow} text-center group min-h-[280px] flex flex-col justify-between`}>
                <div>
                  <div className="mb-6">
                    <img src="/placeholder.jpg" alt="Pesagem Rodoviária" className="w-20 h-20 object-cover rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c0a0a] mb-4 tracking-tight">Pesagem Rodoviária</h3>
                </div>
                <a href="/produtos/pesagem-rodoviaria" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5c0a0a] text-white rounded-xl font-medium tracking-tight transition-all duration-200 hover:bg-[#4a0808] text-sm">
                  Ver Solução
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Nossos Diferenciais Section */}
        <section className={`bg-gray-50/30 ${sectionPadding}`}>
          <div className={sectionContainer}>
            <div className="text-center mb-16">
              <h2 className={`${sectionTitle} mb-4`}>Nossos Diferenciais</h2>
              <div className={`${divider} mb-6`}></div>
              <p className={`${sectionSubtitle} max-w-2xl mx-auto`}>
                70 anos construindo excelência no agronegócio brasileiro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <article className={`${cardBase} ${cardShadow} h-full`}>
                <div className={`${iconContainer} bg-[#ffcc00]/10`}>
                  <svg className="w-7 h-7 text-[#5c0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5c0a0a] tracking-tight">Atendimento</h3>
                <p className="text-gray-600 leading-relaxed text-balance">
                  A empresa prima pela qualidade dos seus produtos e por um atendimento diferenciado, do início ao fim do processo.
                </p>
              </article>

              <article className={`${cardBase} ${cardShadow} h-full`}>
                <div className={`${iconContainer} bg-[#ffcc00]/10`}>
                  <svg className="w-7 h-7 text-[#5c0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5c0a0a] tracking-tight">Líder de Mercado</h3>
                <p className="text-gray-600 leading-relaxed text-balance">
                  Com 70 anos de trajetória, somos referência em troncos e balanças bovinas no Brasil, desenvolvendo soluções que escutam e atendem a voz do campo.
                </p>
              </article>

              <article className={`${cardBase} ${cardShadow} h-full`}>
                <div className={`${iconContainer} bg-[#ffcc00]/10`}>
                  <svg className="w-7 h-7 text-[#5c0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5c0a0a] tracking-tight">Frota Própria</h3>
                <p className="text-gray-600 leading-relaxed text-balance">
                  Mais de 20 caminhões e equipe de montagem própria garantem entregas diretas e montagem técnica especializada.
                </p>
              </article>

              <article className={`${cardBase} ${cardShadow} h-full`}>
                <div className={`${iconContainer} bg-[#ffcc00]/10`}>
                  <svg className="w-7 h-7 text-[#5c0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5c0a0a] tracking-tight">De olho no futuro</h3>
                <p className="text-gray-600 leading-relaxed text-balance">
                  Parcerias com universidades e centros de pesquisa como a Embrapa nos colocam na vanguarda da inovação no setor pecuário.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Depoimentos
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                O que nossos clientes falam sobre a COIMMA
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <blockquote className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  &quot;Após 40 anos de experiência na área veterinária, posso garantir que os produtos COIMMA sempre estiveram presentes com resultados de primeira qualidade.&quot;
                </p>
                <footer className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold text-gray-600">WA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Wander Baganha Azevedo</div>
                    <div className="text-sm text-gray-600">Médico Veterinário</div>
                  </div>
                </footer>
              </blockquote>

              <blockquote className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  &quot;Trabalho com a Coimma há mais de 25 anos. Aprovo e recomendo seus produtos a todos os pecuaristas que trabalham por um manejo mais racional.&quot;
                </p>
                <footer className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold text-gray-600">GP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Gilberto Andrade Pereira</div>
                    <div className="text-sm text-gray-600">Médico veterinário, pecuarista e comerciante</div>
                  </div>
                </footer>
              </blockquote>

              <blockquote className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  &quot;Tenho mais de dez produtos da Coimma instalados e funcionando em minhas fazendas. Comprovei a qualidade e durabilidade desses equipamentos.&quot;
                </p>
                <footer className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold text-gray-600">AF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alexandre de Figueiredo Ferraz</div>
                    <div className="text-sm text-gray-600">Empresário e pecuarista</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}