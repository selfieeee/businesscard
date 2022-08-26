import React from 'react';

export const ControllerActivePage = () => {
  const [active, setActive] = React.useState({home: true, about: false, services: false, portfolio: false, contact: false})

  const handleSetActive = (items: {home: boolean, about: boolean, services: boolean, portfolio: boolean, contact: boolean}) => {
    setActive(items)
  }

  return {active, handleSetActive}
}