import "../componentsStyle/AboutUsStyles.css";

function AboutUs (){
    return(
        <div className="about-container">
            <h1>Nuestra Historia</h1>
            <p>El proyecto inicialmente fue propulsado por tres 
            integrantes de la asignatura Gestión de Proyecto, cuyo 
            propósito es crear una propuesta de valor que reemplace 
            el sistema operandi de la CruzRoja y al mismo tiempo motive 
            a la creación de nuevas tecnologías que contribuyan
            al crecimiento tecnológico en el área de salud.</p>

            <h1>Nuestra Mision</h1>
            <p>La aplicación debe ser capaz de permitir al usuario
            poder verificar la información de los distintos 
            ingresos y salientes de sangre mediante la base de 
            datos de la que será proveída, por otro lado, debe 
            facilitar la información de los distintos tipos de 
            sangre almacenadas y la cantidad existente de estas 
            (A+ 5000 LT, etc…) También debe de tener un registro 
            de las distintas transacciones hechas a otros bancos
            de sangre o a distintos clientes, para llevar una b
            uena integridad en los datos que pueden 
            ser provistos por dicha base de datos.a</p>

            <h1>Nuestra Vision</h1>
            <p>Gestionar los datos del banco de sangre de forma eficaz</p>
            <p>Desarrollar una aplicación móvil para consultar la disponibilidad de algún tipo de sangre</p>
            <p>Desarrollar una página web para consultar la disponibilidad de algún tipo de sangre</p>
        </div>


    )
}

export default  AboutUs;