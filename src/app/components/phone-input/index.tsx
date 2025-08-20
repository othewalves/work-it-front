import { Input } from "@/components/ui/input";
import { PatternFormat, PatternFormatProps } from "react-number-format";

const PhoneInput = (props: Partial<PatternFormatProps>) => {
    return (
        <PatternFormat
            {...props}
            placeholder="Ex: (00) 00000-0000"
            format="(##) #####-####"
            customInput={
                Input
            }
        />
    );
}

export default PhoneInput;