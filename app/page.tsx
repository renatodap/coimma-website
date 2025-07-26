import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-coimma-text antialiased">
        {/* 1. Full-width Institutional Video + Intro Text */}
        <section className="relative bg-coimma-primary min-h-[60vh] flex flex-col justify-center items-center">
          <div className="w-full max-w-screen-2xl mx-auto">
            <div className="relative aspect-video w-full overflow-hidden">
              <VideoPlayer
                src="/video.mp4"
                poster="/placeholder.jpg"
                title="Olhar no Futuro"
                description="A COIMMA é respeitada pela longa história de excelência e inovação."
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h1 className="text-white text-4xl lg:text-5xl font-bold text-center drop-shadow-lg" style={{ textShadow: '0 2px 24px #5c0a0a' }}>
                Olhar no Futuro: <br />
                <span className="font-normal text-xl lg:text-2xl block mt-4">A COIMMA é respeitada pela longa história de excelência e inovação.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* 2. Destaques Section */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-4 text-coimma-primary">Destaques</h2>
              <div className="w-16 h-0.5 bg-coimma-primary mx-auto mb-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Megatron */}
              <div className="bg-coimma-neutral rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/megatron.png" alt="Megatron" className="w-40 h-40 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold text-coimma-primary mb-2">Megatron</h3>
                <p className="text-gray-700 mb-6 text-center">O Megatron é um tronco de contenção hidráulico inovador…</p>
                <a href="/produtos/megatron" className="inline-block px-6 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Produto</a>
              </div>
              {/* Troncos Robust Plus */}
              <div className="bg-white border border-coimma-neutral-alt rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/troncosrobustplus.png" alt="Troncos Robust Plus" className="w-40 h-40 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold text-coimma-primary mb-2">Troncos Robust Plus</h3>
                <p className="text-gray-700 mb-6 text-center">LANÇAMENTO!!!</p>
                <a href="/produtos/troncos-robust-plus" className="inline-block px-6 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Produto</a>
              </div>
              {/* Balanças Rodoviárias */}
              <div className="bg-coimma-neutral rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/pesagemrodoviaria.png" alt="Balanças Rodoviárias" className="w-40 h-40 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold text-coimma-primary mb-2">Balanças Rodoviárias</h3>
                <p className="text-gray-700 mb-6 text-center">Conheça as soluções da Coimma para pesagem rodoviária…</p>
                <a href="/produtos/balancas-rodoviarias" className="inline-block px-6 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Produto</a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Nossas Soluções Section */}
        <section className="bg-coimma-neutral-alt py-24 lg:py-32">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6 text-coimma-primary">
                Nossas Soluções
              </h2>
              <div className="w-16 h-0.5 bg-coimma-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pesagem Animal */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/pesagemanimal.png" alt="Pesagem Animal" className="w-28 h-28 object-cover rounded-xl mb-6" />
                <h3 className="text-xl font-bold text-coimma-primary mb-2">Pesagem Animal</h3>
                <a href="/produtos/pesagem-animal" className="inline-block px-5 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Solução</a>
              </div>
              {/* Contenção Animal */}
              <div className="bg-coimma-neutral rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/contencaoanimal.png" alt="Contenção Animal" className="w-28 h-28 object-cover rounded-xl mb-6" />
                <h3 className="text-xl font-bold text-coimma-primary mb-2">Contenção Animal</h3>
                <a href="/produtos/contencao-animal" className="inline-block px-5 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Solução</a>
              </div>
              {/* Acessórios para Pecuária */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/acessoriosparapecuaria.png" alt="Acessórios para Pecuária" className="w-28 h-28 object-cover rounded-xl mb-6" />
                <h3 className="text-xl font-bold text-coimma-primary mb-2">Acessórios para Pecuária</h3>
                <a href="/produtos/acessorios-pecuaria" className="inline-block px-5 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Solução</a>
              </div>
              {/* Pesagem Rodoviária */}
              <div className="bg-coimma-neutral rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center">
                <img src="/placeholder.jpg" alt="Pesagem Rodoviária" className="w-28 h-28 object-cover rounded-xl mb-6" />
                <h3 className="text-xl font-bold text-coimma-primary mb-2">Pesagem Rodoviária</h3>
                <a href="/produtos/pesagem-rodoviaria" className="inline-block px-5 py-2 bg-coimma-primary text-white rounded-lg font-semibold hover:bg-coimma-accent transition-colors">Ver Solução</a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Nossos Diferenciais Section */}
        <section className="bg-coimma-accent bg-opacity-10 py-24 lg:py-32">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6 text-coimma-primary">
                Nossos Diferenciais
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                70 anos construindo excelência no agronegócio brasileiro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="group">
                <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-coimma-secondary bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-coimma-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-coimma-primary">Atendimento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A empresa prima pela qualidade dos seus produtos e por um atendimento diferenciado, do início ao fim do processo.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-coimma-secondary bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-coimma-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-coimma-primary">Líder de Mercado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Com 70 anos de trajetória, somos referência em troncos e balanças bovinas no Brasil, desenvolvendo soluções que escutam e atendem a voz do campo.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-coimma-accent bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-coimma-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Frota Própria</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mais de 20 caminhões e equipe de montagem própria garantem entregas diretas e montagem técnica especializada.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">De olho no futuro</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parcerias com universidades e centros de pesquisa como a Embrapa nos colocam na vanguarda da inovação no setor pecuário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">@coimma</h2>
                <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
              </div>

              <article className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Hoje celebramos São Cristóvão, padroeiro dos viajantes, caminhoneiros e de todos que enfrentam longas jornadas pelas estradas do nosso país.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Na COIMMA, temos uma devoção especial a ele — porque sabemos que, por trás de cada entrega, cada equipamento e cada quilômetro percorrido, há vidas em movimento e sonhos sendo levados ao campo e à indústria.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Que São Cristóvão continue nos guiando com proteção, fé e força nas estradas da vida e do agro. Nossa gratidão a todos os motoristas que fazem a COIMMA chegar ainda mais longe!
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
                  Presença na FEXPOSIV 2025
                </h2>
                <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"></div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium uppercase tracking-wide">
                  Eventos & Participações
                </div>
              </div>

              <article className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    A COIMMA marcou presença na FEXPOSIV 2025, na Bolívia, representada pelo sr. José Dias Rossafa, que levou consigo conhecimento técnico e experiência acumulada durante anos de empresa.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Realizada em San Ignacio de Velasco, é uma das maiores feiras agropecuárias do país, reunindo tradição, genética de elite e grandes oportunidades de negócio.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Com mais de 21 mil visitantes e 200 expositores, o evento foi um verdadeiro encontro de inovação e pecuária de alto desempenho.
                  </p>
                </div>
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
                  "Após 40 anos de experiência na área veterinária, posso garantir que os produtos COIMMA sempre estiveram presentes com resultados de primeira qualidade."
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
                  "Trabalho com a Coimma há mais de 25 anos. Aprovo e recomendo seus produtos a todos os pecuaristas que trabalham por um manejo mais racional."
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
                  "Tenho mais de dez produtos da Coimma instalados e funcionando em minhas fazendas. Comprovei a qualidade e durabilidade desses equipamentos."
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
      );
    </>)
}