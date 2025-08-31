import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputPhoneProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    name: Path<T>;
}


const InputPhone = <T extends FieldValues>({ control, name }: InputPhoneProps<T>) => {
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
                        placeholder="Informe seu telefone"
                        format="(##) #####-####"
                        mask="_"
                        customInput={Input}
                    />
                )}
            />
        </div>
    );
};

export default InputPhone;
