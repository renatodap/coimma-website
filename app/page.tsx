import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 antialiased">
      {/* Hero Section - Destaques */}
      <section className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              Destaques
            </h1>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Featured Product - Megatron */}
            <div className="lg:col-span-8">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-blue-100 text-blue-800">
                    Inovação
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                  Megatron
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  O Megatron, é um tronco de contenção hidráulico inovador…
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Conheça o produto
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Secondary Products */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center px-2 py-1 rounded text-xs font-medium uppercase tracking-wide bg-green-100 text-green-800 mb-4">
                  Lançamento
                </div>
                <h3 className="text-xl font-bold mb-3">Troncos Robust Plus</h3>
                <p className="text-gray-600 text-sm">LANÇAMENTO!!!</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Balanças Rodoviárias</h3>
                <p className="text-gray-600 text-sm">Conheça as soluções da Coimma para pesagem rodoviária…</p>
              </div>
            </div>
          </div>
          
          {/* Additional Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all group-hover:border-gray-300">
                <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">Tronco Sertanejo – Pesagem Animal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Você sabe a diferença entre os modelos dos Indicadores Avulsos de Pesagem da Coimma? Atualmente temos a KM3-Plus e a KM3-N…</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all group-hover:border-gray-300">
                <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">Tronco Sertanejo – Contenção Animal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">O Brete de Contenção é um equipamento projetado especialmente para conter e imobilizar bovinos…</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all group-hover:border-gray-300">
                <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">Tronco Sertanejo – Acessórios para Pecuária</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Equipamento portátil, prático, durável e fácil de usar…</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all group-hover:border-gray-300">
                <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">Tronco Sertanejo – Pesagem Rodoviária</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A Balança Rodoviária é extremamente necessária para o dia a dia…</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              Nossos Diferenciais
            </h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              70 anos construindo excelência no agronegócio brasileiro
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Atendimento</h3>
                <p className="text-gray-600 leading-relaxed">
                  A empresa prima pela qualidade dos seus produtos e por um atendimento diferenciado, do início ao fim do processo.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Líder de Mercado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Com 70 anos de trajetória, somos referência em troncos e balanças bovinas no Brasil, desenvolvendo soluções que escutam e atendem a voz do campo.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 lg:p-10 h-full shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </main>
  );
}