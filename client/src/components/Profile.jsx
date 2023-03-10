/** @format */

import NavBarGuest from "./Guest/NavBarGuest";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import UserLogo from "../svg/user.svg";
import Heart from "../svg/heart-svgrepo-com.svg";
import Next from "../svg/next.svg";
import { Link } from "react-router-dom";

export default function Profile() {
    const user = useSelector((state) => state.User);
    let capitalLetter = user.name;
    capitalLetter = capitalLetter[0].toUpperCase();
    return (
        <>
            <NavBarGuest />
            <div className="container-profile">
                <div className="container-div-name-profile">
                    <div className="container-user-profile">
                        <div className="profile-picture-profile" alt="">
                            {capitalLetter}
                        </div>

                        {user.name === "Agustin" ? (
                            <>
                                <div className="text-div-profile">
                                    <h3>
                                        {user.name} {user.lastname}
                                    </h3>
                                    <h6>Permisos de Administrador</h6>
                                </div>
                            </>
                        ) : (
                            <h3>
                                {user.name} {user.lastname}
                            </h3>
                        )}
                    </div>

                    {user.name === "Agustin" ? (
                        <>
                            <Link style={{color:"black", textDecoration:"none"}} to="/createProduct">
                            <div className="container-options-profile">
                                <div className="container-img-profile">
                                    <img
                                        src={UserLogo}
                                        className="img-div-profile"
                                        alt=""
                                    />
                                </div>
                                <div className="text-div-profile">
                                    <h4>CRUD producto</h4>
                                    <h6>
                                        Permite la creacion,edicion,o
                                        eliminacion de un producto
                                    </h6>
                                </div>
                                <img
                                    src={Next}
                                    style={{
                                        position: "absolute",
                                        width: "15px",
                                        top: "20%",
                                        right: "5%",
                                    }}
                                    alt=""
                                />
                            </div>
                            </Link>
                            <div className="container-options-profile">
                                <div className="container-img-profile">
                                    <img
                                        src={UserLogo}
                                        className="img-div-profile"
                                        alt=""
                                    />
                                </div>
                                <div className="text-div-profile">
                                    <h4>Crear o Eliminar Categoria</h4>
                                    <h6>
                                        Permite la creacion o eliminacion de una
                                        categoria
                                    </h6>
                                </div>
                                <img
                                    src={Next}
                                    style={{
                                        position: "absolute",
                                        width: "15px",
                                        top: "20%",
                                        right: "5%",
                                    }}
                                    alt=""
                                ></img>
                            </div>
                        </>
                    ) : null}
                </div>

                <div className="container-div-data-profile">
                    <div className="container-options-profile">
                        <div className="container-img-profile">
                            <img
                                src={UserLogo}
                                className="img-div-profile"
                                alt=""
                            />
                        </div>
                        <div className="text-div-profile">
                            <h4>Mis Datos</h4>
                            <h6>Mis Datos</h6>
                        </div>
                        <img
                            src={Next}
                            style={{
                                position: "absolute",
                                width: "15px",
                                top: "20%",
                                right: "5%",
                            }}
                            alt=""
                        ></img>
                    </div>
                    <div className="container-options-profile">
                        <div className="container-img-profile">
                            <img
                                src="https://www.mercadolibre.com/org-img/mkt/email-mkt-assets/my-profile/tusTarjetasIcon.svg"
                                className="img-div-profile"
                                alt=""
                            />
                        </div>
                        <div className="text-div-profile">
                            <h4>Mis compras</h4>
                            <h6>
                                Aca veras tus compras realizadas en el pasado
                            </h6>
                        </div>
                        <img
                            src={Next}
                            style={{
                                position: "absolute",
                                width: "15px",
                                top: "20%",
                                right: "5%",
                            }}
                            alt=""
                        ></img>
                    </div>
                    <div className="container-options-profile">
                        <div className="container-img-profile">
                            <img
                                src={Heart}
                                className="img-div-profile"
                                alt=""
                            />
                        </div>
                        <div className="text-div-profile">
                            <h4>Mis favoritos</h4>
                            <h6>
                                Aca veras tus productos agregados a la lista
                                favoritos
                            </h6>
                        </div>
                        <img
                            src={Next}
                            style={{
                                position: "absolute",
                                width: "15px",
                                top: "20%",
                                right: "5%",
                            }}
                            alt=""
                        ></img>
                    </div>
                    <div className="container-options-profile">
                        <div className="container-img-profile">
                            <img
                                src="https://www.mercadolibre.com/org-img/mkt/email-mkt-assets/my-profile/seguridadIcon.svg"
                                className="img-div-profile"
                                alt=""
                            />
                        </div>
                        <div className="text-div-profile">
                            <h4>Seguridad</h4>
                            <h6>Aca podras cambiar tu contrase??a</h6>
                        </div>
                        <img
                            src={Next}
                            style={{
                                position: "absolute",
                                width: "15px",
                                top: "20%",
                                right: "5%",
                            }}
                            alt=""
                        ></img>
                    </div>
                    <div className="container-options-profile">
                        <div className="container-img-profile">
                            <img
                                src="https://www.mercadolibre.com/org-img/mkt/email-mkt-assets/my-profile/direccionesIcon.svg"
                                className="img-div-profile"
                                alt=""
                            />
                        </div>
                        <div className="text-div-profile">
                            <h4>Direcciones</h4>
                            <h6>Aca podras administrar tus direcciones</h6>
                        </div>
                        <img
                            src={Next}
                            style={{
                                position: "absolute",
                                width: "15px",
                                top: "20%",
                                right: "5%",
                            }}
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}
