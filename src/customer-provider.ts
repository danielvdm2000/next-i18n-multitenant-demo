interface Customer {
    name: string;
    domain: string;
    pages: Array<{
        title: string;
        content: string;
        lang: string;
    }>
}

interface ICustomerProvider {
    getCustomers(): Promise<Customer[]>;
    getCustomerByDomain(domain: string): Promise<Customer | undefined>;
}

class CustomerProvider implements ICustomerProvider {
    constructor(
        private customers: Customer[],
    ) { }

    getCustomers = async () => {
        return this.customers;
    }
    
    getCustomerByDomain = async (domain: string) => {
        return this.customers.find(c => c.domain === domain);
    }
}

const customers: Customer[] = [
    {
        name: 'Monjasa A/S',
        domain: 'monjasa',
        pages: [
            {
                title: 'Welcome',
                content: 'Welcome to Monjasa A/S whistleblower platform',
                lang: 'en'
            },
            {
                title: 'Blow the whistle',
                content: [
                    'Blowing the whistle means reporting wrongdoing or unethical behavior that you have observed or have knowledge of. Here are some steps to consider when blowing the whistle:',
                    '1. Gather evidence: Collect as much evidence as possible to support your claims. This could include documents, emails, videos, and other forms of proof.',
                    '2. Follow the proper channels: Identify the appropriate channels for reporting the wrongdoing. This could be your supervisor, HR department, or an anonymous tip line. Follow the procedures outlined by your organization for reporting misconduct.',
                    '3. Be prepared for retaliation: Whistleblowers are often subject to retaliation, such as harassment, discrimination, or even termination. Make sure you are aware of your legal rights and protections before blowing the whistle.',
                    "4. Maintain confidentiality: It's important to keep the information confidential until the appropriate authorities are notified. Be careful not to discuss the matter with anyone who is not directly involved in the investigation.",
                    '5. Seek legal advice: Consult with a lawyer who specializes in whistleblowing cases to ensure you are protected under the law and to understand your rights and obligations.',
                    'Remember that blowing the whistle can be a difficult and complex process, but it can also help prevent harm and promote ethical behavior in the workplace.'
                ].join('\n'),
                lang: 'en',
            },
            {
                title: 'Velkommen',
                content: 'Velkommen til Monjasa A/S whistleblowere platform',
                lang: 'da',
            },
            {
                title: 'Bl??s i fl??jten',
                content: [
                    "At sladre betyder at rapportere forkert eller uetisk adf??rd, som du har observeret eller har viden om. Her er nogle trin at overveje, n??r du sladrer:",
                    "1. Saml beviser: Indsamle s?? mange beviser som muligt for at underst??tte dine p??stande. Dette kan omfatte dokumenter, e-mails, videoer og andre former for beviser.",
                    "2. F??lg de korrekte kanaler: Identificer de passende kanaler til at rapportere om den forkerte adf??rd. Dette kan v??re din chef, HR-afdeling eller en anonym tip-linje. F??lg de procedurer, der er beskrevet af din organisation for at rapportere om misbrug.",
                    "3. V??r forberedt p?? repressalier: Sladrehanker er ofte genstand for repressalier, s??som chikane, diskrimination eller endda afskedigelse. S??rg for at v??re opm??rksom p?? dine juridiske rettigheder og beskyttelser, inden du sladrer.",
                    "4. Oprethold fortrolighed: Det er vigtigt at holde oplysningerne fortrolige, indtil de passende myndigheder er blevet underrettet. V??r forsigtig med ikke at diskutere sagen med nogen, der ikke er direkte involveret i unders??gelsen.",
                    "5. S??g juridisk r??dgivning: R??df??r dig med en advokat, der er specialiseret i whistleblowing-sager, for at sikre, at du er beskyttet under loven og for at forst?? dine rettigheder og forpligtelser.",
                    "Husk, at at sladre kan v??re en vanskelig og kompleks proces, men det kan ogs?? hj??lpe med at forhindre skade og fremme etisk adf??rd p?? arbejdspladsen.",
                ].join('\n'),
                lang: 'da'
            }
        ]
    },
    {
        name: 'RelateIT A/S',
        domain: 'relateit',
        pages: [
            {
                title: 'Welcome',
                content: 'Welcome to RelateIT A/S whistleblower platform',
                lang: 'en',
            },
            {
                title: 'Blow the whistle',
                content: [
                    'Blowing the whistle means reporting wrongdoing or unethical behavior that you have observed or have knowledge of. Here are some steps to consider when blowing the whistle:',
                    '1. Gather evidence: Collect as much evidence as possible to support your claims. This could include documents, emails, videos, and other forms of proof.',
                    '2. Follow the proper channels: Identify the appropriate channels for reporting the wrongdoing. This could be your supervisor, HR department, or an anonymous tip line. Follow the procedures outlined by your organization for reporting misconduct.',
                    '3. Be prepared for retaliation: Whistleblowers are often subject to retaliation, such as harassment, discrimination, or even termination. Make sure you are aware of your legal rights and protections before blowing the whistle.',
                    "4. Maintain confidentiality: It's important to keep the information confidential until the appropriate authorities are notified. Be careful not to discuss the matter with anyone who is not directly involved in the investigation.",
                    '5. Seek legal advice: Consult with a lawyer who specializes in whistleblowing cases to ensure you are protected under the law and to understand your rights and obligations.',
                    'Remember that blowing the whistle can be a difficult and complex process, but it can also help prevent harm and promote ethical behavior in the workplace.'
                ].join('\n'),
                lang: 'en',
            },
            {
                title: 'Velkommen',
                content: 'Velkommen til RelateIT A/S whistleblowere platform',
                lang: 'da'
            },
            {
                title: 'Bl??s i fl??jten',
                content: [
                    "At sladre betyder at rapportere forkert eller uetisk adf??rd, som du har observeret eller har viden om. Her er nogle trin at overveje, n??r du sladrer:",
                    "1. Saml beviser: Indsamle s?? mange beviser som muligt for at underst??tte dine p??stande. Dette kan omfatte dokumenter, e-mails, videoer og andre former for beviser.",
                    "2. F??lg de korrekte kanaler: Identificer de passende kanaler til at rapportere om den forkerte adf??rd. Dette kan v??re din chef, HR-afdeling eller en anonym tip-linje. F??lg de procedurer, der er beskrevet af din organisation for at rapportere om misbrug.",
                    "3. V??r forberedt p?? repressalier: Sladrehanker er ofte genstand for repressalier, s??som chikane, diskrimination eller endda afskedigelse. S??rg for at v??re opm??rksom p?? dine juridiske rettigheder og beskyttelser, inden du sladrer.",
                    "4. Oprethold fortrolighed: Det er vigtigt at holde oplysningerne fortrolige, indtil de passende myndigheder er blevet underrettet. V??r forsigtig med ikke at diskutere sagen med nogen, der ikke er direkte involveret i unders??gelsen.",
                    "5. S??g juridisk r??dgivning: R??df??r dig med en advokat, der er specialiseret i whistleblowing-sager, for at sikre, at du er beskyttet under loven og for at forst?? dine rettigheder og forpligtelser.",
                    "Husk, at at sladre kan v??re en vanskelig og kompleks proces, men det kan ogs?? hj??lpe med at forhindre skade og fremme etisk adf??rd p?? arbejdspladsen.",
                ].join('\n'),
                lang: 'da',
            },
            {
                title: 'Investigaci??n',
                content: 'Bienvenido a la plataforma de denunciantes de RelateIT A/S',
                lang: 'es'
            },
            {
                title: 'Sopla el silbato',
                content: [
                    "Chismear significa informar sobre comportamientos incorrectos o poco ??ticos que hayas observado o que tengas conocimiento. Aqu?? hay algunos pasos a considerar cuando chismoseas:",
                    "1. Recopila evidencia: Recopila todas las pruebas posibles para respaldar tus afirmaciones. Esto puede incluir documentos, correos electr??nicos, videos y otras formas de pruebas.",
                    "2. Sigue los canales adecuados: Identifica los canales apropiados para informar sobre el comportamiento incorrecto. Esto puede ser tu jefe, el departamento de recursos humanos o una l??nea de denuncia an??nima. Sigue los procedimientos descritos por tu organizaci??n para informar sobre el abuso.",
                    "3. Prep??rate para posibles represalias: Los chismosos a menudo son objeto de represalias, como acoso, discriminaci??n o incluso despido. Aseg??rate de estar consciente de tus derechos y protecciones legales antes de chismosear.",
                    "4. Mant??n la confidencialidad: Es importante mantener la informaci??n confidencial hasta que se hayan informado a las autoridades adecuadas. Ten cuidado de no discutir el caso con nadie que no est?? directamente involucrado en la investigaci??n.",
                    "5. Busca asesoramiento legal: Consulta con un abogado especializado en casos de denunciantes para asegurarte de estar protegido por la ley y para entender tus derechos y obligaciones.",
                    "Recuerda que chismosear puede ser un proceso dif??cil y complejo, pero tambi??n puede ayudar a prevenir da??os y promover comportamientos ??ticos en el lugar de trabajo.",
                ].join('\n'),
                lang: 'es'
            }
        ]
    }
]

export const customerProvider: ICustomerProvider = new CustomerProvider(customers);