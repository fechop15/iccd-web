import { createClient } from 'contentful'

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !accessToken) return null
  return createClient({ space, accessToken })
}

export async function getDocuments() {
  const client = getClient()
  if (!client) return []

  const res = await client.getEntries({
    content_type: 'document',
    order: ['sys.createdAt'],
    include: 1,
  })
  return res.items.map((item: any) => {
    const asset = item.fields.file
    const url = asset?.fields?.file?.url
    return {
      name: item.fields.title,
      url: url ? `https:${url}` : '#',
    }
  })
}
