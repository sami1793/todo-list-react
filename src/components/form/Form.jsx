export const Form = () => {
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        const nombre = e.target.nombre.value;
        console.log(nombre)
    }}>
        <input type="text" name="nombre" id="nombre" maxlength="50"
        placeholder='Ingrese nueva tarea' />
        <button type="submit">Enviar</button>
    </form>
  )
}
