export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type GTMEvent = {
  event: string
  [key: string]: any
}

export const trackEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData)
    console.log('📊 GTM Event:', eventData)
  }
}

// Eventos específicos
export const trackPhoneClick = (unitName: string, phone: string) => {
  trackEvent({
    event: 'call_click',
    unit_name: unitName,
    phone_number: phone,
    button_location: 'mobile_bar',
  })
}

export const trackWhatsAppClick = (unitName: string, phone: string) => {
  trackEvent({
    event: 'whatsapp_click',
    unit_name: unitName,
    phone_number: phone,
    button_location: 'mobile_bar',
  })
}

export const trackFormSubmit = (unitSlug: string, formType: string = 'contact_form') => {
  trackEvent({
    event: 'lead_submit',
    unit_selected: unitSlug,
    form_type: formType,
  })
}
