import {
  CheckIcon,
  EstrellaIcon,
  WhatsAppIcon,
  CelularIcon,
} from "@/shared/icons/";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <p>hola</p>
    // </main>
    <main>
      <div className=" bg-secondary py-16 mb-8">
        <div className="container1 grid grid-cols-2">
          <div className="col col-span-1 flex flex-col justify-center">
            <p className="txt1 mb-6">
              CRISTALES TEMPLADOS Y ALUMINIO EN CULIACÁN
            </p>
            <p className="txt2 mb-6 text-blanco">
              Transforma tus Espacios con{" "}
              <span className="text-primary">Elegencia y Seguridad</span>
            </p>
            <p className="txt3 mb-6">
              Expertos en cristales templados a medida para fachadas, interiores
              y más en Culiacán. Descubre nuestra variedad en aluminio y acero
              inoxidable. ¡Envío gratis y atención inmediata!
            </p>
            <div className="flex">
              <div>
                <button className="flex items-center justify-center txt5 bg-primary px-5 py-3 gap-4">
                  <WhatsAppIcon />
                  <span>WHATSAPP</span>
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center txt5 px-5 py-3 gap-4">
                  <CelularIcon />
                  <span>LLÁMANOS</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col col-span-1 mx-auto">
            {" "}
            <img
              src="/images/image1.png"
              alt=""
              className="object-contain max-w-[350px] "
            />
          </div>
        </div>
      </div>
      <div className="container1 py-16 mb-8">
        <div className="grid grid-cols-2 ">
          <div className="col col-span-1 mx-auto">
            {" "}
            <img
              src="/images/image1.png"
              alt=""
              className="object-contain max-w-[350px] "
            />
          </div>
          <div className="col col-span-1 mb-16">
            <p className="txt1 mb-6">+15 AÑOS DE EXPERIENCIA</p>
            <p className="txt2 text-black mb-6">
              Descubre Nuestra Calidad Premium en{" "}
              <span className="text-primary">Cristales Templados</span> en
              Culiacán{" "}
            </p>
            <p className="txt3 text-black mb-6">
              Fabricamos soluciones a medida en cristales, aluminio y acero
              inoxidable para tus proyectos arquitectónicos. ¡Atención
              personalizada y garantía asegurada!
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eff8f8] py-16 mb-8">
        <div className="container1">
          <div className="text-center">
            <p className="txt2 text-black ">
              <span className="text-primary">Servicios</span> en Cristalería y
              Aluminio en Culiacán{" "}
            </p>
            <p className="txt3 text-black mb-6">
              Cristales templados, seguros, elegantes, aluminio moderno,
              mobiliario duradero y funcional.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-8">
            {dataServicios.map((servicio) => (
              <div className="marco1 w-[250px] " key={servicio.id}>
                <img
                  src={servicio.urlimage}
                  alt={servicio.title}
                  className="w-full h-[150px] object-cover"
                />
                <div className="px-4 py-8">
                  <p className="txt4 mb-3">{servicio.title}</p>
                  <p className="txt3 text-complementaryTwo text-[14px]">
                    {servicio.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center txt5 bg-primary px-5 py-3 gap-4">
              <span>COTIZA CON NOSOTROS</span>
              <WhatsAppIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="container1 py-16 mb-8">
        <div className="grid grid-cols-2 ">
          <div className="col col-span-1 mx-auto">
            {" "}
            <img
              src="/images/image1.png"
              alt=""
              className="object-contain max-w-[350px] "
            />
          </div>
          <div className="col col-span-1 mb-16">
            <p className="txt1 mb-6">+15 AÑOS DE EXPERIENCIA</p>
            <p className="txt2 text-black mb-6">
              Descubre Nuestra Calidad Premium en{" "}
              <span className="text-primary">Cristales Templados</span> en
              Culiacán{" "}
            </p>
            <p className="txt3 text-black mb-6">
              Fabricamos soluciones a medida en cristales, aluminio y acero
              inoxidable para tus proyectos arquitectónicos. ¡Atención
              personalizada y garantía asegurada!
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
              <div className="col col-span-1 flex items-center bg-complementaryOne px-3 py-4 gap-x-2">
                <CheckIcon />
                <p>Personalización Exclusiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 py-16 mb-8">
        <div className="text-center">
          <p className="txt2 text-black mb-6">
            Esto Dicen <span className="text-primary">Nuestros Clientes</span>{" "}
            en Culiacán{" "}
          </p>
          <p className="txt3 text-black mb-6">
            Conoce las historias reales y satisfactorias de quienes confiaron en
            nosotros.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-around">
          {dataClientes.map((cliente) => (
            <div className="marco1 w-[300px] px-4 py-8" key={cliente.id}>
              <p className="txt4 mb-3">{cliente.name}</p>
              <div className="flex gap-1 mb-3">
                {[...Array(cliente.numestrellas)].map((_, index) => (
                  <EstrellaIcon key={index} />
                ))}
              </div>
              <p className="txt3 text-complementaryTwo text-[14px]">
                {cliente.description}
              </p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="container1 py-16 mb-8">
        <div className="grid grid-cols-2">
          <div className="col col-span-1 mr-16">
            <p className="txt1 mb-6">SOLICITA UNA COTIZACIÓN</p>
            <p className="txt2 text-black mb-6">
              <span className="text-primary">Contáctanos Hoy </span> y Lleva tus
              Proyectos de Cristalería en Culiacán al Siguiente Nivel
            </p>
            <p className="txt3 text-black mb-6">
              Estamos aquí para ayudarte a hacer realidad tus ideas
              arquitectónicas. ¡Hablemos y comencemos a trabajar juntos!
            </p>
            <div className="flex">
              <div>
                <button className="flex items-center justify-center txt5 bg-primary px-5 py-3 gap-4">
                  <WhatsAppIcon />
                  <span>WHATSAPP</span>
                </button>
              </div>
              <div>
                <button className="flex items-center justify-center txt5 px-5 py-3 gap-4">
                  <CelularIcon />
                  <span>LLÁMANOS</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col col-span-1">
            <div>
              <div className="w-full h-80 rounded-xl overflow-hidden mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4568682519158!2d-77.02376904454007!3d-12.055388825303734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8bb46e92859%3A0xa52c7b913d11cbf6!2sFacultad%20de%20Farmacia%20y%20Bioqu%C3%ADmica%20de%20la%20Universidad%20San%20Marcos.!5e0!3m2!1ses-419!2spe!4v1671106582182!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const dataServicios = [
  {
    id: 1,
    title: "Cristales Templados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
    urlimage: "https://www.esaingperu.com/img/servicio-01.jpg",
  },
  {
    id: 2,
    title: "Cristales Templados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
    urlimage: "https://www.esaingperu.com/img/servicio-01.jpg",
  },
  {
    id: 3,
    title: "Cristales Templados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
    urlimage: "https://www.esaingperu.com/img/servicio-01.jpg",
  },
  {
    id: 4,
    title: "Cristales Templados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
    urlimage: "https://www.esaingperu.com/img/servicio-01.jpg",
  },
];

const dataClientes = [
  {
    id: 1,
    name: "Juan Pérez",
    numestrellas: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
  {
    id: 2,
    name: "Juan Pérez",
    numestrellas: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
  {
    id: 3,
    name: "Juan Pérez",
    numestrellas: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
  {
    id: 4,
    name: "Juan Pérez",
    numestrellas: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
  {
    id: 5,
    name: "Juan Pérez",
    numestrellas: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
  {
    id: 6,
    name: "Juan Pérez",
    numestrellas: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orc",
  },
];
