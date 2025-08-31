import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputCPFProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    name: Path<T>;
}

const InputCPF = ({ control, name }: InputCPFProps) => {
    return (
        <div>
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
                        placeholder="Ex: 012.345.678-90"
                        format="###.###.###-##"
                        mask="_"
                        customInput={Input}
                    />
                )}
            />
        </div>
    );
};

export default InputCPF;
