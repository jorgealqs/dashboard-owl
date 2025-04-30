const { markup } = owl;

export const translations = {
    nameAplication: "Jorge Tech",
    es: {
        header: {
            home: markup('<i class="fa fa-home mr-1"></i>Inicio'),
            dashboard: markup('<i class="fa fa-chart-line mr-1"></i>Panel'),
            profile: markup('<i class="fa fa-user mr-1"></i>Perfil'),
            settings: markup('<i class="fa fa-cog mr-1"></i>Configuración'),
            notifications: markup('<i class="fa fa-bell mr-1"></i>Notificaciones'),
        },
        footer: {
            technologies: "Tecnologías",
            technologiesList: [
                { name: "Python", url: "https://www.python.org/" },
                { name: "Framework OWL", url: "https://github.com/odoo/owl" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
                { name: "Odoo", url: "https://www.odoo.com/" },
            ],
            contact: "Contacto",
            contactList: [
                { label: "Email", value: "joralquisi@hotmail.com", url: "mailto:joralquisi@hotmail.com" },
                { label: "Teléfono", value: "+57 319 366 2378", url: "tel:+573193662378" },
                { label: "Ubicación", value: "Remoto / Mundial", url: null },
            ],
            about: "Sobre nosotros",
            aboutText: "Creative Minds se especializa en construir soluciones inteligentes con Odoo, Python y tecnologías web modernas. Nos apasiona ayudar a las empresas a crecer a través de la tecnología.",
            rightsReserved: markup(`
                <span class="text-xs text-gray-500">
                    &copy; 2025 Creative Minds — Todos los derechos reservados.
                </span>
            `),
        }
    },

    en: {
        header: {
            home: markup('<i class="fa fa-home mr-1"></i>Home'),
            dashboard: markup('<i class="fa fa-chart-line mr-1"></i>Dashboard'),
            profile: markup('<i class="fa fa-user mr-1"></i>Profile'),
            settings: markup('<i class="fa fa-cog mr-1"></i>Settings'),
            notifications: markup('<i class="fa fa-bell mr-1"></i>Notifications'),
        },
        footer: {
            technologies: "Technologies",
            technologiesList: [
                { name: "Python", url: "https://www.python.org/" },
                { name: "OWL Framework", url: "https://github.com/odoo/owl" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
                { name: "Odoo", url: "https://www.odoo.com/" },
            ],
            contact: "Contact",
            contactList: [
                { label: "Email", value: "joralquisi@hotmail.com", url: "mailto:joralquisi@hotmail.com" },
                { label: "Phone", value: "+57 319 366 2378", url: "tel:+573193662728" },
                { label: "Location", value: "Remote / Worldwide", url: null },
            ],
            about: "About",
            aboutText: "Creative Minds specializes in building smart solutions with Odoo, Python, and modern web technologies. We are passionate about helping businesses grow through technology.",
            rightsReserved: markup(`
                <span class="text-xs text-gray-500">
                    &copy; 2025 Creative Minds — All rights reserved.
                </span>
            `),
        }
    },
    floatingIcons :[
        {
            url: "https://wa.me/573193662738",
            icon: "fab fa-whatsapp text-green-500",
            title: "WhatsApp",
        },
        {
            url: "https://github.com/jorgealqs",
            icon: "fab fa-github text-gray-800",
            title: "GitHub",
        },
        {
            url: "https://www.linkedin.com/in/jorgealqs",
            icon: "fab fa-linkedin-in text-blue-600",
            title: "LinkedIn",
        },
        {
            url: "mailto:joralquisi@hotmail.com",
            icon: "fas fa-envelope text-indigo-600",
            title: "Email",
        },
    ]

};