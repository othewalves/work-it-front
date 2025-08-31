import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputCNPJProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    name: Path<T>;
}


const InputCNPJ = <T extends FieldValues>({ control, name }: InputCNPJProps<T>) => {
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
