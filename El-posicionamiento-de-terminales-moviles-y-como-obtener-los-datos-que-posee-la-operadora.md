# Nuevos avances en la investigación judicial

## El posicionamiento de terminales móviles. Cómo obtener los datos que posee la operadora.

Uno de los grandes problemas desde el punto de vista jurídico es la inseguridad a la hora de solicitar información a las operadoras acerca de los datos que posee un determinado terminal móvil, en concreto en el presente artículo nos referiremos exclusivamente a los concernientes al posicionamiento.

Independientemente de si se es juez, fiscal, letrado o FCSE, este es un problema común a todos. Al no haber unos criterios claros fijados a nivel normativo o jurisprudencial sobre qué datos debe almacenar y facilitar -de forma entendible y legible- la operadora de telefonía por  _razones de interés público_  (art. 21.6 del nuevo RGPD) en relación a un determinado usuario que esté siendo investigado en un proceso judicial.

Para ello es necesario en primer lugar comprender cómo funciona una red de telefonía.

## ¿Cómo funciona una red de telefonía?

La telefonía móvil de las operadoras está formada a grandes rasgos por  **2 partes**: una primera parte, donde una  **red de antenas**  -estaciones base- repartidas opera por todo el territorio y, una segunda parte, la de los  **teléfonos móviles**  -también llamados terminales o estaciones móviles- que permiten el acceso a dicha red.

La red de antenas de la operadora se reparte en las denominadas  **células**, que cubren todo el espacio asignado a las mismas. Normalmente se dibujan como si fuesen hexagonales, aunque esto se hace para simplificar el esquema-en realidad se suelen solapar las zonas de cobertura entre las distintas antenas-.

El terminal móvil se conectará a la célula más cercana de forma automática, de donde presumiblemente obtendrá más cobertura -mejor potencia de señal-. Para ello la operadora siempre debe saber en qué célula se encuentra encendido un dispositivo.

## ¿Cómo hacemos para localizar un dispositivo?

Para obtener la posición de un terminal móvil hay que contemplar el siguiente listado de los distintos métodos de posicionamiento, dependiendo de la tecnología usada por la operadora y el terminal móvil. Básicamente se dividen en métodos basados en la red y métodos basados en terminales móviles, aunque hay que mencionar que en la práctica suelen emplearse varios de estos métodos de forma combinada para aumentar la precisión.

## Listado de los distintos métodos de posicionamiento 

## Basados en la red

**Cell Global Identity (CGI)**: Este método de posicionamiento proporciona la posición actual de la célula de la estación móvil (ES) objetivo basándose en la identificación global de la célula o en el código de área de localización (LAC) más la identidad de la célula (IC).

**Timing advance (TA)**: Este es uno de los métodos conocidos para calcular la ubicación de la estación móvil, en la que se calcula el tiempo para las transferencias de señal de la estación móvil a la estación base.

**Time of arrival (TOA)**: En este método, la posición de la estación móvil es calculada sobre la base de la señal enviada desde la estación móvil a las tres unidades de medida de la posición (UMP), donde las coordenadas geográficas en UMP ya son conocidas.

**Angle of arrivals (AOA)**: En este método, el cálculo de la posición se basa en los conjuntos de antenas base inteligentes (_smart base station antenna_) necesarios para medir el ángulo de la señal recibida.

**Time Difference of Arrivals (TDOA)**: En este método, la posición de una estación móvil se estima midiendo la diferencia horaria de las llegadas entre la señal recibida en la estación base en servicio y la misma transmisión recibida en otras estaciones base circundantes.

## Basados en terminales móviles

**E-OTD**: Método de Posicionamiento de Diferencia de Tiempo Observado Mejorado -E-OTD, por sus siglas en inglés). E-OTD basado en la estación móvil es la alternativa basada en el teléfono al TDOA de enlace ascendente (U-TDOA). El método E-OTD necesita al menos tres antenas de telefonía donde la lógica es calcular la posición con Diferencia de Tiempo Observado (OTD), Retardo de Viaje Redondo (RTD), y Diferencia de Tiempo Geométrico (GTD).

**GPS**  **asistido**  **(AGPS)**: AGPS proporciona la posición más precisa de un terminal móvil, con un alcance aproximado de 10 metros. El cálculo de la posición se basa en las señales de radio enviadas por satélite al receptor -terminal móvil-.

Sistemas de ubicación satelitales serían  **GPS, GLONASS, BEIDOU**.

