// Número de contacto temporal. Cambia estos datos cuando tengas el de la empresa.
// WhatsApp usa código de país y número sin +, espacios ni el 0 inicial local.
export const contacto = {
  whatsapp: '593978702302',
  whatsappVisible: '+593 97 870 2302',
}

export function crearEnlaceWhatsApp(mensaje: string) {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const redesSociales = [
  {
    nombre: 'Instagram',
    tipo: 'instagram',
    url: 'https://www.instagram.com/plotiart_gigantografias?cplk=cjk0MTIwYzRjMmc2',
    descripcion: 'Instagram de Plotiart',
  },
  {
    nombre: 'Facebook',
    tipo: 'facebook',
    url: 'https://www.facebook.com/share/p/1F8VPvf1QW/',
    descripcion: 'Publicación de Plotiart en Facebook',
  },
]
