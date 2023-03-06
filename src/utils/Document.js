export const Document = (formData) =>
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pdf Content</title>
            <style>          
                body {
                    border: 2px;
                    margin: 50px;
                    font-size: 14px;
                    color: black;
                	text-align: justify;
                	height: 792px; 
                	width: 612px;
                	margin-left: auto; 
                	margin-right: auto;

                }
    
                h4 {    
                    text-align: center;
                    padding-bottom:35;
                }
          
                p {
                    border: 2px;
                    margin: 20px;
                }
                ul{
                    margin: 20px;
                    font-size: 14px;
                  }
          
            </style>
        </head>
        <body>
            <h4>MANDATO PARA EL ARRIENDO Y ADMINISTRACIÓN</h4>
            <p>En Santiago de Chile, ${formData.date}, entre <b>${formData.name} ${formData.lastName}</b>, cédula de identidad Nº${formData.rut}, ${formData.nationality}, ${formData.maritalStatus}, ${formData.profession}, domiciliado en ${formData.address} N°${formData.numberAddress}, comuna de ${formData.comunne} (en adelante, <b>el Propietario</b>); y el señor <b>xxxx xxxx xxxx xxxx</b>, chileno, soltero, cédula nacional de identidad N°xx.xxx.xxx-x, domiciliado en xxxxx xxxx N°xxx, departamento N°xxxx torre x, comuna de xxxx xxxxx (en adelante, <b>el Administrador</b>), se ha convenido el presente mandato para el arrendamiento y administración que se detalla a continuación.</p>
            <p>PRIMERO: ${formData.genderMayusculaDeterminate} ${formData.genderStr} ${formData.lastName}, es propietario del departamento ${formData.rentDepartmentNumber} de la Torre ${formData.rentTowerNumber} ubicada en la calle ${formData.rentAddress}, N°${formData.rentNumberAddress}, comuna de ${formData.rentComunne} de la ${formData.rentRegion}, (en adelante, <b>la Propiedad</b>).</p>
            <p>SEGUNDO: Por el presente instrumento ${formData.genderDeterminate} ${formData.genderStr}. ${formData.lastName}, entrega al señor xxxx xxxxx la administración de la Propiedad individualizada en la cláusula precedente, para que en su nombre y representación:</p>
            <ul>
                <p><li type="disc">Promueva el arrendamiento del inmueble antes individualizado, exhibiéndolo a los interesados que lo soliciten; evalúe y seleccione a aquel de los postulantes a arrendatario que, de acuerdo con los antecedentes que presente, pueda cumplir cabalmente con las exigencias del contrato de arrendamiento, especialmente el pago de la renta y el cuidado del inmueble.</li></p>
                <p><li type="disc">Negocie una renta de arrendamiento mensual de la Propiedad, que garantice al Propietario una renta mensual de $${formData.monthlyRent} (${formData.rentaStr} Pesos) líquidos durante los primeros seis meses de arriendo.</li></p>
                <p><li type="disc">Negocie la forma de pago de la garantía contractual (máximo dos cuotas para un monto igual a una vez la renta bruta pactada) y obtenga su entrega.</li></p>
                <p><li type="disc">Gestione el contrato de arrendamiento y su firma, cuyo texto deberá ser previamente acordado con el Propietario.</li></p>
                <p><li type="disc">Ejerza todas las atribuciones que el contrato de arrendamiento le otorga al Propietario.</li></p>         
                <p><li type="disc">Aplique todas las medidas que el contrato de arrendamiento le permite al Propietario, especialmente las multas por atraso en el pago de las rentas de arrendamiento.</li></p>
                <p><li type="disc">Gestione y reciba en su cuenta corriente N°xxxxxx con el Banco xxxxx, los pagos propios de la renta mensual y del mes de garantía, así como cualquier otro pago que deba hacer el arrendatario según lo dispuesto en el contrato de arrendamiento </li></p>
                <p><li type="disc">Transfiera a don ${formData.name} ${formData.lastName}, a la Cuenta N°${formData.accountNumber}, del Banco ${formData.bank}, a más tardar 72 horas después de percibidas las rentas de arrendamiento. De esta trasferencia podrá ser descontada la comisión por administración.</li></p>
                <p><li type="disc">Evacue un informe bimensual de rendición de cuentas, en el que se indique, a lo menos, el estado de las rentas de arrendamiento percibidas, pagos de consumos básicos, incluidos los gastos comunes, si se han efectuado gastos, y su detalle. Además, deberá adjuntar toda la documentación de respaldo cuando corresponda y cualquier otra información que le solicite el propietario.</li></p>
            </ul>
            <p>TERCERO: Las partes acuerdan que el servicio de administración convenido será remunerado en la siguiente forma:</p>
            <ul>
                <p><li type="disc">Una comisión por arrendamiento, por cada contrato que gestione el Administrador, equivalente al 50% (cincuenta por ciento) de la renta de arrendamiento pactada en el respectivo contrato, una vez percibida por el Propietario.</li></p>
                <p><li type="disc">Una comisión por administración correspondiente a un pago mensual de $${formData.ganacia} (${formData.ganaciaStr} pesos), la renta mensual pactada en el respectivo contrato de arriendo a $${formData.monthlyRent} (${formData.rentaStr} pesos), caso en el cual esta comisión será de un ${formData.profitPercentage}% (${formData.porcentajeStr} por ciento,) del monto de dicha renta mensual.</li></p>
            </ul>
            <p>CUARTO: El presente mandato tendrá una vigencia de un año, renovable automáticamente, por iguales periodos y sucesivos, si ninguna de las partes no comunicare a la otra su intención de ponerle término, por escrito, con 30 días de anticipación, mediante correo electrónico o por carta certificada enviada al domicilio consignado en el presente documento.</p>
            <p>QUINTO: Para todos los efectos legales las partes fijan su domicilio en la ciudad de xxxxxxxx y en señal de acuerdo firman el presente mandato en dos ejemplares, quedando uno en poder de cada una de ellas.</p> 
        </body>
    </html>
    `;
    
    