import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Form1 from "./Form1";
import PageD from "./FiadorForm";

//conectar os dados ao bd


function LocatarioForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const [locatarioForm, setLocatarioForm] = useState({});
  const [message, setMessage] = useState();
  const onsubmit = (data) => console.log(data);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locatarios',
  });

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/locatarios', data);
  //     console.log(response.data); // Logar a resposta do servidor
  //     //... (lógica para lidar com a resposta)
  //   } catch (error) {
  //     console.error(error); // Lidar com erros
  //   }
  // };//fechamento da onsubmit

  // function submit() {}

  // function handleChange(e){}

  // const onSubmit = (data) => {
  //   console.log("Dados enviados:", data);
  //   //... (lógica de envio do formulário)
  // };

  // const onsubmit = (data) => console.log(data);

  // function editPost(locatarioForm) {
  //   console.log(locatarioForm)

  // }

  // fetch(`http://localhost:5001/c/${locatarioForm.id}`,{
  //   method: 'PATCH',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify(locatarioForm),
  // })
  // .then(resp => resp.json())
  // .then(data => {
  //   setLocatarioForm(data)
  //   console.log(data)
  // })
  // .catch(err => console.log(err))

  function submit(e){
    e.preventDefault()
//     FormData.locacoes(formLocacao)
//     handleSubmit(formData)
//     console.log(formLocacao)
}
// function createForm() {
//   // last form

