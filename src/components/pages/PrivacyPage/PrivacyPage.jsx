import React from 'react';
import Text from '../../atoms/Text';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12 border-b border-gray-900 pb-8">
          <Text variant="caption" className="text-coimma-red mb-4 block uppercase tracking-widest">
            Legal
          </Text>
          <Text as="h1" variant="h1" className="text-white mb-6">
            Política de Privacidade
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
              1. Compromisso COIMMA
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                A COIMMA respeita a privacidade de seus clientes, parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
              </Text>
              <Text variant="body" className="text-gray-300">
                Desde 1951, construímos nossa reputação baseada em confiança. Seus dados são tratados com o mesmo rigor e precisão que aplicamos na fabricação de nossos equipamentos.
              </Text>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              2. Informações que Coletamos
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Dados Fornecidos por Você:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Nome completo e razão social</li>
                <li>E-mail comercial e telefone</li>
                <li>Endereço da fazenda ou empresa</li>
                <li>Informações sobre suas necessidades de pesagem</li>
                <li>Dados de cadastro para assistência técnica</li>
              </ul>

              <Text variant="body" className="text-gray-300 mt-4">
                <strong className="text-white">Dados Coletados Automaticamente:</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Endereço IP e localização geográfica</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de navegação</li>
                <li>Origem da visita (referência)</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              3. Como Usamos suas Informações
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Utilizamos suas informações exclusivamente para:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Processar solicitações de orçamento e vendas</li>
                <li>Fornecer assistência técnica e manutenção</li>
                <li>Enviar comunicações sobre produtos e serviços COIMMA</li>
                <li>Melhorar nosso website e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias (INMETRO, IPEM)</li>
                <li>Emitir certificados de calibração e garantia</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              4. Compartilhamento de Dados
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                A COIMMA <strong className="text-white">NÃO vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins comerciais.
              </Text>
              <Text variant="body" className="text-gray-300">
                Seus dados podem ser compartilhados apenas com:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Nossas filiais (Marabá-PA e Cuiabá-MT) para atendimento regional</li>
                <li>Parceiros técnicos autorizados para instalação e manutenção</li>
                <li>Autoridades legais quando exigido por lei</li>
                <li>Órgãos reguladores (INMETRO, IPEM) para certificações</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              5. Segurança dos Dados
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Implementamos medidas técnicas e organizacionais para proteger suas informações:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Servidores protegidos com firewall e antivírus</li>
                <li>Acesso restrito aos dados apenas para funcionários autorizados</li>
                <li>Backups regulares e plano de recuperação de desastres</li>
                <li>Certificação ISO 9001 em nossos processos</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              6. Seus Direitos (LGPD)
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong className="text-white">Acesso:</strong> Saber quais dados temos sobre você</li>
                <li><strong className="text-white">Correção:</strong> Atualizar dados incorretos</li>
                <li><strong className="text-white">Exclusão:</strong> Solicitar remoção de seus dados</li>
                <li><strong className="text-white">Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong className="text-white">Revogação:</strong> Retirar consentimento a qualquer momento</li>
                <li><strong className="text-white">Oposição:</strong> Opor-se ao processamento de dados</li>
              </ul>
              <Text variant="body" className="text-gray-300 mt-4">
                Para exercer seus direitos, entre em contato: <strong className="text-coimma-gold">privacidade@coimma.com.br</strong>
              </Text>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              7. Cookies e Tecnologias
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Utilizamos cookies para melhorar sua experiência de navegação. Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Tipos de cookies:</strong> Essenciais (funcionamento do site), Analíticos (Google Analytics), e Funcionais (preferências do usuário).
              </Text>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              8. Retenção de Dados
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Mantemos seus dados pelo período necessário para:
              </Text>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Cumprir obrigações legais (mínimo 5 anos conforme legislação fiscal)</li>
                <li>Manter histórico de vendas e garantias</li>
                <li>Fornecer suporte técnico continuado</li>
                <li>Resolver disputas e fazer cumprir acordos</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <Text as="h2" variant="h4" className="text-white mb-4">
              9. Alterações nesta Política
            </Text>
            <div className="space-y-4 border-l-2 border-coimma-red pl-6">
              <Text variant="body" className="text-gray-300">
                Podemos atualizar esta política periodicamente. Mudanças significativas serão comunicadas por e-mail ou aviso no site com 30 dias de antecedência.
              </Text>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-[#0a0a0a] border border-gray-900 p-8">
            <Text as="h2" variant="h4" className="text-white mb-4">
              Contato - Proteção de Dados
            </Text>
            <div className="space-y-3">
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Encarregado de Dados (DPO):</strong> COIMMA Indústrias
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">E-mail:</strong> privacidade@coimma.com.br
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Telefone:</strong> (18) 3821-9900
              </Text>
              <Text variant="body" className="text-gray-300">
                <strong className="text-white">Endereço:</strong> Via Marginal José Dansieri, 605 - Dracena, SP - 17900-000
              </Text>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
