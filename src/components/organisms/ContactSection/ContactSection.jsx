import React, { useState } from 'react';
import Text from '../../atoms/Text';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import ContactMethod from '../../molecules/ContactMethod';

const ContactSection = ({ config }) => {
  const { title, subtitle, description, methods, form } = config;
  const [selectedSegment, setSelectedSegment] = useState(
    form.segmentOptions.find((opt) => opt.active)?.value || form.segmentOptions[0].value
  );

  return (
    <section className="bg-[#050505] py-32 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2">
          <Text as="h2" variant="h3" className="text-white mb-8">
            {title} <br />
            <span className="text-gray-600">{subtitle}</span>
          </Text>
          <Text variant="body" className="text-gray-400 mb-12 max-w-md">
            {description}
          </Text>

          <div className="space-y-6">
            {methods.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                label={method.label}
                value={method.value}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#111] p-10 border border-gray-800">
          <form className="space-y-6">
            {form.fields.map((field, index) => (
              <Input
                key={index}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
              />
            ))}

            <div>
              <Text variant="caption" className="text-gray-500 mb-2 block">
                Segmento de Interesse
              </Text>
              <div className="grid grid-cols-2 gap-4">
                {form.segmentOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedSegment(option.value)}
                    className={`
                      py-3 border font-bold text-sm uppercase
                      ${
                        selectedSegment === option.value
                          ? 'border-coimma-red bg-coimma-red/20 text-white'
                          : 'border-gray-800 text-gray-500 hover:bg-gray-900'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="outline" fullWidth size="large">
              {form.submitText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
