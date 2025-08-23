import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputCPFProps {
    control: any;
    name: string;
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
            {/* {error && <span className="text-xs text-red-600">{error}</span>} */}
        </div>
    );
};

export default InputCPF;
