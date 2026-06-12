import { createClient } from 'contentful'

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !accessToken) return null
  return createClient({ space, accessToken })
}

function assetUrl(asset: any): string {
  const url = asset?.fields?.file?.url
  return url ? `https:${url}` : ''
}

export async function getDocuments() {
  const client = getClient()
  if (!client) return []
  const res = await client.getEntries({ content_type: 'document', order: ['sys.createdAt'], include: 1 })
  return res.items.map((item: any) => ({
    name: item.fields.title,
    url: assetUrl(item.fields.file) || '#',
  }))
}

export async function getEvents() {
  const client = getClient()
  if (!client) return []
  const res = await client.getEntries({ content_type: 'event', order: ['-sys.createdAt'], include: 1 })
  return res.items.map((item: any) => ({
    title: item.fields.title,
    image: assetUrl(item.fields.image),
  })).filter(e => e.image)
}

export async function getMinistries() {
  const client = getClient()
  if (!client) return []
  const res = await client.getEntries({ content_type: 'ministry', include: 1 })
  return res.items.map((item: any) => ({
    name: item.fields.name,
    image: assetUrl(item.fields.image),
  })).filter(m => m.image)
}

export async function getInfoCards() {
  const client = getClient()
  if (!client) return []
  const res = await client.getEntries({ content_type: 'infoCard', order: ['fields.order'], include: 1 })
  return res.items.map((item: any) => ({
    title: String(item.fields.title ?? ''),
    text: String(item.fields.text ?? ''),
  }))
}

export async function getNavItems() {
  const client = getClient()
  if (!client) return []
  const res = await client.getEntries({ content_type: 'navItem', order: ['fields.order'] })
  return res.items.map((item: any) => ({
    label: String(item.fields.label ?? ''),
    href: String(item.fields.href ?? ''),
  }))
}

export async function getSiteInfo() {
  const client = getClient()
  if (!client) return null
  const res = await client.getEntries({ content_type: 'siteInfo', limit: 1, include: 2 })
  if (!res.items.length) return null
  const i = res.items[0].fields
  return {
    name: String(i.name ?? ''),
    shortName: String(i.shortName ?? ''),
    logo: assetUrl(i.logo) || '/images/LOGO-ICCD.png',
    description: String(i.description ?? ''),
    phone: String(i.phone ?? ''),
    email: String(i.email ?? ''),
    address: String(i.address ?? ''),
    schedule: {
      weekdays: String(i.scheduleWeekdays ?? ''),
      saturday: String(i.scheduleSaturday ?? ''),
    },
    whatsapp: String(i.whatsapp ?? ''),
    social: {
      facebook: String(i.facebook ?? '#'),
      instagram: String(i.instagram ?? '#'),
      youtube: String(i.youtube ?? '#'),
    },
    heroImage: assetUrl(i.heroImage) || '/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg',
    aboutHeroImage: assetUrl(i.aboutHeroImage) || '/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg',
    aboutImage: assetUrl(i.aboutImage) || '/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg',
    visionTitle: String(i.visionTitle ?? ''),
    visionText: String(i.visionText ?? ''),
    missionTitle: String(i.missionTitle ?? ''),
    missionText: String(i.missionText ?? ''),
    aboutTitle: String(i.aboutTitle ?? ''),
    aboutText: String(i.aboutText ?? ''),
    googleMapsUrl: String(i.googleMapsUrl ?? ''),
    contactPerson: String(i.contactPerson ?? ''),
    metaTitle: String(i.metaTitle ?? ''),
    metaDescription: String(i.metaDescription ?? ''),
    copyright: String(i.copyright ?? ''),
  }
}
