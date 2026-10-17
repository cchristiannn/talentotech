import { ItemListContainer } from './Componentes/CatalogoItem/ItemListContainer/ItemListContainer';
import Layout from './Componentes/Layout/Layout';
import FormularioContainer from './Componentes/Formulario/FormularioContainer/FormularioContainer';
import './App.css';

function App() {
  return (
    <Layout>
      <ItemListContainer mensaje="Productos" />
      <FormularioContainer />
    </Layout>
  );
}
export default App;
