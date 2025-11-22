import React from 'react';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

const ContactMethod = ({ icon, label, value }) => {
  return (
    <div className="flex items-start space-x-4 group cursor-pointer">
      <div className="p-4 bg-[#111] rounded group-hover:bg-coimma-red transition-colors">
        <Icon name={icon} className="text-white" />
      </div>
      <div>
        <Text variant="caption" className="text-gray-500 mb-1 block">
          {label}
        </Text>
        <Text variant="legacy" className="text-white">
          {value}
        </Text>
      </div>
    </div>
  );
};

export default ContactMethod;
