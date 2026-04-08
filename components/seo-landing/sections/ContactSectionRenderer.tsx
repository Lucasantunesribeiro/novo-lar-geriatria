import ContactForm from '@/components/contato/ContactForm'

type ContactData = {
  title?: string
  description?: string
  showForm?: boolean
  contacts?: Array<{
    _key?: string
    label?: string
    value?: string
    href?: string
  }>
}

export function ContactSectionRenderer({ data }: { data: ContactData }) {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          {data.contacts?.length ? (
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {data.contacts.map((contact, index) => (
                <div key={contact._key || index} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  {contact.label ? <div className="text-sm font-semibold uppercase tracking-wide text-[#2E7B7F]">{contact.label}</div> : null}
                  {contact.value ? (
                    contact.href ? (
                      <a href={contact.href} className="mt-2 block text-base font-semibold text-[#2C3E6B] hover:underline">
                        {contact.value}
                      </a>
                    ) : (
                      <div className="mt-2 text-base font-semibold text-[#2C3E6B]">{contact.value}</div>
                    )
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {data.showForm ? <div className="mt-10"><ContactForm /></div> : null}
        </div>
      </div>
    </section>
  )
}
