import { useEffect } from "react";
import { useForm } from "react-hook-form"; 

export default function Form() {
    const { handleSubmit, register, setValue, watch } = useForm({
        defaultValues: {
            firstName: '',
            endereco: {
                rua: '',
                cep: ''
            }
        }
    });

    // esse watch serve para assistir um campo, e o useefect voce consegue fazer uma condição pra quando o watch pegar uma alteração do campo ele executa
 const cep = watch('endereco.cep');

    useEffect(() =>{
        if(cep.length) {
            setValue('endereco.rua', 'Rua da Api');
        }
    }, [setValue, cep]);
   

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input type="text" {...register('firstName')} placeholder="Nome" />
            <input type="text" {...register('endereco.rua')} placeholder="Rua" />
            <input type="text" {...register('endereco.cep')} placeholder="CEP" />

            <button type="button" onClick={() => setValue('firstName', 'Junior')}>
                Atualizar Nome
            </button>

            {/* <button type="button" onClick={() => setValue('endereco.rua', 'Rua da Api')}>
                Atualizar Rua
            </button> */}

            <button type="button" onClick={() => setValue('endereco.cep', '00000-000')}>
                Atualizar CEP
            </button>

            <button type="submit">Enviar</button>
        </form>
    )
}