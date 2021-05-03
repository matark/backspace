import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ site, title, children }) {
  return (
    <>
      <Head>
        <title>{title || site.title}</title>
      </Head>
      <Header logo={site.name} paths={site.paths} />
      <main>
        <div className="container mx-auto p-5">{children}</div>
      </main>
      <Footer author={site.author} homepage={site.homepage} />
    </>
  )
}
