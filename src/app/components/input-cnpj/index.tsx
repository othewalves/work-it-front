import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputCNPJProps {
    control: any;
    name: string;
}

const InputCNPJ = ({ control, name }: InputCNPJProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <PatternFormat
                    {...field}
                    value={field.value || ""}
                    onValueChange={(values) => {
                        field.onChange(values.formattedValue);
                    }}
                    placeholder="Ex: 01.234.567/0008-90"
                    format="##.###.###/####-##"
                    mask="_"
                    customInput={Input}
                />
            )}
        />
    );
};

export default InputCNPJ;
