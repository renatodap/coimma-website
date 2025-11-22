import React, { useState } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import UnitsGrid from '../../organisms/UnitsGrid';
import Icon from '../../atoms/Icon';

const ContactPage = ({ config }) => {
  const { hero, units, urgentContacts, form } = config;
  const [selectedSegment, setSelectedSegment] = useState(form.segments[0].value);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="Contato COIMMA"
            className="w-full h-full opacity-30"
            grayscale
            overlay
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <Text as="h1" variant="h1" className="mb-6">
              {hero.title}
            </Text>
            <Text variant="bodyLarge" className="text-gray-300">
              {hero.description}
            </Text>
          </div>
        </div>
      </section>

      {/* Units */}
      <UnitsGrid
        title="Estamos Onde o Agronegócio Acontece"
        subtitle="3 unidades estratégicas para atender todo o Brasil"
        units={units}
      />

      {/* Department Directory */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Text as="h2" variant="h2" className="text-white mb-4">
              {urgentContacts.title}
            </Text>
            {urgentContacts.subtitle && (
              <Text variant="bodyLarge" className="text-gray-400">
                {urgentContacts.subtitle}
              </Text>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgentContacts.items.map((contact, index) => (
              <div key={index} className="bg-black border border-gray-900 p-6 hover:border-coimma-gold transition-all group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coimma-gold/10 rounded-full flex items-center justify-center group-hover:bg-coimma-gold/20 transition-colors">
                    <Icon name={contact.icon} size={24} className="text-coimma-gold" />
                  </div>
                  <Text variant="h6" className="text-white group-hover:text-coimma-gold transition-colors">
                    {contact.department}
                  </Text>
                </div>
                {contact.description && (
                  <Text variant="caption" className="text-gray-500 mb-3 block">
                    {contact.description}
                  </Text>
                )}
                <Text variant="small" className="text-gray-400 mb-1 block">
                  {contact.email}
                </Text>
                <Text variant="body" className="text-white font-semibold">
                  {contact.phone}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Text as="h2" variant="h2" className="text-white mb-4">
                {form.title}
              </Text>
              <Text variant="bodyLarge" className="text-gray-400">
                {form.subtitle}
              </Text>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900 p-8 md:p-12">
              <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {form.fields.map((field) => (
                    <Input
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      type={field.type}
                      placeholder={field.label}
                    />
                  ))}
                </div>

                {/* Segment Selection */}
                <div>
                  <Text variant="caption" className="text-gray-500 mb-3 block">
                    Segmento de Interesse
                  </Text>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {form.segments.map((segment) => (
                      <button
                        key={segment.value}
                        type="button"
                        onClick={() => setSelectedSegment(segment.value)}
                        className={`
                          p-4 border text-left transition-all
                          ${selectedSegment === segment.value
                            ? 'border-coimma-red bg-coimma-red/10 text-white'
                            : 'border-gray-800 text-gray-400 hover:border-gray-600'
                          }
                        `}
                      >
                        <Text variant="caption" className="block mb-1">
                          {segment.label}
                        </Text>
                        <Text variant="small" className="text-gray-500">
                          {segment.description}
                        </Text>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <Text variant="caption" className="text-gray-500 mb-3 block">
                    Produto de Interesse
                  </Text>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-black border border-gray-800 text-white p-4 focus:border-coimma-red outline-none transition-colors font-tech"
                  >
                    <option value="">Selecione um produto</option>
                    {form.products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Text variant="caption" className="text-gray-500 mb-3 block">
                    Mensagem Adicional (Opcional)
                  </Text>
                  <textarea
                    rows={5}
                    className="w-full bg-black border border-gray-800 text-white p-4 focus:border-coimma-red outline-none transition-colors font-tech"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <Button variant="primary" size="large" icon="Send" fullWidth>
                    Enviar Solicitação
                  </Button>
                  <Text variant="small" className="text-gray-500 text-center mt-4">
                    Resposta garantida em até 2 horas úteis
                  </Text>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-[#0a0a0a] border-t border-gray-900">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <Icon name="MapPin" size={64} className="text-coimma-gold mx-auto mb-4" />
            <Text variant="h4" className="text-white mb-2">
              Mapa de Localização
            </Text>
            <Text variant="body" className="text-gray-400">
              Integração com Google Maps em breve
            </Text>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
