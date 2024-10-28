import { api } from '@/lib/api'

interface Props {
  status?: string
  championshipSeason?: string
  page?: string
  team1: string
  team2?: string
}

export const getSearchMatch = async ({
  page,
  team1,
  team2,
  championshipSeason,
  status,
}: Props) => {
  try {
    const response = await api.get('/championships/matches', {
      params: { page, team1, team2, championshipSeason, status },
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
