import React from 'react';

interface StreamlineIconProps {
  name: string;
  size?: number;
  alt?: string;
}

const API_KEY = 'FZH0gmq57Tuvdm1r.524efcda7fd1831565aeea0ce1e48109';

const StreamlineIcon: React.FC<StreamlineIconProps> = ({ name, size = 24, alt = '' }) => {
  const url = `https://api.streamlinehq.com/icons/streamline-light/${name}.svg?apikey=${API_KEY}`;

  return (
    <img
      src={url}
      alt={alt || name}
      width={size}
      height={size}
      className="inline-block"
    />
  );
};

export default StreamlineIcon;
