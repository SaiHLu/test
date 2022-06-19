import React, { createContext, PropsWithChildren } from 'react'

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => { }
})

export function SidebarContextProvider({ children }: PropsWithChildren<{}>) {
  const [state, setState] = React.useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ isOpen: state, setIsOpen: setState }}>
      {children}
    </SidebarContext.Provider>
  )
}