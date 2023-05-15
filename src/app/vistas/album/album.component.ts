import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  imagenes = [
    {imagen1: "imagen1.png", imagen2: "imagen1.png", imagen3:"imagen1.png", texto:"Era el barco de los sueños para todos los demás, para mí, era un barco de esclavos, regresándome a los Estados Unidos en cadenas. Por fuera, era lo que toda chica bien educada debía ser. Por dentro, estaba gritando. Gloria Stewart. Rose", enlace1:"#", enlace2:"#", alternativo:"El titánic"},
    {imagen1: "imagen2.png", imagen2: "imagen2.png", imagen3:"imagen2.png", texto:"El silencio de la nieve- pensaba el hombre que estaba sentado inmediatamente detrás del conductor del autobús- Si hubiera sido el principio de un poema, habría llamado a lo que sentía en su interior el silencio de la nieve.Orhan Pamuk", enlace1:"#", enlace2:"#", alternativo:"Una ciudad nevada"},
    {imagen1: "imagen3.jpg", imagen2: "imagen3.jpg", imagen3:"imagen3.jpg", texto:"¿Qué ocurriría si los coches eléctricos o de gas natural comenzaran a quitar cuota de mercado a los derivados del crudo? Sin duda, los gobiernos consumidores buscarían modos de sustituir los impuestos perdidos mediante otros impuestos sobre la electricidad o el gas natural.", enlace1:"#", enlace2:"#", alternativo:"Un coche deportivo de alta gama"},
    {imagen1: "imagen4.jpg", imagen2: "imagen4.jpg", imagen3:"imagen4.jpg", texto:"Los árboles siempre han sido los predicadores más persuasivos para mí. Los adoro cuando están en poblaciones y familias, en el bosque y en los bosques. Y aún más, los amo cuando están aislados. Son como hombres solitarios. No como ermitaños que huyeron por alguna debilidad, sino como grandes hombres solitarios, como Beethoven y Nietzsche. Herman Hesse", enlace1:"#", enlace2:"#", alternativo:"Arboles pintados sobre óleo"},
    {imagen1: "imagen5.jpg", imagen2: "imagen5.jpg", imagen3:"imagen5.jpg", texto:"Cada gran castillo se inició una vez con un solo bloque; despreciar los comienzos no pequeños. Un pequeño paso que se da todos los días genera la esperanza de mayores logros. ¡Haz algo todos los días!. Israelmore Ayivor", enlace1:"#", enlace2:"#", alternativo:"Las ruinas de un viejo castillo en un acantilado"},
    {imagen1: "imagen6.jpg", imagen2: "imagen6.jpg", imagen3:"imagen6.jpg", texto:"El fútbol funciona como ajedrez. También allí, las reinas y los alfiles, las torres y los caballos pueden hacernos regresar a una olvidada Edad Media, pero lo único que cuenta es la muerte del rey, el mate. Y el mate, en el fútbol, es el gol. Vladimir Dimitrijevic", enlace1:"#", enlace2:"#", alternativo:"Estadio de futbol lleno"},
    {imagen1: "imagen7.jpg", imagen2: "imagen7.jpg", imagen3:"imagen7.jpg", texto:"El desierto se desgasta… un velo de misterio. Inmóvil y silenciosa evoca en nosotros un indicio esquiva de algo desconocido, inconocible, a punto de ser revelado. Ya que el desierto no actúa parece estar esperando, pero ¿esperando qué? Abadía de Edward", enlace1:"#", enlace2:"#", alternativo:"Una noche estrellada en el desierto"},
    {imagen1: "imagen8.jpg", imagen2: "imagen8.jpg", imagen3:"imagen8.jpg", texto:"Para ser un faro, debes ser lo suficientemente fuerte como para resistir todo tipo de tormentas, todo tipo de soledad y debes tener una luz muy poderosa dentro de ti! Mehmet Murat Ildan", enlace1:"#", enlace2:"#", alternativo:"Puesta de sol con un faro de fondo"},
    {imagen1: "imagen9.jpg", imagen2: "imagen9.jpg", imagen3:"imagen9.jpg", texto:"La agricultura fue antaño un trabajo sagrado. Cuando la humanidad se apartó de su ideal, apareció la moderna agricultura comercial. Cuando el agricultor comenzó a hacer cultivos para ganardinero, entonces olvidó los verdaderos principios de la agricultura. Masanobu Fukuoka", enlace1:"#", enlace2:"#", alternativo:"Un campo cultivado, con el grano en proceso de crecimiento"},

  ]
}
