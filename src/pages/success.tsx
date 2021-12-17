import Success, { SuccessProps } from 'components/Success/index'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import Base from 'templates/Base'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function SuccessPage(props: SuccessProps) {
  return (
    <Base>
      <Success {...props} />
    </Base>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
