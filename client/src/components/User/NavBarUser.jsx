// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './NavBarUser.css'; 
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import EditIcon from '@mui/icons-material/Edit';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import {products} from './Products'

// export default function Customer(){
//   //////////////__States__///////////////////
//   const [expand, setExpand] = useState({
//     profile: false,
//     category:false,
//     subCategory: false,
//     mobile: false,
//     location: false,
//     filterCat: '',
//     filterSub: ''
//   });
  
//   ////////___Aux___/////////////////////
//   let filter = expand.filterCat
//   const category = products.map( categ =>  filter && categ[filter])
//   const subCate = category[0].subCate
//   const img = category[0].image

//   ///////____Functions___////////////
//   function categoryFilter(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       filterCat: e.target.value,
//       subCategory: true
//     }) 
//   }
//   function handleSelect(e){
//     e.preventDefault();
//     setExpand({
//       ...expand,
//       filterCat: e.target.value,
//       category: false
//     })
//   }
//   function location(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       location: true
//     }) 
//   }
//   function modal(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       category: true
//     }) 
//   }
//   function mobileOpen(e){
//     e.preventDefault();
//     let open = expand.mobile;
//     setExpand({
//       ...expand,
//       mobile: !open
//     })
//   }
//   function modalOpen(e){
//     e.preventDefault();
//     setExpand({
//       ...expand,
//       location: false
//     })
//   }
//   function modalDown(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       subCategory: false,
//       category: false,
//       profile: false,
//       filterCat: '',
//       filterSub: ''
//     })
//   }
//   function profile(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       profile: true,
//       category: false
//     }) 
//   }
//   function subCategory(e){
//     e.preventDefault()
//     setExpand({
//       ...expand,
//       filterSub: e.target.value,
//       subCategory: false,
//       category: false
//     }) 
//   }
  
