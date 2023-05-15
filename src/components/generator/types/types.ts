export interface IValues {
   characters: number;
   isUppercase: boolean;
   isLowercase: boolean;
   isNumbers: boolean;
   isSymbols: boolean;
}

export interface IError {
   error?: string;
}

export interface GeneratorOptionsProps {
   name: string;
   labelText: string;
   status: boolean;
}

export interface GeneratorOutputProps {
   value: string;
}

export interface GeneratorRangeProps {
   characters: number;
}
