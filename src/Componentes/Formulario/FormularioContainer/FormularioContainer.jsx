
import { useState } from 'react';
import FormularioProducto from '../FormularioProducto/FormularioProducto';

const formularioInicial = {
  id: '',
  nombre: '',
  precio: '',
  stock: '',
};

function FormularioContainer() {
  const [datosForm, setDatosForm] = useState(formularioInicial);
  const [archivoImagen, setArchivoImagen] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setDatosForm((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  const manejarImagen = (evento) => {
    setArchivoImagen(evento.target.files?.[0] ?? null);
    setMensaje('');
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    setMensaje('');
    setTipoMensaje('');

    if (!archivoImagen) {
      setTipoMensaje('error');
      setMensaje('Seleccioná una imagen antes de enviar el formulario.');
      return;
    }

    if (
      !datosForm.id.trim() ||
      !datosForm.nombre.trim() ||
      datosForm.precio === '' ||
      datosForm.stock === ''
    ) {
      setTipoMensaje('error');
      setMensaje('Completá todos los campos del producto.');
      return;
    }

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

    if (!apiKey) {
      setTipoMensaje('error');
      setMensaje(
        'Falta configurar VITE_IMGBB_API_KEY en el archivo .env.local.'
      );
      return;
    }

    setSubiendo(true);

    try {
      console.log('Subiendo imagen a Imgbb...');

      const formularioImagen = new FormData();
      formularioImagen.append('image', archivoImagen);

      const respuesta = await fetch(
        `https://api.imgbb.com/1/upload?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          body: formularioImagen,
        }
      );

      const resultado = await respuesta.json();

      if (!respuesta.ok || !resultado.success || !resultado.data?.url) {
        throw new Error(
          resultado.error?.message || 'Imgbb no pudo subir la imagen.'
        );
      }

      const urlImagen = resultado.data.url;

      console.log('Imagen subida con éxito.');
      console.log('URL:', urlImagen);

      const productoCompleto = {
        id: datosForm.id.trim(),
        nombre: datosForm.nombre.trim(),
        precio: datosForm.precio,
        stock: datosForm.stock,
        urlImagen: urlImagen,
      };

      console.log(
        'Enviando los siguientes datos COMPLETOS a la API:'
      );
      console.log(productoCompleto);

      setTipoMensaje('exito');
      setMensaje(
        'Producto agregado correctamente.'
      );

      setDatosForm(formularioInicial);
      setArchivoImagen(null);
      evento.target.reset();
    } catch (error) {
      console.error('Error al enviar el producto:', error);

      setTipoMensaje('error');
      setMensaje(`No se pudo completar el envío: ${error.message}`);
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <section id="formulario" className="seccion-formulario">
      <div className="seccion-formulario__encabezado">
        <h2>Agregá un producto</h2>
      </div>

      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarImagen={manejarImagen}
        manejarEnvio={manejarEnvio}
        subiendo={subiendo}
        mensaje={mensaje}
        tipoMensaje={tipoMensaje}
        archivoImagen={archivoImagen}
      />
    </section>
  );
}

export default FormularioContainer;
