import { create } from 'zustand';
// import Form1 from "../pages/Form1";
// import LocatarioForm from "../pages/LocatarioForm";
// import FiadorForm from "../pages/FiadorForm";

export const useFormStore = create((set) => ({
    state: {
        form1:{value:'', errors:{}},
        locatarioForm:{value:'', errors:{}},
        fiadorForm:{value:'', errors:{}},
    }
    }),
)

function Forms() {
    const formStore = useFormStore();

    return (
        <div>
            <Form1
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
            <LocatarioForm
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
            <FiadorForm
            value={formStore.form1.value}
            errors={formStore.form1.errors}
            onvalidate={() => {}}
            />
        </div>
    )
}