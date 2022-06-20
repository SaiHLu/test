import { SidebarContext } from 'context/SidebarContext'
import React from 'react'

export function useToggleSidebar() {
  const { isOpen, setIsOpen } = React.useContext(SidebarContext)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function toggle() {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
