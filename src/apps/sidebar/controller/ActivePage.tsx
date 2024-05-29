import React, { useState } from 'react';

interface ActiveState {
  home: boolean;
  about: boolean;
  services: boolean;
  portfolio: boolean;
  contact: boolean;
}

export const ControllerActivePage = () => {
  const [active, setActive] = useState<ActiveState>({
    home: true,
    about: false,
    services: false,
    portfolio: false,
    contact: false
  });

  const handleSetActive = (items: ActiveState) => {
    setActive(items);
  };

  return { active, handleSetActive };
};
