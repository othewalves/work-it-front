import { Input } from "@/components/ui/input";
import { PatternFormat } from "react-number-format";

interface CPFInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

const CPFInput = ({ value, onChange }: CPFInputProps) => {
    return (

        <PatternFormat
            value={value}
            onValueChange={(values) => {
                onChange?.(values.value);
            }}
            placeholder="Ex: (00) 00000-0000"
            format="(##) #####-####"
            customInput={
                Input
            }
        />
    );
};

export default CPFInput;