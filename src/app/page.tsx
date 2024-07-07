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
            <p className="txt1 mb-6">ESAING</p>
            <p className="txt2 mb-6 text-blanco">
              Transformamos Experiencias con{" "}
              <span className="text-primary">Elegencia y Seguridad</span>
            </p>
            <p className="txt3 mb-6">
              Brindamos asesoría oportuna y adecuada para la constitución de
              empresas con diversas formas de organización, conforme a sus
              necesidades: Sociedades Anónimas, Sociedades Anónimas Cerradas,
              Sociedades Comerciales, Sociedades Civiles y cualquier otra forma
              societaria contemplada por la Ley General de Sociedades.
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
              Descubre Nuestra Calidad Premium de{" "}
              <span className="text-primary">Nuestros Servicios</span> en Perú{" "}
            </p>
            <p className="txt3 text-black mb-6">
              Buscamos un cambio favorable en la mejora de calidad de vida de
              las familias rurales, urbano marginales, asociaciones civiles,
              cooperativas, mypes, empresas, entidades públicas (gobiernos
              locales, regionales y nacional) y privadas (cooperación
              internacional), para lograr su crecimiento y desarrollo
              sostenible.
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
          <div className="text-center mb-8">
            <p className="txt2 text-black ">
              <span className="text-primary">Principaes Servicios</span> en Perú
            </p>
            {/* <p className="txt3 text-black mb-6">
              Cristales templados, seguros, elegantes, aluminio moderno,
              mobiliario duradero y funcional.
            </p> */}
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
        <div className="text-center">
          <p className="txt2 text-black mb-6">
            Esto Dicen <span className="text-primary">Nuestros Clientes</span>{" "}
            en Perú{" "}
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
              Proyectos al Siguiente Nivel
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
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1973.0657181624263!2d-76.387614!3d-8.486599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a589c6f8500ed7%3A0xe3a2b6b18bdf7225!2sParaiso%20de%20uacho!5e0!3m2!1ses!2spe!4v1720393600075!5m2!1ses!2spe"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1973.0657181624263!2d-76.387614!3d-8.486599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a589c6f8500ed7%3A0xe3a2b6b18bdf7225!2sParaiso%20de%20uacho!5e0!3m2!1ses!2spe!4v1720393600075!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
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
    title: "Servicio 1",
    description:
      "Elaboración de planes y normativas de transformación asociativa, cooperativa y mypes.",
    urlimage: "https://www.esaingperu.com/img/servicio-01.jpg",
  },
  {
    id: 2,
    title: "Servicio 2",
    description:
      "Servicios de asistencia técnica, formulación y ejecución de proyectos con enfoque de género e interculturidad.",
    urlimage: "https://www.esaingperu.com/img/servicio-02.jpg",
  },
  {
    id: 3,
    title: "Servicio 3",
    description:
      "Asistencia técnica y acompañamiento a comunidades campesinas, comunidades nativas, y población vulnerable.",
    urlimage: "https://www.esaingperu.com/img/servicio-03.jpg",
  },
  {
    id: 4,
    title: "Servicio 4",
    description:
      "Fortalecimiento de organizaciones de productores, bajo el modelo cooperativo, asociaciones civiles y su transformación bajo el marco de la Ley N° 31335.",
    urlimage: "https://www.esaingperu.com/img/servicio-04.jpg",
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
