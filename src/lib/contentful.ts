import { createClient } from 'contentful'

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !accessToken) return null
  return createClient({ space, accessToken })
}

function assetUrl(asset: any): string {
  const url = asset?.fields?.file?.url
  return url ? `https:${url}` : '#'
}

export async function getDocuments() {
  const client = getClient()
  if (!client) return []

  const res = await client.getEntries({
    content_type: 'document',
    order: ['sys.createdAt'],
    include: 1,
  })
  return res.items.map((item: any) => ({
    name: item.fields.title,
    url: assetUrl(item.fields.file),
  }))
}

export async function getEvents() {
  const client = getClient()
  if (!client) return []

  const res = await client.getEntries({
    content_type: 'event',
    order: ['-sys.createdAt'],
    include: 1,
  })
  return res.items.map((item: any) => ({
    title: item.fields.title,
    image: assetUrl(item.fields.image),
  }))
}

export async function getMinistries() {
  const client = getClient()
  if (!client) return []

  const res = await client.getEntries({
    content_type: 'ministry',
    include: 1,
  })
  return res.items.map((item: any) => ({
    name: item.fields.name,
    image: assetUrl(item.fields.image),
  }))
}

export async function getSiteInfo() {
  const client = getClient()
  if (!client) return null

  const res = await client.getEntries({
    content_type: 'siteInfo',
    limit: 1,
    include: 1,
  })
  if (!res.items.length) return null
  const item = res.items[0].fields
  return {
    name: String(item.name ?? ''),
    shortName: String(item.shortName ?? ''),
    logo: assetUrl(item.logo),
    description: String(item.description ?? ''),
    phone: String(item.phone ?? ''),
    email: String(item.email ?? ''),
    address: String(item.address ?? ''),
    schedule: {
      weekdays: String(item.scheduleWeekdays ?? ''),
      saturday: String(item.scheduleSaturday ?? ''),
    },
    whatsapp: String(item.whatsapp ?? ''),
    social: {
      facebook: String(item.facebook ?? '#'),
      instagram: String(item.instagram ?? '#'),
      youtube: String(item.youtube ?? '#'),
    },
  }
}
