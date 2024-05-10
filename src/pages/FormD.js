import { useState } from 'react';


function FormD() {
  const [formFields, setFormFields] = useState([
    { locatario: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.locatario] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      locatario: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="app-container">
      <div className="form-container">
      <h1>Formulário Locatário 2</h1>
      <div className="form-group">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='locatario'
                placeholder='Digite o nome do locatário'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
      </div>
    </div>
    </div>
  );
}

export default FormD;