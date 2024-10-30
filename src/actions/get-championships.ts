'use server'

import { api } from '@/lib/api'

export const getChampionships = async () => {
  try {
    const response = await api.get('/championships')

    return {
      props: {
        championships: JSON.stringify(response.data.campeonatos),
      },
      revalidate: 60 * 60 * 24, // 1 day
    }
  } catch (err) {
    return {
      notFound: true,
      props: {
        championships: '[]',
      },
    }
  }
}
