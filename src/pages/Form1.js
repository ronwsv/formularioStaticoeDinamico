import { useForm } from "react-hook-form";
import {useState} from 'react';
import SubmitButton from "../components/layout/SubmitButtom";
import styles from "../App.css";
import FiadorForm from './FiadorForm';
import LocatarioForm from './LocatarioForm';
// import { useNavigate } from 'react-router-dom';

// FormulariomLocacao

function Form1() {
    const { register, control, handleSubmit, btnText, formData, formState: { errors } } = useForm();
    const [locatarioForm, setLocatarioForm] = useState({});
    const [message, setMessage] = useState();
    const [formLocacao, setFormLocacao] = useState({})

function submit(e){
    e.preventDefault()
    // FormData.locacoes.push(formLocacao)
    // handleSubmit(formData)
}

function handleChange(e) {
    setFormLocacao({...formLocacao, [e.target.name]: e.target.value})

}
    
  
    
    return (
      // formulario Locação
      <div className="app-container">
          <div className="form-container">
              <h1>Formulário Locação</h1>
              <form onSubmit={submit}>
              <div className="form-group">
              <label>Locação</label>
              <select
              className={errors?.locacao && "input-error"}
              name="locacao"
              defaultValue="0"
              {...register("locacao", { validate: (value) => value !== "0" })}
              >
              <option value="0">Selecione o tipo de locação...</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="other">Outros</option>
              </select>
  
              {errors?.locacao?.type === "validate" && (
              <p className="error-message">A profissão é necessária.</p>
              )}
          </div>
          <div className="form-group">
              <label>Valor</label>
              <input
                  className={errors?.name && "input-error"}
                  format="R$ ###,###.## $"
                  name="valor"
                  placeholder="Digite o valor + encargos"
                  {...register("name", { required: true })}
                  />
              {errors?.name?.type === "required" && (
              <p className="error-message">Valor é obrigatório.</p>
              )}
          </div>
          <div className="form-group">
              <label>Garantia</label>
              <input
              className={errors?.name && "input-error"}
              type="text"
              name="garantia"
              placeholder="Digite o tipo de garantia escolhida"
              {...register("garantia", { required: true })}
              />
              {errors?.garantia?.type === "required" && (
              <p className="error-message">Garantia é obrigatório.</p>
              )}
          </div>
          <div className="form-group">
              <label>Prazo contratual</label>
              <input
              className={errors?.prazo && "input-error"}
              type="text"
              name="prazo"
              placeholder="Digite o tipo de garantia escolhida"
              {...register("prazo", { required: true })}
              />
              {errors?.prazo?.type === "required" && (
              <p className="error-message">Prazo é obrigatório.</p>
              )}
          </div>
          <div className="form-group">
              <label>Condições especiais</label>
              <input
              className={errors?.condicoes && "input-error"}
              type="text"
              name="condicoes"
              placeholder="Digite as condições"
              {...register("condicoes", { required: true })}
              />
              {errors?.condicoes?.type === "required" && (
              <p className="error-message">Condição é obrigatório.</p>
              )}
          </div>
          <div className="form-group">
              <label>Inicio do contrato</label>
              <input
              className={errors?.inicio && "input-error"}
              type="date"
              name="inicio"
              placeholder="Inicio do contrato"
              {...register("inicio", { required: true })}
              />
              {errors?.inicio?.type === "required" && (
              <p className="error-message">Inicio do contrato é obrigatório.</p>
              )}
          </div>
  
          {/* Campo de quantidade de pessoas com incremento e decremento */}
  
          <div className="form-group">
          <label>Quantidade de pessoas que irão residir</label>
          <div className="number-input">
              <button
              className={`number-button ${errors?.pessoas && "input-error"}`}
              onClick={() => {
                  const input = document.querySelector('input[name="pessoas"]');
                  input.stepDown();
              }}
              >
              -
              </button>
              <input
              className={errors?.pessoas && "input-error"}
              type="number"
              name="pessoas"
              placeholder="Quantas pessoas?"
              min={0}
              {...register("pessoas", { required: true })}
              />
              <button
              className={`number-button ${errors?.pessoas && "input-error"}`}
              onClick={() => {
                  const input = document.querySelector('input[name="pessoas"]');
                  input.stepUp();
              }}
              >
              +
              </button>
          </div>
          {errors?.pessoas?.type === "required" && (
              <p className="error-message">Quantidade de pessoas é obrigatório.</p>
          )}
          </div>
          <div className="form-group">
              <label>Pet</label>
              <input
              className={errors?.pet && "input-error"}
              type="text"
              name="pet"
              placeholder="Digite se possuí Algum animal de estimação"
              {...register("pet", { required: true })}
              />
              {errors?.pet?.type === "required" && (
              <p className="error-message">Pet é obrigatório.</p>
              )}
            </div>
            <div>
                <LocatarioForm 
                register={register}
                errors={errors}
                control={control}
                />
            </div>
            <div>
                <FiadorForm 
                register={register}
                errors={errors}
                control={control}
                />
            </div>
            <div className="form-group">
            <button onClick={() => handleSubmit(submit)()}>Enviar resumo</button>
            </div>
            </form>
          </div>
          
        </div>
    );
}

export default Form1;