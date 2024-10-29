import { api } from '@/lib/api'

export const getMatchDetails = async (id: string) => {
  try {
    const response = await api.get(`/match/details/${id}`)

    return {
      props: {
        match: JSON.stringify(response.data.partida),
      },
      revalidate: 60 * 60 * 24, // 1 day
    }
  } catch (err) {
    return {
      notFound: true,
      props: {
        match: null,
      },
    }
  }
}
