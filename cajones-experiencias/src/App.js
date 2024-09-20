
import './App.css';
import Experiencia from "./componentes/Experiencia"

function App() {
  return (
    <div className="App">
      <div className='bienvenida'><h1>¡Hello! I'm David. I invite you to learn about my career path:</h1></div>
      <div className='contenedor-principal'>
        
      <Experiencia 
        empresa='Huawei Technologies Co. Ltd'
        locacion='Queretaro'
        rol='Customer Support Engineer'
        departamento='Wireless Network'
        testimonio='Responsible for providing high-quality technical solutions in response to customer service requests in the Latin American region, with a focus on LTE and 3G wireless networks.'
        imagen='Huawei' />
      <Experiencia 
        empresa='Adecco Group'
        locacion='Queretaro'
        rol='Intern'
        departamento=' Wireless Internship Program'
        testimonio='Project designed to integrate new generations of engineers into the workplace, focused on cybersecurity, remote solutions, ticket system assistance and KPI monitoring.'
        imagen='Adecco' />
      <Experiencia 
        empresa='Universidad Tecnológica de México'
        locacion='Campus Queretaro/Ecatepec'
        rol='Student'
        departamento='Software and Network Engineering'
        testimonio='Software Engineering deals with the design, development, testing, and maintenance of software systems.Network Engineering focuses on the design, implementation, and management of computer networks. This career interconnects these two fields in order to complement both ascpects of technology'
        imagen='Unitec' />
      <Experiencia 
        empresa='UPIITA'
        locacion='CDMX'
        rol='Student'
        departamento=' Telematics Engineering'
        testimonio='Telematics Engineering is a multidisciplinary field that combines telecommunications, vehicular technologies, informatics, and computer science to enable long-distance data transmission and communication systems, particularly in transportation systems and other mobile contexts.'
        imagen='Upiita' />  
      </div>
    </div>
  );
}

export default App;
