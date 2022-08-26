import React from 'react';

export const ControllerThemeColor = () => {
  const [open, setOpen] = React.useState(true)

  const handleSetOpen = (state: boolean) => {
    setOpen(!state)
  }

  return {open, handleSetOpen}
}