export interface ExtrasDataType {
    extrasData:{
      data: [] | string[] | null | undefined
      count: number
    }
    setExtrasData: React.Dispatch<React.SetStateAction<{
      data: [] | string[] | null | undefined
      count: number
  }>>
  }

  export interface PickExtrasType {
    pickExtras:{
      price: any
      pickedExtras: string[]
    }
    setPickExtras: React.Dispatch<React.SetStateAction<{
      price: any
      pickedExtras: string[]
  }>>
  }

  export interface ToggleExtrasType {
    toggleExtras: boolean
    setToggleExtras: React.Dispatch<React.SetStateAction<boolean>>
  }
