import React from 'react'

function App() {
  const [formData, setFormData] = React.useState<FormData>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setFormData(new FormData(e.currentTarget));
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1em', maxWidth: '30em' }}>
        <label>
          Nome:
          <input type="text" name="name" required={true} />
        </label>

        <label>
          Email:
          <input type="email" name="email" required={true} />
        </label>

        <button type="submit">Enviar</button>
      </form>

      {formData && (
        <>
          <p>Nome: {formData.get('name')?.toString()}</p>
          <p>Email: {formData.get('email')?.toString()}</p>
        </>
      )}
    </>
  )
}

export default App
