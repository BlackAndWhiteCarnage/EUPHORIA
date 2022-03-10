export interface OfferProps {
    gridArea: string
    content: string
    image: string
    linkTo: string
    alt: string
  }

export interface ToggleTitleType {
    toggleTitle: boolean
    setToggleTitle: React.Dispatch<React.SetStateAction<boolean>>
}
