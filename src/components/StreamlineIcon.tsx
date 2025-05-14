import React from 'react';

interface StreamlineIconProps {
  folder: string;
  name: string;
  size?: number;
  alt?: string;
}

const API_KEY = 'FZH0gmq57Tuvdm1r.524efcda7fd1831565aeea0ce1e48109';

const StreamlineIcon: React.FC<StreamlineIconProps> = ({ folder, name, size = 24, alt = '' }) => {
  const url = `https://api.streamlinehq.com/icons/${folder}/${name}.svg?apikey=${API_KEY}`;

  return <img src={url} alt={alt} width={size} height={size} />;
};

export default StreamlineIcon;
