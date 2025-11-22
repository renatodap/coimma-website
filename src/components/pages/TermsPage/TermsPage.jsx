import React from 'react';
import Text from '../../atoms/Text';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12 border-b border-gray-900 pb-8">
          <Text variant="caption" className="text-coimma-red mb-4 block uppercase tracking-widest">
            Legal
          </Text>
          <Text as="h1" variant="h1" className="text-white mb-6">
            Termos de Uso
          </Text>
          <Text variant="body" className="text-gray-400">
            Última atualização: Janeiro de 2025
          </Text>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              1. Aceitação dos Termos
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Ao acessar e utilizar o website da COIMMA (<strong className="text-white">www.coimma.com.br</strong>), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso.
              </Text>
              <Text variant="body" className="text-gray-300">
                Se você não concorda com qualquer parte destes termos, não utilize nosso site.
              </Text>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              2. Sobre a COIMMA
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Razão Social:</strong> COIMMA Indústrias Ltda.
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">CNPJ:</strong> [Inserir CNPJ]
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Sede:</strong> Via Marginal José Dansieri, 605 - Dracena, SP - 17900-000
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Fundação:</strong> 1951 (74 anos de tradição)
              </Text>
              <Text variant="body" className="text-gray-300">
                Fabricante de balanças e equipamentos de pesagem, com certificação INMETRO, ISO 9001, e presença em mais de 23 países.
              </Text>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              3. Uso do Website
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Você concorda em:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Utilizar o site apenas para fins legítimos e comerciais</li>
                <li>Não violar direitos de propriedade intelectual da COIMMA</li>
                <li>Não transmitir conteúdo malicioso ou prejudicial</li>
                <li>Não tentar acessar áreas restritas do sistema</li>
                <li>Fornecer informações verdadeiras em formulários de contato</li>
                <li>Respeitar a privacidade de outros usuários</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              4. Propriedade Intelectual
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Todo o conteúdo deste site, incluindo mas não limitado a:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong className="text-white">Marca COIMMA:</strong> Registrada e protegida</li>
                <li><strong className="text-white">Logotipos e identidade visual:</strong> Copyright © COIMMA 1951-2025</li>
                <li><strong className="text-white">Fotografias de produtos:</strong> Propriedade exclusiva</li>
                <li><strong className="text-white">Textos e descrições técnicas:</strong> Conteúdo original</li>
                <li><strong className="text-white">Software e código:</strong> Protegido por direitos autorais</li>
                <li><strong className="text-white">Patentes:</strong> Dispositivos patenteados junto ao INPI</li>
              </ul>
              <Text variant="body" className="text-gray-300 mt-4">
                É <strong className="text-white">PROIBIDO</strong> copiar, reproduzir, distribuir ou utilizar comercialmente qualquer conteúdo sem autorização prévia por escrito da COIMMA.
              </Text>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              5. Produtos e Serviços
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Informações Técnicas:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Especificações são fornecidas de boa-fé mas podem sofrer alterações</li>
                <li>Imagens são ilustrativas e podem diferir do produto final</li>
                <li>Preços e disponibilidade sujeitos a confirmação comercial</li>
                <li>Garantias aplicam-se conforme certificado fornecido (geralmente 24 meses)</li>
              </ul>

              <Text variant="body" className="text-gray-300 mt-4">
                <strong className="text-white">Certificações:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Todos os produtos possuem aprovação INMETRO</li>
                <li>Certificação IPEM para aferição de balanças</li>
                <li>ISO 9001 em processos de fabricação</li>
                <li>Rastreabilidade RBC (Rede Brasileira de Calibração)</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              6. Orçamentos e Propostas Comerciais
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Solicitações de orçamento através do site:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Não constituem obrigação de compra</li>
                <li>Serão respondidas em até 2 horas úteis</li>
                <li>Validade da proposta: 30 dias salvo especificação contrária</li>
                <li>Preços não incluem frete, instalação ou impostos estaduais (a menos que especificado)</li>
                <li>Condições de pagamento serão definidas na proposta comercial</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              7. Garantia e Assistência Técnica
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Garantia Padrão:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>24 meses para defeitos de fabricação</li>
                <li>Cobertura conforme certificado de garantia fornecido</li>
                <li>Não cobre danos por uso inadequado, falta de manutenção ou acidentes</li>
                <li>Células de carga: garantia específica conforme modelo</li>
              </ul>

              <Text variant="body" className="text-gray-300 mt-4">
                <strong className="text-white">Assistência Técnica:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Disponível em todo o Brasil através de rede autorizada</li>
                <li>Prazo de atendimento: até 48 horas úteis</li>
                <li>Calibração anual recomendada (conforme INMETRO)</li>
                <li>Peças originais COIMMA com rastreabilidade</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              8. Limitação de Responsabilidade
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                A COIMMA não se responsabiliza por:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Interrupções ou falhas temporárias no website</li>
                <li>Erros tipográficos ou imprecisões não intencionais</li>
                <li>Danos indiretos ou lucros cessantes decorrentes do uso de produtos</li>
                <li>Incompatibilidade de produtos não aprovados por nossa engenharia</li>
                <li>Decisões comerciais baseadas em informações do site (solicite sempre confirmação oficial)</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              9. Links Externos
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Nosso site pode conter links para sites de terceiros (parceiros, fornecedores, certificadores). A COIMMA não se responsabiliza pelo conteúdo ou políticas de privacidade desses sites.
              </Text>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              10. Modificações dos Termos
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Mudanças significativas serão comunicadas através do site com 30 dias de antecedência.
              </Text>
              <Text variant="body" className="text-gray-300">
                O uso continuado do site após as modificações constitui aceitação dos novos termos.
              </Text>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              11. Lei Aplicável e Jurisdição
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              </Text>
              <Text variant="body" className="text-gray-300">
                Foro: Comarca de Dracena, Estado de São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </Text>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-[#0a0a0a] border border-gray-900 p-8">
            <Text as="h2" variant="h4" className="text-white mb-4">
              Contato - Dúvidas sobre os Termos
            </Text>
            <div className="space-y-3">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Jurídico COIMMA:</strong>
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">E-mail:</strong> juridico@coimma.com.br
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Telefone:</strong> (18) 3821-9900
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Endereço:</strong> Via Marginal José Dansieri, 605 - Dracena, SP - 17900-000
              </Text>
            </div>
          </section>

          {/* Signature */}
          <section className="text-center pt-8 border-t border-gray-900">
            <Text variant="body" className="text-gray-500 italic">
              COIMMA Indústrias Ltda. - Desde 1951, construindo o legado de quem alimenta o mundo.
            </Text>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
