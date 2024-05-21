
import { useFormStore } from "../store/index";

export default function Submit() {
    return (
            <button onClick={() => {
                formStore.form1.onValidate();
                formStore.locatarioForm.onValidate();
                useFormStore.fiadorForm.onValidate();
            }
            }>Submit</button>
    
    );
    }