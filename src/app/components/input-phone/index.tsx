import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface InputPhoneProps {
    control: any;
    name: string;
}


const InputPhone = ({ control, name }: InputPhoneProps) => {
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
            {/* {error && <span className="text-xs text-red-600">{error}</span>} */}
        </div>
    );
};

export default InputPhone;
