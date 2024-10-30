'use server'

import { api } from '@/lib/api'

export const getNearestMatches = async (thisYear: string) => {
  try {
    const response = await api.get('/nearest-matches', {
      params: { season: thisYear },
    })

    return {
      props: {
        matches: JSON.stringify(response.data.partidas),
      },
      revalidate: 60 * 60 * 24, // 1 day
    }
  } catch (err) {
    return {
      notFound: true,
      props: {
        matches: '[]',
      },
    }
  }
}
