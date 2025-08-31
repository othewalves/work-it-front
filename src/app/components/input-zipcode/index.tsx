import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputZipcodeProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    name: Path<T>;
}
const InputZipcode = ({ control, name }: InputZipcodeProps) => {
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
                        placeholder="Ex: 012345-678"
                        format="#####-###"
                        mask="_"
                        customInput={Input}
                    />
                )}
            />
            {/* {error && <span className="text-xs text-red-600">{error}</span>} */}
        </div>
    );
};

export default InputZipcode;
