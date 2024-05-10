import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import InputMask from 'react-input-mask';

const Form1 = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
  
  
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };
      
    //  const BotaoAdd = () => {
    //   const [botaoAtivo, setBotaoAtivo] =
    //   useState(false);
  
    //   const [botaoDesativo, setBotaoDesativo] =
  
    //   useState(false);
    // }

    // // console.log("RENDER");
  
    // function Layout () {
   
    //   const navigate = useNavigate();
  
    //   const [exibirConteudo, setExibirConteudo] = useState(false);
    
    return (
      // formulario Locação
      <div className="app-container">
          <div className="form-container">
              <h1>Formulário Locação</h1>
              <div className="form-group">
              <label>Locação</label>
              <select
              className={errors?.locacao && "input-error"}
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
              placeholder="Digite se possuí Algum animal de estimação"
              {...register("pet", { required: true })}
              />
              {errors?.pet?.type === "required" && (
              <p className="error-message">Pet é obrigatório.</p>
              )}
            </div>
          </div>
        </div>
    );
}

export default Form1;