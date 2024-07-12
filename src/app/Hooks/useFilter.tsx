import { useContext } from "react";
import filterContext from "../../../context/FilterContext";

export function useFilter(){
    return useContext(filterContext)
}