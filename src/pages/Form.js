import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import InputMask from 'react-input-mask';
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types

const Locatario2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch("password");

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const [exibirConteudo, setExibirConteudo] = useState(false);

  const handleClique = () => {
    setExibirConteudo(!exibirConteudo);
  };



  return (     
     
        <div className="app-container">
            <div className="form-container">
                <h1>Formulário Locatário 2</h1>
                
                <div className="form-group">
                    <label>Locatário</label>
                    <input
                    className={errors?.locatario && "input-error"}
                    type="text"
                    placeholder="Digite o nome do locatário"
                    {...register("locatario", { required: true })}
                    />
                    {errors?.locatario?.type === "required" && (
                    <p className="error-message">Locatário é obrigatório.</p>
                    )}
                </div>
                    <div className="form-group">
                        <label>Nacionalidade</label>
                        <input
                        className={errors?.nacionalidade && "input-error"}
                        type="text"
                        placeholder="Digite o nome do locatário"
                        {...register("nacionalidade", { required: true })}
                        />
                        {errors?.nacionalidade?.type === "required" && (
                        <p className="error-message">Nacionalidade é obrigatória.</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Estado Civil</label>
                        <select
                        className={errors?.civil && "input-error"}
                        defaultValue="0"
                        {...register("civil", { validate: (value) => value !== "0" })}
                        >
                        <option value="0">Selecione o estado civil...</option>
                        <option value="solteiro">solteiro</option>
                        <option value="casado">casado</option>
                        <option value="divorciado">divorciado</option>
                        <option value="viuvo">viúvo</option>
                        </select>

                        {errors?.civil?.type === "validate" && (
                        <p className="error-message">O estado Civíl é necessário.</p>
                        )}
                    </div>

                    <div className="form-group">
                    <label>Profissão</label>
                    <input
                    className={errors?.profissao && "input-error"}
                    type="text"
                    placeholder="Digite o nome do locatário"
                    {...register("profissao", { required: true })}
                    />
                    {errors?.profissao?.type === "required" && (
                    <p className="error-message">Profissão é obrigatória.</p>
                    )}
                </div>

                <div className="form-group">
                    <div className="flex-container">
                        <div className="form-group">
                        <label>Nascido em</label>
                        <InputMask
                        className={errors?.nascido && "input-error"}
                        mask="99/99/9999"
                        placeholder="XX/XX/XXXX"
                        {...register("nascido", { required: true })}
                        />
                        {errors?.nascido?.type === "required" && (
                            <p className="error-message">Data de nascimento é obrigatório.</p>
                        )}
                        </div>
                        <div className="form-group">
                        <label>Cidade/Estado</label>
                        <input
                        className={errors?.cidade && "input-error"}
                        type="text"
                        placeholder="Digite o nome do locatário"
                        {...register("cidade", { required: true })}
                        />
                        {errors?.cidade?.type === "required" && (
                            <p className="error-message">Cidade é obrigatória.</p>
                        )}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="flex-container">
                        <div className="form-group">
                        <label>CPF</label>
                        <InputMask
                        className={errors?.cpf && "input-error"}
                        mask="999.999.999-99"
                        placeholder="999.999.999-99"
                        {...register("cpf", { required: true })}
                        />
                        {errors?.cpf?.type === "required" && (
                        <p className="error-message">Valor é obrigatório.</p>
                        )}
                        </div>
                        <div className="form-group">
                        <label>RG</label>
                        <InputMask
                        className={errors?.cpf && "input-error"}
                        mask="99.999.999-9"
                        placeholder="99.999.999-9"
                        {...register("cpf", { required: true })}
                        />
                        {errors?.cpf?.type === "required" && (
                        <p className="error-message">Valor é obrigatório.</p>
                        )}  
                        </div>
                    </div>
                </div>
            

                <div className="form-group">
                  <div className="flex-container">
                      <div className="form-group">
                        <label>Celular</label>
                        <InputMask
                        className={errors?.celular && "input-error"}
                        mask="(99)9 9999-9999"
                        placeholder="(99)9 9999-9999"
                        {...register("celular", { required: true })}
                        />
                        {errors?.celular?.type === "required" && (
                            <p className="error-message">Valor é obrigatório.</p>
                        )}
                      </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                        className={errors?.email && "input-error"}
                        type="email"
                        placeholder="Digite o e-mail"
                        {...register("email", {
                            required: true,
                            validate: (value) => isEmail(value),
                        })}
                        />

                        {errors?.email?.type === "required" && (
                            <p className="error-message">Email é necessário.</p>
                        )}

                        {errors?.email?.type === "validate" && (
                            <p className="error-message">Email inválido.</p>
                        )}
                    </div>
                    
            </div>

                    <div className="form-group">
                        <label>Endereço Residencial</label>
                        <input
                        className={errors?.endereco && "input-error"}
                        type="text"
                        placeholder="Digite o nome do locatário"
                        {...register("endereco", { required: true })}
                        />
                        {errors?.endereco?.type === "required" && (
                        <p className="error-message">Endereço é obrigatório.</p>
                        )}
                    </div>
                    <div>
                        <button className="form-group-button-add" onClick={handleClique}>+</button>{exibirConteudo && <Outlet />}
                    </div>
            </div>
        </div>
    </div>

              

  );
}

export default Locatario2;