También se puede extraer la posición del  **wifi**  mediante sistemas basados en  **RSSI y lateralización**,  **fingerprinting**,  **angle of arrival**  y  **time of flight**  (TOF). Muy útiles especialmente en interiores donde la señal del exterior puede llegar a ser más débil.

Si nos centramos en la tecnología relacionada con la cobertura de las redes actuales, tenemos los distintos estándares 2G (GSM), 3G (UMTS) y 4G (LTE).

El estándar de comunicación móvil más básico con el que cuentan todos los terminales móviles es el 2G -estándar GSM-, que tiene una serie de parámetros a los que de forma obligatoria tiene acceso la operadora, porque de no tenerlos, la comunicación en la red de telefonía móvil no se produciría entre las distintas antenas y los terminales móviles.

Por tanto, los métodos de posicionamiento disponibles por las diferentes redes pueden resumirse en:

## 2G

**Métodos de posicionamiento estándar en GERAN**  (GSM EDGE Radio Access Network)

-   Método de posicionamiento basado en cobertura celular
-   Método de posicionamiento de Diferencia de Tiempo Observado Mejorado (E-OTD)
-   Método de posicionamiento basado en A-GNSS
-   Método de posicionamiento de la diferencia horaria de llegada (UTDOA) del enlace ascendente

## 3G

**Métodos de posicionamiento estándar en UTRAN** (UMTS Terrestrial  Radio Access Network)

-   Método de posicionamiento basado en cobertura celular
-   Método de posicionamiento OTDOA
-   Métodos de posicionamiento basados en A-GNSS
-   Método de posicionamiento UTDOA

## 4G

**Métodos de posicionamiento estándar en E-UTRAN** (Evolved UMTS Terrestrial  Radio Access Network)

-   Métodos de posicionamiento basados en la cobertura de células de enlaces ascendentes y descendentes
-   Método de posicionamiento OTDOA
-   Métodos de posicionamiento basados en A-GNSS
-   Método de posicionamiento UTDOA

## ¿Qué es lo que venía ocurriendo hasta ahora?

Cuando a través de mandamiento judicial el juez de instrucción, fiscalía, los grupos especializados de FCSE o los propios letrados presentes en el procedimiento solicitaban información sobre el posicionamiento de un determinado terminal móvil, las operadoras normalmente entregaban exclusivamente los  _datos de conexión y desconexión a las células de telefonía de su propiedad en un rango temporal concreto_. Bien, pero normalmente con esos datos no podemos calcular con exactitud la posición de un terminal móvil. Por eso, es importante conocer qué opciones además de ese parámetro hay disponibles y cuáles más pueden llegar a implementarse en un futuro que faciliten la labor del posicionamiento de manera mucho más precisa.

## ¿Qué problemas técnicos puede esgrimir la operadora para no entregar dichos datos?

La respuesta suele ser simple, "nuestros sistemas no disponen de datos en el registro -_log_- de esos parámetros". Sin embargo, a día de hoy, es de extrañar que dichos datos no sean recibidos o tratados por sus sistemas, dado el alto valor de los datos de posicionamiento en marketing; pudiendo la compañía de telefonía, orientar sus servicios u ofrecer dichos datos a terceros en función de dónde esté localizado un usuario en un momento dado.

## ¿Cuál es el verdadero problema que se nos viene encima?

Como mencionamos al principio, el  **art. 21.6 RGPD**, dice lo siguiente _"Cuando los datos personales se traten con fines de investigación científica o histórica o fines estadísticos de conformidad con el_ [artículo 89](http://www.privacy-regulation.eu/es/89.htm%20target= "Artículo 89 - Garantías y excepciones aplicables al tratamiento con fines de archivo en interés público, fines de investigación científica o histórica o fines estadísticos"), _apartado 1, el interesado tendrá derecho, por motivos relacionados con su situación particular, a oponerse al tratamiento de datos personales que le conciernan, salvo que sea necesario para el cumplimiento de una misión realizada por  **razones de interés público**."_

Hay por tanto solo  **2 tipos de datos**:  **privados**  o  **de interés público**. Dentro de las prácticas habituales se viene entendiendo que las operadoras deben almacenar y facilitar dentro del marco de una investigación judicial datos tales como DNI, IMEI, nº de teléfono de un usuario, datos de conexión y desconexión a las células de telefonía de su propiedad, pero  **¿y el resto de parámetros relacionados con la posición?**  ¿Cómo se entenderían dichos datos, privados o de interés público?

