import { Input } from "@/components/ui/input";
import { PatternFormat, PatternFormatProps } from "react-number-format";

const CPFInput = (props: Partial<PatternFormatProps>) => {
    return (
        <PatternFormat
            {...props}
            placeholder="Ex: 012.345.678-90"
            format="###.###.###-##"
            customInput={
                Input
            }
        />
    );
}

export default CPFInput;