//   return (
//     <div  className="customerGrid">
//       <div onMouseOver={modalDown} className="cusElement1">
//         <img src="" alt="Icono empresa" />
//       </div>
//       <div onMouseOver={modalDown} className="cusElement2">
//         <input type="search" placeholder="Buscar..."/>
//       </div>
//       <div onMouseOver={modalDown} className="cusElement3">
//         <button onClick={mobileOpen}>
//           {expand.mobile ? <CloseIcon/> : <MenuIcon/>}
//         </button>
//         <div>
//           <label>
//             <ShoppingCartIcon/>
//           </label>
//           <span>
//             10
//           </span>
//         </div>
//       </div>
//       <div onMouseOver={modalDown} className="cusElement4">
//         <button onClick={location}>
//           <LocationOnIcon/>
//         </button>
//         <Link to='/User/Location'>
//           <label>
//             <LocationOnIcon/>
//           </label>
//         </Link>
//         <div>
//           <span>
//             Enviar a
//           </span>
//           <span>
//             Ciudad
//           </span>
//         </div>
//       </div>
//       <div className="cusElement5">
//         <span onMouseOver={modal} >
//           Categor??as       
//         </span>
//       </div>
//       <div onMouseOver={modalDown} className="cusElement6">
//         <Link to='/Historial' style={{textDecoration: 'none', color: 'black'}}>
//           <span>
//             Historial 
//           </span>
//         </Link>
//       </div>
//       <div className="cusElement7">
//         <p onMouseOver={modalDown}>
//           Nelson Andres 
//         </p>
//         <label onMouseOver={profile}>
//           <AccountCircleIcon/>
//         </label>
//       </div>
//       <div onMouseOver={modalDown} className="cusElement8">
//         <Link to='/MisCompras' style={{textDecoration: 'none', color: 'black'}}>
//           <span>
//             Mis Compras
//           </span>
//         </Link>
//         <Link to='/Favoritos' style={{textDecoration: 'none', color: 'black'}}>
//           <span>
//             Favoritos
//           </span>
//         </Link>
//       </div>
//       <div onMouseOver={modalDown} className="cusElement9">
//         <label>
//           <ShoppingCartIcon/>
//         </label>
//         <span>
//           10
//         </span>
//       </div>
//       <div className="cusElement02"></div>
//       <div onMouseOver={modalDown} className="cusElement03"></div>
//       {expand.category && 
//       <div className="cusElement0">
//         <div className='categories'>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Belleza'>Belleza y Cuidado</option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Hogar'>Cocina y Hogar</option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Deporte'>Deportes </option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Herramientas'>Herramientas</option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Mascotas'>Mascotas</option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter} onClick={handleSelect} value='Tecnologia'>Tecnolog??a</option>
//             <ArrowRightIcon/>
//           </div>
//           <div>
//             <option onMouseOver={categoryFilter}  onClick={handleSelect} value='Videojuegos'>Videojuegos</option>
//             <ArrowRightIcon/>
//           </div>
//         </div>
//       {
//         expand.subCategory && subCate &&
//           <div className="subcategories">
//             {subCate?.map(el => 
//               <option key={el} onClick={subCategory}>{el}</option>
//               )}
//           </div>
//       }
//       {
//         expand.subCategory && img &&
//         <div className="imgCat">
//           {img?.map( img => 
//             <img key={img} src={img} alt='Imagen'/>
//           )}
//         </div>
//       }
//       </div>
//       }
//       <div className="cusElement01">
//       {
//         expand.profile && 
//         <div className='profile'>
//           <Link to='/MisDatos' style={{textDecoration: 'none', color: 'black'}}>
//             <option>Mis Datos</option>
//           </Link>
//           <Link to='/Seguridad' style={{textDecoration: 'none', color: 'black'}}>
//             <option>Seguridad</option>
//           </Link>
//           <Link to='/Privacidad' style={{textDecoration: 'none', color: 'black'}}>
//             <option>Privacidad</option>
//           </Link>
//           <Link to='/Salir' style={{textDecoration: 'none', color: 'black'}}>
//             <option>Salir</option>
//           </Link>
//         </div>
//       }
//       </div>
//       <div onMouseOver={modalDown} className="cusElement03">
//       {expand.mobile && 
//         <div className="menuMobile">
//           <Link to='/Categorias' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Categor??as</span>
//           </Link>
//           <Link to='/Historial' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Historial</span>
//           </Link>
//           <Link to='/MiCuenta' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Mi Cuenta</span>
//           </Link>
//           <Link to='/MisCompras' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Mis Compras</span>
//           </Link>
//           <Link to='/Favoritos' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Favoritos</span>
//           </Link>
//           <Link to='/Salir' style={{textDecoration: 'none', color: 'black'}}>
//           <span>Salir</span>
//           </Link>
//         </div>
//       }
//       {
//         expand.location && 
//       <div className="modalLocation">
//         <div className="locModal0">
//           <h1>Decide el destino de t?? pedido</h1>
//         <div className='locModal1'>
//           <h3>Mis Direcciones</h3>
//           <label>
//               <input type="radio" />
//               <span>Calle 13 #23-14</span> 
//               <span> Barrio la esperanza</span>
//               <span> Pedro Francisco - 3143253412</span>
//           </label>
//           <label>
//               <input type="radio" />
//               <span>Calle 13 #23-14</span> 
//               <span> Barrio la esperanza</span>
//               <span> Pedro Francisco - 3143253412
//               </span>
//           </label>
//           <label>
//               <input type="radio" />
//               <span>Calle 13 #23-14</span> 
//               <span> Barrio la esperanza</span>
//               <span> Pedro Francisco - 3143253412
//               </span>
//           </label>
//           <Link to='/User/Profile/MisDatos' style={{textDecoration: 'none', color: 'black'}}>
//           <button>
//             <span>Editar Direcciones</span>
//             <span>
//               <EditIcon/>
//             </span>
//           </button>
//           </Link>
//         </div>
//         <div className='locModal2'>
//           <h3>Otro Destino</h3>
//           <div>
//             <select>
//               <option hidden disable='true' value="">Departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//             </select>
//             <select>
//             <option hidden disable='true' value="">Ciudad</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//               <option value="">departamento</option>
//             </select>
//             <button onClick={modalOpen}>Aceptar</button>
//           </div>
//           <div>
//             <Link to='/User/Profile/MisDatos/AgregarDomicilio'  style={{textDecoration: 'none', color: 'black'}}>
//               <button>
//                   <span>
//                   <AddCircleIcon/>
//                   </span>
//                   <span>Agregar m??s detalles</span>
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="locModal3">
//           <button onClick={modalOpen}>cancelar</button>
//           <button onClick={modalOpen}>Guardar cambios</button>
//         </div>
//         </div>
//       </div>
//       }
//       </div>
//     </div>
//   )
// }