Habría dos respuestas posibles en todo caso, una que abogue por la seguridad y otra por la privacidad.

En el  **primer supuesto**  se entendería que los datos obtenidos de los distintos parámetros anteriormente mencionados -necesarios para calcular la posición con mayor exactitud de un terminal móvil-, deben ser de  _interés público_  y por tanto son indisponibles para su  _oposición al tratamiento_  por parte del interesado, por entenderse que son necesarios para la autoprotección de los bienes jurídicos más relevantes de la sociedad. También deberíamos tener en cuenta que, en dicho supuesto, si la operadora no colabora, en virtud del  **art. 588 septies b**  podría incurrir en un  **delito de desobediencia**, y en caso de que borrase datos podríamos hablar del tipo penal recogido en los  **artículos 264 y 264 bis CP**. El  **DPO**  (_data protection officer_) en su caso o la persona responsable, deberá impedir que ninguno de estos hechos suceda, sino quiere que pueda derivarse una responsabilidad derivada del art. 31 bis Cp. Así mismo, dichos datos se deben entregar de manera que sean comprensibles y útiles para los interesados.

En el  **segundo supuesto**, si se entiende que los datos relativos a la posición de los terminales móviles, es un  _dato privado,_  el interesado puede ejercitar su derecho a  _oponerse al tratamiento de datos personales que le conciernan_, así como el derecho de acceso a todos los datos que sobre el mismo disponga la operadora (artículo 15 RGPD) o rectificación o supresión mencionados en la sección 3ª del RGPD.

Esta situación se puede ver de manera gráfica en un supuesto hipotético, donde un individuo que haya atentado contra la vida de una persona y que lleve encima el terminal móvil en el momento de cometerse los hechos, puede instantes después llamar a su operadora para ejercitar su derecho en virtud del art. 21 RGPD, con lo que la operadora debe acatar dicho mandato por parte del interesado en caso de considerarlo  _privado_. Pero en el caso de que se considerase de  _interés público,_ ante la oportuna investigación judicial y su solicitud por parte del juez de instrucción, estos datos podrían con una alta precisión determinar si dicho terminal asociado a un determinado investigado ha estado en la escena de los hechos, aportando unos indicios que arrojen luz sobre lo sucedido y así alcanzar la verdad.

## ¿Cómo se debería entonces solicitar mediante mandamiento judicial?

Para que una operadora entregue los datos de un usuario se debe indicar de forma precisa qué es lo que se quiere conocer. Por esa razón si lo que queremos es averiguar son los datos de posicionamiento asociados a un determinado terminal y usuario, la expresión en principio más correcta será la siguiente

> Solicitar los datos y metadatos de ubicación que el operador de telecomunicaciones móviles tenga, o haya recopilado de los elementos
> de red asociados a los servicios de localización (Location Services,
> LCS), como son los GMLC (Gateway Movile Location Center), los SMLC
> (Serving Mobile Location Center) o cualquier otro específicamente
> requerido (ver listado ut supra)._
> _Tanto los servicios de localización, LCS, como los elementos de red GMLC   y SMLC están definidos en los estándares publicados por la
> organización   3GPP (3rd Generation Partnership Project), responsable
> a nivel mundial   de los estándares que regulan las comunicaciones
> móviles 2G, 3G y 4G, y   estando dichos estándares disponibles
> públicamente en_ [_http://www.3gpp.org_](http://www.3gpp.org/).

Sin duda, la  **creación de directrices claras de parámetros relacionados con el posicionamiento de terminales móviles**, así como otro tipo de datos, que puedan ser solicitados y facilitados en el marco de una investigación judicial por parte de las operadoras y demás empresas que traten con los mismos, ayudará a reforzar el sistema jurídico español, impidiendo que tales compañías se conviertan con su falta de diligencia en _jueces de facto_.

Agradecer especialmente el asesoramiento técnico a David Pérez y José Picó de Layakk Ingeniería, Juan Antonio Frago -fiscal de delitos económicos- y Silvia Barrera -inspectora Policía Nacional-.

Este artículo de mi autoría fue publicado en Legaltoday de Aranzadi-Thomson Reuters el día 31 de mayo de 2018.
[Nuevos avances en la investigación judicial: El posicionamiento de terminales moviles](http://www.legaltoday.com/practica-juridica/publico/proteccion_de_datos/nuevos-avances-en-la-investigacion-judicial-el-posicionamiento-de-terminales-moviles-como-obtener-los-datos-que-posee-la-operadora)
