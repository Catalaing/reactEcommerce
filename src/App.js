import './App.css';
import './components/Flex.css'; 
import './components/Salud.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavContainer from './components/NavBar/NavContainer';
import Item from './components/ItemListContainer/Item';



function App() {
  return (
    <>
        <NavContainer >
          <NavBar/> 
        </NavContainer>

        <ItemListContainer saludo= "Bienvenidxs">

          <Item 
          title= "Remera Verona" 
          price= {2500}
          detail= "100% algodón"
          size= "S,M,L"
          img= "assets/img/1.png"/>

          <Item 
          title= "Remera Perugia" 
          price= {2600}
          detail= "100% algodón"
          size= "S,M"
          img= "assets/img/2.png"/>

          <Item 
          title= "Remera Bologna" 
          price= {3400}
          detail= "100% algodón"
          size= "S,M,L"
          img= "assets/img/3.png"/>

          <Item 
          title= "Remera Sicilia" 
          price= {2000}
          detail= "100% algodón"
          size= "Único"
          img= "assets/img/4.png"/>

          <Item 
          title= "Remera Toscana" 
          price= {2500}
          detail= "100% algodón"
          size= "M,L"
          img= "assets/img/5.png"/>

        </ItemListContainer>
    </>
  );
}

export default App;
