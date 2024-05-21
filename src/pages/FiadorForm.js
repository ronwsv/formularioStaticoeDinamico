import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
// import axios from 'axios';


//conectar os dados ao bd


function FiadorForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const onsubmit = (data) => console.log(data);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locatarios',
  });

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post('http://localhost:5001/locatarios', data);
  //     console.log(response.data); // Logar a resposta do servidor
  //     //... (lógica para lidar com a resposta)
  //   } catch (error) {
  //     console.error(error); // Lidar com erros
  //   }
  // };//fechamento da onsubmit


    //... (lógica de envio do formulário)
  // };

  // function EnviarDados() {

  // }

  const addFiador = () => {
    append({ fiador: '', estadoCivil: '', nacionalidade: '', profissao: '', nascidoEm: '', cpf: '', rg: '', celular: '', email: '' , enderecoResidencial: '', enderecoDoImovelAfiancado: ''});
  };



            return (
              <div>
               
                  <div className="app-container">
    
                    <div className="form-container">
                    <h1>Formulario Fiador</h1>
                      <form  onSubmit={ handleSubmit(onsubmit) }>
                        {/* Loop para renderizar os campos de cada fiador */}
                        {fields.map((field, index) => (
                          <div className="form-group" key={field.id}>
                            <label htmlFor={`locatarios.${index}.fiador`}>Nome do Fiador:</label>
                            <input
                              type="text"
                              placeholder="Digite o nome do Fiador"
                              id={`locatarios.${index}.fiador`}
                              {...register(`locatarios.${index}.fiador`, { required: true })}
                            />
                            {errors.locatarios?.[index]?.fiador && <p className="error-message">Nome do locatário é obrigatório.</p> }

                            <label htmlFor={`locatarios.${index}.estadoCivil`}>Estado Civil:</label>
                            <select
                              id={`locatarios.${index}.estadoCivil`}
                              {...register(`locatarios.${index}.estadoCivil`, { required: true })}
                            >
                              <option value="">Selecione uma opção</option>
                              <option value="casado">Casado</option>
                              <option value="solteiro">Solteiro</option>
                              <option value="solteiro">União Estável</option>
                              <option value="solteiro">divorciado</option>
                              <option value="solteiro">Viúvo</option>

                            </select>
                            {errors.locatarios?.[index]?.estadoCivil && <p className="error-message">Estado civil é obrigatório.</p>}

                            <label htmlFor={`locatarios.${index}.nacionalidade`}>Nacionalidade:</label>
                            <input
                              type="text"
                              placeholder="Digite a nacionalidade"
                              id={`locatarios.${index}.nacionalidade`}
                              {...register(`locatarios.${index}.nacionalidade`, { required: true })}
                            />
                            {errors.locatarios?.[index]?.nacionalidade && <p className="error-message">Nacionalidade é obrigatória.</p>}

                            

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
                                  // value={field.value}
                                  // onChange={field.onChange}
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
                                  // value={field.value}
                                  // onChange={field.onChange}
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
                                  // value={field.value}
                                  // onChange={field.onChange}
                                />
                              )}
                            />
                            {errors.locatarios?.[index]?.celular && <p className="error-message">Celular inválido.</p>}

                            <label htmlFor={`locatarios.${index}.email`}>E-mail:</label>
                            <Controller
                              name={`locatarios.${index}.email`}
                              control={control}
                              rules={{ required: true, pattern: /^\S+@\S+$/i }}
                              render={({ field }) => (
                              <input 
                              placeholder="Digite o e-mail"
                              type="email" 
                              // value={field.value}
                              // onChange={field.onChange} 
                              />
                              )}
                            />
                            {errors.locatarios?.[index]?.email && <p className="error-message">E-mail inválido.</p>}

                            
                            <label htmlFor={`locatarios.${index}.enderecoResidencial`}>Endereço Residencial:</label>
                            <input
                              type="text"
                              placeholder="Digite o endereço residencial"
                              id={`locatarios.${index}.enderecoResidencial`}
                              {...register(`locatarios.${index}.enderecoResidencial`, { required: true })}
                            />
                            {errors.locatarios?.[index]?.enderecoResidencial && <p className="error-message">Endereço é obrigatório.</p>}

                            
                            <label htmlFor={`locatarios.${index}.enderecoDoImovelAfiancado`}>Endereço do imóvel Afiançado:</label>
                            <input
                              type="text"
                              placeholder="Digite o endereço do imóvel"
                              id={`locatarios.${index}.enderecoDoImovelAfiancado`}
                              {...register(`locatarios.${index}.enderecoDoImovelAfiancado`, { required: true })}
                            />
                            {errors.locatarios?.[index]?.enderecoDoImovelAfiancado && <p className="error-message">Endereço é obrigatório.</p>}
                          
                            {fields.length > 1 && (
                              <button type="button" onClick={() => remove(index)}>
                                Remove
                              </button>
                            )}
                          </div>
                          
                        ))}
                          <div className="form-group">
                          <button type="button" onClick={addFiador}>Adicionar Fiador</button>
                          </div>
                          {/* <div className="form-group">
                          <button type="submit">Enviar Formulário</button>
                          </div> */}
                          <div className="form-group">
                          {/* <button onClick={() => handleSubmit(submit)()}>Enviar resumo</button> */}
                          <button type="submit">Enviar teste</button>
                          </div> 
                      </form>
                  </div>
                </div>
                </div>  
             

  );
}

export default FiadorForm;