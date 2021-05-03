import PostHead from '../../components/post-head'
import Layout from '../../components/layout'
import { allPosts, getPost } from '../../helpers'

export async function getStaticProps({ params }) {
  const { data: post } = await getPost(params)
  return { props: { ...post } }
}

export async function getStaticPaths() {
  const { data: { site: { paths } } } = await allPosts()
  return {
    paths: paths.map(({ params }) => ({ params })),
    fallback: false
  }
}

export default function PostPage({ site, title, body, time, type }) {
  return (
    <Layout {...{ site, title }}>
      {
        type === 'post' && <PostHead {...{ title, time }} />
      }
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}
