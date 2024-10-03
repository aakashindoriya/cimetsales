import { createContext, ReactNode, useState } from "react"
import { CoversionApiResponse } from "../types/apiRespose"

type ConversionValues={
    rates:CoversionApiResponse
    fillRates:(data:CoversionApiResponse)=>void
    handleConversion:(key:string)=>void
    currentCurrency:{[key:string]:number}
    
}
let defaultState={
    rates:{},
    fillRates:()=>{},
    handleConversion:()=>{},
    currentCurrency:{}
}


export const conversionProvider=createContext<ConversionValues>(defaultState)

export const ConversionContext = ({children}: { children: ReactNode }) => {
    const [rates,setRates]=useState<CoversionApiResponse>({})
    const [currentCurrency,setCurrency]=useState<CoversionApiResponse>({})
    function fillRates(data:CoversionApiResponse){
        setRates(data)
    }
    function handleConversion(key:string){
        if(rates[key]){
            setCurrency({key:rates[key]})
        }
    }
    console.log(rates,"from context")
    
  return (
    <conversionProvider.Provider value={{rates,fillRates,handleConversion,currentCurrency}}>{children}</conversionProvider.Provider>
  )
}
