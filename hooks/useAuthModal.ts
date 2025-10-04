import { create } from "zustand"

interface AuthModelProps{
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=>void;
};

