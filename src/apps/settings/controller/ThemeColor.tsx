import React from 'react';

export const ControllerThemeColor = () => {
  const [open, setOpen] = React.useState(true);
  const [mode, setMode] = React.useState(false);

  const handleSetOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleChangeMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return { open, handleSetOpen, mode, handleChangeMode };
};