// }

  const addLocatario = () => {
    append({ locatario: '', nacionalidade: '', estadoCivil: '', nascimento: '', profissao: '', cpf: '', rg: '', celular: '', email: '' });
  };
  

            return (
              
              <div>
               {/* <Form1 
               register={register}
               errors={errors}
               control={control}
               /> */}
               
                  <div className="app-container">
                    <form onSubmit={ handleSubmit(onsubmit) }>
                    <div className="form-container">
                    <h1>Formulario Locatário</h1>
                      
                        {/* Loop para renderizar os campos de cada locatário */}
                        {fields.map((field, index) => (
                          <div className="form-group" key={field.id}>
                            <label htmlFor={`locatarios.${index}.locatario`}>Nome do Locatário:</label>
                            <input
                              type="text"
                              placeholder="Digite o nome do locatário"
                              id={`locatarios.${index}.locatario`}
                              {...register(`locatarios.${index}.locatario`, { required: true })}
                              // handleOnChange={handleChange}
                            />
                            {errors.locatarios?.[index]?.locatario && <p className="error-message">Nome do locatário é obrigatório.</p> }

                            <label htmlFor={`locatarios.${index}.nacionalidade`}>Nacionalidade:</label>
                            <input
                              type="text"
                              placeholder="Digite a nacionalidade"
                              id={`locatarios.${index}.nacionalidade`}
                              {...register(`locatarios.${index}.nacionalidade`, { required: true })}
                              // handleOnChange={handleChange}
                            />
                            {errors.locatarios?.[index]?.nacionalidade && <p className="error-message">Nacionalidade é obrigatória.</p>}

                            <label htmlFor={`locatarios.${index}.estadoCivil`}>Estado Civil:</label>
                            <select
                              id={`locatarios.${index}.estadoCivil`}
                              {...register(`locatarios.${index}.estadoCivil`, { required: true })}
                              // handleOnChange={handleChange}
                            >
                              <option value="">Selecione uma opção</option>
                              <option value="casado">Casado</option>
                              <option value="solteiro">Solteiro</option>
                              <option value="solteiro">União Estável</option>
                              <option value="solteiro">divorciado</option>
                              <option value="solteiro">Viúvo</option>

                            </select>
                            {errors.locatarios?.[index]?.estadoCivil && <p className="error-message">Estado civil é obrigatório.</p>}

                            <label htmlFor={`locatarios.${index}.nascimento`}>Data de Nascimento:</label>
                            <input
                              type="date"
                              id={`locatarios.${index}.nascimento`}
                              {...register(`locatarios.${index}.nascimento`, { required: true })}
                            />
                            {errors.locatarios?.[index]?.nascimento && <p>Data de nascimento é obrigatória.</p>}

                            <label htmlFor={`locatarios.${index}.profissao`}>Profissão:</label>
                            <input
                              type="text"
                              placeholder="Digite a profissão"
                              id={`locatarios.${index}.profissao`}
                              {...register(`locatarios.${index}.profissao`, { required: true })}
                              // handleOnChange={handleChange}
                            />
                            {errors.locatarios?.[index]?.profissao && <p className="error-message">Profissão é obrigatória.</p>}

                            <label htmlFor={`locatarios.${index}.cpf`}>CPF:</label>
                            <Controller
                              name={`locatarios.${index}.cpf`}
                              control={control}
                              rules={{ required: true, pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/ }}
                              render={({ field }) => (
                                <InputMask
                                  mask="999.999.999-99"
                                  placeholder="Digite o CPF"
                                  {...register(`locatarios.${index}.cpf`, {required: true })}
                                  // value={field.value}
                                  // onChange={field.onChange}
                                  // handleOnChange={handleChange}
                                />
                              )}
                            />
                            {errors.locatarios?.[index]?.cpf && <p className="error-message">CPF inválido.</p>}

                            <label htmlFor={`locatarios.${index}.rg`}>RG:</label>
                            <Controller
                              name={`locatarios.${index}.rg`}
                              control={control}
                              rules={{ required: true, pattern: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/ }}
                              render={({ field }) => (
                                <InputMask
                                  mask="99.999.999-9"
                                  placeholder="Digite o RG"
                                  {...register(`locatarios.${index}.rg`, {required: true })}
                                  // value={field.value}
                                  // onChange={field.onChange}
                                  // handleOnChange={handleChange}
                                />
                              )}
                            />
                            {errors.locatarios?.[index]?.rg && <p className="error-message">RG inválido.</p>}

                            <label htmlFor={`locatarios.${index}.celular`}>Celular:</label>
                            <Controller
                              name={`locatarios.${index}.celular`}
                              control={control}
                              rules={{ required: true, pattern: /^\(\d{2}\)\s?9?\d{4}-\d{4}$/}}
                              render={({ field }) => (
                                <InputMask
                                  mask="(99) 9 9999-9999"
                                  placeholder="Digite o Celular"
                                  {...register(`locatarios.${index}.celular`, {required: true })}
                                  // value={field.value}
                                  // onChange={field.onChange}
                                  // handleOnChange={handleChange}
                                />
                              )}
                            />
                            {errors.locatarios?.[index]?.celular && <p className="error-message">Celular inválido.</p>}

                            <label htmlFor={`locatarios.${index}.email`}>E-mail:</label>
                            <Controller
                              name={`locatarios.${index}.email`}
                              control={control}
                              rules={{ required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                            }}
                              render={({ field }) => (
                              <input 
                              placeholder="Digite o e-mail"
                              type="email" 
                              {...register(`locatarios.${index}.email`, {required: true })}
                              // value={field.value}
                              // onChange={field.onChange}
                              // handleOnChange={handleChange} 

                              />
                              )}
                            />
                            {errors.locatarios?.[index]?.email && <p className="error-message">E-mail inválido.</p>}
                          
                            {fields.length > 1 && (
                              <button type="button" onClick={() => remove(index)}>
                                Remove
                              </button>
                            )}
                          </div>
                          
                        ))}
                          <div className="form-group">
                          <button type="button" onClick={addLocatario}>Adicionar Locatário</button>
                          </div>
                          <div className="form-group">
                          <button type="submit">Enviar Formulário</button>

                          </div>
                          </div>
                          
                          {/* <button type="submit">Enviar teste</button> */}
                          </form>
                  </div>
                  
                </div>
                
              
              
  );
}

export default LocatarioForm;