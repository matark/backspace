import PostItem from '../components/post-item'
import Layout from '../components/layout'
import { allPosts } from '../helpers'

export async function getStaticProps() {
  const { data: { site, posts } } = await allPosts()
  return { props: { site, posts } }
}

export default function IndexPage({ site, posts }) {
  return (
    <Layout site={site}>
      <ul>
        {
          posts.map((props, _) => <PostItem {...props} />)
        }
      </ul>
    </Layout>
  )
}
