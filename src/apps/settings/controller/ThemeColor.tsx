import React from 'react';

export const ControllerThemeColor = () => {
  const [open, setOpen] = React.useState(true)
  const [mode, setMode] = React.useState(false)

  const handleSetOpen = (state: boolean) => {
    setOpen(!state)
  }

  const handleChangeMode = (state: boolean) => {
    setMode(!mode)
  }

  return {open, handleSetOpen, mode, handleChangeMode}
}