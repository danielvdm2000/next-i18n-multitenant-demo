interface Customer {
    name: string;
    domain: string;
    pages: Record<string, Array<{
        title: string;
        content: string;
    }>>
}

export const customers: Customer[] = [
    {
        name: 'Monjasa A/S',
        domain: 'monjasa',
        pages: {
            'en': [
                {
                    title: 'Welcome',
                    content: 'Welcome to Monjasa A/S whistleblower platform'
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
                }
            ],
            'da': [
                {
                    title: 'Velkommen',
                    content: 'Velkommen til Monjasa A/S whistleblowere platform',
                },
                {
                    title: 'Blæs i fløjten',
                    content: [
                        "At sladre betyder at rapportere forkert eller uetisk adfærd, som du har observeret eller har viden om. Her er nogle trin at overveje, når du sladrer:",
                        "1. Saml beviser: Indsamle så mange beviser som muligt for at understøtte dine påstande. Dette kan omfatte dokumenter, e-mails, videoer og andre former for beviser.",
                        "2. Følg de korrekte kanaler: Identificer de passende kanaler til at rapportere om den forkerte adfærd. Dette kan være din chef, HR-afdeling eller en anonym tip-linje. Følg de procedurer, der er beskrevet af din organisation for at rapportere om misbrug.",
                        "3. Vær forberedt på repressalier: Sladrehanker er ofte genstand for repressalier, såsom chikane, diskrimination eller endda afskedigelse. Sørg for at være opmærksom på dine juridiske rettigheder og beskyttelser, inden du sladrer.",
                        "4. Oprethold fortrolighed: Det er vigtigt at holde oplysningerne fortrolige, indtil de passende myndigheder er blevet underrettet. Vær forsigtig med ikke at diskutere sagen med nogen, der ikke er direkte involveret i undersøgelsen.",
                        "5. Søg juridisk rådgivning: Rådfør dig med en advokat, der er specialiseret i whistleblowing-sager, for at sikre, at du er beskyttet under loven og for at forstå dine rettigheder og forpligtelser.",
                        "Husk, at at sladre kan være en vanskelig og kompleks proces, men det kan også hjælpe med at forhindre skade og fremme etisk adfærd på arbejdspladsen.",
                    ].join('\n')
                }
            ]
        }
    },
    {
        name: 'RelateIT A/S',
        domain: 'relateit',
        pages: {
            'en': [
                {
                    title: 'Welcome',
                    content: 'Welcome to RelateIT A/S whistleblower platform'
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
                }
            ],
            'da': [
                {
                    title: 'Velkommen',
                    content: 'Velkommen til RelateIT A/S whistleblowere platform',
                },
                {
                    title: 'Blæs i fløjten',
                    content: [
                        "At sladre betyder at rapportere forkert eller uetisk adfærd, som du har observeret eller har viden om. Her er nogle trin at overveje, når du sladrer:",
                        "1. Saml beviser: Indsamle så mange beviser som muligt for at understøtte dine påstande. Dette kan omfatte dokumenter, e-mails, videoer og andre former for beviser.",
                        "2. Følg de korrekte kanaler: Identificer de passende kanaler til at rapportere om den forkerte adfærd. Dette kan være din chef, HR-afdeling eller en anonym tip-linje. Følg de procedurer, der er beskrevet af din organisation for at rapportere om misbrug.",
                        "3. Vær forberedt på repressalier: Sladrehanker er ofte genstand for repressalier, såsom chikane, diskrimination eller endda afskedigelse. Sørg for at være opmærksom på dine juridiske rettigheder og beskyttelser, inden du sladrer.",
                        "4. Oprethold fortrolighed: Det er vigtigt at holde oplysningerne fortrolige, indtil de passende myndigheder er blevet underrettet. Vær forsigtig med ikke at diskutere sagen med nogen, der ikke er direkte involveret i undersøgelsen.",
                        "5. Søg juridisk rådgivning: Rådfør dig med en advokat, der er specialiseret i whistleblowing-sager, for at sikre, at du er beskyttet under loven og for at forstå dine rettigheder og forpligtelser.",
                        "Husk, at at sladre kan være en vanskelig og kompleks proces, men det kan også hjælpe med at forhindre skade og fremme etisk adfærd på arbejdspladsen.",
                    ].join('\n')
                }
            ]
        }
    }
]